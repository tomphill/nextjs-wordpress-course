export const Pagination = ({ totalPages, onPageClick }) => {
  return (
    <div className="max-w-5xl mx-auto mb-10 flex justify-center gap-2">
      {Array.from({ length: totalPages }).map((_, i) => (
        <div
          key={i}
          className="btn"
          onClick={() => {
            onPageClick(i + 1);
          }}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
};
