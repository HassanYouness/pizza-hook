import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Button({
  disabled,
  type,
  onClick,

  children,
  to,
}) {
  const className = {
    base: "inline-block rounded-full bg-yellow-400 px-3 py-2 font-semibold tex-sm uppercase tracking-wide text-stone-800 transition-colors duration-300  hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4",
    secondary:
      "inline-block border-2 rounded-full  px-4 py-3 font-semibold text-sm uppercase tracking-wide text-stone-400  transition-colors duration-300  hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4",
    small: `inline-block rounded-full text-xs bg-yellow-400 px-2 py-1 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300  hover:bg-yellow-300 ${disabled ? "bg-yellow-200 text-yellow-500" : ""} focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-3 sm:py-2`,
  };

  if (to) {
    return (
      <Link to={to} className={className[type]}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} disabled={disabled} className={className[type]}>
      {children}
    </button>
  );
}
