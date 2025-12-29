import { Button} from "@/components/ui/button";
import { Download } from "lucide-react";

export function DownloadCVButton() {
  return (
    <Button>
      
        <a href="/me.jpeg" download  className=" flex gap-2 items-center justify-centerbg-white ">
          <Download className="  text-blue-tech text-2xl  "></Download>
          Baixar Curriculo
        </a>
     
    </Button>
  );
}
