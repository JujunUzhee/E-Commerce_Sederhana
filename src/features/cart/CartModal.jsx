import React from "react";
import Modal from "../../components/Modal";
import deleteIcon from "../../assets/delete.png";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItemFromCart,
  selectCartItems,
  selectCartTotalItems,
  selectCartTotalPrice,
} from "./cartSlice";

const CartModal = ({ handleHideModalCart }) => {
  const cartItems = useSelector(selectCartItems);
  const totalItems = useSelector(selectCartTotalItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  const dispatch = useDispatch();

  const handleCheckOutToWhatsapp = () => {
    if (totalItems === 0) return;

    const phoneNumber = "089529387231";
    const message = encodeURIComponent(
      `Halo, Saya ingin membeli ${totalItems} barang dengan total harga ${totalPrice}`
    );
    const URL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    window.open(URL, "_blank");
  };
  const handleIncreaseQuantity = (product) => {
    dispatch(increaseQuantity(product.id));
  };

  const handleDecreaseQuantity = (product) => {
    dispatch(decreaseQuantity(product.id));
  };

  const handleRemoveProduct = (product) => {
    dispatch(removeItemFromCart(product.id));
  };

  return (
    <Modal>
      <div className="flex w-full flex-col gap-6 p-1 sm:p-2 lg:w-[900px]">
        <div className="flex max-h-[500px] flex-col gap-6 overflow-auto">
          {cartItems.map((product) => {
            return (
              <div
                key={product.id}
                className="w-full border-b-4 border-blue-200 pb-2"
              >
                <div className="flex w-full items-center">
                  <div className="h-auto w-[120px] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-10 w-[75%]">
                    <h3 className="mt-3 text-lg capitalize">{product.title}</h3>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm">{product.price}</h4>
                      <h3 className="text-lg font-bold">
                        {product.totalPrice}
                      </h3>
                    </div>
                    <div className="mt-4 ml-auto flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleDecreaseQuantity(product)}
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-400 font-extrabold text-white hover:cursor-pointer"
                      >
                        -
                      </button>
                      <h3 className="mx-2">{product.quantity}</h3>
                      <button
                        type="button"
                        onClick={() => handleIncreaseQuantity(product)}
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-400 font-extrabold text-white hover:cursor-pointer"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() => handleRemoveProduct(product)}
                        className="flex h-6 w-6 items-center justify-center rounded-md bg-red-600 hover:cursor-pointer"
                      >
                        <img src={deleteIcon} alt="" className="bg-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <h3 className="text-md font-bold">Total Item: {totalItems}</h3>
          <h3 className="text-md font-bold">Total Price : {totalPrice} </h3>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="rounded-xl bg-slate-600 px-8 py-3 text-sm text-white hover:cursor-pointer hover:bg-slate-800"
            onClick={handleHideModalCart}
          >
            Close
          </button>
          <button
            type="button"
            className="rounded-xl bg-green-600 px-8 py-3 text-sm font-bold text-white hover:cursor-pointer hover:bg-green-800"
            onClick={handleCheckOutToWhatsapp}
          >
            Checkout (whatsapp)
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CartModal;
