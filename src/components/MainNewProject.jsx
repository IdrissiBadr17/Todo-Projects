import { useRef } from "react";
import InputForm from "./InputForm";
import Modal from "./Modal";

function MainNewProject({ onCancel, onSave }) {
  const modalRef = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = (title.current?.value ?? "").toString();
    const enteredDescription = (description.current?.value ?? "").toString();
    const enteredDueDate = (dueDate.current?.value ?? "").toString();

    // Validation

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modalRef.current?.show?.();
      return;
    }

    onSave({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
    // clear inputs
    if (title.current) title.current.value = "";
    if (description.current) description.current.value = "";
    if (dueDate.current) dueDate.current.value = "";
  }

  return (
    <>
      <Modal ref={modalRef}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Please fill in all fields.</p>
      </Modal>
      <div className="w-140 mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950 cursor-pointer">
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 cursor-pointer">
              Save
            </button>
          </li>
        </menu>
        <div>
          <InputForm
            label="Title"
            type="text"
            ref={title}
            placeholder="Enter project title"
          />
          <InputForm
            label="Description"
            isTextarea
            ref={description}
            placeholder="Enter project description"
          />
          <InputForm label="Due Date" type="date" ref={dueDate} />
        </div>
      </div>
    </>
  );
}

export default MainNewProject;
