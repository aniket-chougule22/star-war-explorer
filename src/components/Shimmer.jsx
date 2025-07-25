const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 min-h-[400px]">
      {Array(8)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="w-[280px] h-[230px] bg-gray-300 dark:bg-gray-700 rounded-xl animate-pulse p-4"
          >
            <div className="h-6 bg-gray-400 dark:bg-gray-600 rounded mb-4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-400 dark:bg-gray-600 rounded"></div>
              <div className="h-4 bg-gray-400 dark:bg-gray-600 rounded w-5/6"></div>
              <div className="h-4 bg-gray-400 dark:bg-gray-600 rounded w-2/3"></div>
              <div className="h-4 bg-gray-400 dark:bg-gray-600 rounded w-3/4"></div>
            </div>
            <div className="h-8 bg-gray-400 dark:bg-gray-600 rounded mt-6"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;