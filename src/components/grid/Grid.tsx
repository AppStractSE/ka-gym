interface Props {
  children: React.ReactNode;
}
const Grid = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-2 md:grid-cols-4 md:grid-rows-3 [&>*]:overflow-hidden [&>*]:rounded-sm">
      {children}
    </div>
  );
};

export default Grid;
