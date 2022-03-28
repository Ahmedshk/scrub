const validationOption = {

    name: {
        required: "Name is required"
    },

    firstname: {
        required: "Firstname is required"
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
        required: "Phone number is required"
    },

    date: {
        required: "Date is required"
    },

    paymentMethod: {
        required: "Payment method is required"
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
    }


}

export default validationOption