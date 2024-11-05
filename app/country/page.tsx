import BackButton from '../components/BackButton';
import Link from 'next/link';

const Country = () => {
  return (
    <>
      <BackButton />
      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 text-gray-800">

        <h1 className="text-4xl font-extrabold text-blue-900 mb-6">Welcome to Countries Info</h1>
        
        <div className="flex space-x-4 text-lg font-semibold mb-8">
          <Link href="/country/pakistan" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300">
            Pakistan
          </Link>

          <Link href="/country/india" className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition duration-300">
            India
          </Link>

          <Link href="/country/usa" className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition duration-300">
            USA
          </Link>

          <Link href="/country/france" className="px-4 py-2 rounded-lg bg-pink-600 text-white hover:bg-purple-700 transition duration-300">
            France
          </Link>

          <Link href="/country/germany" className="px-4 py-2 rounded-lg bg-yellow-600 text-white hover:bg-purple-700 transition duration-300">
            Germany
          </Link>
        </div>

        <p className="text-center text-gray-600 max-w-xl">
          Explore more details about various countries.
        </p>
      </div>
    </>
  );
}

export default Country
