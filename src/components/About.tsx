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
              HighDesign Agency specializes in branding, digital experiences, and innovative design. 
              We not only provide high-quality creative services, but also outsource top talents 
              for U.S. and global companies.
            </p>
            
            <p className="text-lg text-black/70 leading-relaxed">
              By doing so, we support tech in Africa and create employment opportunities 
              for great minds all over the world.
            </p>
          </div>

          {/* Mission Highlight */}
          <div className="bg-black/5 p-8 rounded-2xl mt-12 animate-fade-up [animation-delay:0.4s]">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
              <p className="text-lg text-black/70 leading-relaxed">
                Bridging the gap between exceptional global talent and innovative companies, 
                while fostering growth and opportunity across continents.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-up [animation-delay:0.6s]">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal mb-2">50+</div>
              <div className="text-black/60">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal mb-2">15+</div>
              <div className="text-black/60">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal mb-2">100+</div>
              <div className="text-black/60">Talents Connected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal mb-2">5+</div>
              <div className="text-black/60">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;