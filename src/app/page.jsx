import Image from "next/image";

const Homepage = () =>
{
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* IMAGE CONTINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/hero.png" alt="hero image" fill className="object-contain" />
      </div>
      {/* TEXT CONTINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold">Crafting Digital Experiences, Designing Tomorrow.</h1>
        {/* DESCRIPTION */}
        <p className="">Welcome to my digital canvas, where innovation and creativity merge. With a keen eye for aesthetics and a focus on user experience, I bring a unique perspective to every project.</p>
        {/* BUTTONS */}
        <div className="w-full flex gap-4">
          <button className='p-4 rounded-lg ring-1 ring-black bg-black text-white'>View My Work</button>
          <button className='p-4 rounded-lg ring-1 ring-black'>Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
