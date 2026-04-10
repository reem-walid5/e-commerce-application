import * as zod from 'zod'
export const registerScema = zod.object({
    name: zod.string("name must be a text").nonempty("name is required").min(3 , "name must be a least 3 characters").max(15 , "name must be maxinum 15 characters"),
    email:zod.email("email isn't in format").nonempty("email is required"),
    password:zod.string().nonempty("password is required").regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/ , "password must contain 1 number (0-9) , 1 uppercase letters , 1 lowercase letters , 1 non-alpha numeric number & password is 8-16 characters with no space"),
    rePassword:zod.string().nonempty("password is required").regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/ , "password must contain 1 number (0-9) , 1 uppercase letters , 1 lowercase letters , 1 non-alpha numeric number & password is 8-16 characters with no space"),
    phone:zod.string().nonempty("phone is required").regex(/^01[0125][0-9]{8}$/ , "Phone length is exactly 11"),
}).refine(function (value) {
   return value.password === value.rePassword
}, {error: "Password are inmatch" , path: ['password']})