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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Product
 */
export interface Product {
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof Product
     */
    price: number;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    image: string;
}

export function ProductFromJSON(json: any): Product {
    return ProductFromJSONTyped(json, false);
}

export function ProductFromJSONTyped(json: any, ignoreDiscriminator: boolean): Product {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'price': json['price'],
        'image': json['image'],
    };
}

export function ProductToJSON(value?: Product | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'price': value.price,
        'image': value.image,
    };
}
