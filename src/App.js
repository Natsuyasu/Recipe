import "./App.css";
import RecipeButton from "./Components/RecipeButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import Instruction from "./Components/Instruction";
import recipe from "./recipe.json";
import QA from "./Components/QA";
import Footer from "./Components/Footer";

function App() {
  // const test_Data = [
  //   {
  //     Name: "AAA",
  //     Text: "111111\n22222222\n3333",
  //     ImgMessage: "https://pic.imgdb.cn/item/64c886801ddac507cc68c15d.jpg"
  //   },
  //   {
  //     Name: "BBBBBBBBBBB",
  //     Text: "111111\n22222222",
  //     ImgMessage: "https://s1.ax1x.com/2023/07/31/pP9uoD0.jpg"
  //   },
  //   {
  //     Name: "C",
  //     Text: "111111\n22222222",
  //     ImgMessage: "https://s1.ax1x.com/2023/07/31/pP9uoD0.jpg"
  //   },
  //   {
  //     Name: "DDDDDDDDDD",
  //     Text: "111111\n22222222",
  //     ImgMessage: "https://s1.ax1x.com/2023/07/31/pP9uoD0.jpg"
  //   },
  //   {
  //     Name: "EEE",
  //     Text: "111111\n22222222",
  //     ImgMessage: "https://s1.ax1x.com/2023/07/31/pP9uoD0.jpg"
  //   },
  //   {
  //     Name: "FF",
  //     Text: "111111\n22222222",
  //     ImgMessage: "https://s1.ax1x.com/2023/07/31/pP9uoD0.jpg"
  //   },
  //   {
  //     Name: "GGGGG",
  //     Text: "111111\n22222222",
  //     ImgMessage: "https://s1.ax1x.com/2023/07/31/pP9uoD0.jpg"
  //   },
  // ];
  const recipes = recipe.recipes;
  const element = <FontAwesomeIcon icon={faCarrot} size="xl" />;
  

  return (
    <div>
      <Instruction />
      <QA />
      <h1 className="text-center p-6 tracking-wide text-gray-800 text-3xl font-bold">
        {element} 兔兔の方便厨房
      </h1>
      <p className="text-center text-gray-700">-助力每一个想吃饭的梦想-</p>
      <div className="flex justify-center pl-44 pr-44 pt-10">
        <div className="">
          {recipes.map((item) => (
            <RecipeButton item={item} />
          ))}
        </div>

      </div>
      <Footer />
    </div>
    
  );
}

export default App;
