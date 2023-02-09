import React, { useState, useEffect } from "react";
// import {motion} from 'framer-motion'
import { Link, useParams } from "react-router-dom";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const apiKey = process.env.REACT_APP_API_KEY;

  const getCuisine = async (name) => {
    const check = localStorage.getItem("cuisine");

    if (check) {
      setCuisine(JSON.parse(check));
    } else {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch/?apiKey=${apiKey}&number=9&cuisine=${name}`
      );
      const recipes = await data.json();
      setCuisine(recipes.results);
      localStorage.setItem("cuisine", JSON.stringify(recipes.results));
    }
  };

  useEffect(() => {
    getCuisine(params.type); // eslint-disable-next-line
  }, [params.type]);

  return (
    <section className="cuisine-conteiner">
      {cuisine.map((item) => {
        return (
          <Link to={"/recipes/" + item.id} key={item.id}>
            <div className="cuisine-card">
              <img className="cuisine-img" src={item.image} alt={item.title} />
              <h5 className="cuisine-h5">{item.title}</h5>
            </div>
          </Link>
        );
      })}
    </section>
  );
}

export default Cuisine;
