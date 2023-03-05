import React from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = ({ user }) => {
  return (
    <>
      <MealsSummary name={user} />
      <AvailableMeals />
    </>
  );
};

export default Meals;
