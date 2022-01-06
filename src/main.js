import { menusList, newsList } from "./data";

const showMenusList = () => {
  const menusElement = document.querySelector("#menu");
  if (menusElement) {
    const result = menusList.map((menus) => `<li><a href="" class="block px-1 py-3 text-sm text-white font-bold hover:bg-orange-600 hover:text-black hover:underline transition duration-300 ease-in hover:ease-out" >${menus} </a></li>`).join(" ");
    menusElement.innerHTML = result;
  }
};
showMenusList();

const showNewsList = () => {
  const newsElement = document.getElementById("news-1");
  if (newsElement) {
    const result = newsList.map((news) => `
      <div class="border shadow rounded p-4">
        <a href="">
          <img src="${news.img} " class="" alt="">
        </a>
        <a href="">
          <h3 class="text-orange-500 font-bold py-4">
          ${news.title}
          </h3>
        </a>
        <p class="text-xs">
        ${news.paragrap}
        </p>
      </div>
      
      `).join(" ");
    newsElement.innerHTML = result;
  }
};
showNewsList();
const showNewsList2 = () => {
  const newsElement = document.getElementById("news-2");
  if (newsElement) {
    const result = newsList.map((news) => `
      <div class="border shadow rounded p-4">
        <a href="">
          <img src="${news.img} " class="" alt="">
        </a>
        <a href="">
          <h3 class="text-orange-500 font-bold">
          ${news.title}
          </h3>
        </a>
        <p class="text-xs">
        ${news.paragrap}
        </p>
      </div>
      
      `).join(" ");
    newsElement.innerHTML = result;
  }
};
showNewsList2();
