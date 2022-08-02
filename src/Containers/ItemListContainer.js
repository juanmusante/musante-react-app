import React, { useEffect, useState } from "react";
import ItemList from "../Components/ItemList";
import Loading from "../Components/Loading";
import { useParams } from "react-router";
import { firestoreFetch } from "../Data/firestoreFetch";
// import { db } from "../Data/firebaseConfig";
// import { collection, getDocs } from "firebase/firestore";


const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategory } = useParams();

  useEffect(() => {
    firestoreFetch(idCategory)
      .then(res => setProductList(res))
      .catch(err => console.log(err))
  }, [idCategory])

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