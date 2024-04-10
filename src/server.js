import express from "express";
import {CLOSE_DB, CONNECT_DB, GET_DB} from "~/config/mongodb";
import exitHook from "async-exit-hook";
import {env} from "~/config/environment";
import {APIs_V1} from "~/routes/v1";

const START_SERVER = () => {
  const app = express();

  //bat req.data json data
  app.use(express.json());

  //use api  v1
  app.use("/v1", APIs_V1);

  app.get("/", (req, res) => {
    res.end("<h1>Hello World!</h1><hr>");
  });

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    // eslint-disable-next-line no-console
    console.log(
      `Hello ${env.AUTHOR}, I am running at http://${env.APP_HOST}:${env.APP_PORT}`
    );
  });

  // thuc hien cac tac vu khi dung server lai
  // bat tat ca cac truog hop khi dung ung dung
  exitHook(() => {
    console.log("4. Đang ngắt kết nối tới MongoDB Cloud Atlas...");
    CLOSE_DB().then(() => {
      console.log("5. Đã ngắt kết nối tới MongoDB Cloud Atlas");
      process.exit();
    });
  });
};

//khi ket noi thanh cong thi server moi duoc bat len
//cach su dung funtion an danh chay ngya lap tuc tu khoa (IIFE) cua js
(async () => {
  try {
    console.log("ket noi den database Atlas");
    await CONNECT_DB();
    console.log("Ket noi data base thanh cong");
    console.log("Khoi dong server...");
    await START_SERVER();
  } catch (error) {
    console.error(error);
    process.exit(0);
  }
})();

//khi ket noi thanh cong thi server moi duoc bat len
// CONNECT_DB()
//   .then(() => console.log("ket noi den database Atlas"))
//   .then(() => START_SERVER())
//   .catch((error) => {
//     console.error(error);
//     process.exit(0);
//   });
