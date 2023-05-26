import { createSignal } from 'solid-js';

/**
 * A "?"-Button that renders a popover on click
 * Used to give further information and instructions throughout the app
 * @param {content} : the content to be displayed inside the tooltip popover
 * @returns a tooltip button that renders a content onClick
 */
const ToolTip = ({ content }) => {
  const [isHidden, setIsHidden] = createSignal(true);
  return (
    <>
      <button
        type='button'
        class='text-white bg-emerald-300 font-medium rounded-full text-sm w-5 h-5 text-center'
        onclick={() => {
          setIsHidden(!isHidden());
        }}
      >
        ?
      </button>
      <div
        class='absolute w-max whitespace-normal break-words rounded-lg border border-emerald-gray-50 bg-white p-4 font-sans text-sm font-normal text-emerald-gray-500 shadow-lg shadow-emerald-gray-500/10 focus:outline-none'
        hidden={isHidden()}
      >
        {content}
      </div>
    </>
  );
};

export default ToolTip;
