import React from 'react';

export default function Header() {
    const sections = ["About", "Skills", "Work", "Projects", "Contact", "Resume"];
  
    return (
      <header className="fixed top-12 right-12 flex space-x-4 text-2xl font-serif">
        {sections.map((section) => (
          <React.Fragment key={section}>
            <a href={`#${section.toLowerCase()}`} className="px-3 hover:text-green-600" >
              {section}
            </a>
          </React.Fragment>
        ))}
      </header>
    );
  }
  
