// import React, { useState, useEffect } from "react";
// import "./App.css";
// import SearchBar from "./component/SearchBar";
// import RecipeCard from "./component/RecipeCard";
// import NavBar from "./component/Navbar";

// const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";



// function App() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [query, setQuery] = useState("");
//   const [recipes, setRecipes] = useState([]);
  

//   // search for the recipe
//   const searchRecipes = async () => {
//     setIsLoading(true);
//     const url = searchApi + query
//     const res = await fetch(url);
//     const data = await res.json();
//     setRecipes(data.meals);
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     searchRecipes()
//   }, []);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     searchRecipes();
//   }

//   return (
    
//     <div className="container">
//         <div className="box">
//         <h1 className="animated-headline"> NEVER WONDER WHAT TO COOK!</h1>
//       <SearchBar
//         isLoading={isLoading}
//         query={query}
//         setQuery={setQuery}
//         handleSubmit={handleSubmit}
//       />

//         </div>
      
//       <div className="recipes">
        
//         {recipes ? recipes.map(recipe => (
//           <RecipeCard
//              key={recipe.idMeal}
//              recipe={recipe}
//           />
//         )) : "No Results."}
//       </div>
//     </div>
//   );
// }

// export default App;





// import React, { useState, useEffect } from "react";
// import "./App.css";
// import SearchBar from "./component/SearchBar";
// import RecipeCard from "./component/RecipeCard";
// import Navbar from "./component/Navbar";

// const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

// function App() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [query, setQuery] = useState("");
//   const [recipes, setRecipes] = useState([]);

//   // search for the recipe
//   const searchRecipes = async () => {
//     setIsLoading(true);
//     const url = searchApi + query;
//     const res = await fetch(url);
//     const data = await res.json();
//     setRecipes(data.meals);
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     searchRecipes();
//   }, []);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     searchRecipes();
//   };

//   return (
//     <div className="container">
//       <Navbar />
//       <div className="box">
//         <h1 className="animated-headline">NEVER WONDER WHAT TO COOK!</h1>
//         <SearchBar
//           isLoading={isLoading}
//           query={query}
//           setQuery={setQuery}
//           handleSubmit={handleSubmit}
//         />
//       </div>
//       <div className="recipes">
//         {recipes ? recipes.map(recipe => (
//           <RecipeCard
//             key={recipe.idMeal}
//             recipe={recipe}
//           />
//         )) : "No Results."}
//       </div>
//     </div>
//   );
// }

// export default App;














// import React, { useState, useEffect } from "react";
// import "./App.css";

// import SearchBar from "./component/SearchBar";
// import RecipeCard from "./component/RecipeCard";
// import NavBar from "./component/NavBar";
// import Footer from "./component/Footer";



// const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

// function App() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [query, setQuery] = useState("");
//   const [recipes, setRecipes] = useState([]);
  
//   const searchRecipes = async () => {
//     setIsLoading(true);
//     const url = searchApi + query;
//     const res = await fetch(url);
//     const data = await res.json();
//     setRecipes(data.meals);
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     searchRecipes();
//   }, []);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     searchRecipes();
//   };

//   return (
//     <div className="App">
//       <NavBar />
//       <div id="home">
        
//         <h1>NEVER WONDER WHAT TO COOK!</h1>
//         <SearchBar
//           isLoading={isLoading}
//           query={query}
//           setQuery={setQuery}
//           handleSubmit={handleSubmit}
//         />
//         <div className="recipes">
//           {recipes ? recipes.map(recipe => (
//             <RecipeCard
//               key={recipe.idMeal}
//               recipe={recipe}
//             />
//           )) : "No Results."}
//         </div>
//       </div>
//       <div id="about">
//         <h1>About Page</h1>
//         <p>This is the about page of the Recipe Finder app.</p>
//       </div>
//       <div id="contact">
//         <h1>Contact Page</h1>
//         <p>This is the contact page of the Recipe Finder app.</p>
//       </div>
//       <Footer/>
//     </div>
//   );
// }

// export default App;















// import React, { useState, useEffect } from "react";
// import "./App.css";

