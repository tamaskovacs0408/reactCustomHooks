import { useEffect, useRef } from "react";

export default function useEventListener(target, eventName, handler, options) {
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const targetElement = target.current || target;

    if (!targetElement?.addEventListener) return;

    const eventListener = event => savedHandler.current(event);

    targetElement.addEventListener(eventName, eventListener, options);
    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [target, eventName, options]);
}
