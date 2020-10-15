// Core
import React, { useEffect, useState } from 'react';
// Dependencies
import { Link } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
// Interfaces & Constants
import { Category } from '../../interfaces/Category.interface';
import { API_URL_CATEGORIES } from '../../Constants';
// Components
import Loader from '../Loader/Loader';
// Styles
import './CategoryList.scss';

function CategoryList() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoading, setIsloading] = useState<boolean>(false);

    async function getCategories(): Promise<Category[]> {
        const apiUrl: string = `${API_URL_CATEGORIES}`;

        const response: AxiosResponse<Category[]> = await axios.get<Category[]>(apiUrl);
        const categories: Category[] = response.data;
        // Sort categories based on their position
        const sortedCategories: Category[] = categories.sort((a: Category, b: Category) => {
            return a.position - b.position;
        });
        setCategories(categories);

        return sortedCategories;
    }

    useEffect(() => {
        setIsloading(true);

        getCategories().then(() => setIsloading(false));
    }, [setCategories, setIsloading]);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="row row-cols-1 row-cols-2">
                    {categories.map((category: Category, index: number) => (
                        <div key={index} className="col mb-4">
                            <div className="card h-100">
                                <div className="row no-gutters">
                                    <div className="col-6">
                                        <img
                                            src={category.image_url}
                                            className="card-img"
                                            alt="Product Category"
                                        />
                                    </div>
                                    <div className="col-6">
                                        <div className="card-body">
                                            <h5 className="card-title">{category.title}</h5>
                                            <Link to={`${category.slug}/${category.id}/products`}>
                                                Δες τα προΪόντα
                                                <i className="fas fa-long-arrow-alt-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default CategoryList;
