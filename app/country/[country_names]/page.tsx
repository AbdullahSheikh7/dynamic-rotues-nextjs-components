import BackButton from "@/app/components/BackButton";
import CountryCard from "@/app/components/Card";

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
