import { getAll } from "../../API/posts";

const adminProductList = {
  async print() {
    const { data } = await getAll();
    return /* html */ `
<div class="flex flex-col">
<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
  <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Id
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Images
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th scope="col" class="px-6 py-3 max-w-xs text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
            </th>
            <th scope="col" class="relative px-6 py-3" colspan="2">
              ACCTION
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          ${data.map((post) => /* html */`
          <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">${post.id}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">
                      <img src="${post.img}" class="py-4 mx-auto" alt="">
                    </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      ${post.title}
                  </span>
              </td>
              <td class="text-sm text-gray-500" style="">
                      ${post.desc}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="admin/productPage/${post.id}/edit" class="text-indigo-600 hover:text-indigo-900 hover:bg-gray-300 px-7 py-3 hover:font-bold hover:underline">Edit</a>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900 hover:bg-gray-300 px-7 py-3 hover:font-bold hover:underline">DEL</a>
              </td>
          </tr>
          `).join(" ")}
        </tbody>
      </table>
    </div>
  </div>
</div>
</div>

    `;
  },
};
export default adminProductList;
