import React from "react";
import CocktailList from "../components/CocktailList";
import SearchInputForm from "../components/SearchInputForm";

const Home = () => {
  return (
    <div>
      <SearchInputForm />
      <CocktailList />
    </div>
  );
};

export default Home;