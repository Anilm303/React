import * as yup from "yup";

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const registerFormValidation = yup.object({
    first_name  : yup.string().required("first name is required").min(3,"first name must be atleast three character"),
    last_name  : yup.string().required("last name is required").min(3,"first name must be atleast three character"),
    email: yup.string().email("invalid email").required("email is required"),
    password: yup.string().required("password is required").matches(regex,"weak password"),
    confirm_password: yup.string().required("conform password is required")
    .oneOf([yup.ref("password"),null],"password didn't match")

})