import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL not set in environment variables");
}

export const client = postgres(process.env.DATABASE_URL, {
  max: 10,
});

export const db = drizzle(client);
