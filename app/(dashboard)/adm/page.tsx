import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className=" page-pattern   w-full  p-4">
      <div className="bg-background w-full h-[600px] max-sm:w-[90%] shadow-sm">
        <div className="flex flex-col  h-full gap-2 p-2">
          <h1 className="text-secondary w-full text-center bg-primary p-2 ">
            {" "}
            Home Dashboard{" "}
          </h1>
          
          <div className="flex-1 w-full bg-primary flex  max-sm:flex-col gap-2 p-2 overflow-y-auto scrollbar">
            <div className="  bg-background  flex-1  min-h-[200px]"></div>
            <div className="  bg-background  flex-1  min-h-[200px]"></div>
            <div className="  bg-background  flex-1  min-h-[200px]"></div>
             
            
          </div>
        </div>
      </div>
    </div>
  );
}
