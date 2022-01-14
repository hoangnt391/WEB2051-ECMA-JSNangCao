import adminNav from "../../components/admin/adminNav";

const dashboard = {
  print() {
    return /* html */ `
            <div class="adminNav">
              ${adminNav.print()}
            </div>
            <header class="bg-white shadow">
              <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">
                  Dashboard
                </h1>
              </div>
            </header>
    `;
  },
};
export default dashboard;
