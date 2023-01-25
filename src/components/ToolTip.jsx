import { createSignal } from 'solid-js';

const ToolTip = ({ label, content, id }) => {
  const [showPopOver, setShowPopOver] = createSignal(false);
  return (
    <button
      class='text-white bg-emerald-300 font-medium rounded-full text-sm w-5 h-5 text-center'
      type='button'
      onClick={() => {
        alert({ content });
      }}
    >
      {label}
    </button>
  );
};

export default ToolTip;
