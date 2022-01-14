import { aboutPage } from "../data";
import header from "../components/header";
import footer from "../components/footer";

const AboutPage = {
  print() {
    return /* html */ `
    <div class="max-w-5xl mx-auto">
        <div class="header">
          ${header.print()}
        </div>
        <div class="main">
        <div class="py-3">
        <div class="about-section bg-indigo-700 text-center uppercase font-bold py-12 text-white">
          <h1 class="text-4xl">About Us Page</h1>
          <p>Some text about who we are and what we do.</p>
          <p>Resize the browser window to see that this page is responsive by the way.</p>
        </div>
        <h1 class="text-center uppercase font-bold py-6 text-xl font-serif">Our Team</h1>
        <div class="grid grid-cols-3 gap-5">
          ${aboutPage.map((post) => /* html */ `
          <div class="border p-3">
              <img src="${post.img}" alt="">
              <h1 class="uppercase font-bold py-4 text-xl" >${post.name}</h1>
              <span class="py-2 font-sans">${post.Job}</span>
              <p class="py-2 font-sans">${post.desc}</p>
              <p class="py-2 font-sans">${post.email}</p>
              <button class="rounded-none bg-black text-white py-2 min-w-full"><a href="" >${post.button}</a></button>
          </div>  
          `).join(" ")}
        </div>
    </div>
  </div>
    <div class="footer">
      ${footer.print()}
    </div>
  </div>

    
    `;
  },
};
export default AboutPage;
