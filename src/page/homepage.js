import NewsList from "../components/newList";
import banner from "../components/banner";
import header from "../components/header";
import footer from "../components/footer";

const HomePage = {
  async print() {
    return/* html */ `
    <div class="max-w-5xl mx-auto">
          <div class="header">
            ${header.print()}
          </div>
          <div class="main">
            ${banner.print()}
            <div class="news">
              ${await NewsList.print()}
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
