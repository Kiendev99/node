import { Outlet } from "react-router-dom"
import Menu from "./menu"
import DetailProduct from "../../pages/detailproduct"

const Detailayout = () =>
{
    return <div>

        <Menu />
        <Outlet />

    </div>
}
export default Detailayout