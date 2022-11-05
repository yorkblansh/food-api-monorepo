
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateProductInput {
    count: number;
    productName: string;
    price: number;
    type?: Nullable<string>;
    expirationDate?: Nullable<DateTime>;
    deliveryDate?: Nullable<DateTime>;
}

export class UpdateProductInput {
    count: number;
    productName: string;
    price: number;
    type?: Nullable<string>;
    expirationDate?: Nullable<DateTime>;
    deliveryDate?: Nullable<DateTime>;
}

export class CreateShopInput {
    shopName?: Nullable<string>;
    address?: Nullable<string>;
}

export class UpdateShopInput {
    shopName?: Nullable<string>;
    address?: Nullable<string>;
}

export class Product {
    id: number;
    count: number;
    productName: string;
    price: number;
    type?: Nullable<string>;
    expirationDate?: Nullable<DateTime>;
    deliveryDate?: Nullable<DateTime>;
    shop: Shop;
}

export abstract class IQuery {
    abstract products(): Nullable<product>[] | Promise<Nullable<product>[]>;

    abstract product(id: number): Nullable<product> | Promise<Nullable<product>>;

    abstract shops(): Nullable<Shop>[] | Promise<Nullable<Shop>[]>;

    abstract shop(id: number): Nullable<Shop> | Promise<Nullable<Shop>>;
}

export abstract class IMutation {
    abstract createProduct(createProductInput: CreateProductInput): product | Promise<product>;

    abstract updateProduct(updateProductInput: UpdateProductInput): product | Promise<product>;

    abstract removeProduct(id: number): Nullable<product> | Promise<Nullable<product>>;

    abstract createShop(createShopInput: CreateShopInput): Shop | Promise<Shop>;

    abstract updateShop(updateShopInput: UpdateShopInput): Shop | Promise<Shop>;

    abstract removeShop(id: number): Nullable<Shop> | Promise<Nullable<Shop>>;
}

export class Shop {
    id?: Nullable<number>;
    shopName?: Nullable<string>;
    address?: Nullable<string>;
    products?: Nullable<product[]>;
}

export type DateTime = any;
type Nullable<T> = T | null;
