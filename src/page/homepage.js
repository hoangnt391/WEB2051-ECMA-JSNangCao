import NewsList from "../components/newList";
import NewsList2 from "../components/newList2";
import banner from "../components/banner";
import header from "../components/header";
import footer from "../components/footer";

const HomePage = {
  print() {
    return/* html */ `
    <div class="max-w-5xl mx-auto">
          <div class="header">
            ${header.print()}
          </div>
          <div class="main">
            ${banner.print()}
            <div class="news">
              ${NewsList.print()}
            </div>  
            <div class="news">
              ${NewsList2.print()}
            </div>
          </div>
          <div class="footer">
            ${footer.print()}
          </div>
      </div>
    `;
  },
};
export default HomePage;
