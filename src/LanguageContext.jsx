import { createContext, useContext, useState } from "react";

const translation = {
    english: {
        //navbar
        signIn: "Sign In",

        //hero
        heroTitle: "Unlimited movies,\n shows, and more.",
        heroSubtitle: "Starts at ₹149. Cancel at any time.",
        heroDesc:
            "Ready to watch? Enter your email to create or restart your membership.",
        emailPlaceholder: "Email address",
        getStarted: "Get Started",

        //Movie row
        trendingNow: "Trending Now",

        // Section
        moreReasons: "More Reasons to Join",
        tv: "Enjoy on your TV",
        tvDesc: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
        download: "Download your shows to watch offline",
        downloadDesc: "Save your favorites and always have something to watch.",
        watchEverywhere: "Watch everywhere",
        watchEverywhereDesc:
            "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
        kids: "Create profiles for kids",
        kidsDesc:
            "Send kids on adventures with their favourite characters — free with your membership.",

        // FAQ
        faqHeading: "Frequently Asked Questions",
        faq1Q: "What is Netflix?",
        faq1A: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more.",
        faq2Q: "How much does Netflix cost?",
        faq2A: "Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
        faq3Q: "Where can I watch?",
        faq3A: "Watch anywhere, anytime on any internet-connected device.",
        faq4Q: "How do I cancel?",
        faq4A: "No contracts. Cancel anytime online in two clicks.",
        faq5Q: "What can I watch on Netflix?",
        faq5A: "Movies, TV shows, anime, documentaries, Netflix originals and more.",
        faq6Q: "Is Netflix good for kids?",
        faq6A: "Yes, Netflix Kids is included free with your membership.",

        // Footer
        footerPhone: "Questions? Call",
        footerBottom: "Netflix India",
        footerLast:
            "This page is protected by Google reCAPTCHA to ensure you're not a bot.",
        footerLinks: [
            "FAQ",
            "Help Centre",
            "Account",
            "Media Centre",
            "Investor Relations",
            "Jobs",
            "Ways to Watch",
            "Terms of Use",
            "Privacy",
            "Cookie Preferences",
            "Corporate Information",
            "Contact Us",
            "Speed Test",
            "Legal Notices",
            "Only on Netflix",
            "Ad Choices",
        ],
    },
    hindi: {
        // Navbar
        signIn: "साइन इन",

        // Hero
        heroTitle: "असीमित फिल्में, शो और भी बहुत कुछ।",
        heroSubtitle: "₹149 से शुरू। कभी भी रद्द करें।",
        heroDesc:
            "देखने के लिए तैयार हैं? सदस्यता बनाने के लिए अपना ईमेल दर्ज करें।",
        emailPlaceholder: "ईमेल पता",
        getStarted: "शुरू करें",

        // MovieRow
        trendingNow: "अभी ट्रेंडिंग",

        // Section
        moreReasons: "जुड़ने के और कारण",
        tv: "अपने TV पर आनंद लें",
        tvDesc: "स्मार्ट TV, PlayStation, Xbox, Chromecast, Apple TV और अधिक पर देखें।",
        download: "ऑफलाइन देखने के लिए डाउनलोड करें",
        downloadDesc:
            "अपने पसंदीदा सेव करें और हमेशा कुछ देखने के लिए तैयार रहें।",
        watchEverywhere: "कहीं भी देखें",
        watchEverywhereDesc:
            "अपने फोन, टैबलेट, लैपटॉप और TV पर असीमित फिल्में और शो देखें।",
        kids: "बच्चों के लिए प्रोफाइल बनाएं",
        kidsDesc:
            "बच्चों को उनके पसंदीदा पात्रों के साथ रोमांच पर भेजें — सदस्यता के साथ मुफ्त।",

        // FAQ
        faqHeading: "अक्सर पूछे जाने वाले प्रश्न",
        faq1Q: "Netflix क्या है?",
        faq1A: "Netflix एक स्ट्रीमिंग सेवा है जो पुरस्कार विजेता TV शो, फिल्में, एनीमे और वृत्तचित्र प्रदान करती है।",
        faq2Q: "Netflix की कीमत कितनी है?",
        faq2A: "प्लान ₹149 से ₹649 प्रति माह तक। कोई अतिरिक्त लागत नहीं, कोई अनुबंध नहीं।",
        faq3Q: "मैं कहाँ देख सकता हूँ?",
        faq3A: "किसी भी इंटरनेट से जुड़े डिवाइस पर कहीं भी, कभी भी देखें।",
        faq4Q: "मैं कैसे रद्द करूं?",
        faq4A: "कोई अनुबंध नहीं। दो क्लिक में ऑनलाइन कभी भी रद्द करें।",
        faq5Q: "Netflix पर क्या देख सकते हैं?",
        faq5A: "फिल्में, TV शो, एनीमे, वृत्तचित्र, Netflix ओरिजिनल और भी बहुत कुछ।",
        faq6Q: "क्या Netflix बच्चों के लिए अच्छा है?",
        faq6A: "हाँ, Netflix Kids आपकी सदस्यता के साथ मुफ्त शामिल है।",

        // Footer
        footerPhone: "प्रश्न? कॉल करें",
        footerBottom: "नेटफ्लिक्स इंडिया",
        footerLast:
            "यह पेज Google reCAPTCHA द्वारा सुरक्षित है ताकि यह सुनिश्चित किया जा सके कि आप कोई बॉट (स्वचालित प्रोग्राम) नहीं हैं।",
        footerLinks: [
            "सामान्य प्रश्न",
            "सहायता केंद्र",
            "खाता",
            "मीडिया केंद्र",
            "निवेशक संबंध",
            "नौकरियां",
            "देखने के तरीके",
            "उपयोग की शर्तें",
            "गोपनीयता",
            "कुकी प्राथमिकताएं",
            "कॉर्पोरेट जानकारी",
            "संपर्क करें",
            "स्पीड टेस्ट",
            "कानूनी नोटिस",
            "केवल Netflix पर",
            "विज्ञापन विकल्प",
        ],
    },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("english");
    const t = translation[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
