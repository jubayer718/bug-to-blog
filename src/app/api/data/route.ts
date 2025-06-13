// app/api/data/route.ts

import client from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
  try {
    const db = client.db(process.env.MONGODB_DB);
    const body = await req.json();
    const email = body.email;
    const isUserExist = await db.collection("Users").findOne({ email: email });
    if (isUserExist) {
      return NextResponse.json({message:'User all ready exist'})
    }
    const result = await db.collection("Users").insertOne(body);

    return NextResponse.json({ success: true, insertedId: result.insertedId });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
