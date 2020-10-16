import React from 'react';

function PriceFilter({ minPrice, maxPrice, handleChange }: any) {
    return (
        <form>
            <div className="form-row">
                <div className="col">
                    <input
                        type="number"
                        value={minPrice}
                        name="minPrice"
                        className="form-control"
                        onChange={handleChange}
                    />
                </div>
                <span>μέχρι</span>
                <div className="col">
                    <input
                        type="number"
                        name="maxPrice"
                        value={maxPrice}
                        className="form-control"
                        onChange={handleChange}
                    />
                </div>
            </div>
        </form>
    );
}
export default PriceFilter;
