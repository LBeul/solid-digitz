import LabelledInput from '../../LabelledInput';

const CalibrationInputs = (props) => {
  const { valueNo } = props;
  return (
    <div class='container flex flex-col sm:flex-row justify-between my-2'>
      <div class='text-center my-auto text-md font-bold'>{`Anschluss AN-${valueNo}`}</div>
      <LabelledInput label='Kleinster Wert' inputId={`LoValue${valueNo}`} />
      <LabelledInput label='Größter Wert' inputId={`HiValue${valueNo}`} />
    </div>
  );
};

export default CalibrationInputs;
