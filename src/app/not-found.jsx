import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-[#0b0e12] text-white flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-[#b6ff00] text-sm font-bold tracking-[0.2em]">
          404 ERROR
        </p>

        <h1 className="font-oswald text-5xl md:text-7xl font-bold uppercase mt-4">
          PAGE NOT FOUND
        </h1>

        <p className="text-[#9ca0a8] mt-4">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="inline-block mt-8 bg-[#b6ff00] text-black px-6 py-3 rounded-md text-sm font-bold hover:bg-[#9fe000] active:scale-95 transition-all"
        >
          BACK TO WORKOUTS
        </Link>
      </div>
    </main>
  );
};

export default NotFound;