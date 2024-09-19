import style from "./RadioInput.module.css";

function RadioInput({
  name,
  isChecked,
  onChange,
}: {
  name: string;
  isChecked: boolean;
  onChange: (value: string) => void;
}) {
  return (
    <li>
      <input
        type="radio"
        className={`${style.input} hidden`}
        id={name}
        value={name}
        checked={isChecked}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      <label
        className={`${style.label} flex gap-2 subtitle px-[10px] py-[29px] shadow-card bg-white rounded-2xl cursor-pointer`}
        htmlFor={name}
      >
        {name}
      </label>
    </li>
  );
}

export default RadioInput;
