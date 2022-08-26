import "./App.css";
import Content from "./components/content/content.component";
import Home from "./components/home/home.component";
import Navigation from "./routes/navigation/navigation.component.jsx";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Content />
    </div>
  );
};

export default App;
