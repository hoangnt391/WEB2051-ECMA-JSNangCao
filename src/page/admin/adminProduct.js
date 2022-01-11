import adminProductList from "../../components/admin/adminProductList";

const adminProduct = {
  print() {
    return /* html */ `
    <div>
      <h1>Quản lý product</h1>
      ${adminProductList.print()};
    </div>
    `;
  },
};
export default adminProduct;
