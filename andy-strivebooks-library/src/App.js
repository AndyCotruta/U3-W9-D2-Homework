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
      <h2 className="mx-4 mt-3">Fantasy Books</h2>
      <div className="px-4 rowCards">
        <BookCards />
      </div>
    </div>
  );
}

export default App;
