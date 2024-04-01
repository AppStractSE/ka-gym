interface Props {
  title: string;
  image: string;
}
const SubpageHeader = ({ title, image }: Props) => {
  return (
    <section
      className={`relative flex w-full items-center ${image} min-h-[50vh] bg-cover bg-center px-4 md:min-h-[70vh]`}
    >
      <div className="overlay" />
      <div className="relative mx-auto max-w-6xl flex-1 space-y-12 py-24">
        <h1 className="text-center text-3xl font-bold text-vanilla-powder-500 md:text-6xl">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default SubpageHeader;
