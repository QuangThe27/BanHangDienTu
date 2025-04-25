import { Input, Button } from "antd";
import React from "react";
import {
    SearchOutlined,
  } from '@ant-design/icons';

const ButtonInputSearch = (props) => { //props áp dụng cho sử dụng nhiều nơi
    const { 
        size, placeholder, textButton,  
        bordered, backgroundColorInput = '#fff', backgroundColorButton = 'rgb(13, 92, 192)',
        colorButton = '#fff'
    } = props // các giá trị nhận từ props

    return (
        <div style={{display: 'flex'}}>
            {/* Chuyền các giá trị vào */}
            <Input 
                size={size} 
                placeholder={placeholder} 
                style={{backgroundColor: backgroundColorInput, border: bordered, borderRadius: '0'}}
            />

            <Button 
                size={size} 
                icon={<SearchOutlined />} 
                style={{ backgroundColor: backgroundColorButton, border: bordered, borderRadius: '0', color: colorButton}}
            ><span>{textButton}</span></Button>
        </div>
    );
}

export default ButtonInputSearch;