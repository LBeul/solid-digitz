const LabelledDropDown = ({ label, dropDownId }) => {
  return (
    <div class='mx-3 sm:mx-0'>
      <label
        class='block my-2 text-sm font-bold text-emerald-700'
        for={dropDownId}
      >
        {label}
      </label>
      <select
        name={dropDownId}
        id={dropDownId}
        class='shadow form-select bg-grey-50 border border-grey-300 text-grey-900 text-sm rounded focus:ring-grey-500 focus:border-grey-500 block w-full p-2 border-r-8 border-solid'
      >
        %ssidList%
      </select>
    </div>
  );
};

export default LabelledDropDown;
