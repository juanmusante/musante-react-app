import React from "react";
import Item from "./Item"

export const ItemList = ({ productList = [] }) => {
  return (
    <>
      {
        productList.map(item => <Item key={item.modelo} product={item} />)
      }
    </>
  );
};

export default ItemList;