import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/Singup";
import Login from "./components/Login";
import  "./stylesss.css";
import Display from "./components/Display";
import Publish from "./components/Publish";





function App() {
	const user = localStorage.getItem("token");

	return (
		<>
		<header><div className="headcomp">
			<h1 className="headertag">The StudySpot</h1>
			<p className="tagline"><i><span>"Unlock Your Learning Potential: Explore Articles on Study Spot"</span>
</i></p>
		</div></header>
		

		<Routes>
			{user && <Route path="/display" exact element={<Display />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/Publish" exact element={<Publish />} />
			



			




		</Routes>
		</>
	);
}

export default App;
