import { config as dotenvConfig } from 'dotenv';
import type { Config } from 'drizzle-kit';

dotenvConfig();

export default {
    schema: './src/drizzle/schema.ts',
    driver: 'pg',
    out: './drizzle',
    dbCredentials: {
        connectionString: process.env.DATABASE_URL || '',
    },
} satisfies Config;