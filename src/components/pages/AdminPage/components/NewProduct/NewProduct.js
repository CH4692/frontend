import React, { useState } from "react";
import "./NewProduct.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const NewProduct = () => {
  // need styling
  // create new ProductObject
  // need to add poat request to send data to backend

  const { register, handleSubmit } = useForm();
  const [created, setCreated] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [list, setList] = useState([
    {
      ingredients: "Mushrooms",
      checked: false,
    },
    {
      ingredients: "Red Onions",
      checked: false,
    },
    {
      ingredients: "Bell Peppers",
      checked: false,
    },
    {
      ingredients: "Onions",
      checked: false,
    },
    {
      ingredients: "Basil",
      checked: false,
    },
    {
      ingredients: "Olive Oil",
      checked: false,
    },
    {
      ingredients: "Pepperoni",
      checked: false,
    },
    {
      ingredients: "Pineapple",
      checked: false,
    },
    {
      ingredients: "Ham",
      checked: false,
    },
    {
      ingredients: "Sausage",
      checked: false,
    },
    {
      ingredients: "Bacon",
      checked: false,
    },
    {
      ingredients: "Mushrooms",
      checked: false,
    },
    {
      ingredients: "Olives",
      checked: false,
    },
    {
      ingredients: "BBQ Sauce",
      checked: false,
    },
    {
      ingredients: "Blue Cheese",
      checked: false,
    },
    {
      ingredients: "Oxtail",
      checked: false,
    },
    {
      ingredients: "Buffalo Sauce",
      checked: false,
    },
    {
      ingredients: "Fresh Mozzarella",
      checked: false,
    },
    {
      ingredients: "BBQ Sauce",
      checked: false,
    },
    {
      ingredients: "Blue Cheese",
      checked: false,
    },
  ]);

  /**
   *
   * @param {*} data
   */
  const onSubmit = async (data) => {
    data.ingredients = ingredients.join(", ");
    await axios.post("http://localhost:8080/api/v1/products/new", data);
    setCreated(true);
    window.location.reload(false);
  };

  const handleChange = (event) => {
    if (event.target.checked) {
      ingredients.push(
        `${event.target.parentNode.parentNode.innerText.trim()}`
      );
    } else {
      const index = ingredients.indexOf(
        event.target.parentNode.parentNode.innerText
      );
      ingredients.splice(index, 1);
    }
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: 20,
            }}
          >
            <FormGroup>
              <FormControlLabel
                control={<Checkbox onChange={handleChange} />}
                label={list[0].ingredients}
              />
              <FormControlLabel
                control={<Checkbox onChange={handleChange} />}
                label={list[1].ingredients}
              />
              <FormControlLabel
                control={<Checkbox onChange={handleChange} />}
                label={list[2].ingredients}
              />
              <FormControlLabel
                control={<Checkbox onChange={handleChange} />}
                label={list[3].ingredients}
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox onChange={handleChange} />}
                label={list[4].ingredients}
              />
              <FormControlLabel
                control={<Checkbox onChange={handleChange} />}
                label={list[5].ingredients}
              />
              <FormControlLabel
                control={<Checkbox onChange={handleChange} />}
                label={list[6].ingredients}
              />
              <FormControlLabel
                control={<Checkbox onChange={handleChange} />}
                label={list[7].ingredients}
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox onChange={handleChange} />}
                label={list[8].ingredients}
              />
              <FormControlLabel
                control={<Checkbox onChange={handleChange} />}
                label={list[9].ingredients}
              />
              <FormControlLabel
                control={<Checkbox onChange={handleChange} />}
                label={list[10].ingredients}
              />
              <FormControlLabel
                control={<Checkbox onChange={handleChange} />}
                label={list[11].ingredients}
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox onChange={handleChange} />}
                label={list[12].ingredients}
              />
              <FormControlLabel
                control={<Checkbox onChange={handleChange} />}
                label={list[13].ingredients}
              />
              <FormControlLabel
                control={<Checkbox onChange={handleChange} />}
                label={list[14].ingredients}
              />
              <FormControlLabel
                control={<Checkbox onChange={handleChange} />}
                label={list[15].ingredients}
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox onChange={handleChange} />}
                label={list[16].ingredients}
              />
              <FormControlLabel
                control={<Checkbox onChange={handleChange} />}
                label={list[17].ingredients}
              />
              <FormControlLabel
                control={<Checkbox onChange={handleChange} />}
                label={list[18].ingredients}
              />
              <FormControlLabel
                control={<Checkbox onChange={handleChange} />}
                label={list[19].ingredients}
              />
            </FormGroup>
          </div>

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
