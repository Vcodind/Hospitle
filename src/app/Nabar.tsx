import React from "react";
interface NavbarProps {
    sections: { name: string; icon:React.FC<React.SVGProps<SVGSVGElement>> }[];
    setActiveSection: (section: string) => void;
}
const Navbar: React.FC<NavbarProps> = ({ sections, setActiveSection }) => {
    return (
        <div className="text-white p-4 flex justify-between items-center" style={{ backgroundColor: "#1A3B6E" }}>
            <div>
                <nav className="flex space-x-8 justify-center items-center">
                    {sections.map((section) => (
                        <button
                            key={section.name}
                            onClick={() => setActiveSection(section.name)}
                            className="flex items-center justify-center"
                        >
                            <div >
                                <div className="h-6 w-6 mb-5 transition-transform transform hover:scale-125 ">
                                {section.icon }
                                </div>
                                <div style={{fontSize:"0.8rem"}} className="transition-colors group-hover:text-blue-300">
                                    {section.name}
                                </div>
                            </div>
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
};
export default Navbar;
