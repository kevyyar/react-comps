import ButtonPage from "./pages/ButtonPage";
import Accordion from "./components/Accordion";

const items = [
  {
    id: crypto.randomUUID(),
    heading: "Heading 1",
    content: "random content",
  },
  {
    id: crypto.randomUUID(),
    heading: "Heading 2",
    content: "other random content",
  },
  {
    id: crypto.randomUUID(),
    heading: "Heading 3",
    content: "other random content",
  },
  {
    id: crypto.randomUUID(),
    heading: "Heading 4",
    content: "other random content",
  },
];

function App() {
  return <Accordion items={items} />;
}

export default App;
