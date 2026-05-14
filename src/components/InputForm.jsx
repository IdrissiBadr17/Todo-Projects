function InputForm({ isTextarea, label, ...props }) {
  return (
    <p className="flex flex-col gap-2 mb-4">
      <label className="text-stone-500 text-sm font-bold uppercase">
        {label}
      </label>
      {isTextarea ?
        <textarea
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600focus: outline-none focus:border-stone-600
          placeholder:text-stone-400 placeholder:italic focus:h-16"
          {...props}
        />
      : <input
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600focus: outline-none focus:border-stone-600
          placeholder:text-stone-400 placeholder:italic "
          {...props}
        />
      }
    </p>
  );
}

export default InputForm;
