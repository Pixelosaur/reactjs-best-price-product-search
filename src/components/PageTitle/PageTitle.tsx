import React from 'react';

import './PageTitle.scss';

interface PageTitleProps {
    title: string;
    productsCount: number;
}

function PageTitle({ title, productsCount }: PageTitleProps) {
    return (
        <div className="d-flex justify-content-between align-items-center mb-4 page-title-wrapper">
            <div>
                <h3 className="d-inline-block mr-2 title">{title}</h3>
                <span className="text-muted">{productsCount} Προϊόντα</span>
            </div>
            <div>
                <button className="btn btn-bp-secondary btn-sm">
                    <i className="fas fa-long-arrow-alt-left mr-1" />
                    Επιστροφή
                </button>
            </div>
        </div>
    );
}
export default PageTitle;
