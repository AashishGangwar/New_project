import React from "react";

const ClientMarquee = ({ 
  logos = [
    "images/Business/food-lion-faded.png",
    "images/Business/karzner-faded.png",
    "images/Business/newfold-faded.png",
    "images/Business/servair-faded.png",
    "images/Business/tds-faded.png",
    "images/Business/ttec-faded.png"
  ], 
  className = "" 
}) => {
  // Duplicate the logos array to create a seamless loop
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className={`client-marquee py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 text-[#3b142b]">
          4000+ ambitious brands choose Wayground for Business
        </h2>

        <div className="marquee-container">
          <div className="marquee-track">
            {marqueeLogos.map((logo, index) => (
              <div key={`${index}-${logo}`} className="marquee-item">
                <div className="logo-container">
                  <img
                    src={logo}
                    alt={`Client Logo ${index + 1}`}
                    className="client-logo"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inline CSS styles */}
      <style jsx>{`
        .marquee-container {
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }

        .marquee-item {
          flex: 0 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .client-logo {
          max-height: 60px;
          width: auto;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.8;
          transition: opacity 0.3s ease, filter 0.3s ease;
        }

        .client-logo:hover {
          opacity: 1;
          filter: grayscale(0%);
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default ClientMarquee;
