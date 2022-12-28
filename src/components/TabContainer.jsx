import { createSignal } from 'solid-js';
import CalibrationTab from './tabs/calibration/CalibrationTab';
import DataTab from './tabs/DataTab';
import SenseIDTab from './tabs/SenseIDTab';
import TabButton from './TabButton';
import WifiTab from './tabs/WifiTab';

const mappedTabs = new Map();
mappedTabs.set('data', <DataTab />);
mappedTabs.set('wifi', <WifiTab />);
mappedTabs.set('sense', <SenseIDTab />);
mappedTabs.set('cal', <CalibrationTab />);

const TabContainer = () => {
  const [tabComponent, setTabComponent] = createSignal(null);
  const [activeTab, setActiveTab] = createSignal('');

  const changeTabs = (name) => {
    setTabComponent(mappedTabs.get(name));
    setActiveTab(name);
  };

  return (
    <div class='container mx-auto'>
      <div class='flex sm:flex-row flex-col justify-between flex-wrap'>
        <TabButton
          onClick={() => changeTabs('data')}
          isActive={activeTab() === 'data'}
          tabLabel='Sensordaten'
        />
        <TabButton
          onClick={() => changeTabs('wifi')}
          isActive={activeTab() === 'wifi'}
          tabLabel='WiFi'
        />
        <TabButton
          onClick={() => changeTabs('sense')}
          isActive={activeTab() === 'sense'}
          tabLabel='openSenseMap'
        />
        <TabButton
          onClick={() => changeTabs('cal')}
          isActive={activeTab() === 'cal'}
          tabLabel='Kalibrierung'
        />
      </div>
      {tabComponent}
    </div>
  );
};

export default TabContainer;
