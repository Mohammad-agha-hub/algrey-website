import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "algrey_blog";

if (!uri) {
  throw new Error("Missing MONGODB_URI environment variable");
}

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

async function getClient(): Promise<MongoClient> {
  if (cachedClient) return cachedClient;

  if (process.env.NODE_ENV === "development") {
    // Reuse the same client across hot reloads in dev so we don't open a
    // new connection pool on every file save.
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = new MongoClient(uri as string).connect();
    }
    cachedClient = await global._mongoClientPromise;
  } else {
    cachedClient = await new MongoClient(uri as string).connect();
  }
  return cachedClient;
}

export async function getDb(): Promise<Db> {
  if (cachedDb) return cachedDb;
  const client = await getClient();
  cachedDb = client.db(dbName);
  return cachedDb;
}
