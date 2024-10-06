import GameMechanicsSVG from '../assets/mech.svg';
import VisualEffectsSVG from '../assets/visualeffects.svg';
import GameBalancingSVG from '../assets/balancing.svg';
import CrossPlatformDevSVG from '../assets/crossplatform.svg';

const features = [
  {
    title: 'Game Mechanics',
    description: 'Master physics, collision detection, AI, and game loops.',
    svg: GameMechanicsSVG,
    bgColor: 'bg-gray-100', // light grey background
  },
  {
    title: 'Visual Effects',
    description: 'Create 2D/3D graphics and animations.',
    svg: VisualEffectsSVG,
    bgColor: 'bg-gray-100',
  },
  {
    title: 'Game Balancing',
    description: 'Balance difficulty and progression.',
    svg: GameBalancingSVG,
    bgColor: 'bg-gray-100',
  },
  {
    title: 'Cross-Platform Dev',
    description: 'Deploy games on PC, web, and mobile.',
    svg: CrossPlatformDevSVG,
    bgColor: 'bg-gray-100',
  },
];

const Features = () => {
  return (
    <div className="p-8">
      {/* Align the heading to the left */}
      <h2 className="text-3xl font-bold mb-6 text-left">Workshop Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-lg shadow-lg ${feature.bgColor}`}
            style={{ minHeight: '220px', maxWidth: '700px' }} // Adjust the maxWidth here
          >
            {/* SVG placed at the top-right, increased size */}
            <img
              src={feature.svg}
              alt={feature.title}
              className="absolute top-0 right-0 w-56 h-54 m-4" // Size of the SVG
              style={{ transform: 'translate(7%, -13%)' }} // Ensure the SVG stays within the card
            />
            {/* Text placed at the bottom-left */}
            <div className="absolute bottom-6 left-6 md:bottom-6 sm:bottom-0"> {/* Adjust text lower for small screens */}
              <h3 className="text-xl font-semibold mb-2 text-left">{feature.title}</h3>
              <p className="text-gray-600 text-left">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
