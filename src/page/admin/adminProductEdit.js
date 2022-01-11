import { newsList } from "../../data";

const adminProductEdit = {
  print(id) {
    const result = newsList.find((post) => post.id === id);
    return /* html */`
    <form>
    <input type="text" class="border" value="${result.title}" placeholder="Tiêu đề bài viết" id="post-title"/> <br/>
    <img src="${result.img}" alt="" /><br>
    <input type="file" class="border" name="" id="post-img"><br>
    <textarea name="" class="border"  cols="30" rows="10" id="post-desc">${result.desc}</textarea><br/>
    <button class="btn">Cập nhật</button>
</form>
    `;
  },
};
export default adminProductEdit;
