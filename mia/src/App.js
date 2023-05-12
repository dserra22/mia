import "./App.css";
import { useState } from "react";

function App() {
  const [currentSlide, changeSlide] = useState(0);
  const [si, dijoSi] = useState(false);

  const slideContent = [
    <>
      <p className="title">Mi vida,</p>
    </>,
    <>
      <p className="desc">Algo que me enseñaste es que todo es posible... </p>
    </>,
    <>
      <p className="desc">Del empiezo, sabia que eres especial.</p>
    </>,
    <>
      <p className="desc">Y ahora, es justo que quiero que seas mia.</p>
    </>,
    <>
      <div className="card-front">
        <p className="desc">Quieres ser mi novia? 💘💖💝💗💓</p>
        <button
          className="button si"
          onClick={() => {
            dijoSi(true);
          }}
        >
          Si
        </button>
        <button className="button no">No</button>
      </div>
      <div className="card-back">💘💖💝💗💓💘💖💝💗💓💘💖💝💗💓💘💖💝💗💓</div>
    </>,
  ];
  return (
    <div className={`App ${si ? "flipped" : ""}`}>
      {slideContent.map((slide, num) => {
        return (
          <div
            className="Card"
            data-slide={num}
            style={{
              color: "#333",
              transform: `translateX(${(num - currentSlide) * 100}%)`,
            }}
          >
            {slide}
          </div>
        );
      })}
      {currentSlide === 4 ? (
        <></>
      ) : (
        <button
          className="move"
          onClick={() => {
            changeSlide((prevSlide) => prevSlide + 1);
          }}
        >
          &rarr;
        </button>
      )}
    </div>
  );
}

export default App;
