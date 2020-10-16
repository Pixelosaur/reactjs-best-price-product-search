// Core
import React from 'react';
// Dependencies
import { Link } from 'react-router-dom';
// Interfaces
import { Product } from '../../interfaces/Product.interface';
// Helpers
import { convertCentsToEuros } from '../../Helpers';
// Styles
import './ProductCard.scss';

interface ProductCardProps<T> {
    products: T;
}

function ProductCard({ products }: ProductCardProps<Product[]>) {
    const mappedProducts = products?.map((product: Product) => {
        const convertedPrice: number = convertCentsToEuros(product.price);
        return { ...product, ...{ price: convertedPrice } };
    });

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 pt-4 pb-5 product-card-wrapper">
            {mappedProducts.map((product: Product, index: number) => (
                <div key={index} className="col mb-4">
                    <div className="card h-100">
                        <div className="product-img">
                            <img src={product.image_url} alt={product.title} />
                        </div>
                        <div className="card-body">
                            <h6 className="card-title">
                                <Link to="#">{product.title}</Link>
                            </h6>
                            {product.excerpt !== null ? (
                                <p
                                    className="product-description"
                                    dangerouslySetInnerHTML={{ __html: product.excerpt }}
                                />
                            ) : null}
                        </div>

                        <div className="card-footer">
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="product-price">{product.price}</span>
                                <button className="btn btn-sm btn-bp-primary">
                                    Το Θέλω
                                    <i className="fas fa-cart-plus ml-2" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default ProductCard;
