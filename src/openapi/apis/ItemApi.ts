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
    Item,
    ItemFromJSON,
    ItemToJSON,
    ItemFiled,
    ItemFiledFromJSON,
    ItemFiledToJSON,
} from '../models';

export interface AddItemRequest {
    productId: string;
    itemFiled: ItemFiled;
}

export interface DeleteItemRequest {
    productId: string;
}

export interface UpdateItemRequest {
    productId: string;
    itemFiled: ItemFiled;
}

/**
 * 
 */
export class ItemApi extends runtime.BaseAPI {

    /**
     * add new item
     * add item
     */
    async addItemRaw(requestParameters: AddItemRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Item>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling addItem.');
        }

        if (requestParameters.itemFiled === null || requestParameters.itemFiled === undefined) {
            throw new runtime.RequiredError('itemFiled','Required parameter requestParameters.itemFiled was null or undefined when calling addItem.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/item/{productId}`.replace(`{${"productId"}}`, encodeURIComponent(String(requestParameters.productId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ItemFiledToJSON(requestParameters.itemFiled),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ItemFromJSON(jsonValue));
    }

    /**
     * add new item
     * add item
     */
    async addItem(requestParameters: AddItemRequest, initOverrides?: RequestInit): Promise<Item> {
        const response = await this.addItemRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * delete the item whose id is the product id
     * delete item
     */
    async deleteItemRaw(requestParameters: DeleteItemRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Item>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling deleteItem.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/item/{productId}`.replace(`{${"productId"}}`, encodeURIComponent(String(requestParameters.productId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ItemFromJSON(jsonValue));
    }

    /**
     * delete the item whose id is the product id
     * delete item
     */
    async deleteItem(requestParameters: DeleteItemRequest, initOverrides?: RequestInit): Promise<Item> {
        const response = await this.deleteItemRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * get cart\'s items
     * cart items
     */
    async showCartItemsRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<Item>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/item`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ItemFromJSON));
    }

    /**
     * get cart\'s items
     * cart items
     */
    async showCartItems(initOverrides?: RequestInit): Promise<Array<Item>> {
        const response = await this.showCartItemsRaw(initOverrides);
        return await response.value();
    }

    /**
     * update item quantity
     */
    async updateItemRaw(requestParameters: UpdateItemRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Item>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling updateItem.');
        }

        if (requestParameters.itemFiled === null || requestParameters.itemFiled === undefined) {
            throw new runtime.RequiredError('itemFiled','Required parameter requestParameters.itemFiled was null or undefined when calling updateItem.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/item/{productId}`.replace(`{${"productId"}}`, encodeURIComponent(String(requestParameters.productId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ItemFiledToJSON(requestParameters.itemFiled),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ItemFromJSON(jsonValue));
    }

    /**
     * update item quantity
     */
    async updateItem(requestParameters: UpdateItemRequest, initOverrides?: RequestInit): Promise<Item> {
        const response = await this.updateItemRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
