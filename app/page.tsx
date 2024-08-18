import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="min-h-screen relative">
        <a id="home" className="absolute -top-[70px]"></a>
        Hero
      </section>
      <section className="min-h-screen relative">
        <a id="portfolio" className="absolute -top-[70px]"></a>
        Portfolio
      </section>
      <section className="min-h-screen relative">
        <a id="skills" className="absolute -top-[70px]"></a>
        Skills
      </section>
      <section className="min-h-screen relative">
        <a id="contact" className="absolute -top-[70px]"></a>
        Contact
      </section>
    </>
  );
}
