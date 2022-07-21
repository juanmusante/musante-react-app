import React from "react";
import maquinas from "../Data/MockData";
import Item from "./Item"

export const ItemList = ({ items }) => {
  return (
    <>
      {
        maquinas.map(item => <Item key={item.modelo} product={item} />)
      }
    </>
  );
};

export default ItemList;