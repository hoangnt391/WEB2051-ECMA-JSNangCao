import Navigo from "navigo";
import HomePage from "./page/homepage";
import AboutPage from "./page/aboutPage";
import productPage from "./page/productPage";
import detailPage from "./page/detail";
import adminProduct from "./page/admin/adminProduct";
import adminProductEdit from "./page/admin/adminProductEdit";

const router = new Navigo("/", { linksSelector: "a" });
const render = (content) => {
  document.querySelector("#app").innerHTML = content;
};
router.on({
  "/": () => {
    // console.log("Home Page");
    render(HomePage.print());
  },
  "/about": () => {
    // console.log("About Page");
    render(AboutPage.print());
  },
  "/productPage": () => {
    // console.log("About Page");
    render(productPage.print());
  },
  "/productPage/:id": ({ data }) => {
    // console.log("About Page");
    const { id } = data;
    render(detailPage.print(id));
  },
  "/adminProductPage": () => {
    // console.log("About Page");
    render(adminProduct.print());
  },
  "admin/productPage/:id/edit": ({ data }) => {
    const { id } = data;
    render(adminProductEdit.print(id));
  },
});
router.resolve();
