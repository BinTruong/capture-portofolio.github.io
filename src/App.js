//? Import Pages
import AboutUs from "./pages/AboutUs";
//? Import Style
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <AboutUs />
    </div>
  );
}

export default App;