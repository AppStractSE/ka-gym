import Image from "next/image";
const page = () => {
  return (
    <section className="w-full bg-vanilla-powder-500 px-4 text-night-500">
      <div className="mx-auto max-w-6xl py-12">
        <div className="grid grid-cols-4 grid-rows-3 gap-2 [&>*]:overflow-hidden [&>*]:rounded-sm ">
          <div className="col-span-1 row-span-2">
            <Image
              src="/hero-header.png"
              alt=""
              className="h-full object-cover"
              width={1280}
              height={1280}
              priority
            />
          </div>
          <div className="col-span-1 row-span-1">
            <Image
              src="/row.png"
              alt=""
              className="h-full object-cover"
              width={1280}
              height={1280}
              priority
            />
          </div>
          <div className="col-span-1 row-span-1">
            <Image
              src="/legpress.png"
              alt=""
              className="h-full object-cover"
              width={1280}
              height={1280}
              priority
            />
          </div>
          <div className="col-span-1 row-span-2">
            <Image
              src="/hacksquat.png"
              alt=""
              className="h-full object-cover"
              width={1280}
              height={1280}
              priority
            />
          </div>
          <div className="col-span-1 row-span-1">
            <Image
              src="/cardio.png"
              alt=""
              className="h-full object-cover"
              width={1280}
              height={1280}
              priority
            />
          </div>
          <div className="col-span-1 row-span-2">
            <Image
              src="/squatrack.png"
              alt=""
              className="h-full object-cover"
              width={1280}
              height={1280}
              priority
            />
          </div>
          <div className="col-span-1 row-span-1">
            <Image
              src="/bench.png"
              alt=""
              className="h-full object-cover"
              width={1280}
              height={1280}
              priority
            />
          </div>
          <div className="col-span-1 row-span-1">
            <Image
              src="/tryon.png"
              alt=""
              className="h-full object-cover"
              width={1280}
              height={1280}
              priority
            />
          </div>
          <div className="col-span-1 row-span-1">
            <Image
              src="/dumbbellroom.png"
              alt=""
              className="h-full object-cover"
              width={1280}
              height={1280}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
