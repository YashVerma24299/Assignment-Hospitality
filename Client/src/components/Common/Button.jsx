export default function Button({ className, children, ...props }) {
  return (
    <button
      {...props}
      className={`bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
}
