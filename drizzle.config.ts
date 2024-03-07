import { config as dotenvConfig } from 'dotenv';
import type { Config } from 'drizzle-kit';

dotenvConfig({path: '.env'});
console.log(process.env.DATABASE_URL)

export default {
    schema: './src/drizzle/schema.tsx',
    driver: 'pg',
    out: './drizzle',
    dbCredentials: {
        connectionString: process.env.DATABASE_URL || '',
    },
} satisfies Config;