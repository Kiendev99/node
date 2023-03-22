
import joi from "joi"

import product from "../model/product"
const productSchema = joi.object( {
    name: joi.string().required(),
    price: joi.number().required()
} )


export const create = async ( req, res ) =>
{
    try
    {
        const { error } = productSchema.validate( req.body )
        if ( error )
        {
            return res.status( 404 ).json( {
                mesage: error.details[ 0 ].message
            } )
        }
        const data = await product.create( req.body )
        return res.status( 201 ).json( {
            mesage: "them moi thanh cong",
            data
        } )
    } catch ( error )
    {
        return res.status( 404 ).json( {
            mesage: error
        } )
    }
}
export const getAll = async ( req, res ) =>
{
    try
    {
        const data = await product.find()
        return res.status( 201 ).json( {
            mesage: "lay du lieu thanh cong",
            data
        } )
    } catch ( error )
    {
        return res.status( 404 ).json( {
            mesage: error
        } )
    }
}
export const get = async ( req, res ) =>
{
    try
    {

        const data = await product.findById( req.params.id )
        return res.status( 201 ).json( {
            mesage: "lay du lieu thanh cong",
            data
        } )
    } catch ( error )
    {
        return res.status( 404 ).json( {
            mesage: error
        } )
    }
}
export const remove = async ( req, res ) =>
{
    try
    {
        const data = await product.findByIdAndDelete( req.params.id )
        return res.status( 201 ).json( {
            mesage: "xoa lay du lieu thanh cong",
            data
        } )
    } catch ( error )
    {
        return res.status( 404 ).json( {
            mesage: error
        } )
    }
}
export const update = async ( req, res ) =>
{
    try
    {
        const { error } = productSchema.validate( req.body )
        if ( error )
        {
            return res.status( 404 ).json( {
                mesage: error.details[ 0 ].message
            } )
        }
        const data = await product.findByIdAndUpdate( req.params.id, req.body )
        return res.status( 201 ).json( {
            mesage: "update du lieu thanh cong",
            data
        } )
    } catch ( error )
    {
        return res.status( 404 ).json( {
            mesage: error
        } )
    }
}