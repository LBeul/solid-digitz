function App() {
  return (
    <>
      <input type='hidden' id='reiter' defaultValue='%ReiterName%' />
      <h2>Einstellungen für Gerät: %NetworkName%</h2>
      <p>Klicken Sie auf die Tabs zur Kategorienauswahl:</p>
      <div className='tab'>
        <button
          className='tablinks'
          onClick={() => {
            console.log("Reiter(event, 'Daten')");
          }}
        >
          Sensordaten
        </button>
        <button
          className='tablinks'
          onClick={() => {
            console.log("Reiter(event, 'WiFi')");
          }}
        >
          WiFi
        </button>
        <button
          className='tablinks'
          onClick={() => {
            console.log("Reiter(event, 'SenseID')");
          }}
        >
          openSensemap-IDs
        </button>
        <button
          className='tablinks'
          onClick={() => {
            console.log("Reiter(event, 'Calibration')");
          }}
        >
          Sensorkalibrierung
        </button>
      </div>
      <div id='Daten' className='tabcontent'>
        <h1>Aktuelle Sensordaten</h1>
        <p>Temperatur %TempValue% C</p>
        <p>Luftdruck %PressureValue% hPa</p>
        <p>Luftfeuchtigkeit %HumidityValue% %rel</p>
        <p>Lichtintensität %LuxValue% Lux</p>
        <p>Bodenfeuchte %MoistureValue% %rel</p>
        <p>WiFi Qualität %RssiValue% %</p>
        {/* <p>Anzahl der Systemstarts %BOOTNUMBER% </p> */}
        <p>
          <a href='/?ReiterName=Daten'>Anzeige aktualisieren</a>
        </p>
      </div>
      <div id='WiFi' className='tabcontent'>
        <h1>Wi-Fi Settings</h1>
        <p>
          Bitte wählen Sie ein Wlan-Netzwerk und geben Sie das Passwort ein:.
        </p>
        <p>%FIRMWARE%</p>
        <form method='get' action='setwifi'>
          <label>SSID: </label>
          <select name='ssid'>%ssidList%</select>
          <br />
          Password: <input name='pass' length={64} type='password' />
          <br />
          <br />
          Geben Sie einen Netzwerknamen für die Box ein:
          <br />
          Netzwerkname:
          <input
            name='networkname'
            length={180}
            type='text'
            defaultValue='%NetworkName%'
          />
          <br />
          <input type='submit' />
        </form>
      </div>
      <div id='SenseID' className='tabcontent'>
        <h1>SensorIDs der openSenseMap</h1>
        <p>Geben Sie hier die SensorIDs ein</p>
        <form method='get' action='setsensor'>
          <table>
            <tbody>
              <tr>
                <td className='tar'> Access Token:</td>
                <td>
                  <input
                    style={{ width: '500px' }}
                    name='authcode'
                    length={180}
                    type='text'
                    defaultValue='%AuthCodeID%'
                  />
                </td>
              </tr>
              <tr>
                <td className='tar'> SenseBox ID:</td>
                <td>
                  <input
                    style={{ width: '220px' }}
                    name='gbid'
                    length={80}
                    type='text'
                    defaultValue='%GnomeBoxID%'
                  />
                </td>
              </tr>
              <tr>
                <td className='tar'> Temperatursensor ID:</td>
                <td>
                  <input
                    style={{ width: '220px' }}
                    name='tempsense'
                    length={80}
                    type='text'
                    defaultValue='%TempSenseID%'
                  />
                  Aktiv:
                  <input
                    name='boolTemp'
                    type='checkbox'
                    checked={true}
                    disabled={true}
                  />
                </td>
              </tr>
              <tr>
                <td className='tar'> Luftdrucksensor ID:</td>
                <td>
                  <input
                    style={{ width: '220px' }}
                    name='pressuresense'
                    length={80}
                    type='text'
                    defaultValue='%PressureSenseID%'
                  />
                  Aktiv:
                  <input
                    name='boolPressure'
                    type='checkbox'
                    checked={true}
                    disabled={true}
                  />
                </td>
              </tr>
              <tr>
                <td className='tar'> Luftfeuchtigkeitssensor ID:</td>
                <td>
                  <input
                    style={{ width: '220px' }}
                    name='humidsense'
                    length={80}
                    type='text'
                    defaultValue='%HumidSenseID%'
                  />
                  Aktiv:
                  <input
                    name='boolHumid'
                    type='checkbox'
                    checked={true}
                    disabled={true}
                  />
                </td>
              </tr>
              <tr>
                <td className='tar'> Helligkeitssensor ID:</td>
                <td>
                  <input
                    style={{ width: '220px' }}
                    name='luxsense'
                    length={80}
                    type='text'
                    defaultValue='%LuxSenseID%'
                  />
                  Aktiv:
                  <input
                    name='boolLux'
                    type='checkbox'
                    checked={true}
                    disabled={true}
                  />
                </td>
              </tr>
              <tr>
                <td className='tar'> Bodenfeuchtesensor ID:</td>
                <td>
                  <input
                    style={{ width: '220px' }}
                    name='soilsense'
                    length={80}
                    type='text'
                    defaultValue='%SoilSenseID%'
                  />
                  Aktiv:
                  <input
                    name='boolSoil'
                    type='checkbox'
                    checked={true}
                    disabled={true}
                  />
                </td>
              </tr>
              <tr>
                <td className='tar'> DigitZ-WLAN ID:</td>
                <td>
                  <input
                    style={{ width: '220px' }}
                    name='rssi'
                    length={80}
                    type='text'
                    defaultValue='%RssiID%'
                  />
                  Aktiv:
                  <input
                    name='boolRssi'
                    type='checkbox'
                    checked={true}
                    disabled={true}
                  />
                </td>
              </tr>
              {/* <tr> <td className="tar"> UV-Sensor ID:</td><td><input style={{ width:'220px' }} name="uvsense" length={80} type="text" defaultValue="%UVSenseID%"/>Aktiv:<input name="boolUV" type="checkbox"  checked="true" disabled="true"/></td></tr> */}
            </tbody>
          </table>
          <br />
          <input type='submit' />
        </form>
        <p>
          <a href='/gotoOSM'>Daten auf openSenseMap anzeigen</a>
        </p>
      </div>
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
    </>
  );
}

export default App;
