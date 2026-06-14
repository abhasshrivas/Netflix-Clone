import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

function Hero({ email, setEmail }) {
    const navigate = useNavigate();
    const { t } = useLanguage();
    //const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const validateEmail = (value) => {
        if (!value) {
            return "Email is required.";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            return "Please enter a valid email address.";
        }
        return "";
    };

    const handleGetStarted = () => {
        const err = validateEmail(email);
        if (err) {
            setError(err);
            return;
        }
        setError("");
        navigate("/LinkEmail", { state: { email } });
        //navigate("/login", { state: { email } });
    };

    return (
        <div
            className="h-[98vh] bg-cover bg-center flex items-center pt-20 relative"
            style={{
                backgroundImage:
                    "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mL2Y1NjJhYWY0LTVkYmItNDYwMy1hMzJiLTZlZjZjMjIzMDEzNi9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FScrpAAFnKqBVKwe2syeiOww6mfH6avq-DRHZ_uFVNw')",
            }}
        >
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10 text-white w-full max-w-2xl px-6 text-center mx-auto">
                <h1 className="text-6xl font-bold mb-4 leading-tight whitespace-pre-line">
                    {t.heroTitle}
                </h1>
                <p className="text-xl mb-8 font-bold">{t.heroSubtitle}</p>
                <p className="text-lg mb-6 font-medium text-gray-200">
                    {t.heroDesc}
                </p>

                {/* Input + Button */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <div className="flex flex-col flex-1 text-left">
                        <input
                            type="email"
                            placeholder={t.emailPlaceholder}
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (error)
                                    setError(validateEmail(e.target.value));
                            }}
                            className={`px-4 py-4 rounded text-white bg-black/60 border 
                                ${
                                    error
                                        ? "border-red-500- focus:ring-red-500"
                                        : "border-white-500 focus:ring-green-500"
                                } 
                                focus:outline-none focus:ring-2 text-base w-full`}
                        />
                        {/* Error message */}
                        {error && (
                            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                <span>x</span> {error}
                            </p>
                        )}
                    </div>

                    <button
                        onClick={handleGetStarted}
                        className="px-6 py-4 bg-red-600 text-white rounded text-xl font-bold hover:bg-red-700 transition-colors flex items-center justify-center gap-2 self-start sm:self-auto h-[58px]"
                    >
                        {t.getStarted}
                        <span className="text-3xl leading-none">❯</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
