import React, { useEffect, useState } from "react";
import maquinas from "../Data/MockData";
import ItemList from "../Components/ItemList";
import Loading from "../Components/Loading";
import { useParams } from "react-router";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategory } = useParams();

  console.log(idCategory);

  useEffect(() => {
    const productPromise = (task) => {
      return new Promise((resolve, reject) => {
        resolve(task);
      });
    }

    if (idCategory === undefined) {
      productPromise(maquinas)
        .then(datos => { setProductList(datos) })
    } else {
      productPromise(maquinas.filter(item => item.categoryId === idCategory))
        .then(datos => { setProductList(datos) })
    }
  }, [idCategory])

  console.log(productList)

  function loadingChange() {
    setLoading(false);
  }
  setTimeout(loadingChange, 1000);

  if (loading) {
    return (
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