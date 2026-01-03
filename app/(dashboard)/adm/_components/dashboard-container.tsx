type DashboardContainerProps = {
  title: string;
  children: React.ReactNode;
};

export function DashboardContainer({
  title,
  children,
}: DashboardContainerProps) {
  return (
    <div className="  bg-background  flex-1  min-h-[200px] flex flex-col p-4   overflow-y-auto ">
      <h2 className="text-2xl text-secondary font-bold text-center p-4">
        {title}
      </h2>
      <div className=" flex w-full h-full justify-center pt-4">{children}</div>
    </div>
  );
}
