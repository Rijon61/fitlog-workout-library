import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0F1117] text-white">
      <h1 className="text-7xl font-bold text-[#C2F800]">404</h1>

      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>

      <p className="text-gray-400 mt-2">Sorry, the page you are looking for does not exist.</p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 rounded-lg bg-[#C2F800] text-black font-semibold hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;