import React, { useEffect, useState } from "react";
import maquinas from "../Data/MockData";
import ItemList from "../Components/ItemList";
import Loading from "../Components/Loading";
import { useParams } from "react-router";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() =>{
    const myPromise = new Promise((resolve, reject) => {
      resolve(maquinas[categoryId])
    })

    myPromise.then((res) => {
      setProductList(res)
    })
  }, [categoryId])

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
        <ItemList items={productList} />
      </div>
    </>
  );
};

export default ItemListContainer;