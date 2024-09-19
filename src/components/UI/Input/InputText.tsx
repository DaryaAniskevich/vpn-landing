function InputText({
  placeholder,
  value,
  onChange,
  className,
}: {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  return (
    <input
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      placeholder={placeholder}
      type="text"
      className={`${className} rounded-2xl border border-gray bg-grayLight w-full pt-[13px] px-4 pb-[19px]`}
    />
  );
}

export default InputText;
