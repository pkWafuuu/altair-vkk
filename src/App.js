import Achievement from "./components/Achievement";
import Documentation from "./components/Documentation";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Nav />
			<Landing />
			<Services />
			<Documentation />
			<Achievement />
    </div>
  );
}

export default App;
