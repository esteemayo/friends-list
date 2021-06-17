import Person from "./Person";
import people from "../services/data";

const PersonList = () => {
  return (
    <section>
      {people.map((person, index) => {
        return (
          <Person key={index} {...person}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            pariatur facilis, sed voluptatem aliquid numquam.
          </Person>
        );
      })}
    </section>
  );
};

export default PersonList;
