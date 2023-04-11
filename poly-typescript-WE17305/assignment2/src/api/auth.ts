import { message } from "antd";
import instance from ".";
import { SinginForm, SingupForm } from "../model";
export const signup = () =>
{
    return instance.get('/user')

}
export const singin = async ( data: SinginForm ) =>
{
    try
    {
        const response = await instance.post( "http://localhost:8080/login", data )
        if ( response.status === 200 )
        {
            sessionStorage.setItem( 'token', response.data.accessToken );
            sessionStorage.setItem( 'user', response.data.user.name );
            return true;
        }
    } catch ( error: any )
    {
        if ( error.response && error.response.status === 400 )
        {
            throw new Error( error.response.data.message );
        } else
        {
            console.log( error );
            throw new Error( 'Đã xảy ra lỗi khi đăng nhập!' );
        }
    }
};


