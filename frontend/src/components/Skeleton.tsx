export const BlogPageSkeleton = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 max-w-screen-xl w-full pt-12">
          <div className="col-span-8 space-y-4">
            {/* Title Skeleton - full width */}
            <div className="h-12 bg-gray-400 rounded w-full animate-pulse"></div>
            {/* Posted on Skeleton - full width */}
            <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
            {/* Content Skeleton - full width lines */}
            <div className="space-y-2">
              <div className="h-6 bg-gray-400 rounded w-full animate-pulse"></div>
              <div className="h-6 bg-gray-400 rounded w-full animate-pulse"></div>
              <div className="h-6 bg-gray-400 rounded w-full animate-pulse"></div>
            </div>
          </div>
          <div className="col-span-4 shadow-2xl self-start bg-slate-200 p-4 space-y-4 w-full">
            {/* Author Label Skeleton */}
            <div className="h-6 bg-gray-400 rounded w-full animate-pulse"></div>
            <div className="flex items-center space-x-4">
              {/* Avatar Skeleton */}
              <div
                className="rounded-full bg-gray-400 animate-pulse"
                style={{ width: "40px", height: "40px" }}
              ></div>
              <div className="space-y-2 flex-1">
                {/* Author Name Skeleton */}
                <div className="h-5 bg-gray-400 rounded w-full animate-pulse"></div>
                {/* Author catchphrase Skeleton */}
                <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export const FullBlogSkeleton = () => {
  return (
    <div role="status" className="max-w-md w-full animate-pulse">
      <div className="p-4 border-b border-slate-300 pb-4 min-w-md cursor-pointer">
        <div className="flex m-1">
          <div className="flex justify-center flex-col pl-2">
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          </div>
          <div className="text-xs font-thin text-slate-400 pl-2 flex justify-center flex-col">
            &#x2022;
          </div>
          <div className="font-thin pl-2 text-sm flex justify-center flex-col">
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          </div>
          <div className="text-xs font-thin text-slate-400 pl-2 flex justify-center flex-col">
            &#x2022;
          </div>
          <div className="font-extralight text-slate-500 pl-2 text-sm flex justify-center flex-col">
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          </div>
        </div>

        <div className="text-xl font-semibold">
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        </div>

        <div className="text-md font-thin">
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        </div>

        <div className="text-slate-500 text-sm font-extralight pt-2">
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        </div>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};
