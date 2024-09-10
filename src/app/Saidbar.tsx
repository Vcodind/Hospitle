import React from "react";

interface SidebarProps {
    activeSection: string;
    sections: { name: string; content: string[] }[];
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, sections }) => {
    
    return (
        <div className="bg-gray-200 w-64 h-screen p-4" style={{ color: "#1A3B6E" }}>
             <div className="mb-4">
                <input
                    type="text"
                    className="border rounded-md px-3 py-2 w-full"
                    placeholder="Search..."
                />
            </div>
            {sections
                .filter((section) => section.name === activeSection)
                .map((section) => (
                    <div key={section.name}>
                        <h2 className="font-semibold text-lg">{section.name}</h2>
                        <ul className="mt-4">
                            {section.content.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
        </div>
    );
};

export default Sidebar;

