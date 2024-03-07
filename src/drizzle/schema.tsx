import { pgTable, serial, text, timestamp} from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  username:text("username"),
  email:text("email"),
  password:text("password"),
  role:text("role").$type<"admin" | "user">(),
  createdAt:timestamp("created_at"),
  updatedAt:timestamp("updated_at"),
});

export const posts = pgTable("posts", {
  id:serial("id").primaryKey(),
  name:text("name"),
  createdAt:timestamp("created_at"),
  updatedAt:timestamp("updated_at"),
})

export const comments = pgTable("comments", {
  id:serial("id").primaryKey(),
})