import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Education from "./components/Education";

function App() {
  return (
    <div className="flex flex-col h-fit w-fit justify-center items-center">
      <Header />
      <Newsletter />
      {/* <Education /> */}
      <Footer />
    </div>
  );
}

export default App;
