"use server"

import { signIn } from "@/auth";
import { LoginSchema, LoginSchemaType } from "../../../schemas/LoginSchema";
import { getUserByEmail } from "@/lib/user";
import { LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { generateEmailVerificationToken, sendEmailVerificationToken } from "@/lib/emailVerification";



export const login = async (values:LoginSchemaType) => {
  const validatedFields = LoginSchema.safeParse(values);


  if (!validatedFields.success) {
    return { errors: "Invalid fields!" };
  }


  const {email, password } = validatedFields.data;

  const user = await getUserByEmail(email);


  if (!user || !email || !password || !user.password) {
    return {error: "Invalid credentials!" }
  }

  if (!user.emailVerified) {
    const emailVerificationToken = await generateEmailVerificationToken(user.email);

     const { error } =await sendEmailVerificationToken(emailVerificationToken.email, emailVerificationToken.token);
      
      if (error) {
        return {
          error:"Something went wrong while sending verification email! Try to login to resend the verification email"
        }
      }
    return { success: "Verification email send!" };
  }
  
  try {
    await signIn("credentials", {email, password, redirectTo:LOGIN_REDIRECT})
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" }
        default:
          return {error: "Something went wrong"}
    }
  }
  }

}