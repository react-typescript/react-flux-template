import { createStore } from "satcheljs";
import { ProgressState } from "../utils/SharedEnums";

export enum LoginStatus {
    Authenticating,
    Authorized,
    UnAuthorized,
    NotAUser
}

export enum Pages {
    SignIn,
    SignUp,
    ForgetPassword
}

interface IIdentityProgressStatus {
    wishListProductsInstance: ProgressState;
    cartProductsInstance: ProgressState;
}

export interface IProduct {
    name: string;
}

interface IIdentityStore {
    name: string;
    email: string;
    phone: number;
    local: string;
    wishListproducts: IProduct[];
    cartProducts: IProduct[];
    country: string;
    state: string;
    pin: number;
    addresses: string[];
    currentAddress: string;
    progressStatus: IIdentityProgressStatus
}

const store: IIdentityStore =
{
    name: 'Abhinandan Jaisawal',
    email: 'abhinandan_jaisawal@outlook.com',
    phone: 7337500000,
    local: 'us-en',
    progressStatus: {
        wishListProductsInstance: ProgressState.NotStarted,
        cartProductsInstance: ProgressState.NotStarted
    },
    wishListproducts: [],
    cartProducts: [],
    country: 'India',
    state: 'Telangana',
    pin: 500032,
    addresses: [],
    currentAddress: 'TNGOs Colony, Gachibowli, Hyderabad',
}

export default createStore<IIdentityStore>("IdentityStore", store);
