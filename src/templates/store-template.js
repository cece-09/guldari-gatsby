import React from "react";
export function storeTemplate({ pageContext }) {
  console.log(pageContext);
  const { store } = pageContext;
  return <div>Name: {store.name}</div>;
}
