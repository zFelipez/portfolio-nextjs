import { Button } from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";

import Link from "next/link";
 

export function ProjectSection() {
  return (
    <section className=" flex flex-col gap-10 w-full items-center justify-center mb-10">
      <h2 className=" text-2xl text-secondary text-center"> Projeto 1 </h2>
      <div className="rounded-2xl overflow-hidden bg-white max-sm:w-[300px] max-sm:h-[300px] w-[500px] h-[300px]">
        Imagem
      </div>
      <div className=" max-sm:w-[300px] max-w-[500px] max-h-[150px] overflow-y-scroll scrollbar">
        <p className="text-center text-blue-tech text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          eum dignissimos tenetur nesciunt quidem facilis. Eius facere quod,
          dolores, sapiente ipsam accusantium dolore alias quisquam repellendus
          adipisci veniam. Consequatur, sed illum architecto corporis ipsam
          dolorem, placeat necessitatibus quos quia est maxime porro totam
          dolore soluta? Quam odio itaque, magnam voluptatem dolores, quod ex,
          aspernatur cupiditate molestiae ipsum officiis rerum expedita sapiente
          ducimus. Repellat aliquam esse asperiores recusandae, sunt mollitia
          totam necessitatibus veritatis nihil temporibus ex? Deleniti quaerat
          ipsam, sapiente eum aut voluptatibus commodi tenetur similique
          delectus placeat magni consequatur optio et, facere aspernatur omnis
          numquam deserunt molestiae praesentium. Nisi officia modi, ab fuga
          repellendus, nobis aliquam beatae quos aspernatur sequi incidunt
          dolore reiciendis praesentium at consectetur? Maxime at modi, libero
          tempora dignissimos vero, quis corporis obcaecati molestias sapiente
          voluptatem totam aspernatur quia. Pariatur corrupti assumenda minima
          doloremque, perspiciatis inventore recusandae perferendis molestiae,
          modi rem voluptas voluptatum. Porro dignissimos autem labore ab illo
          aliquam deleniti nihil doloremque in veritatis dolorum vitae nesciunt,
          obcaecati, earum soluta modi. Numquam ipsum, officia, dolorem deleniti
          eligendi dolorum, natus quo unde consequatur incidunt blanditiis?
          Corporis quasi, eveniet eligendi deserunt aperiam, numquam pariatur
          quisquam totam blanditiis alias, consectetur laudantium aut est
          soluta! Illo sapiente harum adipisci ducimus beatae quae esse quisquam
          sunt exercitationem ex incidunt voluptatem assumenda blanditiis, ad
          soluta eveniet deserunt consequatur facere facilis sit laborum?
          Laudantium expedita fugit beatae laborum laboriosam earum officia
          natus consectetur perferendis doloribus ex fuga ipsa, maiores nulla
          repudiandae cum! Distinctio odit quia quidem dolorum eum, illum
          eligendi id voluptates illo molestias vitae inventore perspiciatis
          quis saepe corporis nobis voluptate natus magnam iste recusandae.
          Architecto fuga dolore saepe in rem, consequatur tempora corrupti sunt
          exercitationem tenetur, nostrum quae fugiat tempore mollitia esse ab
          sequi nisi dignissimos beatae! Eos iusto quidem fuga harum. Commodi ut
          modi, atque adipisci quae aspernatur beatae. Ipsa.
        </p>

       
      </div>
      <div className=" flex flex-wrap gap-2 w-full max-w-[500px] "> 
        <span className="text-secondary"> Tecnologias utilizadas: </span>
        <Badge className=" bg-transparent border border-blue-tech text-blue-tech text-xs   "> React</Badge>
    
   
        
      </div>
      <div className=" gap-5 flex">
        <Button className=" cursor-pointer hover:bg-blue-tech " asChild>
          <Link href={"https://www.google.com"} target="_blank">Ver projeto</Link>
        </Button>
        <Button className=" cursor-pointer hover:bg-blue-tech " asChild>
          <Link href={"https://www.google.com"} target="_blank">Ver codigo</Link>
        </Button>
      </div>

    </section>
  );
}
