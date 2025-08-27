import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EnvelopeBronze from "./pages/EnvelopeBronze/EnvelopeBronze";
import "./scss/App.scss";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/envelope-bronze/:id" element={<EnvelopeBronze />} />
				<Route path="/envelope-silver/:id" element={<EnvelopeBronze />} />
			</Routes>

			<Footer />
		</Router>
	);
}

export default App;
