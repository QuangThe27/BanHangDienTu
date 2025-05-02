import React from "react";
import { 
    StyleNameProduct,
    WrapperCardStyle,
    WrapperDiscountText, 
    WrapperPriceText, 
    WrapperReportText, 
    WrapperStyleTextSell
} from "./style";
import { StarFilled } from '@ant-design/icons';
import tiki from '../../asset/images/tiki.jpeg';

const CardComponent = () => {
    return (
        <WrapperCardStyle
            hoverable
            style={{ width: 200 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <img 
                src={tiki} 
                style={{
                    width: '88px', height: '14px', 
                    position: 'absolute', top: '-1px', right: '-1px',
                    borderTopRightRadius: '3px',
                }}
            />

            <StyleNameProduct>
                Iphone
            </StyleNameProduct>

            <WrapperReportText>
                <span style={{ marginRight: '12px' }}>
                    <span>4.96 </span> <StarFilled style={{fontSize: '12px', color: 'rgb(253, 216, 54)'}}/>
                </span>
                <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
            </WrapperReportText>

            <WrapperPriceText>
                <span style={{marginRight: '8px'}}>1.000.000</span>
                <WrapperDiscountText>-5%</WrapperDiscountText>
            </WrapperPriceText>
        </WrapperCardStyle>
    );
}

export default CardComponent;