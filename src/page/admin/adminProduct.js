import adminProductList from "../../components/admin/adminProductList";

const adminProduct = {
  print() {
    return /* html */ `
    <div>
      <h1 class="py-10 font-bold text-4xl font-sans text-center">Quản lý product</h1>
      ${adminProductList.print()};
    </div>
    `;
  },
};
export default adminProduct;
