import { useLocation } from "react-router-dom";
function Login() {
    const location = useLocation();
    const prefillEmail = location.state?.email || "";

    const links = [
        { name: "FAQ", url: "https://help.netflix.com", internal: false },
        {
            name: "Cookie Preferences",
            url: "https://help.netflix.com/legal/privacy#cookies",
            internal: false,
        },
        {
            name: "Help Centre",
            url: "https://help.netflix.com",
            internal: false,
        },
        {
            name: "Corporate Information",
            url: "https://help.netflix.com/en/node/134094",
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
    ];
    return (
        <div className=" min-h-screen bg-cover bg-center bg-black">
            {/* Navbar */}
            <nav className="relative z-10 flex items-center justify-between px-10 py-7  text-gray-50">
                <h1 className="text-red-600 font-bold text-4xl ms-30 ">
                    NETFLIX
                </h1>
            </nav>

            <div className="text-white flex items-center justify-center py-15">
                <form>
                    <h1 className="text-4xl font-bold ">
                        {" "}
                        Enter your info to sign in
                    </h1>
                    <p className="py-2 text-xl text-gray-300">
                        Or get started with a new account.
                    </p>
                    <input
                        type="text"
                        defaultValue={prefillEmail}
                        placeholder="Enter your email or mobile number"
                        className=" flex-1 px-4 py-2  mt-3 rounded text-white bg-black border border-gray-500 focus:outline-none focus:ring-2 focus:ring-white-500 mb-5 h-12  w-120  "
                    ></input>
                    <br />

                    <button className="px-6 h-12 bg-red-500 text-white rounded text-2xl font-semibold hover:bg-red-700 transition-colors whitespace-nowrap w-120">
                        Continue
                    </button>

                    <br></br>
                    <select
                        onChange={(e) => {
                            if (e.target.value)
                                window.open(e.target.value, "_blank");
                            e.target.value = "";
                        }}
                        className="text-white  px-2 py-2 mt-15 text-sm cursor-pointer"
                    >
                        <option value="">Get Help</option>
                        <option
                            className="text-black"
                            value="https://www.netflix.com/in/loginhelp"
                        >
                            forgot your email or phone number?
                        </option>
                        <option
                            className="text-black"
                            value="https://help.netflix.com/en/node/311830241325668"
                        >
                            Learn more about sign-in.
                        </option>
                    </select>

                    <p className="text-gray-300 mt-20">
                        This page is protected by Google reCAPTCHA to ensure
                        you're not a bot
                    </p>
                </form>
            </div>

            <div>
                <footer className="bg-gray-900 text-gray-400 px-25 py-10 boreder-t border-gray-800">
                    <p className="mb-5 ">
                        Questions Call?
                        <a href="tel:000-800-919-1694">
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

                    <div className="flex items-center border border-gray-600 rounded w-fit px-5 py-1 mb-10 ">
                        <select className="bg-transparent text-white ">
                            <option value="english" className="text-black">
                                English
                            </option>
                            <option value="hindi" className="text-black">
                                Hindi
                            </option>
                        </select>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Login;
