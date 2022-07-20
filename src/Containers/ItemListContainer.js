import React, { useEffect, useState } from "react";
import ItemCount from "../Components/ItemCount";
import maquinas from "../Data/MockData";
import ItemList from "../Components/ItemList";
import CustomFetch from "../Utils/CustomFetch";
import Loading from "../Components/Loading";
import { useParams } from "react-router";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() =>{
    if (id === undefined){
      CustomFetch(maquinas)
        .then(result => setProductList(result))
        .catch(err => console.log(err))
    } else {
        CustomFetch(maquinas.filter(item => item.categoryId === parseInt(id)))
          .then(result => setProductList(result))
          .catch(err => console.log(err))

    }
  }, [id]);

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
      {/* <ItemCount stock="5" initial="1" /> */}
    </>
  );
};

export default ItemListContainer;