import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Category from "./components/Category";
import category from "./data/category/category.js";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      {/* <Routes> */}
      <div className="container-category-me">
        {category.map((cate) => {
          return <Category {...cate} />;
        })}
      </div>
      {/* </Routes> */}
      {/* <Cate */}
      {/* <iframe
        id="ytplayer"
        type="text/html"
        width="480"
        height="270"
        src="https://www.youtube.com/embed/M7lc1UVf-VE"
        frameborder="0"
      ></iframe> */}
    </>
  );
}

export default App;
