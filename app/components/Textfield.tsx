type TextFieldProps = {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
};

export default function Textfield({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  className,
  disabled,
}: TextFieldProps) {
  return (
    <div className={`flex flex-col gap-1 text-start ${className}`}>
      {label && (
        <label className="text-sm text-gray-700 dark:text-white font-medium">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="border border-blue-300 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white  bg-white "
      />
    </div>
  );
}
