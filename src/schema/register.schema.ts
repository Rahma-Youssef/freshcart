import * as z from "zod";

export const registerSchema = z.object({
  name: z.string().min(3,"Name must be at least 3 characters long").max(30,"Name must be at most 30 characters long"),
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long").regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "Password must contain at least one letter and one number"),
  rePassword: z.string().min(8,"Confirm Password must be at least 8 characters long").regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "Password must contain at least one letter and one number"),
  phone: z.string().regex(/^01[0125][0-9]{8}$/, "Invalid Egyptian phone number"),
}).refine((object) => {
    if(object.password === object.rePassword){
        return true
    }
    return false
},{
    path:["rePassword"],
    error:"Password don't match"
}
 )


export type RegisterSchemaType = z.infer< typeof registerSchema>