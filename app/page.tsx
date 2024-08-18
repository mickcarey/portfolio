import ContactForm from "@/components/ContactForm";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <>
      <Section anchor="home">Home</Section>
      <Section anchor="portfolio">Portfolio</Section>
      <Section anchor="skills">Skills</Section>

      <Section anchor="contact">
        <h2 className="text-center font-bold">Contact</h2>
        <div className="md:flex">
          <div className="flex items-center p-4 justify-center md:w-1/2">
            0434 497 587
          </div>
          <div className="flex w-full p-4 md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
