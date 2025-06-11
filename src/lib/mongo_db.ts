// lib/mongodb.ts
// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI!;
// const options = {};

// let client: MongoClient;
// let clientPromise: Promise<MongoClient>;

// declare global {
//   let _mongoClientPromise: Promise<MongoClient>;
// }

// if (!process.env.MONGODB_URI) {
//   throw new Error("Please add your Mongo URI to .env.local");
// }

// if (process.env.NODE_ENV === "development") {
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// export default clientPromise;


import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB;
  // console.log(uri, dbName);

  if (!uri || !dbName) {
    throw new Error('Missing MONGODB_URI or MONGODB_DB environment variable');
  }

  const client = await MongoClient.connect(uri);
  return client.db(dbName);
}