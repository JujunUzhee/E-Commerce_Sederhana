import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../cart/cartSlice";
import Loading from "../../components/Loading";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  );
  const searchTerm = useSelector((state) => state.search.searchTerm);

  const filteredProducts = products.filter((p) => {
    const matchCategory = selectedCategory
      ? p.category.toLowerCase() === selectedCategory.toLowerCase()
      : true;

    const matchSearch = searchTerm
      ? p.title.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    return matchCategory && matchSearch;
  });

  const dispatch = useDispatch();
  console.log(products);
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  const handleClickBuy = (product) => {
    dispatch(addItemToCart(product));
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid h-full w-full grid-cols-1 gap-4 pt-28 pb-7 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => {
            return (
              <div
                key={product.id}
                className="flex h-full flex-col rounded-xl border bg-white p-4 shadow"
              >
                <div className="group relative mx-auto h-[300px] w-[80%] overflow-hidden hover:cursor-pointer">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain transition-all duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="mt-8 flex flex-grow flex-col gap-4">
                  <button
                    type="button"
                    className="rounded-lg bg-sky-700 px-8 py-3 text-sm text-white hover:cursor-pointer hover:bg-sky-800"
                    onClick={() => handleClickBuy(product)}
                  >
                    Buy Now
                  </button>
                  <h3 className="mt-2 text-center text-black">
                    {product.title}
                  </h3>
                  <div className="mt-auto flex items-center justify-between gap-4">
                    <h3 className="text-gray-500">$.{product.price}</h3>
                    <h3 className="text-gray-500">⭐ {product.rating?.rate}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ProductList;
