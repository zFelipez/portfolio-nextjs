import { DashboardContainer } from "./_components/dashboard-container";
import { ContainerItems } from "./_components/container-items";

export default function Dashboard() {
  const overview = [
    {
      name: "Projects",
      value: "0",
    },
    {
      name: "Active",
      value: "0",
    },
    {
      name: "Inactive",
      value: "0",
    },
    {
      name: "Last Update",
      value: "ha 0 dias",
    },
  ];

  const activities = [
    {
      name: "Projeto criado",
      value: "Portfolio v2",
    },
    {
      name: "Último deploy",
      value: "há 2 horas",
    },
    {
      name: "Commit recente",
      value: "fix: dashboard layout",
    },
    {
      name: "Pull request",
      value: "aberta",
    },
  ];

   const highlights = [
    {
      name: "Projetos ativos",
      value: 5,
    },
    {
      name: "Commits este mês",
      value: 42,
    },
    {
      name: "Tecnologias",
      value: 8,
    },
    {
      name: "Último acesso",
      value: "hoje",
    },
  ];

  return (
    <div className=" page-pattern   w-full  p-4">
      <div className="bg-background w-full h-[600px] max-sm:w-[90%] shadow-sm">
        <div className="flex flex-col  h-full gap-2 p-2">
          <h1 className="text-secondary w-full text-center text-2xl bg-primary p-2 ">
            Home Dashboard
          </h1>

          <div className="flex-1 w-full bg-primary flex  max-sm:flex-col gap-2 p-2 overflow-y-auto scrollbar">
            <DashboardContainer title="Overview">
              {" "}
              <ContainerItems data={overview} />
            </DashboardContainer>
            <DashboardContainer title="Activity">
              {" "}
              <ContainerItems data={activities} />
            </DashboardContainer>
            <DashboardContainer title="Highlights">
              {" "}
              <ContainerItems data={highlights} />
            </DashboardContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
