"use server";
import { neon } from "@neondatabase/serverless";

export async function getData() {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) {
    throw new Error("DATABASE_URL is not defined in environment variables.");
  }

  const sql = neon(dbUrl);
  const data = await sql`...`;
  return data;
}
