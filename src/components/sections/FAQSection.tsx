import { questionsAndAnswers } from "@/data/q&a";
import Accordion from "../accordion/Accordion";

const FAQSection = () => {
  return (
    <section className="my-12 w-full px-4 md:my-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex-col transition-all duration-200 ease-in-out">
          <h2 className="mb-8 text-2xl font-medium md:text-4xl">
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
