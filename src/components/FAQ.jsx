import { useState } from "react";
import { useLanguage } from "../LanguageContext";
import { useNavigate } from "react-router-dom";

function FAQ({ email, setEmail }) {
    const { t } = useLanguage();
    const navigate = useNavigate();
    const [openIndex, setOpenIndex] = useState(null);
    const [error, setError] = useState("");

    const validateEmail = (value) => {
        if (!value) return "Email is required.";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value))
            return "Please enter a valid email address.";
        return "";
    };

    // ✅ Error 1 fixed - properly closed
    const handleGetStarted = () => {
        const err = validateEmail(email);
        if (err) {
            setError(err);
            return;
        }
        setError("");
        navigate("/LinkEmail", { state: { email } });
    };

    // ✅ faqs moved outside handleGetStarted
    const faqs = [
        { question: t.faq1Q, answer: t.faq1A },
        { question: t.faq2Q, answer: t.faq2A },
        { question: t.faq3Q, answer: t.faq3A },
        { question: t.faq4Q, answer: t.faq4A },
        { question: t.faq5Q, answer: t.faq5A },
        { question: t.faq6Q, answer: t.faq6A },
    ];

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-black text-white px-6 py-16">
            <h2 className="text-2xl font-medium ms-30 mb-8">{t.faqHeading}</h2>

            <div className="max-w-5xl mx-auto flex flex-col gap-2">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-zinc-800">
                        <button
                            onClick={() => toggle(index)}
                            className="w-full flex justify-between items-center px-6 py-5 text-left text-xl font-medium hover:bg-zinc-700 transition-colors"
                        >
                            <span>{faq.question}</span>
                            <span className="text-4xl font-light ml-4 ">
                                {openIndex === index ? "✕" : "+"}
                            </span>
                        </button>
                        {openIndex === index && (
                            <div className="px-6 py-5 text-lg text-gray-200 border-t-4 border-black">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* CTA at bottom */}
            <div className="text-center mt-12">
                <p className="text-lg mb-5 ">{t.heroDesc}</p>

                {/* ✅ Error 4 fixed - input, error, button all inside flex div */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center  ">
                    <div className="flex flex-col w-140  ">
                        <input
                            type="email"
                            placeholder={t.emailPlaceholder}
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (error)
                                    setError(validateEmail(e.target.value));
                            }}
                            className={`px-4 py-4  rounded text-white bg-black/60 border 
                                ${
                                    error
                                        ? "border-red-500- focus:ring-red-500"
                                        : "border-white-500 focus:ring-green-500"
                                } 
                                focus:outline-none focus:ring-2 text-base w-full`}
                        />
                        {error && (
                            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                <span>⚠</span> {error}
                            </p>
                        )}
                    </div>

                    <button
                        onClick={handleGetStarted}
                        className="px-6 py-4 bg-red-600 text-white rounded text-xl font-bold hover:bg-red-700 transition-colors flex items-center justify-center gap-2 self-start sm:self-auto h-[60px]"
                    >
                        {t.getStarted}
                        <span className="text-3xl leading-none">❯</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default FAQ;
