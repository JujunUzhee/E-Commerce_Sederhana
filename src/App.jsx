import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./features/productList/ProductList";
import CartModal from "./features/cart/CartModal";
function App() {
  const [isOpenModalCart, setIsOpenModalCart] = useState(false);

  const handleOpenModalCart = () => {
    setIsOpenModalCart(true);
  };
  const handleHideModalCart = () => {
    setIsOpenModalCart(false);
  };
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-sky-50">
      {isOpenModalCart ? (
        <CartModal handleHideModalCart={handleHideModalCart} />
      ) : null}
      <Header handleOpenModalCart={handleOpenModalCart} />
      <main className="mx-auto max-w-7xl">
        <ProductList />
      </main>
    </div>
  );
}

export default App;
