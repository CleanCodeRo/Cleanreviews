import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  username:text("username"),
  email:text("email"),
  password:text("password"),
  role:text("role").$type<"admin" | "user">(),
  createdAt:timestamp("created_at"),
  updatedAt:timestamp("updated_at"),
});