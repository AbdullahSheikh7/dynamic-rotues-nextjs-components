"use client"

import { useRouter } from 'next/navigation';

const BackButton = ({ to }: { to?: string }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(to ? to : "/")}
      className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-200"
    >
      Back
    </button>
  );
}

export default BackButton
