const WifiTab = () => {
  return (
    <div id='WiFi' className='tabcontent'>
      <h1>Wi-Fi Settings</h1>
      <p>Bitte wählen Sie ein Wlan-Netzwerk und geben Sie das Passwort ein:.</p>
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
  );
};

export default WifiTab;
