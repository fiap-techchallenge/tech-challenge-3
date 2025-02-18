import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default (value: string, defaultValue: string | undefined) => {
  const arrowRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const [hasValue, setHasValue] = useState(
    typeof value === "string" && value.trim() !== ""
  );

  useEffect(() => {
    if (defaultValue) {
      setHasValue(true);
    }
  }, [defaultValue]);

  useEffect(() => {
    if (isFocused) {
      gsap.to(arrowRef.current, { rotate: 180, duration: 0.25 });
    } else {
      gsap.to(arrowRef.current, { rotate: 0, duration: 0.25 });
    }
  }, [isFocused]);

  return { arrowRef, hasValue, setHasValue, setIsFocused };
};
