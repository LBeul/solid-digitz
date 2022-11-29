const DataTab = () => {
  return (
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
  );
};

export default DataTab;
