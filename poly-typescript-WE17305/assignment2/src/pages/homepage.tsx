import Banner from "../components/layout/banner"
import { useEffect, useState } from "react"
import { IProduct } from "../model"

import Product from "../components/product"
interface IProps
{
    products: IProduct[]
}
const HomePage = ( prop: IProps ) =>
{
    const [ data, setData ] = useState<IProduct[]>( [] )
    useEffect( () =>
    {
        setData( prop.products )
    }, [ prop ] )
    // console.log( data )
    return <div>
        <div>
            <Banner />
        </div>
        <h1 className="pb-5 relative  ml-10 mr-10 mt-10 mb-5">ĐIỆN THOẠI NỔI BẬT NHẤT</h1>

        { Product( prop ) }
    </div>
}

export default HomePage