import React from "react";
import {
  useDeleteProductsMutation,
  useGetProductsQuery,
} from "./features/QueryProducts";
import "./App.css";
import EditModal from "./components/EditModal";
import {useDispatch, useSelector} from "react-redux";
import { openAddModal, openModal } from "./features/EditModalSlice";
import AddModal from "./components/AddModal";
const App = () => {
  const {isOpen, product, isOpenAdd} = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  const {
    data: products,
    error,
    isError,
    isLoading,
    isFetching,
    isSuccess,
  } = useGetProductsQuery();

  const [deleteProducts] = useDeleteProductsMutation();

  if (isError) return <h1>{error.message}</h1>;

  if (isLoading) return <h2>Loading...</h2>;

  if (isSuccess) {
    return (
      <table className="w-full break-all">
        <thead>
          <tr className="w-full flex justify-end">
            <button onClick={() => {
              dispatch(openAddModal());
            }} className="border mr-[10px] mb-[10px] bg-green-600 p-[10px] text-white">add Product</button>
          </tr>
          <tr>
            <th className="border bg-gray-400">ID</th>
            <th className="border bg-gray-400">image</th>
            <th className="border bg-gray-400">name</th>
            <th className="border bg-gray-400">category</th>
            <th className="border bg-gray-400">price</th>
            <th className="border bg-gray-400">stock</th>
            <th className="border bg-gray-400">description</th>
            <th className="border bg-gray-400">action</th>
          </tr>
        </thead>
        <tbody>
          {products?.map(
            ({id, name, category, image, description, stock, price}) => (
              <tr key={`${name} ${id}`}>
                <td className="border p-[10px] bg-gray-700 text-white border-black">
                  {id}
                </td>
                <td className="border p-[10px] bg-gray-700 text-white border-black">
                  <img src={image} alt={name} />
                </td>
                <td className="border p-[10px] bg-gray-700 text-white border-black">
                  {name}
                </td>
                <td className="border p-[10px] bg-gray-700 text-white border-black">
                  {category}
                </td>
                <td className="border p-[10px] bg-gray-700 text-white border-black">
                  {price}
                </td>
                <td className="border p-[10px] bg-gray-700 text-white border-black">
                  {stock}
                </td>
                <td className="border p-[10px] bg-gray-700 text-white border-black">
                  {description}
                </td>
                <td className="border p-[10px] bg-gray-700 text-white border-black">
                  <button onClick={() => {
                    dispatch(openModal({id, name, category, image, description, stock, price}));
                  }} className="border mr-[10px] mb-[10px]">edit</button>
                  <button
                    onClick={() => {
                      deleteProducts(id);
                    }}
                    className="border"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ),
          )}
        </tbody>
        {isOpenAdd ? <AddModal/> : null}
        {isOpen ? <EditModal /> : null}
      </table>
    );
  }
};

export default App;
