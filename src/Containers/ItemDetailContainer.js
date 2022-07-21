import React, { useState, useEffect } from 'react'
import maquinas from "../Data/MockData";
import ItemDetail from '../Components/ItemDetail';
import Loading from "../Components/Loading";
import ItemCount from '../Components/ItemCount';
import { useParams } from "react-router";
// import CustomFetch from "../Utils/CustomFetch";

const ItemDetailContainer = () => {
    const [productList, setProductList] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() =>{
      const myPromise = new Promise((resolve, reject) => {
        resolve(maquinas[id])
      })

      myPromise.then((res) => {
        setProductList(res)
      })
    }, [id])

    function loadingChange(){
        setLoading(false);
    }
    setTimeout(loadingChange, 2000);

    if(loading){
        return(
          <Loading />
        )
      }
    
    return (
        <>
            <div className="products">
            <ItemDetail product={productList} />
            </div>
            <ItemCount stock="5" initial="1" />
        </>
    );
      
}

export default ItemDetailContainer;