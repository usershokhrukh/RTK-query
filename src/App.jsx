import React, {useEffect} from "react";
import {
  useAddProductsMutation,
  useGetProductsQuery,
} from "./features/QueryProducts";

const App = () => {
  const {data, error, isLoading, refetch} = useGetProductsQuery();

  const [addProduct, {data: addData, error: addError, isLoading: addLoading}] =
    useAddProductsMutation();

  useEffect(() => {
    addProduct({
      id: "1",
      name: "Samsung TV 40 inch",
      category: "Electronics",
      price: 299.99,
      stock: 15,
      description: "High-definition smart TV with built-in streaming apps.",
      image: "https://example.com",
    });
  }, []);

  console.log(addData);
  console.log(data);
  
  
  return <div>App</div>;
};

export default App;
