import { useState } from 'react';
import Menu from '../components/layout/menu';
import { Link, NavLink } from 'react-router-dom';

function AddNewFileBox ()
{


    return (


        <main>
            <div className="grid place-items-center">
                <div className="grid grid-cols-2 mt-3 mr-[50px]">
                    <div className="flex justify-end mr-[270px]">
                        <Link to={ "/" } > <button className="flex items-center">
                            <i className="fa-solid fa-angle-left text-[#000000] mt-1 mr-1"></i>
                            <p className="font-normal text-[16px] leading-[24px] text-[#D70018]">Trở về</p>
                        </button>
                        </Link>
                    </div>

                    <h1 className="font-normal text-[18px] leading-[27px] text-[#D70018]">Giỏ hàng</h1>
                </div>

                <div>
                    <div className="flex justify-center items-center">
                        <div className="flex bg-white shadow-md rounded-lg w-[700px] h-[300px] mt-3 border">
                            <div className="flex items-center">
                                <img src=" https://salt.tikicdn.com/ts/product/43/35/ca/4630727d5a4eee189dc3dacae0bf39d7.jpg" className="w-[300px] h-[200px]" alt="product" />
                            </div>

                            <div className="m-1">
                                <div className="text-right">
                                    <button className="text-[#000000] font-bold mr-3">X</button>
                                </div>

                                <h2 className="font-normal text-[15px] leading-[22px] text-[#0E2431]">Samsung Galaxy S22-Đen</h2>

                                <div className="flex mt-1 mb-2">
                                    <p className="font-normal text-[15px] leading-[22px] text-[#D70018]">16.090.000 ₫</p>
                                    <p className="font-normal text-[14px] leading-[21px] text-[#777777] ml-3">21.990.000 ₫</p>
                                    <div className="flex justify-center items-center border bg-[#D70018] rounded-[5px] w-[67px] h-[24px] ml-2">
                                        <p className="font-normal text-[12px] leading-[18px] text-[#FFFFFF]">Giảm 27%</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <span className="text-[#0E2431] font-normal text-[16px] leading-[24px]">Chọn số lượng:</span>
                                    <div className="border ml-1">
                                        <button className="w-[25px] h-[25px]">
                                            <p className="font-normal text-[16px] leading-[24px] text-[#0E2431]">-</p>
                                        </button>

                                        <input type="text" className="outline-0 w-[30px] h-[25px]" />

                                        <button className="w-[25px] h-[25px]">
                                            <p className="font-normal text-[16px] leading-[24px] text-[#0E2431]">+</p>
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-[#F6F6F6] rounded-[10px] mr-1 mt-3 h-[140px]">
                                    <div className="p-2">
                                        <h3 className="font-normal text-[16px] leading-[24px] text-[#383D41]"> - Chương trình khuyến mại:</h3>
                                        <div className="font-normal text-[15px] leading-[22px] text-[#0E2431] p-2">
                                            <p>Dịch vụ phòng chờ hạng thương gia tại sân bay</p>
                                            <p>Ưu đãi Galaxy gift lên đến 1.700.000đ (VieON VIP HBO GO, Zing MP3, Phúc Long, Galaxy Play)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <div className="flex bg-white shadow-md rounded-lg w-[700px] h-[300px] mt-3 border">
                            <div className="flex items-center">
                                <img src="http://localhost:5173/image/Product.png" className="w-[300px] h-[200px]" alt="product" />
                            </div>

                            <div className="m-1">
                                <div className="text-right">
                                    <button className="text-[#000000] font-bold mr-3">X</button>
                                </div>

                                <h2 className="font-normal text-[15px] leading-[22px] text-[#0E2431]">Samsung Galaxy S22-Đen</h2>

                                <div className="flex mt-1 mb-2">
                                    <p className="font-normal text-[15px] leading-[22px] text-[#D70018]">16.090.000 ₫</p>
                                    <p className="font-normal text-[14px] leading-[21px] text-[#777777] ml-3">21.990.000 ₫</p>
                                    <div className="flex justify-center items-center border bg-[#D70018] rounded-[5px] w-[67px] h-[24px] ml-2">
                                        <p className="font-normal text-[12px] leading-[18px] text-[#FFFFFF]">Giảm 27%</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <span className="text-[#0E2431] font-normal text-[16px] leading-[24px]">Chọn số lượng:</span>
                                    <div className="border ml-1">
                                        <button className="w-[25px] h-[25px]">
                                            <p className="font-normal text-[16px] leading-[24px] text-[#0E2431]">-</p>
                                        </button>

                                        <input type="text" className="outline-0 w-[30px] h-[25px]" />

                                        <button className="w-[25px] h-[25px]">
                                            <p className="font-normal text-[16px] leading-[24px] text-[#0E2431]">+</p>
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-[#F6F6F6] rounded-[10px] mr-1 mt-3 h-[140px]">
                                    <div className="p-2">
                                        <h3 className="font-normal text-[16px] leading-[24px] text-[#383D41]"> - Chương trình khuyến mại:</h3>
                                        <div className="font-normal text-[15px] leading-[22px] text-[#0E2431] p-2">
                                            <p>Dịch vụ phòng chờ hạng thương gia tại sân bay</p>
                                            <p>Ưu đãi Galaxy gift lên đến 1.700.000đ (VieON VIP HBO GO, Zing MP3, Phúc Long, Galaxy Play)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="m-10">
                    <div className="flex w-[600px] justify-between font-normal text-[16px] leading-[24px]">
                        <span className="text-[#0E2431]">Tổng tiền tạm tính:</span>
                        <span className="text-[#D70018]">17.820.000 ₫</span>
                    </div>

                    <div className="grid grid-cols-1">
                        <div className="w-[600px] h-[60px] bg-[#D70018] border border-[#DC3545] rounded-[4px] flex justify-center items-center mt-2">
                            <button className="uppercase text-[16px] leading-[24px] text-[#FFFFFF]">Tiến hành đặt hàng</button>
                        </div>

                        <div className="w-[600px] h-[60px] bg-[#FFFFFF] border border-[#DC3545] rounded-[4px] flex justify-center items-center mt-2">
                            <button className="uppercase text-[16px] leading-[24px] text-[#DC3545]">Chọn thêm sản phẩm khác</button>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
}

export default AddNewFileBox;