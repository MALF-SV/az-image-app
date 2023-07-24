import './styles.css';

type SliderProps = {
  id: string;
  label: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Slider = ({ id, label, value, onChange }: SliderProps) => {
  return (
    <div className="slider">
      <input
        type="range"
        id={id}
        min="100"
        max="800"
        value={value || 100}
        onInput={onChange}
      />
      <span>{`${label}: ${value || 100} px`}</span>
    </div>
  );
};

export default Slider;
