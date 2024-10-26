// src/pages/RecipeList.js
import React, { useEffect, useState } from 'react';
import RecipeCard from '../../Components/recipeCard/recipeCard';
import RecipeModal from '../../Components/Modal/Modal'; 
import './recipeList.css';

const RecipeList = () => {
  const [meals, setMeals] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  const fetchMeals = async (search) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
  };

  useEffect(() => {
    fetchMeals(''); // Fetch initial meals
  }, []);

  const openModal = (recipe) => {
    setSelectedRecipe({
      name: recipe.strMeal,
      image: recipe.strMealThumb,
      description: recipe.strInstructions,
      ingredients: Array.from({ length: 5 })
        .map((_, i) => recipe[`strIngredient${i + 1}`])
        .filter(Boolean),
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRecipe(null);
  };

  // Function to handle the search button click
  const handleSearch = () => {
    fetchMeals(searchTerm); // Fetch meals based on search term
  };

  return (
    <div className="recipe-list">
      <h1>Meal Recipes</h1>

      {/* Search Input and Button */}
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
          placeholder="Search for a recipe..."
        />
        <button onClick={handleSearch}>Search</button> {/* Button to trigger search */}
      </div>

      <div className="meals-grid">
        {meals.map((meal) => (
          <RecipeCard
            key={meal.idMeal}
            name={meal.strMeal}
            image={meal.strMealThumb}
            onKnowMore={() => openModal(meal)}
          />
        ))}
      </div>

      {/* Modal for showing detailed information */}
      <RecipeModal isOpen={isModalOpen} onClose={closeModal} recipe={selectedRecipe} />
    </div>
  );
};

export default RecipeList;
