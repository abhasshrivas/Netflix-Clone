import { FaTv, FaDownload, FaMobileAlt, FaChild } from "react-icons/fa";
import { useLanguage } from "../LanguageContext";

function Section() {
    const { t } = useLanguage();
    const reasons = [
        {
            title: t.tv,
            description: t.tvDesc,
            icon: <FaTv size={50} className="text-red-500" />,
        },
        {
            title: t.download,
            description: t.downloadDesc,
            icon: <FaDownload size={50} className="text-red-500" />,
        },
        {
            title: t.watchEverywhere,
            description: t.watchEverywhereDesc,
            icon: <FaMobileAlt size={50} className="text-red-500" />,
        },
        {
            title: t.kids,
            description: t.kidsDesc,
            icon: <FaChild size={50} className="text-red-500" />,
        },
    ];

    return (
        <section className="bg-black text-white px-10 py-16">
            <h2 className="text-2xl font-bold mb-8 ms-30">{t.moreReasons}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ms-30 me-30">
                {reasons.map((reason, index) => (
                    <div
                        key={index}
                        className="bg-zinc-900 p-6 h-[55vh] rounded-xl hover:scale-105 transition flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">
                                {reason.title}
                            </h3>
                            <p className="text-gray-400">
                                {reason.description}
                            </p>
                        </div>

                        {/* Icon at bottom right */}
                        <div className="flex justify-end mt-4">
                            {reason.icon}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Section;
