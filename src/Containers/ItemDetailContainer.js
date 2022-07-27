import React, { useState, useEffect } from 'react'
import maquinas from "../Data/MockData";
import ItemDetail from '../Components/ItemDetail';
import Loading from "../Components/Loading";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({});
    const [loading, setLoading] = useState(true);

    const { idItem } = useParams();

    useEffect(() =>{
      const myPromise = new Promise((resolve, reject) => {
        resolve(maquinas[idItem])
      })

      myPromise.then((res) => {
        setProductDetail(res)
      })
    }, [idItem])

    function loadingChange(){
        setLoading(false);
    }
    setTimeout(loadingChange, 500);

    if(loading){
        return(
          <Loading />
        )
      }
    
    return (
        <>
            <div className="products">
            <ItemDetail product={productDetail} />
            </div>
        </>
    );
      
}

export default ItemDetailContainer;