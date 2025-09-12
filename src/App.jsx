import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./Routes/AppRoutes";


function App() {
  return (
    <>
      <Navbar />
      <AppRoutes></AppRoutes>
      <Footer />
    </>
  );
}

export default App;
