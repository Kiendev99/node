import instance from ".";
import { IProduct, updateForm } from "../model";

export const getAll = () =>
{
    const url = "product";
    return instance.get( "/product" );
}
export const getById = ( _id: string ) =>
{
    const url = "/product/" + _id;
    return instance.get( url );
}
export const update = ( _id: string, body: updateForm ) =>
{
    const url = "/product/" + _id;
    return instance.put( url, body )
}

export const deleteProduct = async ( _id: string ) =>
{
    const url = "/product/" + _id
    const res = await instance.delete( url )
}

