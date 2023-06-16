import React, { useState } from "react";
import "./NewProduct.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const NewProduct = () => {
  // need styling
  // create new ProductObject
  // need to add poat request to send data to backend

  const { register, handleSubmit } = useForm();
  const [created, setCreated] = useState(false);
  const onSubmit = (data) => {
    axios.post("http://localhost:8080/api/v1/products/new", data);
    setCreated(true);
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <>
      {!created && <h1>New Product</h1>}
      {!created && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>
          {/* register your input into the hook by invoking the "register" function */}
          <input {...register("name", { required: true })} />

          <label htmlFor="price">Price</label>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            type="text"
            {...register("price", {
              required: true,
              pattern: /^\d+(\.\d{2})?$/,
            })}
          />

          <label htmlFor="ingredients">Ingredients:</label>
          {/* register your input into the hook by invoking the "register" function */}
          <input {...register("ingredients", { required: true })} />

          <label htmlFor="size">Size: </label>
          {/* register your input into the hook by invoking the "register" function */}
          <select {...register("size")}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>

          <label htmlFor="category">Category: </label>
          {/* register your input into the hook by invoking the "register" function */}
          <select {...register("category")}>
            <option value="Classic">Classic</option>
            <option value="Specialty">Specialty</option>
            <option value="Vegetarian">Vegetarian</option>
          </select>

          <input type="submit" />
        </form>
      )}
      {created && <h2>Product created!!!</h2>}
    </>
  );
};

export default NewProduct;
