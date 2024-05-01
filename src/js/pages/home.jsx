import React from "react";
import Navbar from "../component/navbar.jsx";
import Jumbotron from "../component/Jumbotron.jsx";
import Card from "../component/card.jsx"
import Footer from "../component/footer.jsx";


const Home = () => {
	return (
		<>
		<Navbar />
		<div className="container">
		<Jumbotron />
		<Card />
		</div>
		<Footer />
		</>
	);
};

export default Home;