const Input = ({
  name,
  placeholder,
  value,
  type = "text",
  error,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`p-3 text-primary border rounded-xl ${
          error ? "border-red-500" : "border-slate-400"
        }`}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Input;
