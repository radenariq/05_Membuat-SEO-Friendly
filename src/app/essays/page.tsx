import Link from 'next/link';
import Image from 'next/image';

export default function Essays() {
  const metadata = {
    title: "Esai | Artikel Teknologi & Rekayasa Perangkat Lunak",
    description: "Berisi artikel menarik tentang pengembangan teknologi informasi.",
    openGraph: {
      url: "https://yourwebsite.com/essays",
      images: ["/images/artikel1.jpg", "/images/artikel2.jpg"]
    }
  };

  const articles = [
    {
      title: "How to Create Studio Ghibli-Inspired Images for Free Without ChatGPT",
      date: "30 Maret 2025",
      image: "/images/artikel1.jpg",
      link: "https://liveindia.tv/lifestyle/how-to-create-studio-ghibli-inspired-images-for-free-without-chatgpt/"
    },
    {
      title: "DeepSeek Explained: What Is It and Is It Safe To Use?",
      date: "31 Januari 2025",
      image: "/images/artikel2.jpg",
      link: "https://ai.nd.edu/news/deepseek-explained-what-is-it-and-is-it-safe-to-use/"
    }
  ];

  return (
    <div className="mt-16 px-8">
      <h1 className="font-bold text-4xl text-zinc-800 mb-6">Esai</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="border rounded-lg shadow-lg bg-white overflow-hidden">
            <Link href={article.link}>
              <Image 
                src={article.image} 
                alt={article.title} 
                width={500} 
                height={300} 
                className="w-full h-48 object-cover cursor-pointer"
              />
            </Link>
            <div className="p-4">
              <Link href={article.link}>
                <h2 className="text-xl font-semibold text-zinc-700 hover:text-teal-500 cursor-pointer">{article.title}</h2>
              </Link>
              <p className="text-sm text-zinc-500 mt-3">{article.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
