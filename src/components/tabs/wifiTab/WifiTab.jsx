import LabelledInput from '../../LabelledInput';
import LabelledDropDown from '../../LabelledDropDown';

const WifiTab = () => {
  return (
    <div class='container flex flex-col'>
      <h1 class='text-xl font-bold text-center text-emerald-700 my-5 mx-3 sm:mx-0'>
        Wi-Fi Settings
      </h1>
      <h2 class='text-md text-emerald-500 text-center'>%FIRMWARE%</h2>
      <h3 class='text-base font-semibold my-5 mx-3 sm:mx-0'>
        Bitte wählen Sie ein WLAN-Netzwerk und geben Sie das Passwort ein:
      </h3>
      <form method='get' action='setwifi'>
        <LabelledDropDown label='SSID' dropDownId='ssid' />
        <LabelledInput
          label='Password'
          inputId='pass'
          type='password'
          length={64}
        />
        <h3 class='text-base font-semibold my-5 mx-3 sm:mx-0'>
          Geben Sie einen Netzwerknamen für die Box ein:
        </h3>
        <LabelledInput
          label='Netzwerkname'
          inputId='networkname'
          type='text'
          length={180}
          defaultValue='%NetworkName%'
        />
        <input
          class='bg-transparent hover:bg-emerald-500 font-semibold hover:text-white border border-emerald-500 hover:border-transparent text-emerald-500 py-2 px-4 rounded my-5 mx-3 sm:mx-0'
          type='submit'
        />
      </form>
    </div>
  );
};

export default WifiTab;
