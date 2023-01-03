const InputWithToggle = ({
  label,
  inputId,
  checkBoxId,
  type,
  length,
  defaultValue,
}) => {
  return (
    <div class='m-3 sm:m-0'>
      <fieldset class='container flex flex-row justify-center'>
        <legend class='block text-emerald-700 text-sm font-bold my-2 w-full text-center'>
          {label}
        </legend>
        <input
          class='shadow appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type={type}
          name={inputId}
          id={inputId}
          length={length}
          defaultValue={defaultValue ?? `%${inputId}%`}
        />
        {checkBoxId && (
          <input
            class='shadowaccent-emerald-600 w-10 opacity-50 leading-tight'
            type='checkbox'
            name={checkBoxId}
            checked={true}
            disabled
          />
        )}
      </fieldset>
    </div>
  );
};

export default InputWithToggle;
