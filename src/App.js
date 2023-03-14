import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button success outline rounded>Click me</Button>
      </div>
      <div>
        <Button success>See Now</Button>
      </div>
      <div>
        <Button primary rounded>Buy it!</Button>
      </div>
    </div>
  );
}

export default App;
