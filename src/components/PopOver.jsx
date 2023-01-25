import { createSignal } from 'solid-js';

const buttonStyles =
  'px-6 py-2.5 bg-emerald-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-lg transition duration-150 ease-in-out';

const PopOver = () => {
  const [isHidden, setIsHidden] = createSignal(true);
  return (
    <>
      <button
        type='button'
        class={buttonStyles}
        onclick={() => {
          setIsHidden(!isHidden());
        }}
      >
        ?
      </button>
      <div hidden={isHidden()}>hello</div>
    </>
  );
};

export default PopOver;
