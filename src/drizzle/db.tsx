import * as schema from './schema';
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

type NewUser = typeof schema.users.$inferInsert;

const connectionString = process.env.DATABASE_URL

// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres(connectionString || "", { prepare: false })
const db = drizzle(client, { schema });

export async function fetchUser() {
    try {
        const user = await db.query.users.findMany();
        return user;
    } catch (error) {
        console.error('Error fetching user:', error);
    }
}

export const addUser = async (user : NewUser) => {
    let newUser : NewUser = user
    return await db.insert(schema.users).values(newUser);
}

