import Image from "next/image";

export const Cover = ({ children, background }) => {
  return (
    <div className="h-screen text-white bg-slate-800 relative min-h-[400px] flex justify-center items-center">
      {!!background && (
        <Image
          alt="Cover"
          src={background}
          fill
          priority="low"
          className="mix-blend-soft-light object-cover"
        />
      )}
      <div className="max-w-5xl z-10">{children}</div>
    </div>
  );
};
