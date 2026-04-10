import * as zod from 'zod'
export const loginScema = zod.object({
    email:zod.email("email isn't in format").nonempty("email is required"),
    password:zod.string().nonempty("password is required").regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/ , "password must contain 1 number (0-9) , 1 uppercase letters , 1 lowercase letters , 1 non-alpha numeric number & password is 8-16 characters with no space")
})