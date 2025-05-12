import { useCallback, useSyncExternalStore } from 'react';

export default function useMediaQuery(query) {
    const subscribe = useCallback((callback) => {
        const matchMedia = window.matchMedia(query);

        matchMedia.addEventListener('change', callback);
        return () => {
            matchMedia
        }
    }, [query]);

    const getSnapshot = () => {
        return window.matchMedia(query).matches;
    }

    const getServerSnapshot = () => {
        throw new Error('useMediaQuery: getServerSnapshot is not supported');
    }

    return useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot
    );
}