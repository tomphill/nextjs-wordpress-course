import Link from "next/link";

export const ButtonLink = ({ destination, label }) => {
  return (
    <Link className="btn" href={destination}>
      {label}
    </Link>
  );
};