// import SearchBar from "./component/SearchBar";
// import RecipeCard from "./component/RecipeCard";
// import NavBar from "./component/NavBar";
// import Footer from "./component/Footer";

// const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

// function App() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [query, setQuery] = useState("");
//   const [recipes, setRecipes] = useState([]);

//   const searchRecipes = async () => {
//     setIsLoading(true);
//     const url = searchApi + query;
//     const res = await fetch(url);
//     const data = await res.json();
//     setRecipes(data.meals);
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     searchRecipes();
//   }, []);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     searchRecipes();
//   };

//   return (
//     <div className="App">
//       <NavBar />
//       <div id="home">
//         <h1>NEVER WONDER WHAT TO COOK!</h1>
//         <SearchBar
//           isLoading={isLoading}
//           query={query}
//           setQuery={setQuery}
//           handleSubmit={handleSubmit}
//         />
//         <div className="recipes">
//           {recipes ? recipes.map(recipe => (
//             <RecipeCard
//               key={recipe.idMeal}
//               recipe={recipe}
//             />
//           )) : "No Results."}
//         </div>
//       </div>
//       <div id="about">
//         <h1>About Page</h1>
//         <p>Welcome to Recipe Finder! This app helps you discover new recipes based on your search queries. Whether you're looking for a quick meal or a gourmet dish, Recipe Finder has got you covered. Our database includes a vast variety of recipes from different cuisines to inspire your cooking adventures. Enjoy browsing through our collection and happy cooking!</p>
//       </div>
//       <div id="contact" className="contactd">
//         <h1>Contact Page</h1>
//         <p>If you have any questions, feedback, or need support, feel free to reach out to us:</p>
//         <ul>
//           <li>Email: support@recipefinder.com</li>
//           <li>Phone: +1 234 567 8901</li>
//           <li>Follow us on social media:</li>
//           <div className="socials">
//           <ul >
//               Facebook: <a href="https://www.facebook.com/recipefinder" target="_blank" rel="noopener noreferrer">facebook.com/recipefinder</a>
//             Twitter: <a href="https://www.twitter.com/recipefinder" target="_blank" rel="noopener noreferrer">@recipefinder</a>
//             Instagram: <a href="https://www.instagram.com/recipefinder" target="_blank" rel="noopener noreferrer">@recipefinder</a>
//           </ul>
//           </div>
//         </ul>
//       </div>
//       <Footer/>
//     </div>
//   );
// }

// export default App;

















// import React, { useState, useEffect } from "react";
// import "./App.css";
// import SearchBar from "./component/SearchBar";
// import RecipeCard from "./component/RecipeCard";
// import NavBar from "./component/NavBar";
// import Footer from "./component/Footer";

// const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

// function App() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [query, setQuery] = useState("");
//   const [recipes, setRecipes] = useState([]);
//   const [wishlist, setWishlist] = useState([]);

//   const searchRecipes = async () => {
//     setIsLoading(true);
//     const url = searchApi + query;
//     const res = await fetch(url);
//     const data = await res.json();
//     setRecipes(data.meals);
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     searchRecipes();
//   }, []);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     searchRecipes();
//   };

//   const addToWishlist = (recipe) => {
//     setWishlist([...wishlist, recipe]);
//   };

//   const removeFromWishlist = (idMeal) => {
//     setWishlist(wishlist.filter(recipe => recipe.idMeal !== idMeal));
//   };

