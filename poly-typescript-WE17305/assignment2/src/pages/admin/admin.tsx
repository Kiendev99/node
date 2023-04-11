import React, { useEffect, useState } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Avatar, Button, Cascader, Col, Collapse, Layout, Menu, Row, Select, Space, Table, Tag, Typography, theme } from 'antd';
import { ColumnsType } from 'antd/es/table';
import axios from 'axios';
import { Option } from 'antd/es/mentions';
import Title from 'antd/es/skeleton/Title';
import { Link, Outlet } from 'react-router-dom';
import { deleteProduct } from '../../api/product';
interface DataType
{
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}
interface Option
{
    value: string;
    label: string;
    disabled?: boolean;
    children?: Option[];
}

const options: Option[] = [
    {
        value: 'Samsung',
        label: 'Samsung',
        children: [
            {
                value: '',
                label: '',

            },
        ],
    },{
        value: 'Apple',
        label: 'Apple',
        children: [
            {
                value: '',
                label: '',

            },
        ],
    },


];

const onChange = ( value: string[] ) =>
{
    console.log( value );
};
const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',

    },
    {
        title: 'price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'description',
        dataIndex: 'description',
        key: 'description',
    },


    {
        title: 'Action',
        key: 'action',
        render: ( record ) =>
        {
            console.log( record );


            return < Space size="middle" >
                <Button type="primary" danger onClick={ () => deleteProduct( record.key )
                }>delete</Button>

                <Link to={ `/admin/edit/${ record.key }` }> <Button type="primary" danger>sua</Button></Link>

            </Space >

        },
    },

];



const { Header, Content, Footer, Sider } = Layout;

const Admin: React.FC = () =>
{
    <Outlet />
    
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const [ products, setProduct ] = useState( [] )
    useEffect( () =>
    {
        ( async () =>
        {
            const { data } = await axios.get( "http://localhost:8080/product" )
            console.log( data );
            setProduct(
                data.map( ( item: any ) =>
                {
                    return {

                        key: item._id,
                        name: item.name,
                        price: item.price,
                        description: item.description
                    }
                } )
            )

        } )()


    }, [] )
    return ( <div>

        <Layout>

            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={ ( broken ) =>
                {
                    console.log( broken );
                } }
                onCollapse={ ( collapsed, type ) =>
                {
                    console.log( collapsed, type );
                } }
            >
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={ [ '4' ] }
                    items={ [ UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined ].map(
                        ( icon, index ) => ( {
                            key: String( index + 1 ),
                            icon: React.createElement( icon ),
                            label: `nav ${ index + 1 }`,
                        } ),
                    ) }
                />
            </Sider>
            <Layout>

                <Row>
                    <Col md={ 6 }>
                        <div>
                            <Avatar size="default" icon={ <UserOutlined /> } >

                            </Avatar>  xin chao 
                        </div>
                    </Col>
                </Row>
                <Typography.Title editable level={ 4 } style={ { margin: 0 } }>
                 
                </Typography.Title>
                <label htmlFor="">Danh Mục</label>
                <Cascader options={ options } />

                <Content style={ { margin: '24px 16px 0' } }>
                    <div style={ { padding: 24, minHeight: 360, background: colorBgContainer } }>
                        <Table columns={ columns } dataSource={ products } />
                    </div>

                </Content>

                <Footer style={ { textAlign: 'center' } }></Footer>

            </Layout>

        </Layout>


    </div>
    );
};

export default Admin;