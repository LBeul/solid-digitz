import CalibrationInputs from './CalibrationInputs';
import HDivider from './HDivider';

const CalibrationTab = () => {
  return (
    <div class='container flex flex-col'>
      <form method='get' action='setADCcal' class='container'>
        <div class='text-xl font-bold text-center text-emerald-700 my-5'>
          Geben Sie hier die Kalibrierwerte ein
        </div>
        <CalibrationInputs valueNo='1' />
        <HDivider />
        <CalibrationInputs valueNo='2' />
        <HDivider />
        <CalibrationInputs valueNo='3' />
        <HDivider />
        <CalibrationInputs valueNo='4' />
        <div class='container flex flex-row justify-center my-8'>
          <button class='basis-1/3 bg-transparent hover:bg-emerald-500 font-semibold hover:text-white border border-emerald-500 hover:border-transparent text-emerald-500 py-2 px-4 rounded mr-1'>
            Zur Anzeige der Rohdaten
          </button>
          <input
            class='basis-1/3 bg-transparent hover:bg-emerald-500 font-semibold hover:text-white border border-emerald-500 hover:border-transparent text-emerald-500 py-2 px-4 rounded ml-1'
            type='submit'
          />
        </div>
      </form>
    </div>
  );
};

export default CalibrationTab;
