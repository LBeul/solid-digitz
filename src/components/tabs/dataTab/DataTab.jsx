import DataTile from './DataTile';
import ProgressBar from './ProgressBar';

const DataTab = () => {
  return (
    <div class='container'>
      <div class='text-xl font-bold text-center text-emerald-700 my-5'>
        Aktuelle Sensordaten
      </div>
      <div class='sm:grid flex flex-col sm:grid-cols-3 sm:gap-3'>
        {/* Substitute %TempValue% for value*/}
        <DataTile label='Temperatur' unit='C°' value={20} max={40} min={-30} />
        {/* Substitute %PressureValue% for value*/}
        <DataTile label='Luftdruck' unit='hPa' value={60} max={100} min={0} />
        {/* Substitute %HumidityValue% for value*/}
        <DataTile
          label='Luftfeuchtigkeit'
          unit='%'
          value={83}
          max={100}
          min={0}
        />
        {/* Substitute %LuxValue% for value*/}
        <DataTile
          label='Lichtintensität'
          unit='Lux'
          value={90}
          max={300}
          min={0}
        />
        {/* Substitute %MoistureValue% for value*/}
        <DataTile label='Bodenfeuchte' unit='%' value={12} max={100} min={0} />
        {/* Substitute %RssiValue% for value*/}
        <DataTile label='WiFi Qualität' unit='%' value={77} max={100} min={0} />
      </div>
      {/* <p>Anzahl der Systemstarts %BOOTNUMBER% </p> */}
    </div>
  );
};

export default DataTab;
