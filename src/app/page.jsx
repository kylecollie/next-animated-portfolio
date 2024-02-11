import Image from "next/image";

const Homepage = () =>
{
  return <div className="h-full flex flex-col">
    {/* IMAGE CONTINER */}
    <div className="h-1/2 relative">
      <Image src="/hero.png" alt="hero image" fill className="object-contain" />
    </div>
    {/* TEXT CONTINER */}
    <div className="h-1/2">
      {/* TITLE */}
      <h1>Crafting Digital Experiences, Designing Tomorrow.</h1>
      {/* DESCRIPTION */}
      <p>Welcome to my digital canvas, where innovation and creativity merge. With a keen eye for aesthetics and a focus on user experience, I bring a unique perspective to every project.</p>
    </div>
  </div>;
};

export default Homepage;
