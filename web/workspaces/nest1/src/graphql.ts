
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateDonationInput {
    exampleField?: Nullable<number>;
}

export class UpdateDonationInput {
    id: number;
}

export class CreateProductInput {
    count: number;
}

export class UpdateProductInput {
    count: number;
}

export class CreateShopInput {
    id?: Nullable<number>;
}

export class UpdateShopInput {
    id?: Nullable<number>;
}

export class Donation {
    id: number;
    count: number;
    displayName: string;
    email: string;
    mobile?: Nullable<string>;
    team?: Nullable<string>;
    message?: Nullable<string>;
}

export abstract class IQuery {
    abstract donations(): Nullable<Donation>[] | Promise<Nullable<Donation>[]>;

    abstract donation(id: number): Nullable<Donation> | Promise<Nullable<Donation>>;

    abstract products(): Nullable<product>[] | Promise<Nullable<product>[]>;

    abstract product(id: number): Nullable<product> | Promise<Nullable<product>>;

    abstract shops(): Nullable<shop>[] | Promise<Nullable<shop>[]>;

    abstract shop(id: number): Nullable<shop> | Promise<Nullable<shop>>;
}

export abstract class IMutation {
    abstract createDonation(createDonationInput: CreateDonationInput): Donation | Promise<Donation>;

    abstract updateDonation(updateDonationInput: UpdateDonationInput): Donation | Promise<Donation>;

    abstract removeDonation(id: number): Nullable<Donation> | Promise<Nullable<Donation>>;

    abstract createProduct(createProductInput: CreateProductInput): product | Promise<product>;

    abstract updateProduct(updateProductInput: UpdateProductInput): product | Promise<product>;

    abstract removeProduct(id: number): Nullable<product> | Promise<Nullable<product>>;

    abstract createShop(createShopInput: CreateShopInput): shop | Promise<shop>;

    abstract updateShop(updateShopInput: UpdateShopInput): shop | Promise<shop>;

    abstract removeShop(id: number): Nullable<shop> | Promise<Nullable<shop>>;
}

export class Product {
    id?: Nullable<number>;
    count?: Nullable<number>;
    productName?: Nullable<string>;
    price?: Nullable<number>;
    type?: Nullable<string>;
    expirationDate?: Nullable<DateTime>;
    deliveryDate?: Nullable<DateTime>;
    shop?: Nullable<shop>;
    shopId?: Nullable<number>;
}

export class Shop {
    id?: Nullable<number>;
    shopName?: Nullable<string>;
    address?: Nullable<string>;
}

export type DateTime = any;
type Nullable<T> = T | null;
