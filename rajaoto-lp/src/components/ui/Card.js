import Image from 'next/image';

const Card = ({ title, subtitle, description, image, highlights }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <Image
        src={`/images/${image}`}
        alt={title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-black">{title}</h3>
        <h4 className="text-md font-medium text-gray-600">{subtitle}</h4>
        <p className="text-sm text-gray-500 mt-2">{description}</p>
        <ul className="mt-4 space-y-1">
          {highlights.map((highlight, index) => (
            <li key={index} className="text-sm text-yellow-600">
              - {highlight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;