export const Input = ({ ...props }) => {
  return (
    <input
      className="w-full bg-accent-input rounded border border-accent-button p-3 placeholder:text-accent-label text-sm focus:border-yellow-dark outline-none"
      {...props}
    />
  );
};
