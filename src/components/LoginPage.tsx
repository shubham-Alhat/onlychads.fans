import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Hero1Props {
  badge?: string;
  heading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image?: {
    src: string;
    alt: string;
  };
}

const Hero1 = ({
  badge = "💪 AI Fitness Revolution",
  heading = "Train Smarter. Look Chad. Be Limitless.",
  description = " is your AI-powered fitness coach that builds custom workouts, tracks progress, and keeps you accountable. No fluff, no excuses—just results that turn you into your best self.",
  buttons = {
    primary: {
      text: "Login",
      url: "/signup",
    },
    secondary: {
      text: "See How It Works",
      url: "/features",
    },
  },
  image = {
    src: "/gigalesswide(2).png",
    alt: "Fitness training AI app demo",
  },
}: Hero1Props) => {
  return (
    <section className="py-32 px-16 bg-background text-foreground font-sans">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {badge && <Badge variant="outline">{badge}</Badge>}
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              {heading}
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
              <span className="text-primary bg-primary-foreground">
                OnlyChads.fans
              </span>
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons.primary && (
                <Button
                  asChild
                  className="w-full sm:w-auto font-semibold hover:bg-accent hover:text-accent-foreground"
                >
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
              )}
              {buttons.secondary && (
                <Button
                  asChild
                  variant="outline"
                  className="w-full sm:w-auto bg-background text-foreground border-foreground"
                >
                  <Link href={buttons.secondary.url}>
                    {buttons.secondary.text}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
          <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero1 };
