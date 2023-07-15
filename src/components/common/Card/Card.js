import classes from "./Card.module.css";

/**
 * A simple Card container which centers the content to the center with some gap to the side
 * @param {*} props are the children components which should be centered
 * @returns
 */
const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
