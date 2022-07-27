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
    const productPromise = (task) => {
      return new Promise((resolve, reject) => {
        resolve(task);
      });
    }

    if (idCategory === undefined) {
      productPromise(maquinas)
        .then(() => {
          const aux = <ItemList products={maquinas} />;
          setProductList(aux);
        })
        .catch((err) => alert (err));
    } else {
      productPromise(maquinas)
        .then(() => {
          const aux = (
            <ItemList
              products={maquinas.filter(
                (item) => item.categoryId === parseInt(idCategory)
              )}
            />
          );
          setProductList(aux);
        })
        .catch((err) => alert(err))
    }
  }, [idCategory]);

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
        <ItemList items={productList} />
      </div>
    </>
  );
};

export default ItemListContainer;