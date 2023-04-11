import * as yup from "yup"

export interface IProduct
{
    _id: string,
    name: string,
    price: number,
    original_price: number,
    description: string,
    images: IImage[],
    brand: { id: number, name: string, slug: string }
    specifications: ISpecifications[]
}
export interface ISpecifications
{
    name: string,
    attributes: { code: string, value: string, name: string }[]
}
export const singupSchema = yup.object( {
    name: yup.string().required( "truong du, lieu bat buoc" ),
    email: yup.string().email( "email sai dinh dang" ).required( " email truong du lieu bat buoc" ),
    password: yup.string().min( 6 ).required( "truong du lieu bat buoc" ),
    confirmPassword: yup.string().oneOf( [ yup.ref( 'password' ) ], "mat khau k khop" )
} )
export type SingupForm = yup.InferType<typeof singupSchema>


export const singinSchema = yup.object( {
    email: yup.string().email( "email sai dinh dang" ).required( " email truong du lieu bat buoc" ),
    password: yup.string().min( 6 ).required( "truong du lieu bat buoc" ),
} )
export type SinginForm = yup.InferType<typeof singinSchema>
export const updateSchema = yup.object( {
    name: yup.string().required( "truong du lieu bat buoc" ),
    price: yup.number().required( "truong du lieu bat buoc" ),
    original_price: yup.number().required( "truong du lieu bat buoc" ),
    description: yup.string().min( 10, "toi thieu 10 ki tu" ).required( "truong du lieu bat buoc" ),
} )
export type updateForm = yup.InferType<typeof updateSchema>

interface IImage
{
    base_url: string;
    is_gallery: boolean;
    label: null | string;
    large_url: string;
    medium_url: string;
    position: null | number;
    small_url: string;
    thumbnail_url: string;
}