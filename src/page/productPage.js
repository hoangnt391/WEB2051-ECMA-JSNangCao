import header from "../components/header";
import footer from "../components/footer";

const productPage = {
  print() {
    return /* html */`
    <div class="max-w-5xl mx-auto">
          <div class="header">
            ${header.print()}
          </div>
          <div class="main">
            ProductPage
          </div>
          <div class="footer">
            ${footer.print()}
          </div>
      </div>
    `;
  },
};
export default productPage;
