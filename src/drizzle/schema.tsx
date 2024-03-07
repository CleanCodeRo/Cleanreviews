import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text, timestamp, varchar} from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  username:text("username"),
  email:text("email"),
  password:text("password"),
  role:text("role").$type<"admin" | "user">(),
  createdAt:timestamp("created_at"),
  updatedAt:timestamp("updated_at")
});

export const userRelations = relations(users,({one, many}) => ({
  profile : one(profiles, {
    fields: [users.id],
    references: [profiles.userId]
  })
}))

export const profiles = pgTable("profiles", {
  id:serial("id").primaryKey(),
  bio:varchar("bio", {length: 256}),
  userId:integer("user_id").notNull().references(() => users.id)
})

export const posts = pgTable("posts", {
  id:serial("id").primaryKey(),
  name:text("name"),
  userId:integer("user_id").notNull().references(() => users.id),
  createdAt:timestamp("created_at"),
  updatedAt:timestamp("updated_at")
})

export const comments = pgTable("comments", {
  id:serial("id").primaryKey(),
  userId:integer("user_id").notNull().references(() => users.id),
  postId:integer("post_id").notNull().references(() => posts.id),
  message:varchar("message", {length: 2500}),
  createdAt:timestamp("created_at"),
  updatedAt:timestamp("updated_at")
})