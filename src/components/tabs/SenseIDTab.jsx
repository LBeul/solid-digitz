const SenseIDTab = () => {
  return (
    <div>
      <h1>SensorIDs der openSenseMap</h1>
      <p>Geben Sie hier die SensorIDs ein</p>
      <form method='get' action='setsensor'>
        Access Token:
        <input
          style={{ width: '500px' }}
          name='authcode'
          length={180}
          type='text'
          defaultValue='%AuthCodeID%'
        />
        SenseBox ID:
        <input
          style={{ width: '220px' }}
          name='gbid'
          length={80}
          type='text'
          defaultValue='%GnomeBoxID%'
        />
        Temperatursensor ID:
        <input
          style={{ width: '220px' }}
          name='tempsense'
          length={80}
          type='text'
          defaultValue='%TempSenseID%'
        />
        Aktiv:
        <input name='boolTemp' type='checkbox' checked={true} disabled={true} />
        Luftdrucksensor ID:
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
        Luftfeuchtigkeitssensor ID:
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
        Helligkeitssensor ID:
        <input
          style={{ width: '220px' }}
          name='luxsense'
          length={80}
          type='text'
          defaultValue='%LuxSenseID%'
        />
        Aktiv:
        <input name='boolLux' type='checkbox' checked={true} disabled={true} />
        Bodenfeuchtesensor ID:
        <input
          style={{ width: '220px' }}
          name='soilsense'
          length={80}
          type='text'
          defaultValue='%SoilSenseID%'
        />
        Aktiv:
        <input name='boolSoil' type='checkbox' checked={true} disabled={true} />
        DigitZ-WLAN ID:
        <input
          style={{ width: '220px' }}
          name='rssi'
          length={80}
          type='text'
          defaultValue='%RssiID%'
        />
        Aktiv:
        <input name='boolRssi' type='checkbox' checked={true} disabled={true} />
        {/* <tr> <td> UV-Sensor ID:</td><td><input style={{ width:'220px' }} name="uvsense" length={80} type="text" defaultValue="%UVSenseID%"/>Aktiv:<input name="boolUV" type="checkbox"  checked="true" disabled="true"/></td></tr> */}
        <br />
        <input type='submit' />
      </form>
      <p>
        <a href='/gotoOSM'>Daten auf openSenseMap anzeigen</a>
      </p>
    </div>
  );
};

export default SenseIDTab;
