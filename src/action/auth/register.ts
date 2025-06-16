"use server"

import bcrypt from "bcryptjs";
import { RegisterSchema, RegisterSchemaType } from "../../../schemas/RegisterSchema"
import { db } from "@/lib/db";
import { getUserByEmail } from "@/lib/user";
import { generateEmailVerificationToken, sendEmailVerificationToken } from "@/lib/emailVerification";



export const signUp = async (values:RegisterSchemaType) => {
  const validatedFields = RegisterSchema.safeParse(values);


  if (!validatedFields.success) {
    return { errors: "Invalid fields!" };
  }


  const { name, email, password } = validatedFields.data;

  const user = await getUserByEmail(email);
  if (user) {
    return {error: "Email already in use!" }
  }
  
  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  })

  const emailVerificationToken = await generateEmailVerificationToken(email);
  const { error } =await sendEmailVerificationToken(emailVerificationToken.email, emailVerificationToken.token);
  
  if (error) {
    return {
      error:"Something went wrong while sending verification email! Try to login to resend the verification email"
    }
  }


return {success:"Verification email send!"}

}