import Accordion from "@/components/accordion/Accordion";
import ContactForm from "@/components/form/ContactForm";
import SubpageHeader from "@/components/sections/SubpageHeader";
import { questionsAndAnswers } from "@/data/q&a";
import { GrLocationPin } from "react-icons/gr";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

const page = () => {
  return (
    <>
      <SubpageHeader title="Bli medlem" image="bg-[url('/dumbbellroom.png')]" />
      <section className="my-12 w-full px-4">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Vill du bli medlem?
            </h2>
            <p className="whitespace-pre-line text-base md:text-lg">
              {`Vad kul! Fyll i formuläret så återkommer vi så snart vi kan.\nDet går också bra att ringa, smsa eller maila.`}
            </p>
            <div className="space-y-4">
              <a
                target="_blank"
                href="https://www.google.com/maps/place/Vindelgatan+25B,+504+65+Bor%C3%A5s/@57.7223841,12.9084363,17z/data=!3m1!4b1!4m6!3m5!1s0x465aa75ae2fdef99:0xf54bf212959eeab1!8m2!3d57.7223813!4d12.9110112!16s%2Fg%2F11c5l34jbs?entry=ttu"
                className="block w-fit hover:underline hover:underline-offset-4"
              >
                <div className="flex items-center gap-4">
                  <div className="text-2xl">
                    <GrLocationPin />
                  </div>
                  <div className="font-regular text-lg">
                    Vindelgatan 25B, 504 65 Borås
                  </div>
                </div>
              </a>
              <a
                href="tel:+46709405641"
                className="block w-fit hover:underline hover:underline-offset-4"
              >
                <div className="flex items-center gap-4">
                  <div className="text-2xl">
                    <IoPhonePortraitOutline />
                  </div>
                  <div className="font-regular text-lg">070-940 56 41</div>
                </div>
              </a>
              <a
                href="mailto:info@karlalfredgym.se"
                className="block w-fit hover:underline hover:underline-offset-4"
              >
                <div className="flex items-center gap-4">
                  <div className="text-2xl">
                    <MdOutlineMailOutline />
                  </div>
                  <div className="font-regular text-lg">
                    info@karlalfredgym.se
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Kom i kontakt med oss
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="my-12 w-full px-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex max-w-xl flex-col gap-6 transition-all duration-200 ease-in-out">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Frågor och svar
            </h2>
            <div className="space-y-8">
              {questionsAndAnswers.map((qa, index) => (
                <Accordion
                  key={index}
                  title={qa.question}
                  content={qa.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
