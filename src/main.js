import Navigo from "navigo";
import HomePage from "./page/homepage";
import AboutPage from "./page/aboutPage";
import productPage from "./page/productPage";
import detailPage from "./page/detail";

import adminProductEdit from "./page/admin/news/edit";
import signIn from "./page/signIn";
import signUp from "./page/signUp";
import dashboard from "./page/admin/dashboard";
import adminNewsList from "./page/admin/news/adminNewsList";
import addNews from "./page/admin/news/add";

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
  "/signIn": () => {
    // console.log("About Page");
    render(signIn.print());
  },
  "/signUp": () => {
    // console.log("About Page");
    render(signUp.print());
  },
  "/productPage/:id": ({ data }) => {
    // console.log("About Page");
    const { id } = data;
    render(detailPage.print(id));
  },
  "admin/productPage/:id/edit": ({ data }) => {
    const { id } = data;
    render(adminProductEdit.print(id));
  },
  "/admin/dashboard": () => {
    // console.log("About Page");
    render(dashboard.print());
  },
  "/admin/news": () => {
    render(adminNewsList.print());
  },
  "/admin/news/addNews": () => render(addNews.print()),

});
router.resolve();
