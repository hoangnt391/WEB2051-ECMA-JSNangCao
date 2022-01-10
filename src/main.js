import Navigo from "navigo";
import HomePage from "./page/homepage";
import AboutPage from "./page/aboutPage";
import productPage from "./page/productPage";

const router = new Navigo("/", { linksSelector: "a" });
const render = (content) => {
  document.querySelector("#app").innerHTML = content.print();
};
router.on({
  "/": () => {
    // console.log("Home Page");
    render(HomePage);
  },
  "/about": () => {
    // console.log("About Page");
    render(AboutPage);
  },
  "/productPage": () => {
    // console.log("About Page");
    render(productPage);
  },

});
router.resolve();
