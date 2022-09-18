export const Columns = ({ isStackedOnMobile, children }) => {
  return (
    <div className="my-10">
      <div
        className={`max-w-5xl mx-auto ${
          isStackedOnMobile ? "block md:flex" : "flex"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
