import { action } from "satcheljs";
import { IProduct } from "../store/IdentityStore"

export enum IdentityActions {
    initialize = "initalize",
    setEmail = "setEmail",
    setWishListProducts = "setWishListProducts",
    setCartProducts = "setCartProducts"
}

export const initialize = action(IdentityActions.initialize);

export const setEmail = action(IdentityActions.setEmail, (email: string) => ({
    email: email
}));

export const setWishListProducts = action(IdentityActions.setEmail, (products: IProduct[]) => ({
    products: products
}));

export const setCartProducts = action(IdentityActions.setEmail, (products: IProduct[]) => ({
    products: products
}));