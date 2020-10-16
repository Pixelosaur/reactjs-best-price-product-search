import React from 'react';

import './PriceFilter.scss';

interface PriceFilterProps {
    minPrice: number;
    maxPrice: number;
    handleChange: any;
}

function PriceFilter({ minPrice, maxPrice, handleChange }: PriceFilterProps) {
    return (
        <div className="price-filter-wrapper">
            <form>
                <div className="form-row ml-0 justify-content-start align-items-center">
                    <span>Τιμή από</span>
                    <div className="col col-md-3">
                        <input
                            type="number"
                            value={minPrice}
                            min={minPrice}
                            name="minPrice"
                            className="form-control"
                            onChange={handleChange}
                        />
                    </div>
                    <span>μέχρι</span>
                    <div className="col col-md-3">
                        <input
                            type="number"
                            name="maxPrice"
                            value={maxPrice}
                            max={maxPrice}
                            className="form-control"
                            onChange={handleChange}
                        />
                    </div>
                    <span>€</span>
                    <div className="col-1 ml-2">
                        <button type="submit" className="btn btn-sm btn-bp-primary-outline">
                            <i className="fas fa-check" />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default PriceFilter;
