import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";
import SubpageHeader from "@/components/sections/SubpageHeader";

const page = () => {
  return (
    <>
      <SubpageHeader title="Bli medlem" image="bg-[url('/dumbbellroom.png')]" />
      <ContactSection />
      <FAQSection />
    </>
  );
};

export default page;
