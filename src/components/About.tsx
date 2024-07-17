import React, { useState, useEffect } from 'react';

const About: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const isMobileDevice = /Mobi/i.test(navigator.userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  // The full text content
  const fullText = `
    I'm Manikandan, and I've been working as a Software Engineer for the
    past two years. I graduated from Bharathiar University with BSc (IT)
    and develop into the tech world. In my last role with Agaram InfoTech,
    my focus was on Software Development and Data Mining. It was an
    awesome experience that allowed me to gain hands-on experience with
    Dotnet Technologies. I thoroughly enjoy working with others;
    collaboration makes the tech world go 'round, doesn't it? I have a
    knack for staying updated on the latest developments in our field,
    always eager to learn about new advanced Dotnet technologies like
    ASP.NET Core and MVC, etc. I'm enthusiastic about the opportunity to
    bring my skills to your team. Let's discuss more about how I can
    contribute to the incredible work you're doing. Thanks for considering
    me!
  `;

  // Get the first three lines of the full text
  const truncatedText = fullText.split('\n').slice(0, 3).join('\n');

  return (
    <>
      <div className="About">
        <h3>Profile Summary</h3>
        <small>
          {isMobile && !expanded ? truncatedText : fullText}
          {isMobile && !expanded && (
            <span
              className="read-more"
              onClick={() => setExpanded(true)}
              style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
            >
              Read More
            </span>
          )}
        </small>
      </div>
    </>
  );
};

export default About;
