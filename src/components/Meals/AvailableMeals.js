import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import axios from "axios";

/**
 * The Available Meals component contains all meals (products) available from the backend. They are shown as a list.
 * Meals can be added to the shopping cart.
 * @returns all MealItems and its props
 */
const AvailableMeals = () => {
  const [meals, setMeals] = useState();

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get("http://localhost:8080/api/v1/products/all");
      setMeals(data.data);
    }
    fetchData();
    return () => {};
  }, []);

  if (meals === undefined) {
    return (
      <div className={classes.flexcontainer}>
        <Card>
          <h1>Loading...</h1>
        </Card>
      </div>
    );
  }

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
