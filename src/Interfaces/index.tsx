// Admin Panel Interfaces & Enums

export type AttributesInterface = {
    attributeName: string,
    parentAttribute: {
        label: string,
        value: string
    }
}

export type CategoriesInterface = {
    categoryName: string,
    parentCategory: {
        label: string,
        value: string
    }
}

export type CouponsInterface = {
    couponName: string,
    couponCode: string,
    discountedPrice: number,
    limit:number,
    expiry:Date
}

export type EditMenuInterface = {
    menuName: string,
}

export type EditPagesInterface = {
    pagesCategory: {
        label: string,
        value: string
    }
}

export enum ORDER_KEY {
    totalOrder = "TotalOrders",
    pendingOrders = "PendingOrders",
    inProcessOrders = "InProcessOrders",
    completedOrders = "CompletedOrders",
    cancelledOrders = "CancelledOrders"
}

export type ProductInterface = {
    productName: string,
    productDescription: string;
    category: {
        label: string,
        value: string
    };
    attribute: {
        label: string,
        value: string
    };
    image: File;
    productPrice: string;
    discountedPrice: string;
    size: {
        label: string,
        value: string
    };
    productQuantity: number
}

export type ProfileInterface = {
    name: string,
    email: string,
    contactNo: number,
    address: string,
    image: File,
    role: string
}

export type CreatRoleInterface = {
    roleName: string,
}

export enum SEO_KEY {
    Home = "Home",
    AboutUs = "AboutUs",
    ContactUs = "ContactUs",
}

export type SEOInterface = {
    metaTitle: string,
    metaDescription: string,
    keywords: string,
    tag1: string,
    tag2: string
}

export type ShippingInterface = {
    shippingCost: number,
}

export type SliderInterface = {
    image1: File,
    image2: File,
    image3: File,
    image4: File,
}

export type TexInterface = {
    taxPercent: string,
}


// Auth Interfaces

export type IRegister = {
    name: string,
    email: string,
    contactNo: number,
    address: string,
    password: string,
    confirmPassword: string,
}

export type ILogin = {
    email: string,
    password: string,
    role: string
}
export enum LoginType {
    customer = '/login',
    admin = "/admin/login"
}

export type IForgotPass = {
    email: string,
}

export type IResetPass = {
    password: string,
    confirmPassword: string
}

// Career Page,Contact Page,Cart Details Interfaces

export type JobApplication = {
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    applied: {
        label: string,
        value: string
    },
    date: number,
    image: File
}

export type ContactInterface = {
    name: string,
    email: string,
    textMessage: string
}

export type ShippingDetails = {
    name: string,
    address: string,
    city: string,
    country: string,
    cardNumber: number,
    cvv: number,
    expires: number
}

// Customer Panel Interfaces

export type SupportInterface = {
    subject: string,
    textMessage: string,
}

export type UploadPhotoInterface = {
    image: File,
}





