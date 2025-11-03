import ReactDom from "react-dom";

const BackdropOverlay = () => {
  return (
    <div className="fixed top-0 left-0 z-0 h-screen w-full bg-black/75"></div>
  );
};

const ModalOverLay = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 z-30 flex h-screen w-full items-center justify-center">
      <div className="mx-2 rounded-lg bg-white p-4 text-gray-900 shadow-lg">
        {children}
      </div>
    </div>
  );
};

const portalElement = document.getElementById("modal");

const Modal = ({ children }) => {
  return (
    <>
      {ReactDom.createPortal(<BackdropOverlay />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverLay>{children}</ModalOverLay>,
        portalElement
      )}
      {}
    </>
  );
};

export default Modal;
