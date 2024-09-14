import Link from "next/link";

const AntiDopingInfoSection = () => {
  return (
    <section className="w-full bg-red-600 p-4 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex gap-6 transition-all duration-200 ease-in-out md:flex-row md:items-center md:gap-6">
          <p className="whitespace-pre-line text-sm">
            {`Karl-Alfred Gym följer metoden "100% ren hårdträning". Läs vår`}{" "}
            <Link
              href="/antidopingpolicy"
              target="_blank"
              className="font-outfit underline underline-offset-4"
            >
              antidopingpolicy
            </Link>{" "}
            för mer information kring hur vi arbetar med detta.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AntiDopingInfoSection;
