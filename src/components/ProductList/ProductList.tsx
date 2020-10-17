// Core
import React, { useEffect, useState } from 'react';
// Dependencies
import axios, { AxiosResponse } from 'axios';
import { RouteComponentProps } from 'react-router-dom';
// Interfaces & Constants
import { API_URL_CATEGORIES } from '../../Constants';
import { Product } from '../../interfaces/Product.interface';
import { CategorySingle } from '../../interfaces/CategorySingle.interface';
import { ProductQueryParams } from '../../interfaces/ProductQueryParams.interface';
// Components
import Loader from '../Loader/Loader';
import ProductCard from '../ProductCard/ProductCard';
import Pagination from '../Pagination/Pagination';
import PriceFilter from '../PriceFilter/PriceFilter';
import SortActions from '../SortActions/SortActions';
import PageTitle from '../PageTitle/PageTitle';
// Styles
import './ProductList.scss';

function ProductList({ match }: RouteComponentProps<any>) {
    const [products, setProducts] = useState<Product[]>([]);
    const [category, setCategory] = useState<CategorySingle | null>(null);
    const [page, setPage] = useState<number>(1);
    const [pageLimit, setPageLimit] = useState<number>(15);
    const [sort, setSort] = useState<string>('price');
    const [order, setOrder] = useState<string>('desc');
    const [maxPrice, setMaxPrice] = useState<number>(10000);
    const [minPrice, setMinPrice] = useState<number>(100);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [sortButtonTitle, setSortButtonTitle] = useState<string>('Ακριβότερο');

    /* Get Category by Id and return a Promise of the category object
     * */
    async function getCategory(categoryId: number): Promise<CategorySingle> {
        const apiUrl: string = `${API_URL_CATEGORIES}/${categoryId}`;

        const response: AxiosResponse<CategorySingle> = await axios.get<CategorySingle>(apiUrl);
        setCategory(response.data);

        return response.data;
    }

    /* Get the products listed in the category with the specified Id and
     * return a Promise of the Product array
     * */
    async function getCategoryProducts(
        categoryId: number,
        params: ProductQueryParams,
    ): Promise<Product[]> {
        const apiUrl: string = `${API_URL_CATEGORIES}/${categoryId}/products`;

        const response: AxiosResponse<Product[]> = await axios.get<Product[]>(apiUrl, { params });
        setProducts(response.data);

        return response.data;
    }

    /*  Set the category state and then set the products state and return a Promise
     * of the array of products listed in the specified category
     * */
    async function getProducts(categoryId: number, params: ProductQueryParams): Promise<Product[]> {
        const category: CategorySingle = await getCategory(categoryId);
        setCategory(category);

        setMinPrice(category.price_min);
        setMaxPrice(category.price_max);

        return getCategoryProducts(categoryId, params);
    }

    const onPageChange = (pageNumber: number): void => {
        setPage(pageNumber);
    };

    const onOrderChange = (orderValue: string): void => {
        setOrder(orderValue);

        const sortTitle = orderValue === 'asc' ? 'Φθηνότερο' : 'Ακριβότερο';
        setSortButtonTitle(sortTitle);
    };

    const onSubmit = (value: { minPrice: number; maxPrice: number }): void => {
        setMinPrice(value.minPrice);
        setMaxPrice(value.maxPrice);
    };

    useEffect(() => {
        setIsLoading(true);

        const { id } = match.params;
        const params: ProductQueryParams = {
            page,
            limit: pageLimit,
            sort,
            order,
            min_price: minPrice,
            max_price: maxPrice,
        };

        getProducts(id, params).then(() => {
            setIsLoading(false);
        });
    }, []);

    useEffect(() => {
        setIsLoading(true);

        const { id } = match.params;
        const params: ProductQueryParams = {
            page,
            limit: pageLimit,
            sort,
            order,
            min_price: minPrice,
            max_price: maxPrice,
        };

        getCategoryProducts(id, params).then(() => {
            setIsLoading(false);
        });
    }, [match.params, page, order, sort, pageLimit, minPrice, maxPrice]);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    {category ? (
                        <PageTitle title={category.title} productsCount={category.products_count} />
                    ) : null}

                    <div className="d-flex flex-wrap justify-content-between align-items-center filter-sort-actions-wrapper">
                        <PriceFilter maxPrice={maxPrice} minPrice={minPrice} onSubmit={onSubmit} />
                        <SortActions
                            sortButtonTitle={sortButtonTitle}
                            onOrderChange={onOrderChange}
                        />
                    </div>

                    <ProductCard products={products} />
                    <Pagination onPageChange={onPageChange} currentPage={page} />
                </>
            )}
        </>
    );
}
export default ProductList;
