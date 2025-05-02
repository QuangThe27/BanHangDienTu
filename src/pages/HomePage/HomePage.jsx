import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style.js'
import SliderComponet from "../../components/SliderComponent/SliderComponent.jsx";
import slider1 from '../../asset/images/slider1.png'
import slider2 from '../../asset/images/slider2.png'
import slider3 from '../../asset/images/slider3.png'
import CardComponent from "../../components/CardComponent/CardComponent.jsx";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent.jsx";

const HomePage = () => {
    const arr = ['TV', 'TuLanh', 'Laptop', 'DieuHoa']

    return (
        <>
            <div style={{width: '1270px', margin: '0 auto'}}>
                <WrapperTypeProduct>
                    {
                        arr.map((item) => {
                            return (
                                <TypeProduct name={item} key={item}/>
                            );
                        })
                    }
                </WrapperTypeProduct>
            </div>

            <div className="body" style={{width: '100%', backgroundColor: '#efefef'}}>
                <div id="container" style={{width: '1270px', height: '1000px', margin: '0 auto'}}>
                    <SliderComponet arrImages={[slider1, slider2, slider3]}/>

                    <WrapperProducts>
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                    </WrapperProducts>

                    <div style={{ width: '100%',  display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
                        <WrapperButtonMore
                            textButton='Xem thêm' type="outline" styleButton={{
                                border: '1px solid rgb(11, 116, 229)', color: 'rgb(11, 116, 229)',
                                width: '240px', height: '38px', borderRadius: '4px'
                            }}
                            styleTextButton={{ fontWeight: 500 }}
                        />
                    </div>
                </div> 
            </div>
        </>
    );
}

export default HomePage;