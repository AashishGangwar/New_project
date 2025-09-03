export default function TrustedShapes() {
  const paths = [
    // Flipped both horizontally and vertically: shape 1
    {
      d: 'M163.469 0.560234H6.42233C2.87538 0.560234 0 3.43562 0 6.98257V120.721C0 124.268 2.87537 127.144 6.42233 127.144H150.476C153.741 127.144 156.486 124.694 156.857 121.45L169.85 7.71085C170.285 3.9005 167.305 0.560234 163.469 0.560234Z',
      transform: 'scale(1,-1) translate(0,-128)'
    },
    { d: 'M162.91 127.44c3.8118 0 6.785-3.3012 6.3876-7.092L157.375 6.60899C157.033 3.33924 154.275 0.856445 150.988 0.856445H17.0118C13.7245 0.856445 10.9667 3.33924 10.6245 6.60899L-1.29739 120.348C-1.69473 124.139 1.27849 127.44 5.0903 127.44H162.91Z', 
      transform: 'scale(1, -1) translate(0, -128)' },
    { d: 'M7.0903 0.560059C3.27849 0.560059 0.305267 3.86128 0.702606 7.65206L12.6245 121.391C12.9673 124.661 15.7245 127.144 19.0122 127.144H152.988C156.275 127.144 159.033 124.661 159.375 121.391L171.297 7.65206C171.695 3.86128 168.722 0.560059 164.911 0.560059H7.0903Z',
      transform: 'scale(1, -1) translate(0, -128)'
     },
    { d: 'M162.91 127.44c3.8118 0 6.785-3.3012 6.3876-7.092L157.375 6.60899C157.033 3.33924 154.275 0.856445 150.988 0.856445H17.0118C13.7245 0.856445 10.9667 3.33924 10.6245 6.60899L-1.29739 120.348C-1.69473 124.139 1.27849 127.44 5.0903 127.44H162.91Z', 
      transform: 'scale(1, -1) translate(0, -128)' },
    { d: 'M163.469 0.560234H6.42233C2.87538 0.560234 0 3.43562 0 6.98257V120.721C0 124.268 2.87537 127.144 6.42233 127.144H150.476C153.741 127.144 156.486 124.694 156.857 121.45L169.85 7.71085C170.285 3.9005 167.305 0.560234 163.469 0.560234Z',
      transform: 'scale(-1,-1) translate(-170,-128)'
    }
  ];

  const images = [
    '/images/trustedbrands/6848501bf7aaf381374a130a_Logo 1.avif',
    '/images/trustedbrands/6848501bde45cfb387978c5f_Logo 2.avif',
    '/images/trustedbrands/6848501beaec64fb4625adbf_Logo 4.avif',
    '/images/trustedbrands/6848501b3bb50c97ade034fa_Logo 5.avif',
    '/images/trustedbrands/6848501b82aef8744f2574c1_Logo 6.avif'
  ];

  return (
    <section className="py-8 md:py-12 border-t border-white/10">
      <p className="text-center text-xl md:text-3xl font-bold text-white mb-6 md:mb-8 px-4">
        TRUSTED BY TEACHERS IN <span className="text-[#ffc48a]">90% OF U.S. SCHOOLS </span> AND <span className="text-[#ffc48a]">150+ COUNTRIES</span>
      </p>
      <div className="flex flex-nowrap md:flex-wrap justify-center items-center gap-2 md:gap-1 px-2 overflow-x-auto pb-4 md:pb-0">
        {images.map((img, index) => (
          <div key={index} className="flex-shrink-0 w-32 h-20 md:w-56 md:h-40 relative">
            {/* Only show SVG on desktop */}
            <div className="hidden md:block absolute inset-0">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 170 128"
                className="rounded-2xl overflow-hidden"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d={paths[index]?.d}
                  fill="rgba(255, 255, 255, 0.1)"
                  className="backdrop-blur-sm"
                  transform={paths[index]?.transform}
                />
              </svg>
            </div>
            <div className="w-full h-full flex items-center justify-center p-2 md:p-6">
              <img
                src={img}
                alt={`Trusted brand ${index + 1}`}
                className="w-full h-full object-contain scale-110"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://via.placeholder.com/192x128/3b142b/ffffff?text=Brand+${index + 1}`;
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
