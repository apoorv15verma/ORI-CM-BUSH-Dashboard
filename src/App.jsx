import "./App.css";
import InfoBar from "./components/InfoBar/InfoBar";
import "bootstrap/dist/css/bootstrap.min.css";
import LeftCol1 from "./components/LeftCol/LeftCol1";
import RightCol from "./components/RightCol/RightCol";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100"> 
      <InfoBar />

      <div className="flex-grow-1 container-fluid justify-content-center">
        <div className="row py-5 px-0 align-items-start">
          <div className="col-md-3 ms-auto">
            <LeftCol1 />
          </div>
          <div className="col-md-8 me-auto">
            <RightCol />
          </div>
        </div>
      </div>

      <Footer />
    </div>
    </>
  );
}

export default App;
