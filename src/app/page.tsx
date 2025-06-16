import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  openGraph: {
    title: 'Tentang Saya',
    description: 'Halaman tentang saya.',
    images: "/images/profile.jpg", 
    url: "https://example.com/about",
  },
};

export default function About({metadata}: any) {
  return (
    <div className="mt-16 px-8 flex flex-col items-center text-center min-h-screen py-10">
      <header className="mb-6">
        <h1 className="font-bold text-5xl text-zinc-800">Tentang Saya</h1>
      </header>
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center mt-6">
        <Image
          src="/images/profile.jpg"
          alt="Foto Profil"
          width={150}
          height={150}
          className="rounded-full border-4 border-zinc-300 shadow-lg"
        />
        <h2 className="text-2xl font-semibold mt-4 text-zinc-800">Raden Ariq Resya Alauddine</h2>
        <p className="mt-2 text-lg text-zinc-600 max-w-lg">
          Saya adalah seorang pengembang web
        </p>
      </div>
    </div>
  );
}