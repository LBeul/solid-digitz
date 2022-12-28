const LabelledInput = (props) => {
  const { label, inputId } = props;
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
        length={20}
        type='number'
        defaultValue={`%${inputId}%`}
      />
    </div>
  );
};

export default LabelledInput;
