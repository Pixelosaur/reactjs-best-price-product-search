// Core
import React, { useEffect, useState } from 'react';
// Dependencies
import axios, { AxiosResponse } from 'axios';
// Interfaces & Constants
import { Category } from '../../interfaces/Category.interface';
import { API_URL_CATEGORIES } from '../../Constants';
// Components
import Loader from '../Loader/Loader';
import CategoryCard from '../CategoryCard/CategoryCard';

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

    return <>{isLoading ? <Loader /> : <CategoryCard categories={categories} />}</>;
}

export default CategoryList;
