import * as z from "zod";

export const signinSchema = z.object({
 
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long").regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "Password must contain at least one letter and one number"),
})
 


export type SigninSchemaType = z.infer< typeof signinSchema>