import LabelledInput from '../../LabelledInput';
import SensorInput from './SensorInput';

const SenseIDTab = () => {
  return (
    <div class='container flex flex-col'>
      <h1 class='text-xl font-bold text-center text-emerald-700 mt-5 mx-3 sm:mx-0'>
        SensorIDs der openSenseMap
      </h1>
      <h2 class='text-md text-emerald-500 text-center mt-2 mb-5'>
        Geben Sie hier die SensorIDs ein
      </h2>
      <form method='get' action='setsensor'>
        <div class='container sm:grid flex flex-col sm:grid-cols-2 sm:gap-2 mb-10'>
          <LabelledInput
            label='Access Token'
            inputId='authcode'
            type='text'
            length={180}
            defaultValue='%AuthCodeID%'
          />
          <LabelledInput
            label='SenseBox ID'
            inputId='gbid'
            type='text'
            length={80}
            defaultValue='%GnomeBoxID%'
          />
        </div>
        <div class='sm:grid flex flex-col sm:grid-cols-3 sm:gap-10'>
          <SensorInput
            label='Temperatursensor ID'
            inputId='tempsense'
            type='text'
            length={80}
            defaultValue='%TempSenseID%'
          />
          <SensorInput
            label='Luftdrucksensor ID'
            inputId='pressuresense'
            type='text'
            length={80}
            defaultValue='%PressureSenseID%'
          />
          <SensorInput
            label='Luftfeuchtigkeitssensor ID'
            inputId='humidsense'
            type='text'
            length={80}
            defaultValue='%HumidSenseID%'
          />
          <SensorInput
            label='Helligkeitssensor ID'
            inputId='luxsense'
            type='text'
            length={80}
            defaultValue='%LuxSenseID%'
          />
          <SensorInput
            label='Bodenfeuchtesensor ID'
            inputId='soilsense'
            type='text'
            length={80}
            defaultValue='%SoilSenseID%'
          />
          <SensorInput
            label='DigitZ-WLAN ID'
            inputId='rssi'
            type='text'
            length={80}
            defaultValue='%RssiID%'
          />
          {/* <tr> <td> UV-Sensor ID:</td><td><input style={{ width:'220px' }} name="uvsense" length={80} type="text" defaultValue="%UVSenseID%"/>Aktiv:<input name="boolUV" type="checkbox"  checked="true" disabled="true"/></td></tr> */}
        </div>
        <div class='container sm:grid flex flex-col sm:grid-cols-2 sm:gap-10 mb-10'>
          <input
            type='submit'
            class='bg-transparent hover:bg-emerald-500 font-semibold hover:text-white border border-emerald-500 hover:border-transparent text-emerald-500 py-2 px-4 rounded my-5 mx-3 sm:mx-0'
          />
          <button class='bg-transparent hover:bg-emerald-500 font-semibold hover:text-white border border-emerald-500 hover:border-transparent text-emerald-500 py-2 px-4 rounded my-5 mx-3 sm:mx-0'>
            Daten auf openSenseMap anzeigen
          </button>
        </div>
      </form>
    </div>
  );
};

export default SenseIDTab;
