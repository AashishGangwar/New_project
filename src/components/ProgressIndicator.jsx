import React, { memo } from 'react';

const ICONS = [
  'fa-edit',
  'fa-user-plus',
  'fa-chalkboard-user',
  'fa-chart-line',
  'fa-file-export',
];

const ProgressIndicator = memo(function ProgressIndicator({ activeIndex, isDark = false, total = ICONS.length }) {
  return (
    <div className="flex items-center justify-center mb-10 mt-10 px-8">
      {Array.from({ length: total }).map((_, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <div
              className={`h-1 flex-1 max-w-16 ${isDark ? 'bg-white/30' : 'bg-[#3b142b]/30'} ${
                index <= activeIndex ? (isDark ? '!bg-[#f2efda]' : '!bg-[#3b142b]') : ''
              }`}
            />
          )}

          <div className="relative w-16 h-16 flex items-center justify-center">
            <div
              className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                isDark ? 'border-white/30' : 'border-[#3b142b]/30'
              } ${
                index <= activeIndex
                  ? (isDark ? '!border-[#f2efda] bg-[#f2efda]' : '!border-[#3b142b] bg-[#3b142b]')
                  : ''
              }`}
            >
              <i
                className={`fas ${ICONS[index]} text-2xl ${
                  isDark
                    ? index <= activeIndex
                      ? 'text-[#3b142b]'
                      : 'text-white/30'
                    : index <= activeIndex
                      ? 'text-white'
                      : 'text-[#3b142b]/30'
                }`}
              />
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
});

export { ProgressIndicator };
