
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

export class CreateStoreInput {
    exampleField?: Nullable<number>;
}

export class UpdateStoreInput {
    id: number;
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

    abstract stores(): Nullable<Store>[] | Promise<Nullable<Store>[]>;

    abstract store(id: number): Nullable<Store> | Promise<Nullable<Store>>;
}

export abstract class IMutation {
    abstract createDonation(createDonationInput: CreateDonationInput): Donation | Promise<Donation>;

    abstract updateDonation(updateDonationInput: UpdateDonationInput): Donation | Promise<Donation>;

    abstract removeDonation(id: number): Nullable<Donation> | Promise<Nullable<Donation>>;

    abstract createProduct(createProductInput: CreateProductInput): product | Promise<product>;

    abstract updateProduct(updateProductInput: UpdateProductInput): product | Promise<product>;

    abstract removeProduct(id: number): Nullable<product> | Promise<Nullable<product>>;

    abstract createStore(createStoreInput: CreateStoreInput): Store | Promise<Store>;

    abstract updateStore(updateStoreInput: UpdateStoreInput): Store | Promise<Store>;

    abstract removeStore(id: number): Nullable<Store> | Promise<Nullable<Store>>;
}

export class Product {
    id?: Nullable<number>;
    count?: Nullable<number>;
    productName?: Nullable<string>;
    price?: Nullable<number>;
    type?: Nullable<string>;
    expirationDate?: Nullable<DateTime>;
    deliveryDate?: Nullable<DateTime>;
}

export class Store {
    id: number;
    storeName?: Nullable<string>;
    address?: Nullable<string>;
}

export type DateTime = any;
type Nullable<T> = T | null;
