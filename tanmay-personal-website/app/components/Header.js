import React from 'react';

export default function Header() {
    const sections = ["About", "Skills", "Work", "Projects", "Contact", "Resume"];
    const handleResumeClick = () => {
        const link = document.createElement('a');
        link.href = './resume.pdf';  // Replace with the actual path to your resume file
        link.download = 'tanmay_resume.pdf';  // The filename for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
  
    return (
      <header className="fixed top-12 right-12 flex space-x-4 text-2xl font-serif">
        {sections.map((section) => (
          <React.Fragment key={section}>
            {section === "Resume" ? (
              <a onClick={handleResumeClick} className="px-3 hover:text-green-600 cursor-pointer">
                {section}
              </a>
            ) : (
              <a href={`#${section.toLowerCase()}`} className="px-3 hover:text-green-600">
                {section}
              </a>
            )}
          </React.Fragment>
        ))}
      </header>
    );
}
