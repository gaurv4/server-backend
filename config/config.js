import dotenv from 'dotenv'

dotenv.config()

export const config = {

  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.PORT || 'production',
  MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/demodb',
  JWT_SECRETE_KEY: process.env.JWT_SECRETE_KEY || 'TESTINGJWT',
  ORIGIN_CORS: process.env.ORIGIN_CORS,

};

// export const config = {

//   get(env) {

//     const value = _config[env]
//     console.log(value);

//     if (!value) {

//       console.error(`The ${env} environment variable not found.`)
//       process.exit()

//     } else {

//       return value

//     }
//   }
// }
