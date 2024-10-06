import Logo from '../assets/logo.svg';  // Replace with actual logo SVG path
import Icon1 from '../assets/icon1.svg';  // Replace with actual icon paths
import Icon2 from '../assets/icon2.svg';
import Icon3 from '../assets/icon3.svg';
import Icon4 from '../assets/icon4.svg';

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-200 font-inter mt-10 px-6 lg:px-12">
        <div className="container mx-auto py-10 flex flex-col md:flex-row justify-between items-start md:space-x-10">
          {/* Left Section: Logo, Heading, Description, Icons */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col max-w-[700px]">
            <div className="flex items-center mb-6">
              <img src={Logo} alt="PyHack Logo" className="w-10 h-auto" />
              <h2 className="ml-4 text-xl font-bold text-gray-600">GFGXPyHack</h2>
            </div>

            <p className="text-sm text-gray-600 mb-8 leading-relaxed text-left">
              PyHack provides a wide range of resources and hands-on experience to help you master Python-based game development.
              Explore new techniques, share your creations, and collaborate with fellow developers. Whether you're looking to
              build indie games or start a career in the gaming industry, PyHack is the place to begin.
            </p>

            <div className="flex space-x-4 mt-auto justify-center md:justify-start">
              <img src={Icon1} alt="Icon 1" className="w-6 h-6" />
              <img src={Icon2} alt="Icon 2" className="w-6 h-6" />
              <img src={Icon3} alt="Icon 3" className="w-6 h-6" />
              <img src={Icon4} alt="Icon 4" className="w-6 h-6" />
            </div>
          </div>

          {/* Right Section: Resources, Developers, Company */}
          <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8">
            {/* Resources Column */}
            <div>
              <h5 className="font-bold text-gray-800 mb-3">Resources</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-800">Brand</a></li>
                <li><a href="#" className="hover:text-gray-800">FAQ</a></li>
                <li><a href="#" className="hover:text-gray-800">Help & Support</a></li>
                <li><a href="#" className="hover:text-gray-800">Governance</a></li>
              </ul>
            </div>

            {/* Developers Column */}
            <div>
              <h5 className="font-bold text-gray-800 mb-3">Developers</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-800">Technical Paper</a></li>
                <li><a href="#" className="hover:text-gray-800">Security</a></li>
                <li><a href="#" className="hover:text-gray-800">Game Design</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h5 className="font-bold text-gray-800 mb-3">Company</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-800">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-800">Terms of Use</a></li>
                <li><a href="#" className="hover:text-gray-800">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Section: Decorative Lines */}
      <div className="mt-0 flex flex-col items-center">
        <div className="h-1 bg-gradient-to-r from-blue-400 via-green-400 to-red-400 w-full"></div>
        <div className="h-1 bg-gradient-to-r from-blue-400 via-green-400 to-red-400 w-3/4 mt-1"></div>
        <div className="h-1 bg-gradient-to-r from-blue-400 via-green-400 to-red-400 w-1/2 mt-1"></div>
      </div>
    </>
  );
};

export default Footer;
