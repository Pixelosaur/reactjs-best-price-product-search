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

    function getCategories() {
        setIsloading(true);

        const apiUrl: string = `${API_URL_CATEGORIES}`;
        axios
            .get<Category[]>(apiUrl)
            .then((response: AxiosResponse<any[]>) => response.data)
            .then((categories: Category[]) => {
                console.log(categories);
                // Sort categories based on their position
                categories.sort((a, b) => {
                    return a.position - b.position;
                });
                setIsloading(false);
                setCategories(categories);
            });
    }

    useEffect(() => {
        getCategories();
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
