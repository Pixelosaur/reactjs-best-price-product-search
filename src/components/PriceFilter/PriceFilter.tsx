// Core
import React, { SyntheticEvent, useState } from 'react';
// Helpers
import { convertCentsToEuros } from '../../Helpers';
// Styles
import './PriceFilter.scss';

interface PriceFilterProps {
    minPrice: number;
    maxPrice: number;
    onSubmit: any;
}

function PriceFilter({ minPrice, maxPrice, onSubmit }: PriceFilterProps) {
    const [minPriceConverted, setMinPriceConverted] = useState<number>(
        convertCentsToEuros(minPrice),
    );
    const [maxPriceConverted, setMaxPriceConverted] = useState<number>(
        convertCentsToEuros(maxPrice),
    );

    const handleChange = (event: any): void => {
        const { name, value } = event.target;

        if (name === 'minPriceConverted') setMinPriceConverted(value);
        if (name === 'maxPriceConverted') setMaxPriceConverted(value);
    };

    const handleSubmit = (event: SyntheticEvent) => {
        const formValue: { minPrice: number; maxPrice: number } = {
            minPrice: minPriceConverted * 100,
            maxPrice: maxPriceConverted * 100,
        };
        onSubmit(formValue);
        event.preventDefault();
    };

    return (
        <div className="price-filter-wrapper">
            <form onSubmit={handleSubmit}>
                <div className="form-row ml-0 justify-content-start align-items-center">
                    <span>Τιμή από</span>
                    <div className="col col-md-3">
                        <input
                            type="number"
                            value={minPriceConverted}
                            min={minPriceConverted}
                            name="minPriceConverted"
                            className="form-control"
                            onChange={handleChange}
                        />
                    </div>
                    <span>μέχρι</span>
                    <div className="col col-md-3">
                        <input
                            type="number"
                            name="maxPriceConverted"
                            value={maxPriceConverted}
                            max={maxPriceConverted}
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
