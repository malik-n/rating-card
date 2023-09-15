import { useState } from "react";
import "./App.css";
import { Result } from "./components/Result";
import { Ratings } from "./components/Ratings";

function App() {
  const [rating, setRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  // console.log(rating);

  return (
    <div className="container">
      {isSubmitted ? (
        <Result rating={rating} />
      ) : (
        <Ratings setRating={setRating} setIsSubmitted={setIsSubmitted} />
      )}
    </div>
  );
}

export default App;
