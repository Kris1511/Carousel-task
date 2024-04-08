import React, { useState } from "react";
import { shortList, list, longList } from "../Data/data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousel = () => {
  const [people, setPeople] = useState(shortList);

  const pervSlide = () => {};

  const nextSlide = () => {};

  return (
    <section className="slider-container">
      {people.map((person) => {
        const { id, name, image, title, quote } = person;
        console.log(name);
        return (
          <article className="slide" key={id}>
            <img src={image} alt={name} className="person-image" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight />
          </article>
        );
      })}
      <button type="button" className="perv" onClick={pervSlide}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Carousel;
