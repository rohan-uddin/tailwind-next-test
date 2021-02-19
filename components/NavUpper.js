/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
export default function NavUpper() {
  return (
    <nav
      data-todo-x-data="{ open: false }"
      className="flex-shrink-0 bg-purple-600"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Search section */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="w-full px-2 lg:px-6">
              <div className="relative text-indigo-200 focus-within:text-gray-400">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5"
                    data-todo-x-description="Heroicon name: solid/search"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-indigo-200 bg-opacity-20 text-indigo-100 placeholder-indigo-200 focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm"
                  placeholder="Search Groups"
                  type="search"
                />
              </div>
            </div>
          </div>

          {/* Links section */}
          <div className="lg:block lg:w-16">
            <a
              href="/"
              className="px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white"
            >
              Settings
            </a>
          </div>
        </div>
      </div>

      <div className="hidden lg:hidden">
        <div className="px-2 pt-2 pb-3">
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-800"
          >
            Dashboard
          </a>
          <a
            href="/"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"
          >
            Support
          </a>
        </div>
        <div className="pt-4 pb-3 border-t border-indigo-800">
          <div className="px-2">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"
            >
              Your Profile
            </a>
            <a
              href="/"
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"
            >
              Settings
            </a>
            <a
              href="/"
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
