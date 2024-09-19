import style from "./Input.module.css";

function Input({ name }: { name: string }) {
  return (
    <li>
      <input
        type="radio"
        className={`${style.input} hidden`}
        id={name}
        value={name}
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

export default Input;
