import { createPortal } from "react-dom";
import { useImperativeHandle, useRef } from "react";
import Button from "./Button";

function Modal({ children, ref }) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => ({
    show() {
      dialogRef.current.showModal();
    },

    close() {
      dialogRef.current.close();
    },
  }));

  return createPortal(
    <dialog
      ref={dialogRef}
      className=" fixed
    top-1/2
    left-1/2
    -translate-x-1/2
    -translate-y-1/2
    backdrop:bg-stone-900/90
    p-4
    rounded-md
    shadow-md
    border-2
    border-stone-300
    w-80">
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>Close</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
}

export default Modal;
