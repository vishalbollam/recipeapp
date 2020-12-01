import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const APP_ID = "b084a839 ";
  const APP_KEY = " 97caa9fe3f94d80774c36819432aad93 ";


  useEffect(() => {
    getRecipes();
  }, []);
  const getRecipes= async()=>{ ;
  const response= await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  console.log(data);
}

  return (
    <div className="App">
      <form className="search-form"> 
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          search
        </button>
      </form>
    </div>
  );
};

export default App;
