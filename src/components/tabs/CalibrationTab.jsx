const CalibrationTab = () => {
  return (
    <div id='Calibration' className='tabcontent'>
      <h1>Kalibrierwerte für die Bodenfeuchtesensoren</h1>
      <p>Geben Sie hier die Kalibrierwerte ein</p>
      <form method='get' action='setADCcal'>
        Kleinster Wert
        <input
          style={{ width: '50px' }}
          name='LoValue1'
          length={20}
          type='number'
          defaultValue='%LoValue1%'
        />
        Größter Wert
        <input
          style={{ width: '50px' }}
          name='HiValue1'
          length={20}
          type='number'
          defaultValue='%HiValue1%'
        />
        Kleinster Wert
        <input
          style={{ width: '50px' }}
          name='LoValue2'
          length={20}
          type='number'
          defaultValue='%LoValue2%'
        />
        Größter Wert
        <input
          style={{ width: '50px' }}
          name='HiValue2'
          length={20}
          type='number'
          defaultValue='%HiValue2%'
        />
        Kleinster Wert
        <input
          style={{ width: '50px' }}
          name='LoValue3'
          length={20}
          type='number'
          defaultValue='%LoValue3%'
        />
        Größter Wert
        <input
          style={{ width: '50px' }}
          name='HiValue3'
          length={20}
          type='number'
          defaultValue='%HiValue3%'
        />
        Kleinster Wert
        <input
          style={{ width: '50px' }}
          name='LoValue4'
          length={20}
          type='number'
          defaultValue='%LoValue4%'
        />
        Größter Wert
        <input
          style={{ width: '50px' }}
          name='HiValue4'
          length={20}
          type='number'
          defaultValue='%HiValue4%'
        />
        <p>
          <a href='/ADCValues'>Zur Anzeige der Rohdaten</a>
        </p>
        <br />
        <input type='submit' />
      </form>
    </div>
  );
};

export default CalibrationTab;
