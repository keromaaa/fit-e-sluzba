import { ReactNode } from "react";
import { createPortal } from "react-dom";
import Button from "../ui/components/Button";

interface ModalProps {
  children?: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed top-0 left-0 w-screen h-screen bg-opacity-20 bg-black flex justify-center items-center z-40">
      <div className="relative bg-white rounded-md p-4 z-50 max-h-[600px] overflow-y-auto overflow-x-hidden">
        <Button type="modal-close" onClick={onClose} />
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
