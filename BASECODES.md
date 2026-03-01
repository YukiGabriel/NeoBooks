# Codigos Base

1) HTML

```<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="src/style.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NeoBooks</title>
</head>

<body>
  <div class="flex h-screen bg-gray-100">
  <aside id="sidebar"
    class="w-64 bg-gray-800 shadow-lg fixed inset-y-0 left-0 transform -translate-x-full md:translate-x-0 transition duration-300 ease-in-out z-50">
    <div class="p-4 text-xl font-semibold text-gray-200">
      DocSpace
    </div>
    <nav class="mt-4">
      <a href="../index.html" class="block py-2 px-4 text-gray-300 hover:bg-gray-200">Home</a>
      <a href="documentation.html" class="block py-2 px-4 text-gray-300 hover:bg-gray-200">Documentation</a>
      <a href="articles.html" class="block py-2 px-4 text-gray-300 hover:bg-gray-200">Articles</a>
      <a href="about.html" class="block py-2 px-4 text-gray-300 hover:bg-gray-200">About</a>
      <a href="contact.html" class="block py-2 px-4 text-gray-300 hover:bg-gray-200">Contact</a>
    </nav>
    <button id="menu-button" class="menu-button md:hidden absolute top-4 right-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
  </aside>

  <div class="flex-1 flex flex-col md:pl-64">
    <header class="bg-gray-800 shadow-lg p-4">
      <button id="menu-button" class="md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

      </button>
      <h1 class="text-xl font-semibold text-gray-200">Home</h1>
    </header>
    <main class="p-4 bg-gray-900 flex-1 overflow-y-auto text-gray-300">
      
    </main>
  </div>
  </div>
</body>

</html>```