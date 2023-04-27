import express from "express";
import path from "path";

const viewsRouter = express.Router();
//home
viewsRouter.use("/", serveStatic("home")); // 파일명과 html 폴더명 일치해야함
viewsRouter.use("/admin", serveStatic("admin"));
viewsRouter.use("/cart", serveStatic("cart"));
viewsRouter.use("/itemDetail", serveStatic("itemDetail"));
viewsRouter.use("/itemList", serveStatic("itemList"));
viewsRouter.use("/login", serveStatic("login"));
viewsRouter.use("/mypage", serveStatic("mypage"));
viewsRouter.use("/orderCheck", serveStatic("orderCheck"));
viewsRouter.use("/orderComplete", serveStatic("orderComplete"));
viewsRouter.use("/order", serveStatic("order"));
viewsRouter.use("/signup", serveStatic("signup"));

//html 연결해주는 매서드

function serveStatic(resource) {
  const resourcePath = path.join(__dirname, `../views/${resource}`);
  const option = { index: `${resource}.html` };

  return express.static(resourcePath, option);
}

//expoert
export { viewsRouter };

//우리 폴더 위치와 싱크 시킬지
