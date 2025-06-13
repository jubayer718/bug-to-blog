import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "./lib/mongodb";
import authConfig from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "../schemas/LoginSchema";
import { getUserByEmail } from "./lib/user";
import bcrypt from "bcryptjs";


 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(client),
  session: { strategy: "jwt" },
  ...authConfig,
  providers: [
    
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          const user = await getUserByEmail(email);

          if (!user || !user.password) return null; 

          const isCorrectPassword = await bcrypt.compare(password, user.password);

          if( isCorrectPassword) return user

        }

        return null;
        

      }
      
    }
    )
  ],
})