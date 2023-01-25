import PopOver from './components/PopOver';
import TabContainer from './components/TabContainer';
import ToolTip from './components/ToolTip';

const dummyText =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sunt debitis, optio recusandae minus et culpa enim veritatis, provident animi autem inventore velit sed officia architecto, eaque tempore perspiciatis quas.';

function App() {
  return (
    <div class='container mx-auto py-5'>
      <h2 class='text-center text-2xl font-bold mb-5'>
        Einstellungen für DigitZ %NetworkName%
      </h2>
      <TabContainer />
      <ToolTip id='test' label='?' content={dummyText} />
      <PopOver />
    </div>
  );
}

export default App;
