import ProgressBar from './ProgressBar';

const DataTile = ({ label, unit, value, max, min }) => {
  return (
    <div class='bg-white border border-emerald-200 rounded-lg m-3 sm:m-0'>
      <div class='flex flex-col items-center pb-10'>
        <ProgressBar
          value={value}
          measurement={unit}
          maxVal={max}
          minVal={min}
        />
        <h5 class='mb-1 text-xl font-medium text-gray-900'>{label}</h5>
        <span class='text-sm text-gray-500'>{`gemessen in ${unit}`}</span>
      </div>
    </div>
  );
};

export default DataTile;
