import DataTile from './DataTile';
import StatTile from './StatTile';

const DataTab = () => {
  return (
    <div class='container'>
      <div class='text-xl font-bold text-center text-emerald-700 my-5'>
        Aktuelle Sensordaten
      </div>
      <div class='sm:grid flex flex-col sm:grid-cols-3 sm:gap-3'>
        {/* Substitute %TempValue% for value*/}
        <DataTile
          label='Temperatur'
          unit='C°'
          value='%TempValue%'
          max={40}
          min={-30}
        />
        {/* Substitute %PressureValue% for value*/}
        <StatTile label='Luftdruck' unit='hPa' value='%PressureValue%' />
        {/* Substitute %HumidityValue% for value*/}
        <DataTile
          label='Luftfeuchtigkeit'
          unit='%'
          value='%HumidityValue%'
          max={100}
          min={0}
        />
        {/* Substitute %LuxValue% for value*/}
        <StatTile label='Lichtintensität' unit='Lux' value='%LuxValue%' />
        {/* Substitute %MoistureValue% for value*/}
        <DataTile
          label='Bodenfeuchte'
          unit='%'
          value='%MoistureValue%'
          max={100}
          min={0}
        />
        {/* Substitute %RssiValue% for value*/}
        <DataTile
          label='WiFi Qualität'
          unit='%'
          value='%RssiValue%'
          max={100}
          min={0}
        />
      </div>
      {/* <p>Anzahl der Systemstarts %BOOTNUMBER% </p> */}
    </div>
  );
};

export default DataTab;
