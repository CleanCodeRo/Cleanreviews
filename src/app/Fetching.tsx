'use server'
import { fetchUser } from "@/drizzle/db";

export const Fetching = async ({setUsers}) => {
    const users = await fetchUser()
    setUsers(users) 
    return (<></>)
};