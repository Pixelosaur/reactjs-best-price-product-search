// Core
import React, { useEffect, useState } from 'react';
// Dependencies
import axios, { AxiosResponse } from 'axios';
import { Link } from 'react-router-dom';
// Interfaces & Constants
import { API_URL_CATEGORIES } from '../../Constants';
import { Product } from '../../interfaces/Product.interface';
import { Category } from '../../interfaces/Category.interface';
import { CategorySingle } from '../../interfaces/CategorySingle.interface';
import { ProductQueryParams } from '../../interfaces/ProductQueryParams.interface';
// Components
import Loader from '../Loader/Loader';

function ProductList({ match }: any) {
    const [products, setProducts] = useState<Product[]>([]);
    const [category, setCategory] = useState<Category | null>(null);
    const [page, setPage] = useState<number>(1);
    const [pageLimit, setPageLimit] = useState<number>(10);
    const [sort, setSort] = useState<string>('title');
    const [order, setOrder] = useState<string>('desc');
    const [maxPrice, setMaxPrice] = useState<number>(1000);
    const [minPrice, setMinPrice] = useState<number>(100);
    const [isLoading, setIsloading] = useState<boolean>(false);

    /* Get Category by Id and return a Promise of the category object
     * */
    async function getCategory(categoryId: number): Promise<CategorySingle> {
        const apiUrl: string = `${API_URL_CATEGORIES}/${categoryId}`;

        const response: AxiosResponse<CategorySingle> = await axios.get<CategorySingle>(apiUrl);
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
        return response.data;
    }

    /*  Set the category state and then set the products state and return a Promise
     * of the array of products listed in the specified category
     * */
    async function getProducts(categoryId: number, params: any): Promise<Product[]> {
        const category: CategorySingle = await getCategory(categoryId);
        setCategory(category);

        const products: Product[] = await getCategoryProducts(categoryId, params);
        setProducts(products);

        return products;
    }

    useEffect(() => {
        setIsloading(true);

        const { id } = match.params;
        const params: ProductQueryParams = {
            page,
            limit: pageLimit,
            sort,
            order,
            price_min: minPrice,
            price_max: maxPrice,
        };

        getProducts(id, params).then(() => {
            setIsloading(false);
        });
    }, [setCategory, setProducts, setIsloading, match.params]);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <h3>{category?.title}</h3>
                    <div className="row row-cols-1 row-cols-2">
                        {products.map((product: Product, index: number) => (
                            <div key={index} className="col mb-4">
                                <div className="card h-100">
                                    <div className="row no-gutters">
                                        <div className="col-6">
                                            <img
                                                src={product.image_url}
                                                className="card-img"
                                                alt="Product Category"
                                            />
                                        </div>
                                        <div className="col-6">
                                            <div className="card-body">
                                                <h5 className="card-title">{product.title}</h5>
                                                <Link
                                                    to={`${product.slug_path}/${product.id}/products`}
                                                >
                                                    Το θέλω
                                                    <i className="fas fa-long-arrow-alt-right" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </>
    );
}

export default ProductList;
