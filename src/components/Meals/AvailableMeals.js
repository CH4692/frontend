import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import axios from "axios";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    ingredients: "Finest fish and veggies",
    category: "Classic",
    size: "Small",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    ingredients: "A german specialty!",
    category: "Classic",
    size: "Small",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    ingredients: "American, raw, meaty",
    category: "Classic",
    size: "Small",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    ingredients: "Healthy...and green...",
    category: "Classic",
    size: "Small",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Sushi",
    ingredients: "Finest fish and veggies",
    category: "Classic",
    size: "Small",
    price: 22.99,
  },
  {
    id: "m6",
    name: "Schnitzel",
    ingredients: "A german specialty!",
    category: "Classic",
    size: "Small",
    price: 16.5,
  },
  {
    id: "m7",
    name: "Barbecue Burger",
    ingredients: "American, raw, meaty",
    category: "Classic",
    size: "Small",
    price: 12.99,
  },
  {
    id: "m8",
    name: "Green Bowl",
    ingredients: "Healthy...and green...",
    category: "Classic",
    size: "Small",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const [meals, setMeals] = useState();

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get("http://localhost:8080/api/v1/products/all");
      setMeals(data.data);
    }
    fetchData();
    console.log(meals);
    return () => {
      {
      }
    };
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      category={meal.category}
      size={meal.size}
      ingredients={meal.ingredients}
      price={meal.price}
    />
  ));
  return (
    <>
      <section className={classes.meals}>
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </section>
    </>
  );
};

export default AvailableMeals;
