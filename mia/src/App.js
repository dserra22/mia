import "./App.css";
import { useEffect, useState } from "react";

let map = [];
for (let i = 0; i < 150; i++) {
  map.push(
    <span
      style={{
        position: "absolute",
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        fontSize: "2.4rem",
        transition: "all .2s",
      }}
    >
      🌹
    </span>
  );
}

function App() {
  const [currentSlide, changeSlide] = useState(0);
  const [si, dijoSi] = useState(false);

  const [timer, setTimer] = useState(0);

  console.log(timer);

  useEffect(() => {
    if (!si) return;

    const action = () => {
      setTimer((prevState) => prevState + 1);
    };

    const timeout = setInterval(action, 100);

    return () => clearInterval(timeout);
  }, [si]);

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
      <p className="desc">Y ahora, es justo que te quiero ser mia.</p>
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
    <div>
      {map.map((span, num) => {
        return (
          <span
            key={num}
            style={{
              opacity: `${timer >= num ? 1 : 0}`,
              transition: "all 1s",
            }}
          >
            {span}
          </span>
        );
      })}
      <div className={`App ${si ? "flipped" : ""}`}>
        {slideContent.map((slide, num) => {
          return (
            <div
              className={`${currentSlide === 4 ? "Card-last" : "Card"}`}
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
    </div>
  );
}

export default App;
