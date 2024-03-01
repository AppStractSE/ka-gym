import { IntegrityPolicyQuestions } from "./data";

const page = () => {
  return (
    <>
      <section className="relative flex w-full items-center bg-[url('/legpress.png')] bg-cover bg-center px-4 md:min-h-[70vh]">
        <div className="bg-night-500 absolute inset-0 bg-opacity-60" />
        <div className="relative mx-auto max-w-6xl flex-1 space-y-12 py-24">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-vanilla-powder-500 md:text-6xl">
              Integritetspolicy
            </h1>
            <p className="whitespace-pre-line text-lg font-medium text-vanilla-powder-500 md:w-1/2 md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              sapiente cupiditate consectetur, ex libero sint ut amet
              repudiandae cum distinctio officia, debitis facere fugiat rerum
              deserunt itaque excepturi commodi labore?
            </p>
          </div>
        </div>
      </section>
      <section className="my-6 w-full px-4">
        <div className="mx-auto max-w-6xl py-8 lg:py-12">
          {IntegrityPolicyQuestions.map((question, index) => (
            <div className="md:max-w-xl" key={question.question}>
              <h4 className="text-night-500 mb-4 text-2xl font-semibold md:text-4xl">
                {index + 1}. {question.question}
              </h4>
              <h6 className="text-night-500 mb-8 whitespace-pre-line text-base font-normal md:text-xl">
                {question.answer}
              </h6>
            </div>
          ))}
        </div>
      </section>
      <section className="my-6 w-full px-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <div className="basis-1/2 rounded-md bg-vanilla-powder-600 px-4 py-8 lg:px-8 lg:py-12">
              <h4 className="text-night-500 mb-4 text-2xl font-medium md:text-4xl">
                Vilka personuppgifter behandlar vi och varför?
              </h4>
              <h6 className="text-night-500 mb-8 whitespace-pre-line text-base font-medium md:text-xl">
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
            <div className="basis-1/2 rounded-md bg-vanilla-powder-600 px-4 py-8 lg:px-8 lg:py-12">
              <h4 className="text-night-500 mb-4 text-2xl font-medium md:text-4xl">
                Vilka personuppgifter behandlar vi och varför?
              </h4>
              <h6 className="text-night-500 mb-8 whitespace-pre-line text-base font-medium md:text-xl">
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
          <div className="basis-1/1 mx-auto mt-4 max-w-6xl rounded-md bg-vanilla-powder-600 px-4 py-8 lg:px-8 lg:py-12">
            <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row md:gap-8">
              <div className="md:max-w-lg">
                <h4 className="text-night-500 mb-4 text-2xl font-medium md:text-4xl">
                  Vilka personuppgifter behandlar vi och varför?
                </h4>
                <h6 className="text-night-500 mb-8 whitespace-pre-line text-base font-medium md:text-xl">
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
      </section>
    </>
  );
};

export default page;
