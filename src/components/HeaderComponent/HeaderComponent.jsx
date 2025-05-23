import React from "react";
import { Badge, Col } from "antd";
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from "./style";
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined,
  } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';

const HeaderComponent = () => {
    return (
        <div style={{
            width: '100%', background: 'rgb(26, 148, 255)',
            display: 'flex', justifyContent: 'center'
        }}>
            <WrapperHeader>
                <Col span={5}>
                    <WrapperTextHeader>QUANGLAPTRINH</WrapperTextHeader>
                </Col>

                <Col span={13}>
                    <ButtonInputSearch 
                        size = "large"
                        placeholder = "input search text"
                        textButton = "Tìm kiếm"
                        bordered = {false}
                    />
                </Col>

                <Col span={6} style={{display: 'flex', alignItems: 'center', gap: '54px'}}>
                    <WrapperHeaderAccount>
                        <UserOutlined style={{fontSize: '30px'}}/>
                        <div>
                            <WrapperTextHeaderSmall style={{fontSize: '12px'}}>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
                            <div>
                                <WrapperTextHeaderSmall style={{fontSize: '12px'}}>Tài khoản</WrapperTextHeaderSmall>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </WrapperHeaderAccount>
                    <div>
                        <Badge count={4} size="small">
                            <ShoppingCartOutlined style={{fontSize: '30px', color: '#fff'}}/>
                        </Badge>
                        <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    );
}

export default HeaderComponent;