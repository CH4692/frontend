import classes from "./MealsSummary.module.css";

const MealsSummary = ({ name }) => {
  return (
    <section className={classes.summary}>
      <h2>Leckeres Essen, zu dir nach Hause</h2>
      <p>
        Wählen Sie Ihre Lieblingsmahlzeit aus unserem breiten Angebot aus und
        genießen Sie ein köstliches Mittag- oder Abendessen zu Hause.
      </p>
      <p>
        Alle unsere Gerichte werden mit hochwertigen Zutaten gekocht, genau zur
        rechten Zeit und natürlich von erfahrenen Köchen!
      </p>
    </section>
  );
};

export default MealsSummary;
