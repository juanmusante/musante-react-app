import React, { useState } from 'react'
import maquinas from "../Data/MockData";
import ItemDetail from '../Components/ItemDetail';
import Loading from "../Components/Loading";
import ItemCount from '../Components/ItemCount';

const ItemDetailContainer = () => {
    const [productList, setProductList] = useState({});
    const [loading, setLoading] = useState(true);

    function loadingChange(){
        setLoading(false);
    }
    setTimeout(loadingChange, 2000);

    const productPromise = (task) => {
        return new Promise((resolve) => {
            resolve(task);
        });
    }

    if(loading){
        return(
          <Loading />
        )
      }else{
      productPromise(maquinas[9])
        .then(datos => {setProductList(datos)})
    
    return (
        <>
            <div className="products">
            <ItemDetail product={productList} />
            </div>
            <ItemCount stock="5" initial="1" />
        </>
    );
      }
}

export default ItemDetailContainer;