import React from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <>
      <MealsSummary name="Charles" />
      <AvailableMeals />
    </>
  );
};

export default Meals;
