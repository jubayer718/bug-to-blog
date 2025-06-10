// app/api/data/route.ts
import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongo_db";

export async function POST(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("yourDatabaseName");
    const body = await req.json();

    const result = await db.collection("yourCollection").insertOne(body);

    return NextResponse.json({ success: true, insertedId: result.insertedId });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
