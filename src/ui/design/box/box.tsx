import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  clasName?: string;
}

export const Box = ({ children, clasName }: Props) => {
  return (
    <div className={clsx("w-full h-full border rounded px-4 py-3", clasName)}>
      {children}
    </div>
  );
};
