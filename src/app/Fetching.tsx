'use server'
import { fetchUser } from "@/drizzle/db";

export const Fetching = async () => {
    const users = await fetchUser()
};