"use client";
import { useEffect, useState } from "react";

const ExistingProjects = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prevProgress + 1;
        });
      }, 50);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  return (
    <div>
      <h3 className="text-lg font-semibold text-skin-dark-black pb-2">
        Existing projects
      </h3>
      <div className="space-y-4 h-60 overflow-y-scroll rounded-lg  p-4 bg-white">
      <div className="relative w-72 h-12">
      <div className="absolute left-0 top-0 h-full bg-gray-300 rounded-full w-full"></div>
      <div
        className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
      <div className="absolute right-0 top-0 h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
        {progress === 100 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white"
          >
            <path
              d="M20 12L9 21L4.16184 16.1706L5.57527 14.7572L9 18.1818L18.4248 8.75715L19.8382 10.1706L20 10.3314L20 12ZM20 2H4L4 22L20 22L20 2Z"
              fill="currentColor"
            ></path>
          </svg>
        ) : (
          `${progress}%`
        )}
      </div>
    </div>
      </div>
    </div>
  );
};

export default ExistingProjects;
