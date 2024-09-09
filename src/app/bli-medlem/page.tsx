import AntiDopingInfoSection from "@/components/sections/AntiDopingInfoSection";
import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";
import SubpageHeader from "@/components/sections/SubpageHeader";

const page = () => {
  return (
    <>
      <SubpageHeader title="Bli medlem" image="bg-[url('/dumbbellroom.png')]" />
      <section className="w-full px-4 my-12">
        <div className="max-w-6xl mx-auto">
          <h4 className="mb-4 text-2xl font-medium text-night-500 md:text-4xl">
            Kom och bli stark med oss
          </h4>
          <p className="max-w-2xl text-base whitespace-pre-line md:text-lg">
            Vår filosofi är att alla ska känna sig välkomna och bli inspirerad
            till ett hälsosammare liv, där du kan träna i din egen takt och
            samtidigt njuta av den positiva atmosfären.{"\n\n"}Kom och bli en del
            av vår gemenskap och upplev hur det är att träna i en välkomnande
            och inkluderande miljö!
          </p>
        </div>
      </section>
      <ContactSection />
      <FAQSection />
      <AntiDopingInfoSection />
    </>
  );
};

export default page;
