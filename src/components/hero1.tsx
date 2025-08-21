import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero1 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              With chad, begin..
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
              description in very few lines
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button asChild className="w-full sm:w-auto">
                Get started
              </Button>
            </div>
          </div>
          <Image
            src={"/gigalesswide(2).png"}
            alt={"Giga"}
            width={"100"}
            height={"100"}
            className="max-h-96 w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero1 };
