import React from "react";
import ProductDetailsComponent from "../../components/ProductDetailsComponent/ProductDetailsComponent";

function ProductDetailsPage() {
    return (
        <div style={{padding: '0 120px', backgroundColor: '#efefef', height: '1000px'}}>
            <h5>Trang chủ</h5>
            <ProductDetailsComponent />
        </div>
    );
}

export default ProductDetailsPage;