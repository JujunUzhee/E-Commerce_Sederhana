import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "./searchSlice";

const Search = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search.searchTerm);

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };
  return (
    <>
      <form className="mx-auto w-52 max-w-md">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            <svg
              className="h-4 w-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            value={searchTerm}
            onChange={handleChange}
            className="focus:ring-blue z-0 block w-full rounded-lg border border-white bg-white p-2 ps-10 text-gray-900 focus:border-blue-500"
            placeholder="Cari Produk..."
            required
          />
        </div>
      </form>
    </>
  );
};

export default Search;
