import { useCallback, useSyncExternalStore, useEffect, useRef } from 'react';

/**
 * Custom hook to determine if a given media query matches the current viewport.
 *
 * @param {string} query - The media query string to evaluate.
 * @returns {boolean} - A boolean indicating whether the media query matches.
 */
export default function useMediaQuery(query) {
    const subscribe = useCallback((callback) => {
        const matchMedia = window.matchMedia(query);

        matchMedia.addEventListener('change', callback);
        return () => {
            matchMedia.removeEventListener('change', callback);
        }
    }, [query]);

    const matchMediaRef = useRef(window.matchMedia(query));

    useEffect(() => {
        matchMediaRef.current = window.matchMedia(query);
    }, [query]);

    const getSnapshot = () => {
        return matchMediaRef.current.matches;
    }

    const getServerSnapshot = () => {
        throw new Error('useMediaQuery: getServerSnapshot is not supported. This hook is intended for client-side use only and does not support server-side rendering.');
    }

    return useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot
    );
}