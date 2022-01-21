import axios from "axios";

const NewsList = {
  async print() {
    const { data } = await axios.get("http://192.168.1.10:3002/news");
    return /* html */ `
    <h2 class="uppercase font-bold py-4">Tin tức học tập</h2>
      <div class="grid grid-cols-3 gap-5">
        ${data.map((post) => /* html */`
         <div class="border p-3">
            <img src="${post.image}" alt="" />
            <h3><a href="/productPage/${post.id}" class="font-bold text-orange-500 py-2">${post.title}</a></h3>
            <p class="py-2 font-sans">${post.desc}</p>
        </div>  
         `).join(" ")}
      </div>
    `;
    // const API = "http://192.168.1.10:3002/news";
    // return fetch(API).then((response) => response.json())
    //   .then((data) => /* html */ `
    //   <h2 class="uppercase font-bold py-4">Tin tức học tập</h2>
    //   <div class="grid grid-cols-3 gap-5">
    //     ${data.map((post) => /* html */`
    //      <div class="border p-3">
    //         <img src="${post.image}" alt="" />
    //         <p class="py-2 font-sans">${post.desc}</p>
    //     </div>
    //      `).join(" ")}
    //   </div>
    // `);
  },
};
export default NewsList;
