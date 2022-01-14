import { newsList } from "../data";
import header from "../components/header";
import footer from "../components/footer";

const detailPage = {
  print(id) {
    // console.log("id in detail Page", id);
    const result = newsList.find(((post) => post.id === id));
    return /* html */`
    

    <div class="max-w-5xl mx-auto">
          <div class="header">
            ${header.print()}
          </div>
          <div class="main">
          <div>
          <h1>${result.title}</h1>
          <img src="${result.img}" alt="" />
          <p>${result.desc}</p>
        </div>
          </div>
          <div class="footer">
            ${footer.print()}
          </div>
      </div>
    `;
  },
};
export default detailPage;
