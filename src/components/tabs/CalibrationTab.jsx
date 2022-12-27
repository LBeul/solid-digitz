const CalibrationTab = () => {
  return (
    <div class='container flex flex-col'>
      <form method='get' action='setADCcal' class='container'>
        <div class='text-lg font-semibold text-center my-5'>
          Geben Sie hier die Kalibrierwerte ein
        </div>
        <div class='container flex flex-row justify-between my-2'>
          <div class='text-center my-auto text-md font-bold'>
            Anschluss AN-1
          </div>
          <div>
            <label
              class='block text-emerald-700 text-sm font-bold mb-1'
              for='LoValue1'
            >
              Kleinster Wert
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='LoValue1'
              id='LoValue1'
              length={20}
              type='number'
              defaultValue='%LoValue1%'
            />
          </div>
          <div>
            <label
              class='block text-emerald-700 text-sm font-bold mb-1'
              for='HiValue1'
            >
              Größter Wert
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='HiValue1'
              id='HiValue1'
              length={20}
              type='number'
              defaultValue='%HiValue1%'
            />
          </div>
        </div>
        <div class='container flex flex-row justify-between my-2'>
          <div class='text-center my-auto text-md font-bold'>
            Anschluss AN-2
          </div>
          <div>
            <label
              class='block text-emerald-700 text-sm font-bold mb-2'
              for='LoValue2'
            >
              Kleinster Wert
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='LoValue2'
              id='LoValue2'
              length={20}
              type='number'
              defaultValue='%LoValue2%'
            />
          </div>
          <div>
            <label
              class='block text-emerald-700 text-sm font-bold mb-2'
              for='HiValue2'
            >
              Größter Wert
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='HiValue2'
              id='HiValue2'
              length={20}
              type='number'
              defaultValue='%HiValue2%'
            />
          </div>
        </div>
        <div class='container flex flex-row justify-between my-2'>
          <div class='text-center my-auto text-md font-bold'>
            Anschluss AN-3
          </div>
          <div>
            <label
              class='block text-emerald-700 text-sm font-bold mb-2'
              for='LoValue3'
            >
              Kleinster Wert
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='LoValue3'
              id='LoValue3'
              length={20}
              type='number'
              defaultValue='%LoValue3%'
            />
          </div>
          <div>
            <label
              class='block text-emerald-700 text-sm font-bold mb-2'
              for='HiValue3'
            >
              Größter Wert
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='HiValue3'
              id='HiValue3'
              length={20}
              type='number'
              defaultValue='%HiValue3%'
            />
          </div>
        </div>
        <div class='container flex flex-row justify-between my-2'>
          <div class='text-center my-auto text-md font-bold'>
            Anschluss AN-4
          </div>
          <div>
            <label
              class='block text-emerald-700 text-sm font-bold mb-2'
              for='LoValue4'
            >
              Kleinster Wert
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='LoValue4'
              id='LoValue4'
              length={20}
              type='number'
              defaultValue='%LoValue4%'
            />
          </div>
          <div>
            <label
              class='block text-emerald-700 text-sm font-bold mb-2'
              for='HiValue4'
            >
              Größter Wert
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='HiValue4'
              id='HiValue4'
              length={20}
              type='number'
              defaultValue='%HiValue4%'
            />
          </div>
        </div>
        <div class='container flex flex-row justify-center my-5'>
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
