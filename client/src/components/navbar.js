import { Link } from "react-router-dom";

export default function Example() {
  return (
    <>
      <div className="mx-auto px-2 sm:px-6 lg:px-8 bg-gray-800">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link to={"/"}>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  to={"/create"}
                  className={
                    "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  }
                  aria-current="page"
                >
                  Create Record
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
