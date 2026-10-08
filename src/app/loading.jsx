const Loading = () => {
  return (
    <div className="min-h-screen bg-[#0b0e12] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-[#292e35] border-t-[#b6ff00] rounded-full animate-spin"></div>

        <p className="text-[#9ca0a8] text-sm">
          Loading workouts...
        </p>
      </div>
    </div>
  );
};

export default Loading;