import Image from "next/image";

export const Cover = ({ children, background }) => {
  return (
    <div className="h-screen text-white bg-slate-800 relative min-h-[400px] flex justify-center items-center">
      {(!!background || !!featuredImage) && (
        <Image
          alt="Cover"
          src={background || featuredImage}
          fill
          className="mix-blend-soft-light object-cover"
          priority="low"
        />
      )}
      <div className="max-w-5xl z-10">{children}</div>
    </div>
  );
};
