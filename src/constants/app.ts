export const APP = {
  PORT_SERVER: process.env.PORT_SERVER || "4000",
  DB_URL: process.env.DB_URL || "mongodb://localhost:27017/favs",
  JWT_AUTH_SECRET: process.env.JWT_AUTH_SECRET,
};
