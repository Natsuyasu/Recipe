import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import Instruction from "./Components/Instruction";
import QA from "./Components/QA";
import Footer from "./Components/Footer";
import RecipeButton from "./Components/RecipeButton";
import RecipeSubmit from "./Components/RecipeSubmit";
import recipe from "./recipe.json";
import { Analytics } from '@vercel/analytics/react';

function App() {

  const recipes = recipe.recipes;
  const element = <FontAwesomeIcon icon={faCarrot} size="xl" />;

  return (
    <div className="flex flex-col h-screen">
      <div>
      <Instruction />
      <QA />
      </div>
      <div>
      <h1 className="text-center p-6 pt-12 tracking-wide text-gray-800 text-3xl font-bold">
        {element} 兔兔の方便厨房
      </h1>
      <p className="text-center text-gray-700">-助力每一个想吃饭的梦想-</p>
      </div>
      <div className="flex justify-center flex-grow pl-10 pr-10 pt-10 md:pl-30 md:pr-30 md:pt-10 lg:pl-40 lg:pr-40 lg:pt-10">
        <div className="">
          {recipes.map((item) => (
            <RecipeButton item={item} key={item.id}/>
          ))}
          <RecipeSubmit />
        </div>
      </div>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
