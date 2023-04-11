import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

import { NavLink } from "react-router-dom"

export const HeaderClient = () => {
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a rel="noopener noreferrer" href="/">
                    Thông tin cá nhân
                </a>
            ),
            icon: <i className="fa-solid fa-user"></i>,
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="/cart">

                    Đơn hàng
                </a>
            ),
            icon: <i className="fa-solid fa-cart-shopping"></i>,
            disabled: false,
        },
        {
            key: '3',
            label: (
                <a target="_blank" href="/admin">
                    Admin
                </a>
            ),
            icon: <i className="fa-solid fa-user-tie"></i>,
            disabled: sessionStorage.getItem('user') === "Admin" ? false : true,
        },
        {
            key: '4',
            danger: true,
            label: (
                <button onClick={() => {
                    sessionStorage.clear()
                    window.location.reload()
                }}>
                    Logout
                </button>
            ),
            icon: <i className="fa-solid fa-right-from-bracket"></i>,
        },
    ];

    return (
        <header>
            <div className="bg-[#D70018] flex justify-center items-center gap-5 text-white">
                <svg width="200" height="80" xmlns="http://www.w3.org/2000/svg" href="http://www.w3.org/1999/xlink" viewBox="0 0 269.231 50"><defs><pattern id="patternLogo" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 530 95"><image width="500" height="100" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhIAAABfCAYAAAC9ZC4kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REQzNUE1OThENjI3MTFFQUJDOTI5NjNDMjAyQkNFMkQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REQzNUE1OTlENjI3MTFFQUJDOTI5NjNDMjAyQkNFMkQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpERDM1QTU5NkQ2MjcxMUVBQkM5Mjk2M0MyMDJCQ0UyRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpERDM1QTU5N0Q2MjcxMUVBQkM5Mjk2M0MyMDJCQ0UyRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtMJt2kAAAPtSURBVHja7Nzbbts6FEDB0ND//zL7mhg1oqoSuS8zjwdBj8SbV4RYY875BQBwxcsQAABCAgAQEgCAkAAAhAQAgJAAAB5wGIJyznyfdwT4N7vPg/GCOGdid/91HnkiYWPZhHvG17gCJXgiAYDfuv3Sc5knEgCAkAAAhAQAICQAACEBACAkAAAhAQAICQCgBi+kAoCfMr95dvmLtzyRAACEBAAgJAAAIQEACAkAACEBAAgJAEBIAABCAgBo7uk3W+54O9hIeu3Dcty2ZnaN/yx6b7PovM3C69F5l/M+QryB86h8c8muezaPihno/z8Kj+0oNn9P39s0Z/Zb8JDZ/nl7FFqYla57NtpgM/A1jaLjPYrO393zNt2X/SYmfvd6YDH4IDOmVe5vFh73WXh8ZpDxibgenXeEDQkRYXOJnV73JgLNmXmLY+vTHN/awIFB1bmb1iViIkdIeBrhWn1wujdjIZCczU1j4uh2wwGu28F9fQxGwY1v7p7/APVHfM67p/dE6zV2JFuUFaJn+FAz/o0Owifmzrzlm7Pq89Y6JlaGxAg26RGue3w5FLuP/9i4trPO3RPzNjff45Pz5rwTE4/yx5Z54sf4u7+z/+YIMHaj+Nq4e4w7zFkHLX8xfFmgPiyxtjCuxu6262wXE55IAMT5IBQpseb66pOiVjEhJADgXFSICSEBAMuCokVMCAkAuBYUZ6JiVg8MIbGfr38C5I+KKzFR4vw/rAEf8gDOu1uC4rdwGN9+dr79bNo/tPVEAgDuj4px4mfeQyNlzAkJAHg2KD693v1vsZEuKIQEAKyLijMxkSoohAQArA2KM//tPSjCRoWQAICYgfEpKoQEAHApJsIFha9/3jOpAM47Vgvx1VFPJAAgd9BtfUIhJAAgf0x87YoJIQEAdWJCSAAAeWJiVUh4hzsAFIwJTyQEEIDzTkykCIlpc2Fuja25syeo5bVhkUZYqMPman9YmtOc42zunHcEs+uFVDPQpsmyuTq+LMaBZh7pOWdejpXIq/GEW6hYK/XHwtwZh6shJYAXhgQ4gI2J6wQh0XLDOmgAAcgnnkosDAkxQcVD19rIOT7mznknJpKGROYNbHNhPdQYK3NnjMTEYsfDC3Um3VwWjcOVXPvd/DnvVsSEdbYwJLJv7syLZRQaC+sn17XYNzmvxYejmAgdEgBQLSb4xtc/AQAhAQAICQBASAAAQgIAQEgAAEICABASAICQAACa82ZLAPjJa7D/gScSAICQAACEBAAgJAAAIQEAICQAACEBAAgJAKAGL6QCoINpCIQEdXhrHLDyvBERQgIA/PISkb+RAACEBAAgJAAAIQEAdPBHgAEAruC43nH9c2MAAAAASUVORK5CYII="></image></pattern></defs> <rect id="header__logo--bg" width="269.231" height="50" fill="url(#patternLogo)"></rect></svg>

                <div className="bg-white rounded-[10px] flex justify-center items-center text-black">
                    <i className="fa-solid fa-magnifying-glass ml-2 text-[14px]"></i>
                    <input type="text" placeholder="Tìm kiếm" className="outline-0 rounded-[10px] p-2 text-[15px]" />
                </div>

                <div className="flex justify-center items-center w-[150px] gap-2 hover:bg-red-700 hover:rounded-[10px]">
                    <i className="fa-solid fa-phone text-[22px] m-1 ml-2"></i>
                    <span className="break-normal leading-[18px] text-[13px] font-normal m-1">Gọi mua hàng 1800.2097</span>
                </div>

                <div className="flex justify-center items-center w-[120px] gap-2 hover:bg-red-700 hover:rounded-[10px]">
                    <i className="fa-solid fa-location-dot text-[22px] m-1 ml-2"></i>
                    <span className="break-normal leading-[18px] text-[13px] font-normal m-1">Cửa hàng gần bạn</span>
                </div>

                <div className="flex justify-center items-center w-[120px] gap-2 hover:bg-red-700 hover:rounded-[10px]">
                    <i className="fa-solid fa-truck-fast fa-flip-horizontal text-[22px] m-1 ml-2"></i>
                    <span className="break-normal leading-[18px] text-[13px] font-normal m-1">Tra cứu đơn hàng</span>
                </div>

                <a href="/cart">
                    <div className="flex justify-center items-center w-[80px] gap-2 hover:bg-red-700 hover:rounded-[10px]">
                        <i className="fa-solid fa-bag-shopping text-[22px] m-1 ml-2"></i>
                        <span className="break-normal leading-[18px] text-[13px] font-normal m-1">Giỏ hàng</span>
                    </div>
                </a>

                {sessionStorage.getItem("user") ? (
                    <Dropdown menu={{ items }}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space className="flex justify-center items-center hover:bg-red-700 hover:rounded-[10px] p-2">
                                <span><UserOutlined className="text-[18px]" /></span>
                                <span className="font-normal leading-[18px] text-[13px]"> {sessionStorage.getItem("user")}</span>
                            </Space>
                        </a>
                    </Dropdown>
                ) : (
                    <div className="flex justify-center items-center">
                        <NavLink className="hover:bg-red-700 hover:rounded-[10px] p-2" to="/login">
                            <span className="font-normal leading-[18px] text-[13px]">
                                Đăng nhập
                            </span>
                        </NavLink>

                        <NavLink className="hover:bg-red-700 hover:rounded-[10px] p-2" to="/signup">
                            <span className="font-normal leading-[18px] text-[13px]">
                                Đăng kí
                            </span>
                        </NavLink>
                    </div>
                )}
            </div>

           
        </header>
    )
}