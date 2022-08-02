import React, { useState, useEffect } from 'react'
import ItemDetail from '../Components/ItemDetail';
import Loading from "../Components/Loading";
import { useParams } from "react-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Data/firebaseConfig";
import { firestoreFetchDetail } from '../Data/firestoreFetch';



const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const { idItem } = useParams();

  useEffect(() => {
    firestoreFetchDetail(idItem)
      .then(result => setProductDetail(result))
      .catch(err => console.log(err))
  }, [idItem])

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
      <ItemDetail product={productDetail} />
    </div>
  </>
);

}

export default ItemDetailContainer;