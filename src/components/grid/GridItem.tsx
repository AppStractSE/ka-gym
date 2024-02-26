import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  index: number;
  arrayLength: number;
}

const GridItem = ({ src, alt, index, arrayLength }: Props) => {
  const isRowSpan2 =
    index % arrayLength === 0 ||
    index % arrayLength === 3 ||
    index % arrayLength === 4;
  const rowSpan = isRowSpan2 ? "md:row-span-2" : "md:row-span-1";

  return (
    <div className={`col-span-1 ${rowSpan}`}>
      <Image
        src={src}
        alt={alt}
        className="h-full object-cover"
        width={768}
        height={768}
        priority
      />
    </div>
  );
};

export default GridItem;
