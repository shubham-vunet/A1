import "./styles.css";
import { Grid } from './Grid';
import { Clock } from './Clock';


// Add routing such that `/grid` shows grid component and `/clock` shows clock
export function App() {
  const count = 10;
  return (
    <div className="App">
      <Grid />
      <Clock />
    </div>
  );
}
