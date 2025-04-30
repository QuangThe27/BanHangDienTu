import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperTypeProduct } from './style.js'
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
            <div style={{ padding: '0 120px'}}>
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

            <div id="container" style={{ backgroundColor: '#efefef', padding: '0 120px', height: '1000px'}}>
                <SliderComponet arrImages={[slider1, slider2, slider3]}/>

                <div style={{marginTop: '20px', display: 'flex', alignItems: 'center', gap: '20px'}}>
                    <CardComponent />
                </div>
                <NavbarComponent/>
            </div> 
        </>
    );
}

export default HomePage;