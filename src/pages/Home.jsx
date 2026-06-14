import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import Section from "../components/Section";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Home = () => {
    const [email, setEmail] = useState("");
    const API_KEY = "8265bd1679663a7ea12ac168da84d2e8";
    return (
        <div>
            <Navbar email={email} />
            <Hero email={email} setEmail={setEmail} />
            <MovieRow />
            <Section />
            <FAQ email={email} setEmail={setEmail} />
            <Footer />
        </div>
    );
};

export default Home;
