import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const Modal = ({ children, setShowModal, showModal }: Props) => {
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);
  return (
    <div
      className={`fixed inset-0 z-[999999999] h-screen w-auto transform bg-night-500 transition-all duration-500 ease-in-out
        ${
          showModal
            ? "translate-y-0 opacity-100"
            : "invisible -translate-y-full opacity-0"
        }`}
    >
      {children}
    </div>
  );
};

export default Modal;
