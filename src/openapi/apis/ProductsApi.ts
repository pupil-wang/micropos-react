/* tslint:disable */
/* eslint-disable */
/**
 * Cart
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    Product,
    ProductFromJSON,
    ProductToJSON,
} from '../models';

/**
 * 
 */
export class ProductsApi extends runtime.BaseAPI {

    /**
     * List all products
     */
    async listProductsRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<Product>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/products`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ProductFromJSON));
    }

    /**
     * List all products
     */
    async listProducts(initOverrides?: RequestInit): Promise<Array<Product>> {
        const response = await this.listProductsRaw(initOverrides);
        return await response.value();
    }

}