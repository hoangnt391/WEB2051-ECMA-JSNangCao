import adminNav from "../../../components/admin/adminNav";

const addNews = {
  print() {
    return /* html */ `
    <div class="min-h-full">
            ${adminNav.print()}
            <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <!-- This example requires Tailwind CSS v2.0+ -->
                <div class="lg:flex lg:items-center lg:justify-between">
                    <div class="flex-1 min-w-0">
                        <h2
                        class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
                        >
                        Thêm mới
                        </h2>
                    </div>
                    <div class="mt-5 flex lg:mt-0 lg:ml-4">
                        <a href="/admin/news" class="sm:ml-3">
                            <button
                                type="button"
                                class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Quay lại
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            </header>
            <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <form class="px-4 py-6 sm:px-0 mx-3">
                    <label for="" class="py-4 font-bold">Tilte</label><br>
                    <input type="text" class="border my-2 sm:px-0"  placeholder="Tiêu đề bài viết" id="post-title"/> <br/>
                    <label for="" class="py-4 font-bold">Image</label>
                    <input type="file" class="border my-2 sm:px-0" name="" id="post-img"><br>
                    <label for="" class="py-4 font-bold">Description</label><br>
                    <textarea name="" class="border px-4 my-2 sm:px-0"  cols="100" rows="10" id="post-desc"></textarea><br/>
                    <button class="btn">Thêm Mới</button>
                </form>
            </div>
        </div>
            </main>
    `;
  },
};
export default addNews;
