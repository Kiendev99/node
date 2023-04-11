import axios from "axios";
const instance = axios.create( {
    baseURL: 'http://localhost:8080',
    headers: {
        // Dấu chấm than chắc chắn dữ liệu có và không phải null
        Authorization: `Bearer ${ JSON.parse( localStorage.getItem( "accessToken" )! ) }`
    }

} )
export default instance