//   return (
//     <div className="App">
//       <NavBar />
//       <div id="home">
//         <h1>NEVER WONDER WHAT TO COOK!</h1>
//         <SearchBar
//           isLoading={isLoading}
//           query={query}
//           setQuery={setQuery}
//           handleSubmit={handleSubmit}
//         />
//         <div className="recipes">
//           {recipes ? recipes.map(recipe => (
//             <RecipeCard
//               key={recipe.idMeal}
//               recipe={recipe}
//               addToWishlist={addToWishlist}
//               removeFromWishlist={removeFromWishlist}
//               isInWishlist={wishlist.some(item => item.idMeal === recipe.idMeal)}
//             />
//           )) : "No Results."}
//         </div>
//       </div>
//       <div id="about">
//         <h1>About Page</h1>
//         <p>Welcome to Recipe Finder! This app helps you discover new recipes based on your search queries. Whether you're looking for a quick meal or a gourmet dish, Recipe Finder has got you covered. Our database includes a vast variety of recipes from different cuisines to inspire your cooking adventures. Enjoy browsing through our collection and happy cooking!</p>
//       </div>
//       <div id="contact" className="contactd">
//         <h1>Contact Page</h1>
//         <p>If you have any questions, feedback, or need support, feel free to reach out to us:</p>
//         <ul>
//           <li>Email: support@recipefinder.com</li>
//           <li>Phone: +1 234 567 8901</li>
//           <li>Follow us on social media:</li>
//           <div className="socials">
//           <ul>
//             Facebook: <a href="https://www.facebook.com/recipefinder" target="_blank" rel="noopener noreferrer">facebook.com/recipefinder</a>
//             Twitter: <a href="https://www.twitter.com/recipefinder" target="_blank" rel="noopener noreferrer">@recipefinder</a>
//             Instagram: <a href="https://www.instagram.com/recipefinder" target="_blank" rel="noopener noreferrer">@recipefinder</a>
//           </ul>
//           </div>
//         </ul>
//       </div>
//       <Footer/>
//     </div>
//   );
// }

// export default App;











import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./component/SearchBar";
import RecipeCard from "./component/RecipeCard";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import Wishlist from "./component/Wishlist";


const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');

  const searchRecipes = async () => {
    setIsLoading(true);
    const url = searchApi + query;
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  };

  const addToWishlist = (recipe) => {
    setWishlist([...wishlist, recipe]);
  };

  const removeFromWishlist = (idMeal) => {
    setWishlist(wishlist.filter(recipe => recipe.idMeal !== idMeal));
  };

  return (
    <div className="App">
      <NavBar setCurrentPage={setCurrentPage} />
      {currentPage === 'home' && (
        <div id="home">
          <h1>NEVER WONDER WHAT TO COOK!</h1>
          <SearchBar
            isLoading={isLoading}
            query={query}
            setQuery={setQuery}
            handleSubmit={handleSubmit}
          />
          <div className="recipes">
            {recipes ? recipes.map(recipe => (
              <RecipeCard
                key={recipe.idMeal}
                recipe={recipe}
                addToWishlist={addToWishlist}
                removeFromWishlist={removeFromWishlist}
                isInWishlist={wishlist.some(item => item.idMeal === recipe.idMeal)}
              />
            )) : "No Results."}
          </div>
        </div>
      )}
      {currentPage === 'about' && (
        <div id="about">
          <h1>About Page</h1>
          <p>Welcome to Recipe Finder! This app helps you discover new recipes based on your search queries. Whether you're looking for a quick meal or a gourmet dish, Recipe Finder has got you covered. Our database includes a vast variety of recipes from different cuisines to inspire your cooking adventures. Enjoy browsing through our collection and happy cooking!</p>
        </div>
      )}
      {currentPage === 'contact' && (
        <div id="contact" className="contactd">
          <h1>Contact Page</h1>
          <p>If you have any questions, feedback, or need support, feel free to reach out to us:</p>
          <ul>
            <li>Email: support@recipefinder.com</li>
            <li>Phone: +1 234 567 8901</li>
            <li>Follow us on social media:</li>
            <div className="socials">
            <ul>
              Facebook: <a href="https://www.facebook.com/recipefinder" target="_blank" rel="noopener noreferrer">facebook.com/recipefinder</a>
              Twitter: <a href="https://www.twitter.com/recipefinder" target="_blank" rel="noopener noreferrer">@recipefinder</a>
              Instagram: <a href="https://www.instagram.com/recipefinder" target="_blank" rel="noopener noreferrer">@recipefinder</a>
            </ul>
            </div>
          </ul>
        </div>
      )}
      {currentPage === 'wishlist' && (
        <Wishlist
          wishlist={wishlist}
          removeFromWishlist={removeFromWishlist}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
