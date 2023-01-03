import React, { useState, useEffect } from "react";

export default function App() {

  // 1. Each time we update state variables the app component re-renders
  // 2. You can have as many state variables as you need
  // 3. You must always initialize with a default value ({["type"]})
  // 4. useState is a react hook
  // 'stateful componenets': front-end memory 
  const [movieData, setMovieData] = useState({});
  const [movieTitle, setMovieTitle] = useState("star wars");

  // 1. useEffect is a react hook
  // useEffect is a function
  // 2. make sure you make your asynchronous api function call inside of useEffect to prevent loops
  // 3. Make sure you set state inside of useEffect directly or in a called function
  // anything that needs to happen before the return should go in a useEffect function

  useEffect(() => {
    const movieUrl = `https://www.omdbapi.com/?t=${movieTitle}&apikey=98e3fb1f`;
    const makeApiCall = async () => {
      const res = await fetch(movieUrl);
      const json = await res.json();
      setMovieData(json);
    };
    makeApiCall();
  }, []);
  // ^ empty array is required for useEffect()
  // API calls made outside the useEffect curly braces will result in an infinite loop - DO NOT DO

  return (
    <div>
      {/* // anything above the return that changes the state triggers a re-render of the JSX */}
    </div>
  )

}