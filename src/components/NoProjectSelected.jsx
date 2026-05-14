import logo from "../assets/no-projects.png";
import Button from "./Button";

function NoProjectSelected({ onSelect }) {
  return (
    <div
      className="mt-24 text-center w-2/3 "
      role="region"
      aria-label="No project selected">
      <img
        src={logo}
        alt="No project selected"
        className="w-20 h-20 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Please select a project or create a new one to get started.
      </p>
      <Button
        onClick={() => onSelect && onSelect()}
        aria-label="Create new project">
        Create new project
      </Button>
    </div>
  );
}

export default NoProjectSelected;
