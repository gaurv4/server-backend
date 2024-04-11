import dotenv from 'dotenv'

dotenv.config()

const config = {
  PORT: process.env.PORT,
  MONGO_URL: process.env.MONGO_URL,
  JWT_SECRETE_KEY: process.env.JWT_SECRETE_KEY,
  ORIGIN_CORS: process.env.ORIGIN_CORS,
};

export default config;
