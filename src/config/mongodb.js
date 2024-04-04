/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

//thanhthuhigh
//dLV5dmqTEAZu0L5a
import {env} from "~/config/environment";

import {MongoClient, ServerApiVersion} from "mongodb";

//tao doi tuong null khi chua ket noi den database
let trelloDatabaseIntance = null;

//khoi tao doi tuong ket noi den mongodb
const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
  //bao loi khi nhung ham khong con dc su dung nua, xoa cung duoc
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const CONNECT_DB = async () => {
  await mongoClientInstance.connect();

  // ket noi thanh cong thi lay database dan nguoc vao bien cuar minh
  trelloDatabaseIntance = mongoClientInstance.db(env.DATABASE_NAME);
};

//lay database
export const GET_DB = () => {
  if (!trelloDatabaseIntance) throw new Error("Hay ket noi voi database truoc");
  return trelloDatabaseIntance;
};

// dong database
export const CLOSE_DB = async () => {
  await mongoClientInstance.close();
};
