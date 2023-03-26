import {useMemo} from 'react';

export const useSortedPosts = (posts, sort) => {
    return useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }

        return posts;
    }, [sort, posts]);
}