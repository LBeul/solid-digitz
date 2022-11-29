const CalibrationTab = () => {
  return (
    <div id='Calibration' className='tabcontent'>
      <h1>Kalibrierwerte für die Bodenfeuchtesensoren</h1>
      <p>Geben Sie hier die Kalibrierwerte ein</p>
      <form method='get' action='setADCcal'>
        <table>
          <tbody>
            <tr>
              <th rowSpan='2'>Anschluss AN1: </th>
              <td>
                Kleinster Wert
                <input
                  style={{ width: '50px' }}
                  name='LoValue1'
                  length={20}
                  type='number'
                  defaultValue='%LoValue1%'
                />
              </td>
            </tr>
            <tr>
              <td>
                Größter Wert
                <input
                  style={{ width: '50px' }}
                  name='HiValue1'
                  length={20}
                  type='number'
                  defaultValue='%HiValue1%'
                />
              </td>
            </tr>

            <tr>
              <th rowSpan='2'>Anschluss AN2: </th>
              <td>
                Kleinster Wert
                <input
                  style={{ width: '50px' }}
                  name='LoValue2'
                  length={20}
                  type='number'
                  defaultValue='%LoValue2%'
                />
              </td>
            </tr>
            <tr>
              <td>
                Größter Wert
                <input
                  style={{ width: '50px' }}
                  name='HiValue2'
                  length={20}
                  type='number'
                  defaultValue='%HiValue2%'
                />
              </td>
            </tr>

            <tr>
              <th rowSpan='2'>Anschluss AN3: </th>
              <td>
                Kleinster Wert
                <input
                  style={{ width: '50px' }}
                  name='LoValue3'
                  length={20}
                  type='number'
                  defaultValue='%LoValue3%'
                />
              </td>
            </tr>
            <tr>
              <td>
                Größter Wert
                <input
                  style={{ width: '50px' }}
                  name='HiValue3'
                  length={20}
                  type='number'
                  defaultValue='%HiValue3%'
                />
              </td>
            </tr>

            <tr>
              <th rowSpan='2'>Anschluss AN4: </th>
              <td>
                Kleinster Wert
                <input
                  style={{ width: '50px' }}
                  name='LoValue4'
                  length={20}
                  type='number'
                  defaultValue='%LoValue4%'
                />
              </td>
            </tr>
            <tr>
              <td>
                Größter Wert
                <input
                  style={{ width: '50px' }}
                  name='HiValue4'
                  length={20}
                  type='number'
                  defaultValue='%HiValue4%'
                />
              </td>
            </tr>
          </tbody>
        </table>
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
