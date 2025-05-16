import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Hola, soy un desarrollador web</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">Construyo interfaces modernas y experiencias web increíbles.</p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button>Ver proyectos</Button>
              <div className="flex items-center gap-4">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <img
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
            height="310"
            src="https://source.unsplash.com/random/800x600?technology"
            width="550"
          />
        </div>
      </div>
    </section>
  )
}
