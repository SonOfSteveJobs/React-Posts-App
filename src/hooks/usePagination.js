import {useMemo} from 'react';

export const usePagination = (totalPages) => {
    return useMemo(() => {
        return Array.from({length: totalPages}, (_, i) => i + 1)
    }, [totalPages]);
}