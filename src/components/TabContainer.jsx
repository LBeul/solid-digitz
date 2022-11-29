import { createSignal } from 'solid-js';
import CalibrationTab from './tabs/CalibrationTab';
import DataTab from './tabs/DataTab';
import SenseIDTab from './tabs/SenseIDTab';
import TabButton from './TabButton';
import WifiTab from './tabs/WifiTab';

const TABS = {
  DATA: <DataTab />,
  WIFI: <WifiTab />,
  SENSE: <SenseIDTab />,
  CAL: <CalibrationTab />,
};

const TabContainer = () => {
  const [tab, setTab] = createSignal('');

  return (
    <>
      <div>
        <TabButton onClick={() => setTab(TABS.DATA)} tabLabel='Sensordaten' />
        <TabButton onClick={() => setTab(TABS.WIFI)} tabLabel='WiFi' />
        <TabButton onClick={() => setTab(TABS.SENSE)} tabLabel='openSenseMap' />
        <TabButton onClick={() => setTab(TABS.CAL)} tabLabel='Kalibrierung' />
      </div>
      {tab}
    </>
  );
};

export default TabContainer;
