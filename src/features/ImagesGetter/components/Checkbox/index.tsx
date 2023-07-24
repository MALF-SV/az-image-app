import './styles.css';

type CheckboxProps = {
  id: string;
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox = ({ id, label, checked, onChange }: CheckboxProps) => {
  return (
    <div className="check">
      <input
        type="checkbox"
        id={id}
        name={id}
        checked={checked || false}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
