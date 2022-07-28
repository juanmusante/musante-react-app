import React, { useEffect, useState } from "react";
import maquinas from "../Data/MockData";
import ItemList from "../Components/ItemList";
import Loading from "../Components/Loading";
import { useParams } from "react-router";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategory } = useParams();

  useEffect(() => {
    const getProjectList = new Promise((resolve, reject) =>{
      setTimeout(() => {
        resolve(maquinas);
      }, 1);
    });
    if(idCategory) {
      getProjectList.then(res => setProductList(res.filter(item => item.categoryId === parseInt(idCategory))));
      console.log(getProjectList)
    }else{
      getProjectList.then(res => setProductList(res));
    }
  },[idCategory])

  function loadingChange() {
    setLoading(false);
  }
  setTimeout(loadingChange, 500);

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <>
      <div className="products">
        <ItemList productList={productList} />
      </div>
    </>
  );
};

export default ItemListContainer;