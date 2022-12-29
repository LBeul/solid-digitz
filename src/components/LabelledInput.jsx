const LabelledInput = ({
  label,
  inputId,
  type = 'number',
  length = 20,
  defaultValue,
}) => {
  return (
    <div class='mx-3 sm:mx-0'>
      <label
        class='block text-emerald-700 text-sm font-bold my-2'
        for={inputId}
      >
        {label}
      </label>
      <input
        class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        name={inputId}
        id={inputId}
        length={length}
        type={type}
        defaultValue={defaultValue ?? `%${inputId}%`}
      />
    </div>
  );
};

export default LabelledInput;
