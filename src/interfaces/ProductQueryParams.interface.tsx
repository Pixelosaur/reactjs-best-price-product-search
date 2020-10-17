export interface ProductQueryParams {
    page: number;
    limit: number;
    sort: string;
    order: string;
    min_price: number | null;
    max_price: number | null;
}
