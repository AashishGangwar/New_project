import React from 'react';
import Animation from './Animation';

const SchoolDistrictFeatures = () => {
  return (
    <>
      {/* Feature Section 1 - Support Every Way You Teach */}
      <section className="w-full bg-[#f2efda] pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#3b142b] mb-6">
              Support Every Way You Teach and Learn
            </h2>
            <p className="text-xl text-[#3b142b] max-w-3xl mx-auto">
              Empower your educators with flexible tools that adapt to any teaching style or learning need.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 h-full flex items-center justify-center">
              <div className="w-full max-w-md mx-auto" style={{ height: '400px' }}>
                <Animation 
                  url="https://rive.app/s/nVpnErhzEUGMHmG7BOj5UQ/embed"
                  width="100%"
                  height={400}
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#FF8A3D]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#FF8A3D]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#3b142b] mb-1">AI-Powered Customization</h3>
                    <p className="text-[#3b142b]">Tailor curriculum materials in minutes with intelligent AI assistance</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#FF8A3D]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#FF8A3D]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#3b142b] mb-1">Diverse Content Formats</h3>
                    <p className="text-[#3b142b]">Choose from 5 formats and 18 question types to support varied instructional approaches</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#FF8A3D]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#FF8A3D]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#3b142b] mb-1">Universal Implementation</h3>
                    <p className="text-[#3b142b]">Flexible enough for any grade level, subject, or curriculum framework</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2 - Accommodate All Learners */}
      <section className="w-full bg-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#3b142b] mb-6">
              Accommodate Every Student Seamlessly
            </h2>
            <p className="text-xl text-[#3b142b] max-w-3xl mx-auto">
              Create inclusive learning environments where every student can thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-[#f2efda]/50 rounded-xl backdrop-blur-sm">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#FF8A3D]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#FF8A3D]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#3b142b] mb-1">Inclusive Design</h3>
                    <p className="text-[#3b142b]">25+ built-in accommodations and modifications for diverse learning needs</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#f2efda]/50 rounded-xl backdrop-blur-sm">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#FF8A3D]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#FF8A3D]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#3b142b] mb-1">Effortless Differentiation</h3>
                    <p className="text-[#3b142b]">Generate multiple versions of resources with a single click</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#f2efda]/50 rounded-xl backdrop-blur-sm">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#FF8A3D]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#FF8A3D]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#3b142b] mb-1">Collaborative Teaching</h3>
                    <p className="text-[#3b142b]">Enhance teamwork between general education and intervention specialists</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-2 h-full flex items-center justify-center">
              <div className="w-full max-w-md mx-auto" style={{ height: '400px' }}>
                <Animation 
                  url="https://rive.app/s/nqGV8E8O7ESkpC107PNyTw/embed"
                  width="100%"
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 3 - Standards & Curriculum */}
      <section className="w-full bg-[#f2efda] py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#3b142b] mb-6">
              Align with Your Standards & Curriculum
            </h2>
            <p className="text-xl text-[#3b142b] max-w-3xl mx-auto">
              Ensure your instructional materials meet the highest standards of quality and alignment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 h-full flex items-center justify-center">
              <div className="w-full max-w-md mx-auto" style={{ height: '400px' }}>
                <Animation 
                  url="https://rive.app/s/lORBuysPe0ip1cSR5uNWEQ/embed"
                  width="100%"
                  height={400}
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#FF8A3D]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#FF8A3D]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#3b142b] mb-1">Comprehensive Resource Library</h3>
                    <p className="text-[#3b142b]">Access thousands of customizable, standards-aligned resources</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#FF8A3D]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#FF8A3D]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#3b142b] mb-1">AI-Enhanced Insights</h3>
                    <p className="text-[#3b142b]">Receive actionable data on standards mastery and student progress</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#FF8A3D]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#FF8A3D]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#3b142b] mb-1">Curriculum Mapping</h3>
                    <p className="text-[#3b142b]">Easily find and assign resources that align with your specific curriculum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SchoolDistrictFeatures;
