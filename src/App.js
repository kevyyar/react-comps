import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "./Button";

function App() {
  const handleClick = () => console.log("clicked!");
  const handleMouseOver = () => console.log("hovering!");
  return (
    <div>
      <div>
        <Button className="mb-5" onClick={handleClick} primary rounded outline>
          <GoBell />
          Click me!
        </Button>
      </div>
      <div>
        <Button onMouseOver={handleMouseOver} secondary>
          See Now
        </Button>
      </div>
      <div>
        <Button success>
          <GoCloudDownload />
          Buy it!
        </Button>
      </div>
      <div>
        <Button danger rounded outline>
          <GoDatabase />
          Buy it!
        </Button>
      </div>
      <div>
        <Button warning>Buy it!</Button>
      </div>
    </div>
  );
}

export default App;
