// Core
import React from 'react';
// Dependencies
import { Link } from 'react-router-dom';
// Components
import { Category } from '../../interfaces/Category.interface';
// Styles
import './CategoryCard.scss';

interface CategoryCardProps<T> {
    categories: T;
}

function CategoryCard({ categories }: CategoryCardProps<Category[]>) {
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 category-card-wrapper">
            {categories?.map((category: Category, index: number) => (
                <div key={index} className="col mb-4">
                    <div className="card h-100">
                        <div
                            className="card-body d-flex flex-column justify-content-center align-items-start"
                            style={{ backgroundImage: `url(${category.image_url})` }}
                        >
                            <h4 className="card-title">{category.title}</h4>
                            <Link to={`${category.slug}/${category.id}/products`}>
                                Δες τα προΪόντα
                                <i className="fas fa-long-arrow-alt-right" />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default CategoryCard;
