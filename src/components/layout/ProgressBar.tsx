"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ProgressBar = () => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div
      className={`fixed top-0 left-0 h-[10px] bg-[#76e6c1] z-[9999] transition-all duration-300 ${
        isLoading ? "w-full" : "w-0"
      }`}
    />
  );
};

export default ProgressBar;
