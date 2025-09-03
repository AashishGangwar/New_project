export default function SlantedCard2({ children, className = '' }) {
  return (
    <div className={`w-full max-w-xl mx-auto ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="auto"
        viewBox="0 0 600 500"
        fill="none"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0 100C0 90 5 80 12 75L580 0C590 -2 600 5 600 15V485C600 495 590 500 580 500H20C10 500 0 490 0 480V100Z"
          fill="#ff7925cc"
          className="w-full h-full"
        />
        <foreignObject x="30" y="40" width="540" height="420" className="w-[calc(100%-60px)]">
          <div className="p-4 w-full h-full">
            {children}
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}