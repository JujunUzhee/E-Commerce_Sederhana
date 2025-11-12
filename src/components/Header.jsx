import Cart from "../assets/cart.svg";
import { useSelector } from "react-redux";
import { selectCartTotalItems } from "../features/cart/cartSlice";
import CategoryList from "../features/category/CategoryList";
import Search from "../features/search/Search";

const Header = ({ handleOpenModalCart }) => {
  const cartTotalItems = useSelector(selectCartTotalItems);

  console.log(cartTotalItems);
  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-sky-600 shadow">
        <div className="mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <h1 className="text-xs font-bold text-gray-100 md:ml-16 md:text-2xl lg:text-3xl">
              E-Commerce
            </h1>
            <div className="flex h-full items-center justify-between gap-2 md:gap-7">
              <button
                type="button"
                className="relative rounded-full bg-sky-700 p-2 text-gray-100"
                onClick={handleOpenModalCart}
              >
                <img
                  src={Cart}
                  alt="cart"
                  className="h-6 w-6 hover:cursor-pointer"
                />
                {cartTotalItems === 0 ? null : (
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-sm text-white">
                    {cartTotalItems}
                  </span>
                )}
              </button>
              <CategoryList />
              <Search />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
