import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-ink py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="eyebrow text-gold mb-3 text-center">Get in touch</p>
        <h2 className="font-display font-semibold text-3xl md:text-4xl text-white text-center mb-4">
          Let's connect
        </h2>
        <p className="text-white/60 font-body text-center max-w-lg mx-auto mb-12 text-sm md:text-base">
          Have a business to add to the network, or want to explore a partnership?
          Send a message below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10">
          {/* Direct contact info */}
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-white/80">
              <i className="bi bi-envelope-fill text-gold text-lg" />
              <span className="break-all text-sm font-body">
                maryalasanthosh.hr@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-3 text-white/80 text-sm font-body">
              <i className="bi bi-telephone-fill text-gold text-lg" />
              <a href="tel:+917036089669" className="hover:text-gold transition">
                +91 7036089669
              </a>
              <span className="text-white/30">/</span>
              <a href="tel:+918886089669" className="hover:text-gold transition">
                +91 8886089669
              </a>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs uppercase tracking-wide text-white/50 mb-2 font-mono">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-gold/60 transition"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wide text-white/50 mb-2 font-mono">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-gold/60 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wide text-white/50 mb-2 font-mono">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-gold/60 transition"
              />
            </div>

            <button
              type="submit"
              className="bg-gold text-ink px-8 py-3 rounded-full font-semibold text-sm hover:bg-goldsoft transition shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
