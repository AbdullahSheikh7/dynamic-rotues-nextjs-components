import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 text-gray-800">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-6">Welcome to the Home Page</h1>
      
      <div className="flex space-x-4 text-lg font-semibold mb-8">
        <Link href="/about" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300">
          ABOUT
        </Link>
        <Link href="/contact" className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition duration-300">
          CONTACT
        </Link>
        <Link href="/country" className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition duration-300">
          COUNTRY
        </Link>
      </div>

      <p className="text-center text-gray-600 max-w-xl">
        Explore our website to learn more about us, get in touch, or dive into details about various countries.
      </p>
    </div>
  );
}

export default Home
