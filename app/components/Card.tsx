interface CountryCardProps {
  name: string;
  capital: string;
  population: string;
  language: string;
}

const CountryCard = ({
  name,
  capital,
  population,
  language,
}: CountryCardProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-sm w-full bg-white rounded-lg shadow-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{name}</h2>
        <p className="text-gray-600">
          <span className="font-semibold">Capital:</span> {capital}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Population:</span> {population.toLocaleString()}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Language:</span> {language}
        </p>
      </div>
    </div>
  );
};

export default CountryCard
