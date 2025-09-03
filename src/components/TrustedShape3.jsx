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
        { d: 'M7.0903 0.560059C3.27849 0.560059 0.305267 3.86128 0.702606 7.65206L12.6245 121.391C12.9673 124.661 15.7245 127.144 19.0122 127.144H152.988C156.275 127.144 159.033 124.661 159.375 121.391L171.297 7.65206C171.695 3.86128 168.722 0.560059 164.911 0.560059H7.0903Z',
          transform: 'scale(1, -1) translate(0, -128)'
         },
         { d: 'M162.91 127.44c3.8118 0 6.785-3.3012 6.3876-7.092L157.375 6.60899C157.033 3.33924 154.275 0.856445 150.988 0.856445H17.0118C13.7245 0.856445 10.9667 3.33924 10.6245 6.60899L-1.29739 120.348C-1.69473 124.139 1.27849 127.44 5.0903 127.44H162.91Z', 
            transform: 'scale(1, -1) translate(0, -128)' },
            { d: 'M7.0903 0.560059C3.27849 0.560059 0.305267 3.86128 0.702606 7.65206L12.6245 121.391C12.9673 124.661 15.7245 127.144 19.0122 127.144H152.988C156.275 127.144 159.033 124.661 159.375 121.391L171.297 7.65206C171.695 3.86128 168.722 0.560059 164.911 0.560059H7.0903Z',
              transform: 'scale(1, -1) translate(0, -128)'
             },
         { d: "M163.469 0.560234H6.42233C2.87538 0.560234 0 3.43562 0 6.98257V120.721C0 124.268 2.87537 127.144 6.42233 127.144H150.476C153.741 127.144 156.486 124.694 156.857 121.45L169.85 7.71085C170.285 3.9005 167.305 0.560234 163.469 0.560234Z",
          transform: 'scale(-1,1) translate(-170,0)' 
        }
    ];
  
    const images = [
      '/images/School/SchoolLogo1.avif',
      '/images/School/SchoolLogo2.avif',
      '/images/School/SchoolLogo3.avif',
      '/images/School/SchoolLogo4.avif',
      '/images/School/SchoolLogo5.avif',
      '/images/School/SchoolLogo6.avif',
      '/images/School/SchoolLogo7.avif',
      '/images/School/SchoolLogo8.avif'
    ];
  
    return (
      <section className="py-2">
        <div className="flex justify-center items-center flex-wrap gap-1 px-2">
          {paths.map((path, index) => (
            <div key={index} className="relative w-49 h-35">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 170 128"
                className="rounded-2xl overflow-hidden"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d={path.d}
                  fill="rgba(255, 255, 255, 0.1)"
                  className="backdrop-blur-sm"
                  transform={path.transform || undefined}
                />
                <foreignObject x="0" y="0" width="100%" height="100%">
                  <div className="w-full h-full flex items-center justify-center p-6">
                    <img
                      src={images[index]}
                      alt={`Trusted brand ${index + 1}`}
                      className="w-full h-full object-contain scale-110"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://via.placeholder.com/192x128/3b142b/ffffff?text=Brand+${index + 1}`;
                      }}
                    />
                  </div>
                </foreignObject>
              </svg>
            </div>
          ))}
        </div>
      </section>
    );
  }
  