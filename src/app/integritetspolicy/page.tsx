import SubpageHeader from "@/components/sections/SubpageHeader";
import { IntegrityPolicyQuestions } from "./data";

const page = () => {
  return (
    <>
      <SubpageHeader title="Integritetspolicy" image="bg-[url('/row.png')]" />
      <section className="my-12 w-full px-4">
        <div className="mx-auto max-w-6xl">
          {IntegrityPolicyQuestions.map((question, index) => (
            <div className="md:max-w-xl" key={question.question}>
              <h4 className="mb-2 text-2xl font-medium md:text-4xl">
                {index + 1}. {question.question}
              </h4>
              <h6 className="mb-8 whitespace-pre-line text-base font-normal md:text-xl">
                {question.answer}
              </h6>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
