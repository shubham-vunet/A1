import "./styles.css";

export default function App() {
  // show a Grid which contains 10elements in each row,
  // and show numbers from 0 to 9, 10 to 11, 20 to 29 in each row
  // Bonus If they are square
  const count = 10;
  return (
    <div className="App">
      <div>
        <div>
          <h1>Numbers</h1>
          <input value={count} />
        </div>
        <img
          alt="Remove Me"
          src="https://marina-ferreira.github.io/img/tutorials/css/flexbox/flex-wrap/wrap.png"
        />
        <div className="numbers">
          <div>0</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </div>
      </div>
    </div>
  );
}
