import Link from "next/link";

export const ButtonLink = ({ destination, label }) => {
  return (
    <a className="btn" href={destination}>
      {label}
    </a>
  );
};
