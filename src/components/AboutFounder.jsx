import React from 'react';

const AboutFounder = () => {
  return (
    <section id="about" className="bg-paper py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="eyebrow text-teal mb-3">About the Founder</p>
        <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink mb-10 max-w-2xl">
          A strategist's mind, a psychologist's read on people.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-10 items-start">
          <div className="border-l-2 border-gold pl-6">
            <p className="font-display italic text-xl text-ink leading-snug">
              "Business strategy means little without an understanding of the people
              behind it."
            </p>
            <p className="mt-4 text-sm text-slate-soft font-body">— Santhosh Maryala</p>
          </div>

          <div className="space-y-4 text-slate font-body text-base leading-relaxed text-justify">
            <p>
              Santhosh Maryala is a dynamic serial entrepreneur committed to driving
              innovation, employment generation, and national economic progress. With a
              strong academic foundation, he earned an MBA in HR and Finance from
              Osmania University and an MSc in Psychology from Kakatiya University.
            </p>
            <p>
              This unique combination of disciplines allows him to merge business
              strategy with a deep understanding of human behavior — an approach that
              shapes his leadership and business philosophy. Inspired by his mentor,
              Dr. Narsin Vijaya, Santhosh embarked on a journey to create ventures that
              contribute meaningfully to India's GDP and empower individuals through
              sustainable employment opportunities.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="border border-paper-line rounded-xl p-4 bg-white">
                <p className="eyebrow text-gold mb-1">Education</p>
                <p className="text-sm font-semibold text-ink">MBA — HR & Finance</p>
                <p className="text-xs text-slate-soft">Osmania University</p>
              </div>
              <div className="border border-paper-line rounded-xl p-4 bg-white">
                <p className="eyebrow text-gold mb-1">Education</p>
                <p className="text-sm font-semibold text-ink">MSc — Psychology</p>
                <p className="text-xs text-slate-soft">Kakatiya University</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
