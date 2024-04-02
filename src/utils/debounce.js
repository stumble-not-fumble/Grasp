import { useEffect } from "react";

/**
 * A custom hook that debounces an effect
 * https://css-tricks.com/the-difference-between-throttling-and-debouncing/
 * @see https://stackoverflow.com/a/61127960
 * @param {import("react").EffectCallback} effect The function to call
 * @param {import("react").DependencyList} deps The dependencies to watch
 * @param {number} delay The delay in milliseconds
 */
export const useDebouncedEffect = (effect, deps, delay) => {
  useEffect(() => {
    const handler = setTimeout(() => effect(), delay);

    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...(deps || []), delay]);
};
