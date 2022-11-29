const TabButton = (props) => {
  return <button onClick={props.onClick}>{props.tabLabel}</button>;
};

export default TabButton;
