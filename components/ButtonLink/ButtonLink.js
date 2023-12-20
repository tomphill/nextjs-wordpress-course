import Link from "next/link";

export const ButtonLink = ({ destination, label, fullWidth }) => {
  return (
    <Link
      href={destination}
      className={`btn${fullWidth ? " w-full text-center" : ""}`}
    >
      {label}
    </Link>
  );
};
