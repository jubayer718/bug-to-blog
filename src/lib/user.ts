import { db } from "./db";

export async function getUserByEmail(email: string ) {
  try {
    const user = await db.user.findUnique({
      where:{email:email} 
    })
    return user
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return null;
  }
}
export async function getUserById(id: string ) {
  try {
    const user = await db.user.findUnique({
      where:{id:id} 
    })
    return user
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return null;
  }
}