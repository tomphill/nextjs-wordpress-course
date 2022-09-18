export const Column = ({ children, width }) => {
  const widthStyle = width
    ? { minWidth: width, flexGrow: 1 }
    : { flexGrow: 1, flexBasis: 0 };
  return (
    <div style={widthStyle} className="px-2 py-5">
      {children}
    </div>
  );
};
