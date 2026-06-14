import { useLanguage } from "../LanguageContext";
import { useNavigate } from "react-router-dom";

function Footer() {
    const { t, language, setLanguage } = useLanguage();
    const navigate = useNavigate();

    const links = [
        { name: "FAQ", url: "/faq", internal: true },
        {
            name: "Help Centre",
            url: "https://help.netflix.com",
            internal: false,
        },
        {
            name: "Account",
            url: "https://www.netflix.com/account",
            internal: false,
        },
        {
            name: "Media Centre",
            url: "https://media.netflix.com",
            internal: false,
        },
        {
            name: "Investor Relations",
            url: "https://ir.netflix.net",
            internal: false,
        },
        { name: "Jobs", url: "https://jobs.netflix.com", internal: false },
        {
            name: "Ways to Watch",
            url: "https://help.netflix.com/en/node/14361",
            internal: false,
        },
        {
            name: "Terms of Use",
            url: "https://help.netflix.com/legal/termsofuse",
            internal: false,
        },
        {
            name: "Privacy",
            url: "https://help.netflix.com/legal/privacy",
            internal: false,
        },
        {
            name: "Cookie Preferences",
            url: "https://help.netflix.com/legal/privacy#cookies",
            internal: false,
        },
        {
            name: "Corporate Information",
            url: "https://help.netflix.com/en/node/134094",
            internal: false,
        },
        {
            name: "Contact Us",
            url: "https://help.netflix.com/en/contactus",
            internal: false,
        },
        { name: "Speed Test", url: "https://fast.com", internal: false },
        {
            name: "Legal Notices",
            url: "https://help.netflix.com/legal/notices",
            internal: false,
        },
        {
            name: "Only on Netflix",
            url: "https://www.netflix.com/in/browse/genre/839338",
            internal: false,
        },
        {
            name: "Ad Choices",
            url: "https://help.netflix.com/legal/privacy#adchoices",
            internal: false,
        },
    ];

    return (
        <footer className="bg-black text-gray-400 px-10 py-12 border-t border-gray-800">
            {/* Phone number */}
            <p className="mb-6 text-base">
                {t.footerPhone}{" "}
                <a
                    href="tel:000-800-919-1694"
                    className="underline hover:text-white transition"
                >
                    000-800-919-1694 (Toll-Free)
                </a>
            </p>

            {/* Links grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3 mb-8">
                {links.map((link, index) =>
                    link.internal ? (
                        <button
                            key={index}
                            onClick={() => navigate(link.url)}
                            className="text-gray-400 text-sm underline hover:text-white transition text-left"
                        >
                            {link.name}
                        </button>
                    ) : (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 text-sm underline hover:text-white transition"
                        >
                            {link.name}
                        </a>
                    ),
                )}
            </div>

            {/* Language selector */}
            <div className="flex items-center border border-gray-600 rounded w-fit px-3 py-2 mb-6 gap-2cursor-pointer">
                <i
                    className="fa fa-language text-white text-lg"
                    aria-hidden="true"
                ></i>
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="bg-transparent text-white text-sm outline-none cursor-pointer"
                >
                    <option value="english" className="text-black">
                        English
                    </option>
                    <option value="hindi" className="text-black">
                        Hindi
                    </option>
                </select>
            </div>

            {/* Bottom text */}
            <p className="text-gray-500 text-sm mb-2">{t.footerBottom}</p>
            <p className="text-gray-600 text-xs">{t.footerLast}</p>
        </footer>
    );
}

export default Footer;
