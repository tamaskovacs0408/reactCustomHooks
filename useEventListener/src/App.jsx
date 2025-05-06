import React, { useRef, useState } from "react";
import useEventListener from "./useEventListener";

export default function App() {
  const buttonRef = useRef(null);
  const [count, setCount] = useState(0);

  // Click event handler
  const handleClick = () => setCount((c) => c + 1);

  // Example of using useEventListener with a ref
  useEventListener(buttonRef, "click", handleClick);

  // Hover (mouseenter) event handler
  const handleHover = () => console.log("Hovered!");

  // Example of using useEventListener with a ref
  useEventListener(buttonRef, "mouseenter", handleHover);

  return (
    <button ref={buttonRef}>
      Clicked: {count}
    </button>
  );
}
