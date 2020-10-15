import React from 'react';

import './Pagination.scss';

function Pagination({page, onNextPageChange}: any) {

    return (
        <nav>
            <ul className="pagination justify-content-between">
                <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                    <span className="page-link" onClick={onNextPageChange}>
                        <i className="fas fa-long-arrow-alt-left pr-2" />
                        Previous
                    </span>
                </li>
                <li className={`page-item`}>
                    <span className="page-link" onClick={onNextPageChange}>
                        Next
                        <i className="fas fa-long-arrow-alt-right pl-2" />
                    </span>
                </li>
            </ul>
        </nav>
    );
}
export default Pagination;
