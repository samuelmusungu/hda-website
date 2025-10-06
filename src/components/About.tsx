const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            About <span className="text-gradient">HighDesign Agency</span>
          </h2>
          <div className="w-24 h-1 bg-teal mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center animate-fade-up [animation-delay:0.2s]">
            <p className="text-xl text-black/80 leading-relaxed mb-8">
              HighDesign Agency is a Nairobi-rooted creative studio led by developers and designers who craft cinematic web experiences and authentic brand systems. We work with startups, hospitality brands, and global teams to deliver premium digital solutions.
            </p>

            <p className="text-lg text-black/70 leading-relaxed">
              Alongside our creative work, we connect emerging African talent with global opportunities—supporting tech growth and creative careers across borders.
            </p>
          </div>

          {/* Mission Highlight */}
          <div className="bg-black/5 p-8 rounded-2xl mt-12 animate-fade-up [animation-delay:0.4s]">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
              <p className="text-lg text-black/70 leading-relaxed">
                To build premium digital experiences while empowering creative talent across Africa—bridging local soul with global scale.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-up [animation-delay:0.6s]">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal mb-2">12+</div>
              <div className="text-black/60">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal mb-2">5+</div>
              <div className="text-black/60">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal mb-2">20+</div>
              <div className="text-black/60">Talents Connected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal mb-2">2+</div>
              <div className="text-black/60">Years in Motion</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;