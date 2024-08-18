import Section from "@/components/Section";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Section anchor="home">Home</Section>
      <Section anchor="portfolio">Portfolio</Section>
      <Section anchor="skills">Skills</Section>

      <Section anchor="contact">
        <h2 className="text-center font-bold">Contact</h2>
        <div>
          <form>
            <div>
              <input type="text" name="name" id="name" />
            </div>
            <div>
              <input type="text" name="phone" id="phone" />
            </div>
            <div>
              <input type="text" name="subject" id="subject" />
            </div>
            <div>
              <textarea name="message" id="message"></textarea>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}
