import { newsList } from "../data";

const NewsList = {
  print() {
    return /* html */ `
    <h2 class="uppercase font-bold py-4">Tin tức học tập</h2>
    <div class="grid grid-cols-3 gap-5">
      ${newsList.map((post) => /* html */`
       <div class="border p-3">
          <img src="${post.img}" alt="" />
          <h3><a href="" class="font-bold text-orange-500 py-2">${post.title}</a></h3>
          <p class="py-2 font-sans">${post.paragrap}</p>
      </div>  
       `).join(" ")}
    </div>
    `;
  },
};
export default NewsList;
