import "./App.css";
import Backdrop from "./components/Backdrop";
import Header from "./components/Header";
import WelcomeSection from "./components/ui/WelcomeSection";

function App() {
  return (
    <div>
      <Header />
      <WelcomeSection />
      <Backdrop />
    </div>
  );
}

export default App;
