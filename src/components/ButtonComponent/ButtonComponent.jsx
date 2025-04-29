import React from "react";
import { Button } from 'antd';

const ButtonComponent = ({size, styleButton, textButton, styleTextButton, ...rests}) => {
    return (
        <Button 
            size={size} 
            // icon={<SearchOutlined />} 
            style={styleButton}
            {...rests}
        >
            <span style={styleTextButton}>{textButton}</span>
        </Button>
    );
}

export default ButtonComponent;