import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/Navbar";
import JumbotronComponent from "./components/Jumbotron";
import BookCards from "./components/CardsSection";

function App() {
  return (
    <div className="body">
      <CustomNavbar />
      <JumbotronComponent />

      <BookCards />
    </div>
  );
}

export default App;
