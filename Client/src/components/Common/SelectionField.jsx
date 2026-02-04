export default function SelectionField({
  label,
  value,
  onChange,
  options,
}) {
  return (
    <div>
      <label className="text-sm text-gray-500">{label}</label>

      <select
        value={value}
        onChange={onChange}
        className="border p-2 rounded w-full"
      >
        <option value="">Select</option>

        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
