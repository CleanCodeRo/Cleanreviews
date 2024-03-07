'use server'
import { addUser } from "@/drizzle/db";

type role = "user" | "admin"

export const handleSubmit = async (username : string, email : string, password : string) => {
    const newUser = {
        username: username,
        email: email,
        password: password,
        role: "user" as role,
        createdAt: new Date()
    };
    addUser(newUser);
};