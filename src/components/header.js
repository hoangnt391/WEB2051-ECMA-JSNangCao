const header = {
  print() {
    return /* html */ `
    <header> 
        <div class="bg-blue-800">
        <ul class="flex justify-end p-4">
            <li><a href="/signIn" class="block py-3 px-4 ml-4 text-sm text-white font-bold hover:bg-orange-600 hover:text-black hover:underline transition duration-300 ease-in hover:ease-out">Sign In</a></li>
            <li><a href="/signUp" class="block py-3 px-4 ml-4 text-sm text-white font-bold hover:bg-orange-600 hover:text-black hover:underline transition duration-300 ease-in hover:ease-out">Sign Up</a></li>
        </ul>
        <a href="#">
            <img src="https://picsum.photos/150/40" class="py-4 mx-auto" alt="">
        </a>
        </div>
        <nav class="bg-orange-500 flex justify-between">
        <ul class="px-3 flex justify-between" id="menu">
            <li><a href="/" class="block px-1 py-3 text-sm text-white font-bold hover:bg-orange-600 hover:text-black hover:underline transition duration-300 ease-in hover:ease-out">Home Page</a></li>
            <li><a href="/about" class="block px-1 py-3 text-sm text-white font-bold hover:bg-orange-600 hover:text-black hover:underline transition duration-300 ease-in hover:ease-out">About page</a></li>
            <li><a href="/productPage" class="block px-1 py-3 text-sm text-white font-bold hover:bg-orange-600 hover:text-black hover:underline transition duration-300 ease-in hover:ease-out">Product page</a></li>
            <li><a href="/admin/dashboard" class="block px-1 py-3 text-sm text-white font-bold hover:bg-orange-600 hover:text-black hover:underline transition duration-300 ease-in hover:ease-out">Dashboard</a></li>
        </ul>
        <div class="py-3 flex justify-between">
            <input type="text" name="" class=" rounded-none max-w-md" id="">
            <input type="submit" class="  bg-blue-800 text-white mx-3 px-2 hover:bg-blue-500 transition duration-200 ease-in-out" value="Tìm kiếm">
        </div>
        </nav>
  </header> 
    `;
  },
};
export default header;
