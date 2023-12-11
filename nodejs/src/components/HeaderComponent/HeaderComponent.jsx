import React from "react";
import {Badge, Col} from 'antd'
import { WrapperHeader, WrapperTextHeader, WrapperHeaderAccount, WrapperTextHeaderSmall } from "./style";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import {UserOutlined, CaretDownOutlined, ShoppingCartOutlined} from '@ant-design/icons'
import {useNavigate} from 'react-router-dom'

const HeaderComponent = () => {
    const navigate = useNavigate()
    const handleNavigateLogin = () => {
        navigate('/sign-in')
    }
    return (
        <div style={{width: '100%', background: '#84D9BA', display: 'flex', justifyContent: 'center'}}>
            <WrapperHeader>
                <Col span={5}>
                    <WrapperTextHeader>Nhat Vy</WrapperTextHeader>
                </Col>
                <Col span={13}>
                    <ButtonInputSearch 
                        size="large"
                        bordered={false}
                        textButton="Tìm kiếm"
                        placeholder="input search text" 
                        //onSearch={onSearch}
                    />
                </Col>
                <Col span={6} style={{display: 'flex', gap: '54px', alignItems: 'center'}}>
                    <WrapperHeaderAccount>
                        <UserOutlined style={{fontSize: '30px'}}  />
                        <div onClick={handleNavigateLogin} style={{cursor: 'pointer'}}>
                            <WrapperTextHeaderSmall>Đăng nhập/ Đăng ký</WrapperTextHeaderSmall>
                            <div>
                                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </WrapperHeaderAccount>
                    <div>
                        <Badge count={4} size="small">
                            <ShoppingCartOutlined style={{fontSize: '30px', color:'#fff'}} />
                        </Badge>
                        <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    );
}

export default HeaderComponent;
