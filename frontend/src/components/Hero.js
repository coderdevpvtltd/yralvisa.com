import { FiSearch } from 'react-icons/fi';

export default function Hero() {
  return (
    <div className="bg-secondary text-white px-5 pb-10 pt-4 md:px-12 md:pb-20 text-center relative">
      <div className="max-w-7xl mx-auto px-4">
        <p className="mb-3 text-center text-lg font-semibold text-[#4EFF22]">99.2% visas on time</p>
        <h1 className="text-center text-3xl font-bold text-white md:text-5xl">
          Get Your Visa on Time with Atlys
        </h1>
        <div className="max-w-2xl mx-auto absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-full px-4">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              id="main-hero-search-bar"
              type="text"
              placeholder="Where to?"
              className="w-full py-4 px-12 rounded-md border-4 border-primary text-black focus:outline-none focus:ring-2 shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}