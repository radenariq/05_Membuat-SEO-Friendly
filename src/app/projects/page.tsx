import Image, { StaticImageData } from 'next/image';
import image1 from '../../../public/images/projek1.png';
import image2 from '../../../public/images/projek2.png';
import image3 from '../../../public/images/projek3.png';


type ProjectItemProps = { 
    name: string;
    url: string;
    urlDisplay: string;
    imageSrc: StaticImageData;
  };
  
  function ProjectItem({ name, url, urlDisplay, imageSrc }: ProjectItemProps) {
    return (
      <li>
        <a href={url}>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="w-full flex justify-center mt-6">
              <Image src={imageSrc} alt={name} width={250} height={250} className="object-contain" />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{name}</div>
            </div>
            <div className="px-6 pb-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {urlDisplay}
              </span>
            </div>
          </div>
        </a>
      </li>
    );
  }
  
  export default function Projects() {
    return (
      <div className="mt-16 px-8">
        <header>
          <h1 className="font-bold text-4xl text-zinc-800">Proyek Saya</h1>
          <p className="text-base mt-6 text-zinc-600">
            Berikut adalah beberapa proyek yang telah saya kerjakan.
          </p>
        </header>
        <div className="mt-13">
          <h2 className="text-2xl">Aplikasi</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mt-8">
            <ProjectItem 
              name="Aplikasi 1" 
              url="https://example.com" 
              urlDisplay="My Apple" 
              imageSrc={image1} 
            />
            <ProjectItem 
              name="Aplikasi 2" 
              url="https://example.com" 
              urlDisplay="Invetaris JTI" 
              imageSrc={image2} 
            />
            <ProjectItem 
              name="Aplikasi 3" 
              url="https://example.com" 
              urlDisplay="RWKu" 
              imageSrc={image3} 
            />
          </ul>
        </div>
      </div>
    );
  }
  