import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory, fetchCategories } from "./categoryslice";
const CategoryList = () => {
  const dispatch = useDispatch();

  const { categories, selectedCategory, status } = useSelector(
    (state) => state.category
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
    }
  }, [status, dispatch]);

  const handleCategorySelect = (e) => {
    dispatch(setSelectedCategory(e.target.value));
  };
  return (
    <>
      <div>
        <label htmlFor="Headline">
          <select
            name="Headline"
            id="Headline"
            onChange={handleCategorySelect}
            value={selectedCategory || ""}
            className="h-full w-full rounded border p-2 font-semibold capitalize shadow-sm hover:cursor-pointer"
          >
            <option
              value=""
              className="font-semibold text-gray-900 capitalize hover:cursor-pointer"
            >
              Semua
            </option>
            {categories.map((cat) => (
              <option
                key={cat}
                value={cat}
                className="font-semibold text-gray-900 capitalize hover:cursor-pointer"
              >
                {cat}
              </option>
            ))}
          </select>
        </label>
      </div>
    </>
  );
};

export default CategoryList;
