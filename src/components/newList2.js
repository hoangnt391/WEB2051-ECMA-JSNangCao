const NewsList2 = {
  print() {
    const API = "https://61e7a519e32cd90017acbbc7.mockapi.io/Post";
    return fetch(API).then((respo) => respo.json())
      .then((data) =>/* html */ `
    <h2 class="uppercase font-bold py-4">Hoạt động sinh viên</h2>
    <div class="grid grid-cols-3 gap-5">
      ${data.map((post) => /* html */`
       <div class="border p-3">
          <img src="${post.image}" alt="" />
          <h3><a href="/productPage/${post.id}" class="font-bold text-orange-500 py-2">${post.title}</a></h3>
          <p class="py-2 font-sans">${post.desc}</p>
      </div>  
       `).join(" ")}
    </div>
    `);
  },
};
export default NewsList2;
