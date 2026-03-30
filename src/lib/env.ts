import 'dotenv/config';

interface EnvConfig {
  NODE_ENV: string;
  PORT: number;
  BETTER_AUTH_SECRET: string;
  BETTER_AUTH_URL: string;
  DATABASE_URL: string;
}

export const env: EnvConfig = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: Number(process.env.PORT) || 8000,
  BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET as string,
  BETTER_AUTH_URL: process.env.BETTER_AUTH_URL as string,
  DATABASE_URL: process.env.DATABASE_URL as string,
};

if (!env.BETTER_AUTH_SECRET || !env.DATABASE_URL) {
  throw new Error('Missing essential environment variables in .env file');
}
