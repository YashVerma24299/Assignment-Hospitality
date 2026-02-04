export default function InputField({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  min,
}) {
  return (
    <div>
      <label className="text-sm text-gray-500">{label}</label>

      <input
        type={type}
        min={min}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="border p-2 rounded w-full"
      />
    </div>
  );
}
