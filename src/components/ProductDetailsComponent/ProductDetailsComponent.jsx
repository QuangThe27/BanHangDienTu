import { Col, Image, InputNumber, Row } from "antd";
import React from "react";
import productImage from '../../asset/images/product1.jpg'
import productImageSmall from '../../asset/images/productsmall.jpg'
import { WrapperAddressProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQuanlityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from "./style";
import { MinusOutlined, PlusOutlined, StarFilled } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ProductDetailsComponent = () => {
    const onChange = () => {}

    return (

        <Row style={{ padding: '16px', backgroundColor: '#fff', borderRadius: '4px' }}>
            <Col span={10} style={{ borderRight: '1px solid #e5e5e5', paddingRight: '8px'}}>
                <Image src={productImage} alt="image product" preview={false}/>

                <Row style={{ paddingTop: '10px', justifyContent: 'space-between' }}>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={productImageSmall} alt="image product small" preview={false}/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={productImageSmall} alt="image product small" preview={false}/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={productImageSmall} alt="image product small" preview={false}/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={productImageSmall} alt="image product small" preview={false}/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={productImageSmall} alt="image product small" preview={false}/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={productImageSmall} alt="image product small" preview={false}/>
                    </WrapperStyleColImage>
                </Row>
            </Col>

            <Col span={14} style={{ paddingLeft: '10px' }}>
                <WrapperStyleNameProduct>Iphong 16 promax - chính hãng</WrapperStyleNameProduct>

                <div>
                    <StarFilled style={{fontSize: '12px', color: 'rgb(253, 216, 54)'}}/>
                    <StarFilled style={{fontSize: '12px', color: 'rgb(253, 216, 54)'}}/>
                    <StarFilled style={{fontSize: '12px', color: 'rgb(253, 216, 54)'}}/>
                    <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
                </div>

                <WrapperPriceProduct>
                    <WrapperPriceTextProduct>200.000</WrapperPriceTextProduct>
                </WrapperPriceProduct>

                <WrapperAddressProduct>
                    <span>Giao đến</span>
                    <span className="address">Từ Sơn, Bắc Ninh</span>
                    <span className="change-address">Đổi địa chỉ</span>
                </WrapperAddressProduct>

                <div style={{ margin: '10px 0 20px', padding: '10px 0', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5',  }}>
                    <div style={{ marginBottom: '10px' }}>Số lượng</div>

                    <WrapperQuanlityProduct>
                        <button style={{ border: 'none', background: 'transparent' }}>
                            <MinusOutlined style={{ color: '#000', fontSize: '20px' }}/>
                        </button>

                        <WrapperInputNumber defaultValue={3} onChange={onChange} size="small"/>

                        <button style={{ border: 'none', background: 'transparent' }}>
                            <PlusOutlined style={{ color: '#000', fontSize: '20px' }}/>
                        </button>
                    </WrapperQuanlityProduct>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <ButtonComponent    
                        bordered={false}
                        size={40}
                        styleButton={{
                            width: '200px',
                            height: '48px',
                            border: 'none',
                            borderRadius: '4px',
                            background: 'rgb(255, 57, 69)'
                        }}
                        textButton={'Chọn mua'}
                        styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700'}}
                    ></ButtonComponent>

                    <ButtonComponent    
                        bordered={false}
                        size={40}
                        styleButton={{
                            width: '200px',
                            height: '48px',
                            border: '1px solid rgb(13, 92, 182)',
                            borderRadius: '4px',
                            background: '#fff'
                        }}
                        textButton={'Mua trả sau'}
                        styleTextButton={{ color: 'rgb(13, 92, 182)', fontSize: '15px' }}
                    ></ButtonComponent>
                </div>
            </Col>
        </Row>
    );
}

export default ProductDetailsComponent;