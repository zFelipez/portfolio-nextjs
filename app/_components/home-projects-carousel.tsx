import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function HomeProjectsCarousel() {
  return (
    <div className="flex flex-col items-center justify-center gap-20">
      <h2 className="text-4xl text-center text-secondary"> Certificados </h2>
      <Carousel className="max-sm:w-[70%] w-full max-w-[400px]">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="bg-transparent border-none hover:outline-blue-tech hover:outline hover:outline-offset-2 transition-all">
                  <CardContent className="flex gap-5  flex-col aspect-square items-center justify-center ">
                    <div className=" relative w-full h-[200px] bg-blue-tech rounded-2xl overflow-hidden">
                      <Image src="/me.jpeg" alt="me" className="object-cover" fill/>
                    </div>
                    <h3 className="text-center text-2xl tex-semibold text-secondary"> Certificado de Ingles </h3>
                    <div className=" w-full max-h-[150px] overflow-y-scroll scrollbar">
                      <p className="text-center text-blue-tech text-sm">
                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam eum dignissimos tenetur nesciunt quidem facilis. Eius facere quod, dolores, sapiente ipsam accusantium dolore alias quisquam repellendus adipisci veniam. Consequatur, sed illum architecto corporis ipsam dolorem, placeat necessitatibus quos quia est maxime porro totam dolore soluta? Quam odio itaque, magnam voluptatem dolores, quod ex, aspernatur cupiditate molestiae ipsum officiis rerum expedita sapiente ducimus. Repellat aliquam esse asperiores recusandae, sunt mollitia totam necessitatibus veritatis nihil temporibus ex? Deleniti quaerat ipsam, sapiente eum aut voluptatibus commodi tenetur similique delectus placeat magni consequatur optio et, facere aspernatur omnis numquam deserunt molestiae praesentium. Nisi officia modi, ab fuga repellendus, nobis aliquam beatae quos aspernatur sequi incidunt dolore reiciendis praesentium at consectetur? Maxime at modi, libero tempora dignissimos vero, quis corporis obcaecati molestias sapiente voluptatem totam aspernatur quia. Pariatur corrupti assumenda minima doloremque, perspiciatis inventore recusandae perferendis molestiae, modi rem voluptas voluptatum. Porro dignissimos autem labore ab illo aliquam deleniti nihil doloremque in veritatis dolorum vitae nesciunt, obcaecati, earum soluta modi. Numquam ipsum, officia, dolorem deleniti eligendi dolorum, natus quo unde consequatur incidunt blanditiis? Corporis quasi, eveniet eligendi deserunt aperiam, numquam pariatur quisquam totam blanditiis alias, consectetur laudantium aut est soluta! Illo sapiente harum adipisci ducimus beatae quae esse quisquam sunt exercitationem ex incidunt voluptatem assumenda blanditiis, ad soluta eveniet deserunt consequatur facere facilis sit laborum? Laudantium expedita fugit beatae laborum laboriosam earum officia natus consectetur perferendis doloribus ex fuga ipsa, maiores nulla repudiandae cum! Distinctio odit quia quidem dolorum eum, illum eligendi id voluptates illo molestias vitae inventore perspiciatis quis saepe corporis nobis voluptate natus magnam iste recusandae. Architecto fuga dolore saepe in rem, consequatur tempora corrupti sunt exercitationem tenetur, nostrum quae fugiat tempore mollitia esse ab sequi nisi dignissimos beatae! Eos iusto quidem fuga harum. Commodi ut modi, atque adipisci quae aspernatur beatae. Ipsa.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
