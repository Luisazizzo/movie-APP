import { useCallback, useEffect, useState } from "react";

const useHandleScroll = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = useCallback(() => {
    const position = window.scrollY;
    setScrollPosition(position);
  }, [setScrollPosition]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return scrollPosition;
};
export default useHandleScroll;
