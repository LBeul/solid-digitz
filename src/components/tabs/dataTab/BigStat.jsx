const BigStat = ({ value, measurement }) => {
  return (
    <div class='container w-20 my-3'>
      <div class='text-xs text-emerald-700 font-bold text-center mb-1'>
        &nbsp
      </div>
      <div class='flex flex-col flex-nowrap justify-center h-32 overflow-hidden text-center'>
        <div class='text-emerald-500 overflow-hidden text-2xl font-semibold'>
          {value}
        </div>
      </div>
      <div class='text-xs text-emerald-700 font-bold text-center mt-1'>
        &nbsp
      </div>
    </div>
  );
};

export default BigStat;
