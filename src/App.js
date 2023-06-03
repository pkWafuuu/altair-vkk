import Achievement from "./components/Achievement";
import Companies from "./components/Companies";
import Documentation from "./components/Documentation";
import Faqs from "./components/Faqs";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Quotes from "./components/Quotes";
import Services from "./components/Services";
import WorkSpace from "./components/WorkSpace";

function App() {
  return (
    <div className="App">
      <Nav />
			<Landing />
			<Services />
			<Documentation />
			<Achievement />
			<WorkSpace />
			<Companies />
			<Quotes />
			<Faqs/>
    </div>
  );
}

export default App;
