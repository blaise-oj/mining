import { useState } from "react";
import { Search, ChevronDown, X } from "lucide-react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import arms from "../assets/arms.png";
import menuIcon from "../assets/menuIcon.png";

const Navbar = () => {
    const [accessOpen, setAccessOpen] = useState(false);
    const increaseText = () => {
        document.body.style.fontSize = "110%";
    };

    const decreaseText = () => {
        document.body.style.fontSize = "90%";
    };

    const grayscale = () => {
        document.body.style.filter = "grayscale(1)";
    };

    const highContrast = () => {
        document.body.style.backgroundColor = "#000";
        document.body.style.color = "#fff";
    };

    const negativeContrast = () => {
        document.body.style.filter = "invert(1)";
    };

    const lightBackground = () => {
        document.body.style.backgroundColor = "#f7f7f7";
        document.body.style.color = "#000";
    };

    const underlineLinks = () => {
        document.querySelectorAll("a").forEach((link) => {
            link.style.textDecoration = "underline";
        });
    };

    const readableFont = () => {
        document.body.style.fontFamily = "Arial, sans-serif";
    };

    const resetAccessibility = () => {
        document.body.style.fontSize = "";
        document.body.style.filter = "";
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
        document.body.style.fontFamily = "";

        document.querySelectorAll("a").forEach((link) => {
            link.style.textDecoration = "";
        });
    };
    const [mobileOpen, setMobileOpen] = useState(false);
    const menuItems = [
        { name: "Home", path: "/" },

        {
            name: "About Us",
            dropdown: [
                { name: "Background", path: "/about/background" },
                {
                    name: "Vision, Mission & Strategic Objectives",
                    path: "/about/vision-mission-strategic-objectives",
                },
                { name: "Mandate and Core Values", path: "/about/mandate-core-values" },
                { name: "Leadership", path: "/about/leadership" },
                { name: "Functions", path: "/about/functions" },
                { name: "Directorates", path: "/about/directorates" },
                {
                    name: "Organisation Structure",
                    path: "/about/organisation-structure",
                },
            ],
        },

        {
            name: "Information & Services",
            mega: true,
            columns: [
                {
                    title: "INSTITUTIONS",
                    links: [
                        { name: "Cabinet Secretary", path: "/institutions/cabinet-secretary" },
                        { name: "Mining Institutions", path: "/institutions/mining" },
                        {
                            name: "Blue Economy and Fisheries",
                            path: "/institutions/blue-economy-fisheries",
                        },
                        {
                            name: "Maritime Affairs Institutions",
                            path: "/institutions/maritime-affairs",
                        },
                    ],
                },
                {
                    title: "INFORMATION",
                    links: [
                        {
                            name: "Maritime Affairs Information",
                            path: "/information/maritime-affairs",
                        },
                        {
                            name: "Blue Economy and Fisheries",
                            path: "/information/blue-economy-fisheries",
                        },
                        { name: "Mining Information", path: "/information/mining" },
                    ],
                },
                {
                    title: "SERVICES",
                    links: [
                        {
                            name: "Minerals Licensing and Concession Management",
                            path: "/services/minerals-licensing",
                        },
                    ],
                },
                {
                    title: "INTERACTIVE MAPS",
                    links: [
                        { name: "Story Map", path: "/maps/story-map" },
                        { name: "Dashboard", path: "/maps/dashboard" },
                    ],
                },
            ],
        },

        {
            name: "Departments",
            dropdown: [
                { name: "State Department of Mining", path: "/departments/mining" },
                {
                    name: "State Department of Blue Economy",
                    path: "/departments/blue-economy",
                },
                {
                    name: "State Department of Maritime Affairs",
                    path: "/departments/maritime-affairs",
                },
            ],
        },

        {
            name: "Projects",
            dropdown: [
                {
                    name: "Blue Economy and Fisheries",
                    path: "/projects/blue-economy-fisheries",
                },
                { name: "Mining Projects", path: "/projects/mining" },
            ],
        },

        {
            name: "Media Centre",
            dropdown: [
                { name: "News & Events", path: "/media/news-events" },
                { name: "Press Release", path: "/media/press-releases" },
                { name: "Speeches", path: "/media/speeches" },
                { name: "Videos & Photos Gallery", path: "/media/gallery" },
                {
                    name: "General Documents",
                    path: "/media/general-documents",
                },
                { name: "Legal Documents", path: "/media/legal-documents" },
                { name: "Reports", path: "/media/reports" },
            ],
        },

        { name: "Tracking", path: "/tracking" },
        { name: "FAQs", path: "/faqs" },

        {
            name: "Contacts",
            dropdown: [
                {
                    name: "Ministry Contacts",
                    path: "/contacts/ministry-contacts",
                },
                {
                    name: "Regional Offices",
                    path: "/contacts/regional-offices",
                },
                { name: "Feedback", path: "/contacts/feedback" },
            ],
        },
    ];

    return (
        <>
            {/* TOP WHITE BAR */}
            <div className="bg-white h-14 flex items-center justify-center border-b">
                <div className="w-full max-w-[1170px] flex items-center justify-between px-4">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-blue-700 flex items-center justify-center text-white text-xs">
                            <FaFacebookF />
                        </div>

                        <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                            <FaTwitter />
                        </div>

                        <div className="w-7 h-7 rounded-full bg-blue-700 flex items-center justify-center text-white text-xs">
                            <BsChatDotsFill />
                        </div>

                        <select className="border border-gray-300 px-2 py-1.5 text-sm outline-none max-w-[135px]">
                            <option>Select Language</option>
                            <option>English</option>
                            <option>Arabic</option>
                            <option>Sudanese</option>
                            <option>Swahili</option>
                        </select>
                    </div>

                    <Search className="cursor-pointer text-black" size={20} />
                </div>

                <div className="fixed right-0 top-[88px] z-[100000]">
                    <button
                        onClick={() => setAccessOpen(!accessOpen)}
                        className="w-14 h-14 bg-red-600 text-white flex items-center justify-center text-3xl"
                    >
                        ♿
                    </button>

                    {accessOpen && (
                        <div className="absolute right-0 top-14 w-[220px] bg-white shadow-lg border border-[#d4ad00] text-black">
                            <h3 className="font-bold px-4 py-3 border-b">
                                Accessibility Tools
                            </h3>

                            <button onClick={increaseText} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                                + Increase Text
                            </button>

                            <button onClick={decreaseText} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                                - Decrease Text
                            </button>

                            <button onClick={grayscale} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                                ▥ Grayscale
                            </button>

                            <button onClick={highContrast} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                                ◐ High Contrast
                            </button>

                            <button onClick={negativeContrast} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                                ◉ Negative Contrast
                            </button>

                            <button onClick={lightBackground} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                                ♧ Light Background
                            </button>

                            <button onClick={underlineLinks} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                                🔗 Links Underline
                            </button>

                            <button onClick={readableFont} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                                A Readable Font
                            </button>

                            <button onClick={resetAccessibility} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                                ↻ Reset
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* LOGO SECTION */}
            <div className="bg-[#37b5ed] h-[105px] md:h-[105px] flex items-center">
                <div className="max-w-[1170px] w-full mx-auto px-4">
                    <div className="bg-white inline-flex items-center gap-2 md:gap-4 px-2 md:px-4 py-2 h-[50px] md:h-[86px] min-w-0 md:min-w-[570px]">
                        <img
                            src={arms}
                            alt="arms"
                            className="h-[40px] md:h-[76px] object-contain"
                        />

                        <div>
                            <h1 className="font-bold text-[8px] md:text-[25px] leading-[1.15] text-black">
                                Ministry of Mining, Blue Economy and
                            </h1>
                            <p className="font-bold text-[8px] md:text-[25px] leading-[1.15] text-black">
                                Maritime Affairs
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* YELLOW STICKY NAV */}
            <nav className="bg-[#d4ad00] min-h-[70px] flex items-center sticky top-0 z-[99999] shadow">
                <div className="max-w-[1170px] w-full mx-auto px-4 relative">
                    {/* MOBILE MENU ICON CENTER */}
                    <div className="md:hidden flex items-center justify-center h-[70px]">
                        <button onClick={() => setMobileOpen(true)}>
                            <img src={menuIcon} alt="menu" className="w-8 h-8 object-contain" />
                        </button>
                    </div>

                    {/* DESKTOP MENU */}
                    <ul className="hidden md:flex items-center justify-center text-black font-bold">
                        {menuItems.map((item) => (
                            <li
                                key={item.name}
                                className="relative group border-r border-black/20 last:border-r-0"
                            >
                                {item.path ? (
                                    <Link
                                        to={item.path}
                                        className="flex items-center gap-1 px-3 py-[27px] text-[15px] hover:bg-[#c39e00]"
                                    >
                                        {item.name}
                                    </Link>
                                ) : (
                                    <div className="flex items-center gap-1 px-3 py-[27px] text-[15px] hover:bg-[#c39e00] cursor-pointer">
                                        {item.name}
                                        <ChevronDown size={14} strokeWidth={3} />
                                    </div>
                                )}

                                {item.dropdown && (
                                    <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-md rounded-sm w-[280px] py-3 z-[99999]">
                                        {item.dropdown.map((link) => (
                                            <Link
                                                key={link.name}
                                                to={link.path}
                                                className="block px-5 py-2.5 text-sm font-normal text-[#d4a900] hover:text-black hover:bg-gray-50"
                                            >
                                                {link.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}

                                {item.mega && (
                                    <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:grid grid-cols-4 gap-8 bg-white shadow-md rounded-sm w-[1170px] px-9 py-6 z-[99999]">
                                        {item.columns.map((column) => (
                                            <div key={column.title}>
                                                <h4 className="font-bold text-sm text-black border-b border-gray-200 pb-3 mb-3 flex items-center gap-1">
                                                    {column.title}
                                                    <ChevronDown size={13} strokeWidth={3} />
                                                </h4>

                                                {column.links.map((link) => (
                                                    <Link
                                                        key={link.name}
                                                        to={link.path}
                                                        className="block py-2 text-sm font-normal text-[#d4a900] hover:text-black"
                                                    >
                                                        {link.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* MOBILE SIDE MENU */}
            {mobileOpen && (
                <div className="fixed inset-0 z-[100000] md:hidden">
                    <div
                        className="absolute inset-0 bg-black/40"
                        onClick={() => setMobileOpen(false)}
                    ></div>

                    <div className="relative bg-white w-[75%] max-w-[320px] h-full shadow-xl overflow-y-auto">
                        <div className="flex justify-end p-4 border-b">
                            <button onClick={() => setMobileOpen(false)}>
                                <X size={22} />
                            </button>
                        </div>

                        {menuItems.map((item) => (
                            <div key={item.name} className="border-b border-gray-200">
                                {item.path ? (
                                    <Link
                                        to={item.path}
                                        onClick={() => setMobileOpen(false)}
                                        className="block px-4 py-4 text-xs font-bold uppercase text-black"
                                    >
                                        {item.name}
                                    </Link>
                                ) : (
                                    <details>
                                        <summary className="px-4 py-4 text-xs font-bold uppercase text-black cursor-pointer flex items-center justify-between list-none">
                                            <span>{item.name}</span>
                                            <ChevronDown size={16} strokeWidth={3} />
                                        </summary>

                                        <div className="bg-gray-50 px-6 py-2">
                                            {item.dropdown?.map((link) => (
                                                <Link
                                                    key={link.name}
                                                    to={link.path}
                                                    onClick={() => setMobileOpen(false)}
                                                    className="block py-2 text-sm text-[#d4a900]"
                                                >
                                                    {link.name}
                                                </Link>
                                            ))}

                                            {item.mega &&
                                                item.columns.map((column) => (
                                                    <div key={column.title} className="mb-3">
                                                        <h4 className="font-bold text-black text-sm mt-2">
                                                            {column.title}
                                                        </h4>

                                                        {column.links.map((link) => (
                                                            <Link
                                                                key={link.name}
                                                                to={link.path}
                                                                onClick={() => setMobileOpen(false)}
                                                                className="block py-2 text-sm text-[#d4a900]"
                                                            >
                                                                {link.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                ))}
                                        </div>
                                    </details>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;