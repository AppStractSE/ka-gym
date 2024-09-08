import { questionsAndAnswers } from "@/data/q&a";
import Accordion from "../accordion/Accordion";

const FAQSection = () => {
  return (
    <section className="my-12 w-full px-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex max-w-xl flex-col gap-6 transition-all duration-200 ease-in-out">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Frågor och svar
          </h2>
          <div className="space-y-8">
            {questionsAndAnswers.map((qa, index) => (
              <Accordion key={index} title={qa.question} content={qa.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
