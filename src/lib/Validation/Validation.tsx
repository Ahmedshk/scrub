const validationOption = {
    name: {
        required: "Name is required"
    },

    firstname: {
        required: "Firstname is required",
    },

    lastname: {
        required: "Lastname is required"
    },

    email: {
        required: "Email is required",
        pattern: {
            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            message: 'Invalid Email'
        }
    },

    phone: {
        required: "Phone number is required",
        pattern: {
            value: /^[+]*[(]?[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
            message: "Invalid Phone Number"
        }
    },

    date: {
        required: "Date is required"
    },

    cardNumber: {
        required: "Card number is required"
    },

    cvv: {
        required: "cvv is required"
    },

    expires: {
        required: "expiration date is required"
    },

    applied: {
        required: "Applied field is required"
    },

    textMessage: {
        required: "Message is required"
    },

    address: {
        required: "Address is required"
    },

    city: {
        required: "City is required"
    },

    country: {
        required: "Country is required"
    },
    image: {
        required: "Please select any image"
    },
    couponName:{
        required: "Coupon name is required"
    },
    couponCode:{
        required: "Coupon code is required"
    },
    discountedPrice:{
        required: "discounted price is required"
    },
    shippingCost:{
        required: "Shipping cost is required"
    },
    productName:{
        required: "Product name is required"
    },
    productDescription:{
        required: "Product description is required"
    },
    category:{
        required: "Please any category"
    },
    attribute:{
        required: "Please select any attribute"
    },
    productPrice:{
        required: "product price is required"
    },
    size:{
        required: "size is required"
    },
    productQuantity:{
        required: "product quantity is required"
    },
    metaTitle:{
        required: "Meta Title is required"
    },
    metaDescription:{
        required: "Meta Description is required"
    },
    keywords:{
        required: "Keywords is required"
    },
    tag1:{
        required: "Tag 1 is required"
    },
    tag2:{
        required: "Tag 2 is required"
    },
    image1:{
        required: "Banner image 1 is required"
    },
    image2:{
        required: "Banner image 2 is required"
    },
    image3:{
        required: "Banner image 3 is required"
    },
    image4:{
        required: "Banner image 4 is required"
    },
    contactNo:{
        required: "Enter contact number"
    },
    password: {
        required: {
            value: true,
            message: "Password cannot be empty"
        },
        minLength: {
            value: 8,
            message: "Password length must be greater than 7"
        }
    },
    confirmPassword: {
        required: {
            value: true,
            message: "Password cannot be empty"
        },
        minLength: {
            value: 8,
            message: "Password length must be greater than 7"
        }
    }
}

export default validationOption