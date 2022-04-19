import "dotenv/config";
import Server from "./config/server";
import db from "./config/db";

db();

const server = new Server();

server.listen();
