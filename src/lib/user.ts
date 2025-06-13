import client from "./mongodb";

 type User = {
  _id: string;
  email: string;
  password: string;
  name?: string;
  
};

export const getUserByEmail = async(email: string):Promise<User|null>=>{
  const db =  client.db(process.env.MONGODB_DB);
   
  const user = await db.collection("Users").findOne({ email }) as User | null  ;
  return user;
}