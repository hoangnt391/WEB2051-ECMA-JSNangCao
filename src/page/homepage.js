import NewsList from "../components/newList";
import NewsList2 from "../components/newList2";
import banner from "../components/banner";

const HomePage = {
  print() {
    return/* html */ `
    <div class="max-w-5xl mx-auto">
        ${banner.print()}
      <div class="news">
        ${NewsList.print()}
      </div>  
      <div class="news">
        ${NewsList2.print()}
      </div>
    </div>
    `;
  },
};
export default HomePage;
