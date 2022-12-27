const defaultStyles =
  'bg-transparent hover:bg-emerald-500 font-semibold hover:text-white border border-emerald-500 hover:border-transparent text-emerald-500 py-2 px-4 rounded basis-1/5 sm:m-0 m-2';
const activeStyles =
  'bg-emerald-500 hover:bg-emerald-500 font-semibold text-white py-2 px-4 rounded basis-1/5 sm:m-0 m-2';

const TabButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      class={props.isActive ? activeStyles : defaultStyles}
    >
      {props.tabLabel}
    </button>
  );
};

export default TabButton;
