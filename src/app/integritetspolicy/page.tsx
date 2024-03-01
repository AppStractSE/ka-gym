import { IntegrityPolicyQuestions } from "./data";

const page = () => {
  return (
    <>
      <section className="relative flex w-full items-center bg-[url('/legpress.png')] bg-cover bg-center px-4 md:min-h-[70vh]">
        <div className="overlay" />
        <div className="relative flex-1 max-w-6xl py-24 mx-auto space-y-12">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-vanilla-powder-500 md:text-6xl">
              Integritetspolicy
            </h1>
            <p className="text-lg font-medium whitespace-pre-line text-vanilla-powder-500 md:w-1/2 md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              sapiente cupiditate consectetur, ex libero sint ut amet
              repudiandae cum distinctio officia, debitis facere fugiat rerum
              deserunt itaque excepturi commodi labore?
            </p>
          </div>
        </div>
      </section>
      <section className="w-full px-4 my-6">
        <div className="max-w-6xl py-8 mx-auto lg:py-12">
          {IntegrityPolicyQuestions.map((question, index) => (
            <div className="md:max-w-xl" key={question.question}>
              <h4 className="mb-4 text-2xl font-semibold text-night-500 md:text-4xl">
                {index + 1}. {question.question}
              </h4>
              <h6 className="mb-8 text-base font-normal whitespace-pre-line text-night-500 md:text-xl">
                {question.answer}
              </h6>
            </div>
          ))}
        </div>
      </section>
      {/* <section className="w-full px-4 my-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <div className="px-4 py-8 rounded-md basis-1/2 bg-vanilla-powder-600 lg:px-8 lg:py-12">
              <h4 className="mb-4 text-2xl font-medium text-night-500 md:text-4xl">
                Vilka personuppgifter behandlar vi och varför?
              </h4>
              <h6 className="mb-8 text-base font-medium whitespace-pre-line text-night-500 md:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, facere soluta, obcaecati reprehenderit amet voluptate
                modi eaque accusamus maiores fugiat voluptatum. Asperiores nisi
                voluptatum magni perspiciatis quibusdam qui fugiat natus. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Voluptates
                sit maiores vero eaque veritatis non laudantium id, explicabo
                tenetur repellat modi praesentium porro? Obcaecati placeat earum
                recusandae saepe. Ipsum, ducimus.
              </h6>
            </div>
            <div className="px-4 py-8 rounded-md basis-1/2 bg-vanilla-powder-600 lg:px-8 lg:py-12">
              <h4 className="mb-4 text-2xl font-medium text-night-500 md:text-4xl">
                Vilka personuppgifter behandlar vi och varför?
              </h4>
              <h6 className="mb-8 text-base font-medium whitespace-pre-line text-night-500 md:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, facere soluta, obcaecati reprehenderit amet voluptate
                modi eaque accusamus maiores fugiat voluptatum. Asperiores nisi
                voluptatum magni perspiciatis quibusdam qui fugiat natus. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Voluptates
                sit maiores vero eaque veritatis non laudantium id, explicabo
                tenetur repellat modi praesentium porro? Obcaecati placeat earum
                recusandae saepe. Ipsum, ducimus.
              </h6>
            </div>
          </div>
          <div className="max-w-6xl px-4 py-8 mx-auto mt-4 rounded-md basis-1/1 bg-vanilla-powder-600 lg:px-8 lg:py-12">
            <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row md:gap-8">
              <div className="md:max-w-lg">
                <h4 className="mb-4 text-2xl font-medium text-night-500 md:text-4xl">
                  Vilka personuppgifter behandlar vi och varför?
                </h4>
                <h6 className="mb-8 text-base font-medium whitespace-pre-line text-night-500 md:text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, facere soluta, obcaecati reprehenderit amet
                  voluptate modi eaque accusamus maiores fugiat voluptatum.
                  Asperiores nisi voluptatum magni perspiciatis quibusdam qui
                  fugiat natus. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Voluptates sit maiores vero eaque veritatis
                  non laudantium id, explicabo tenetur repellat modi praesentium
                  porro? Obcaecati placeat earum recusandae saepe. Ipsum,
                  ducimus.
                </h6>
              </div>
              <div className="md:max-w-md">
                <img src="https://85158a7b9e.clvaw-cdnwnd.com/d2564caf77c7232d079ab0cfb3a6eb82/200000220-ac896ac89b/100.webp?ph=85158a7b9e" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default page;
