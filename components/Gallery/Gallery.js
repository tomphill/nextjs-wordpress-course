import Image from "next/image";

export const Gallery = ({ columns, cropImages, items }) => {
  let maxHeight = 0;
  let maxWidth = 0;

  if (cropImages) {
    items.forEach((item) => {
      if (item.attributes.height > maxHeight) {
        maxHeight = item.attributes.height;
      }
      if (item.attributes.width > maxWidth) {
        maxWidth = item.attributes.width;
      }
    });
  }

  const columnWidth = 100 / columns;
  return (
    <div className="flex flex-wrap max-w-5xl mx-auto">
      {items.map((item) => (
        <div
          key={item.id}
          style={{ width: `${columnWidth}%` }}
          className="p-5 flex-grow"
        >
          <Image
            src={item.attributes.url}
            height={maxHeight || item.attributes.height}
            width={maxWidth || item.attributes.width}
            alt={item.attributes.alt || ""}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
};
