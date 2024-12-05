type Props = {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Input = ({ placeholder, value, type, disabled, onChange }: Props) => {
  return (
    <>
      <input
        disabled={disabled}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
        className="
          w-full
          p-2
          text-lg
          rounded-md
          outline-none
          focus:border-sky-500
          focus:border-2
          transition
          bg-gray-100
          disabled:opacity-70
          disabled:cursor-not-allowed
        "
      />
    </>
  );
};

export default Input;