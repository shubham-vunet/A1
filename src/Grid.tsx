import "./styles.css";

export function Grid() {
  // show a Grid which contains 3 elements in each row as shown in image
  // and show numbers from 1 to 3, 4 to 6, 7 to 9 and 10 in each row
  // Bonus If they are square
  const count = 10;
  return (
    <div>
    <div>
        <h1>Numbers</h1>
        <input value={count} />
    </div>
    <img
        style={{ width: "50%" }}
        alt="Remove Me"
        src="https://marina-ferreira.github.io/img/tutorials/css/flexbox/flex-wrap/wrap.png"
    />
    <div className="numbers">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
    </div>
    </div>
  );
}
