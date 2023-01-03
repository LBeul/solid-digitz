const ProgressBar = ({ value, maxVal, minVal, measurement }) => {
  return (
    <div class='container w-20 my-3'>
      <div class='text-xs text-emerald-700 font-bold text-center mb-1'>{`${maxVal}`}</div>
      <div class='flex flex-col flex-nowrap justify-end w-20 h-32 bg-emerald-100 rounded-md overflow-hidden text-xs text-white text-center'>
        <div
          class='bg-emerald-500 overflow-hidden'
          role='progressbar'
          style={`height: ${calculatePosition(minVal, maxVal, value)}%`}
          aria-valuenow={value}
          aria-valuemin={minVal}
          aria-valuemax={maxVal}
        >
          {`${value} ${measurement}`}
        </div>
      </div>
      <div class='text-xs text-emerald-700 font-bold text-center mt-1'>{`${minVal}`}</div>
    </div>
  );
};

const calculatePosition = (min, max, val) => {
  const range = max - min;
  if (min < 0 && max >= 0 && val >= 0) {
    return ((val - min) / range) * 100;
  }
  return (val / range) * 100;
};

export default ProgressBar;
