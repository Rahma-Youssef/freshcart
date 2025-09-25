import * as z from "zod";

export const signinSchema = z.object({
 
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long").regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "Password must be at least 8 characters long, and include at least one uppercase letter, one lowercase letter, one number, and one special character."),
})
 


export type SigninSchemaType = z.infer< typeof signinSchema>