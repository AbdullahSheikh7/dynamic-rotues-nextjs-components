import BackButton from "@/app/components/BackButton";

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

const CountryName = ({ params }: { params: { country_names: string } }) => {
  const countries: {
    [key: string]: {
      name: string;
      capital: string;
      population: string;
      language: string;
    };
  } = {
    pakistan: {
      name: "Pakistan",
      capital: "Islamabad",
      population: "220 million",
      language: "Urdu",
    },
    india: {
      name: "India",
      capital: "New Delhi",
      population: "1.3 billion",
      language: "Hindi",
    },
    usa: {
      name: "United States",
      capital: "Washington, D.C.",
      population: "331 million",
      language: "English",
    },
    france: {
      name: "France",
      capital: "Paris",
      population: "67 million",
      language: "French",
    },
    germany: {
      name: "Germany",
      capital: "Berlin",
      population: "83 million",
      language: "German",
    },
  };

  if (Object.keys(countries).includes(params.country_names)) {
    const country = countries[params.country_names];

    return (
      <>
        <BackButton to="/country" />

        <CountryCard
          name={country.name}
          capital={country.capital}
          population={country.population}
          language={country.language}
        />
      </>
    );
  } else {
    return (
      <div>
        <h1 className="text-3xl font-bold">Country not found</h1>
      </div>
    );
  }
};

export default CountryName;
