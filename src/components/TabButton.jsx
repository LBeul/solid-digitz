const TabButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className='bg-blue-500 hover:bg-blue-700 text-white 
      font-bold py-2 px-4 rounded mx-1'
    >
      {props.tabLabel}
    </button>
  );
};

export default TabButton;
