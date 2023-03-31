import React from 'react';

const Pagination = ({pagesArray, page, changePage}) => {
    return (
        <div className="page__wrapper">
            {pagesArray.map((p) => <span
                onClick={() => changePage(p)}
                key={p}
                className={page === p ? 'active__page' : 'page'}>
                    {p}
                </span>)}
        </div>
    );
};

export default Pagination;