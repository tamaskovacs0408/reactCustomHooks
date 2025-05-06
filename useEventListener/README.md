# useEventListener custom hook

A custom React hook for subscribing to and unsubscribing from event listeners on a specified target.

## Purpose

This hook simplifies the process of adding and removing event listeners in React components, handling the lifecycle automatically to prevent memory leaks.

## Usage

```javascript
import useEventListener from "./useEventListener";

function MyComponent() {
  const targetRef = useRef(null);

  useEventListener(targetRef, "click", event => {
    console.log("Clicked!", event);
  });

  return <button ref={targetRef}>Click me</button>;
}
```

## Parameters

- `target`: The target element to attach the event listener to. This can be a ref object (e.g., `useRef(null)`) or the `window` or `document` objects.
- `eventName`: The name of the event to listen for (e.g., 'click', 'mouseover', 'keydown').
- `handler`: The event handler function to be called when the event occurs.
- `options` (optional): An options object that specifies characteristics about the event listener. See the [`addEventListener` options](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#parameters) for more information.

## Example

```javascript
import React, { useRef, useState } from "react";
import useEventListener from "./useEventListener";

function App() {
  const buttonRef = useRef(null);
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(c => c + 1);

  useEventListener(buttonRef, "click", handleClick);

  return <button ref={buttonRef}>Counted: {count}</button>;
}
```
