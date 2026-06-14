//import React, from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

const Navbar = ({ email = "" }) => {
    const { t, language, setLanguage } = useLanguage();
    const navigate = useNavigate();
    return (
        <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-transparent">
            {/* Logo on the left */}
            <h1 className="text-red-600 font-bold text-5xl  py-2 ms-30">
                NETFLIX
            </h1>
            {/* Dropdown + Sign In on the right */}
            <div className="flex mx-40 gap-3">
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="bg-black text-white border border-white px-4 py-1 rounded text-sm"
                >
                    <option className="bg-white text-black" value="english">
                        English
                    </option>
                    <option className="bg-white text-black" value="hindi">
                        Hindi
                    </option>
                </select>

                <button
                    onClick={() => navigate("/login", { state: { email } })}
                    className="bg-red-600 text-white px-4 py-1.5 rounded font-bold text-sm"
                >
                    {t.signIn}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
