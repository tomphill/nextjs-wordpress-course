import Image from "next/image";

export const Gallery = ({ columns, cropImages, items }) => {
  let maxHeight = 0;
  let maxWidth = 0;

  if (cropImages) {
    items.forEach((item) => {
      if (item.attributes.originalHeight > maxHeight) {
        maxHeight = item.attributes.originalHeight;
      }
      if (item.attributes.originalWidth > maxWidth) {
        maxWidth = item.attributes.originalWidth;
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
            height={maxHeight || item.attributes.originalHeight}
            width={maxWidth || item.attributes.originalWidth}
            alt={item.attributes.alt}
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
};
