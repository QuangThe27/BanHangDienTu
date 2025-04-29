import React from "react";
import {
    SearchOutlined,
  } from '@ant-design/icons';
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ButtonInputSearch = (props) => { //props áp dụng cho sử dụng nhiều nơi
    const { 
        size, placeholder, textButton,  
        bordered, backgroundColorInput = '#fff', backgroundColorButton = 'rgb(13, 92, 192)',
        colorButton = '#fff'
    } = props // các giá trị nhận từ props

    return (
        <div style={{display: 'flex'}}>
            {/* Chuyền các giá trị vào */}
            <InputComponent
                size={size} 
                placeholder={placeholder} 
                style={{backgroundColor: backgroundColorInput, border: bordered, borderRadius: '0'}}
            />

            <ButtonComponent
                size={size} 
                icon={<SearchOutlined />} 
                styleButton={{ backgroundColor: backgroundColorButton, border: bordered, borderRadius: '0', color: colorButton}}
                textButton={textButton}
                styleTextButton={{color: colorButton}}
            />
        </div>
    );
}

export default ButtonInputSearch;