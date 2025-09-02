import React from 'react';
import Animation from './Animation';

const HeroFeatures = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1920px] px-4 sm:px-6 lg:px-8">
        {/* Feature Section 1 */}
        <section className="w-full bg-[#3b142b] py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#f3efda] mb-6">
              Get any resource and adapt it to your needs
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 h-full flex items-center justify-center">
              <div className="w-full max-w-md mx-auto" style={{ height: '400px' }}>
                <Animation 
                  url="https://rive.app/s/nqGV8E8O7ESkpC107PNyTw/embed?runtime=rive-renderer"
                  width="100%"
                  height={400}
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-[#F2EFDA] rounded-xl backdrop-blur-sm">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#3b142b] flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#F2EFDA]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-[#3b142b] mb-1">Dive into a library of resources that are standards-aligned and mapped to your curriculum</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#F2EFDA] rounded-xl backdrop-blur-sm">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#3b142b] flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#F2EFDA]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-[#3b142b] mb-1">Use AI to differentiate any material so that it's just-right for each student</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#F2EFDA] rounded-xl backdrop-blur-sm">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#3b142b] flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#F2EFDA]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-[#3b142b] mb-1">Import and customize your own trusted materials with dozens of question types and formats</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2 */}
      <section className="w-full bg-[#3b142b] py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#f3efda] mb-6">
              Create <span className="italic">aha</span> moments for each student
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-[#F2EFDA] rounded-xl backdrop-blur-sm">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#3b142b] flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#F2EFDA]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-[#3b142b] mb-1">Motivate every student, not just the loudest or the fastest</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#F2EFDA] rounded-xl backdrop-blur-sm">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#3b142b] flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#F2EFDA]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-[#3b142b] mb-1">Vary the student experience across dozens of formats, modes, and question types</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#F2EFDA] rounded-xl backdrop-blur-sm">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#3b142b] flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#F2EFDA]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-[#3b142b] mb-1">Get clear data (for you and for them) that celebrates progress</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-2 h-full flex items-center justify-center">
              <div className="w-full max-w-md mx-auto" style={{ height: '400px' }}>
                <Animation 
                  url="https://rive.app/s/nVpnErhzEUGMHmG7BOj5UQ/embed?runtime=rive-renderer"
                  width="100%"
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 3 */}
      <section className="w-full bg-[#3b142b] py-5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#f3efda] mb-6">
              Accommodate students without singling them out
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 h-full flex items-center justify-center">
              <div className="w-full max-w-md mx-auto" style={{ height: '400px' }}>
                <Animation 
                  url="https://rive.app/s/lORBuysPe0ip1cSR5uNWEQ/embed?runtime=rive-renderer"
                  width="100%"
                  height={400}
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-[#F2EFDA] rounded-xl backdrop-blur-sm">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#3b142b] flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#F2EFDA]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-[#3b142b] mb-1">Assign 25+ modifications and accommodations unique to each student</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#F2EFDA] rounded-xl backdrop-blur-sm">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#3b142b] flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#F2EFDA]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-[#3b142b] mb-1">Set accommodations once and they're applied automatically moving forward</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#F2EFDA] rounded-xl backdrop-blur-sm">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#3b142b] flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#F2EFDA]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-[#3b142b] mb-1">Adjust reading levels for groups of students and individuals</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroFeatures;
