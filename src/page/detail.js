import { newsList } from "../data";

const detailPage = {
  print(id) {
    // console.log("id in detail Page", id);
    const result = newsList.find(((post) => post.id === id));
    return /* html */`
    <div>
      <h1>${result.title}</h1>
      <img src="${result.img}" alt="" />
      <p>${result.desc}</p>
    </div>
    `;
  },
};
export default detailPage;
