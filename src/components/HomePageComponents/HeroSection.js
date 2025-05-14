const HeroSection = ({ scrolled }) => (
  <div className={`text-center py-8 mt-14 bg-blue-600 text-white transition-all duration-300 
  ${scrolled ? 'pt-4 pb-2' : 'py-16'} relative z-10`}>
    <div className="container mx-auto px-4">
      <p className="text-green-400 mb-2">99.2% visas on time</p>
      <h1 className={`font-bold transition-all duration-300 ${scrolled ? 'text-2xl' : 'text-4xl'}`}>
        Get Your Visa on Time with Atlys
      </h1>
    </div>
  </div>
);

export default HeroSection;
