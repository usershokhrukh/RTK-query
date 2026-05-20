import React, {useState} from "react";
import {Provider, useDispatch, useSelector} from "react-redux";
import {closeModal} from "../features/EditModalSlice";
import {useAddProductsMutation} from "../features/QueryProducts";

const AddModal = () => {
  const [addModal, addActions] = useAddProductsMutation();

  const [product, setProduct] = useState({
    id: null,
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setProduct(() => ({
      ...product,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addModal(product);
  };
  const dispatch = useDispatch();
  return (
    <div className="absolute top-0 left-0 w-full h-full items-center justify-center flex backdrop-blur-[3px] ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[10px] p-[20px] bg-gray-700 text-white border"
      >
        <input
          value={product?.name}
          className="p-[10px] rounded-sm border"
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="name"
        />
        <input
          value={product?.category}
          className="p-[10px] rounded-sm border"
          onChange={handleChange}
          name="category"
          type="text"
          placeholder="category"
        />
        <input
          value={product?.price}
          className="p-[10px] rounded-sm border"
          onChange={handleChange}
          name="price"
          type="number"
          placeholder="price"
        />
        <input
          value={product?.stock}
          className="p-[10px] rounded-sm border"
          onChange={handleChange}
          name="stock"
          type="number"
          placeholder="stock"
        />
        <input
          value={product?.description}
          className="p-[10px] rounded-sm border"
          onChange={handleChange}
          name="description"
          type="text"
          placeholder="description"
        />
        <input
          value={product?.image}
          className="p-[10px] rounded-sm border"
          onChange={handleChange}
          name="image"
          type="url"
          placeholder="image"
        />
        <div className="flex gap-[10px]">
          <button
            type="button"
            onClick={() => {
              dispatch(closeModal());
            }}
            className="p-[4px] bg-amber-700"
          >
            close
          </button>
          <button type="submit" className="p-[4px] bg-green-700">
            add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddModal;
