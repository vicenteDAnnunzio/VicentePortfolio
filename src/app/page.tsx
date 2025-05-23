"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Github, Mail, Linkedin, ExternalLink, User, Briefcase, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const observerRefs = useRef<IntersectionObserver[]>([])

  useEffect(() => {
    const sections = ["hero", "about", "projects", "contact"]

    // Scroll animado personalizado para todos los enlaces internos
    const smoothScrollTo = (targetY: number, duration = 1000) => {
      const startY = window.scrollY;
      const diff = targetY - startY;
      let start: number | null = null;
      function step(timestamp: number) {
        if (!start) start = timestamp;
        const time = timestamp - start;
        const percent = Math.min(time / duration, 1);
        window.scrollTo(0, startY + diff * percent);
        if (time < duration) {
          requestAnimationFrame(step);
        }
      }
      requestAnimationFrame(step);
    };

    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        const id = anchor.getAttribute('href')!.slice(1);
        const el = document.getElementById(id);
        if (el) {
          e.preventDefault();
          const rect = el.getBoundingClientRect();
          const targetY = rect.top + window.scrollY;
          smoothScrollTo(targetY, 900); // 900ms para que sea un poco más rápido
        }
      }
    };
    document.addEventListener('click', handleSmoothScroll);

    // Clean up previous observers
    observerRefs.current.forEach((observer) => observer.disconnect())
    observerRefs.current = []

    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (!element) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(section)
            }
          })
        },
        { threshold: 0.3 },
      )

      observer.observe(element)
      observerRefs.current.push(observer)
    })

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      observerRefs.current.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-200 opacity-20 blur-3xl animate-blob"></div>
        <div className="absolute top-40 -left-20 h-72 w-72 rounded-full bg-cyan-200 opacity-20 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 right-20 h-64 w-64 rounded-full bg-emerald-200 opacity-20 blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:bg-slate-900/80 dark:border-slate-700">
        <div className="container flex h-16 items-center">
          <div className="mr-4 md:flex">
            <span className="mr-6 flex items-center space-x-2">
              <span className="font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                Vicente DAnnunzio
              </span>
            </span>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              {[
                { id: "hero", label: "Home", icon: <User className="h-4 w-4" /> },
                { id: "about", label: "About", icon: <User className="h-4 w-4" /> },
                { id: "projects", label: "Projects", icon: <Briefcase className="h-4 w-4" /> },
                { id: "contact", label: "Contact", icon: <Send className="h-4 w-4" /> },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`transition-all duration-300 flex items-center gap-1.5 hover:text-purple-600 ${
                    activeSection === item.id ? "text-purple-600 font-semibold" : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <a
              href="https://github.com/vicenteDAnnunzio"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-600 transition-colors duration-300"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/vicente-dannunzio-470463307"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-600 transition-colors duration-300"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </header>

      <main className="container py-10">
        {/* Hero Section */}
        <section id="hero" className="py-8 md:py-28 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 animate-fade-in self-start">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent animate-gradient mt-0 mb-2">
              Hi, I'm Vicente DAnnunzio
            </h1>
            <div className="inline-block mb-6 mt-4">
              <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">
                Available for hire
              </span>
            </div>
            <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4">Software Developer & IT Student</h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-[600px] mb-6">
            IT student and developer experienced in tech support, admin management & web apps, passionate about driving innovation and efficiency.
            </p>
            <div className="flex gap-4 pt-4">
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                <a href="#contact">Get in touch</a>
              </Button>
              <Button
                variant="outline"
                className="border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300"
              >
                <a href="#projects">View my work</a>
              </Button>
            </div>
          </div>
          <div className="flex-shrink-0 animate-float">
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-white shadow-xl dark:border-slate-700">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-cyan-300 opacity-20"></div>
              <Image
                src="/fotocv.jpg"
                alt="Foto de perfil"
                width={320}
                height={320}
                className="absolute object-cover brightness-110 contrast-110"
                style={{ top: '-30px', left: '50%', transform: 'translateX(-50%)' }}
                priority
              />
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-20 border-t border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
              <User className="h-5 w-5 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
              About me
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 animate-fade-in-up">
              <p className="text-slate-600 dark:text-slate-300">
                As an Information Technology student, I combine technical expertise with practical experience in technical support, administrative management, and software development. My background gives me a unique perspective on how technology can drive business efficiency and innovation.
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                I'm passionate about joining teams where I can contribute innovative solutions and optimize processes through technology. My adaptability and technical skills allow me to quickly integrate into new environments and tackle complex challenges with enthusiasm.
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                I'm committed to continuous learning and staying current with emerging technologies, always looking for opportunities to grow and make a meaningful impact in the tech industry.
              </p>
            </div>
            <div className="space-y-6 animate-fade-in-up animation-delay-300">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "Tailwind CSS",
                  "Node.js",
                  "Python",
                  "SQL",
                  "Git / GitHub",
                  "Figma",
                  "Trello",
                  "Problem Solving",
                  "Accessibility",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="px-3 py-1 bg-white border border-slate-200 text-slate-700 rounded-full text-sm shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold pt-4 text-slate-800 dark:text-white">Education</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 dark:bg-slate-800 dark:border-slate-700">
                  <h4 className="font-medium text-slate-800 dark:text-white">
                  Bachelor´s Degree in Information Technology Management
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Universidad Argentina de la Empresa (UADE) • 2022 - Present</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 border-t border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
              <Briefcase className="h-5 w-5 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Proyects
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "MyGarage",
                description: "An efficient parking management system for tracking vehicles in hotels or any facility.",
                tags: ["Next.js", "React", "TypeScript", "TailwindCSS", "Firebase"],
                image: "/MyGaragefoto.jpg", // Image file should be in the /public directory
                color: "from-sky-500 to-indigo-500",
                github: "https://github.com/vicenteDAnnunzio/mygarage-project.git",
                demo: "https://mygarage-project.vercel.app/login",
                comingSoon: false,
              },
              {
                comingSoon: true,
                color: "from-pink-300 to-rose-300"
              },
              {
                comingSoon: true,
                color: "from-yellow-300 to-orange-300"
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 dark:bg-slate-800 dark:border-slate-700 flex flex-col justify-center items-center"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color || 'from-slate-500 to-gray-500'} opacity-10 group-hover:opacity-20 transition-opacity duration-500 dark:group-hover:opacity-30`}
                  style={{
                    backgroundImage: project.color ? `linear-gradient(to bottom right, var(--tw-gradient-stops))` : undefined,
                  }}
                ></div>
                {project.comingSoon ? (
                  <div className="relative z-10 flex flex-col justify-center items-center h-full w-full p-10 text-center">
                    <span className="text-3xl font-bold text-slate-600 dark:text-slate-300 mb-2">Coming Soon</span>
                    <span className="text-lg text-slate-600 dark:text-slate-300">New projects are in the works! Stay tuned for updates.</span>
                  </div>
                ) : (
                  <>
                    <div className="w-full h-80 overflow-hidden relative z-10">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title || "Project image"}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5 relative z-10">
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white">{project.title}</h3>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags?.map((tag: string) => (
                          <span
                            key={tag}
                            className="inline-flex items-center text-xs font-medium text-slate-500 dark:text-slate-400"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center gap-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-1 group-hover:border-purple-300 group-hover:bg-purple-50 transition-colors duration-300 dark:group-hover:border-purple-700 dark:group-hover:bg-purple-900/20"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noreferrer">
                            <Github className="h-4 w-4" />
                            Code
                          </a>
                        </Button>
                        {project.demo && project.title !== "Portfolio Website" && (
                          <Button
                            size="sm"
                            className="gap-1 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 transition-all duration-300"
                            asChild
                          >
                            <a href={project.demo} target="_blank" rel="noreferrer">
                              <ExternalLink className="h-4 w-4" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 border-t border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
              <Send className="h-5 w-5 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Contact
            </h2>
          </div>

          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <p className="text-slate-600 dark:text-slate-300 text-lg mb-8">
            Driven to grow as an IT professional—seeking opportunities that challenge and inspire. Reach out!
            </p>

            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-purple-600 transition-colors duration-300">
                <Mail className="h-5 w-5" />
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vicente.dannunzio17@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  vicente.dannunzio17@gmail.com
                </a>
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-purple-50 hover:border-purple-200 hover:text-purple-600 transition-all duration-300 dark:hover:bg-purple-900/20 dark:hover:border-purple-700"
                  asChild
                >
                  <a href="https://github.com/vicenteDAnnunzio" target="_blank" rel="noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-purple-50 hover:border-purple-200 hover:text-purple-600 transition-all duration-300 dark:hover:bg-purple-900/20 dark:hover:border-purple-700"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/vicente-dannunzio-470463307" target="_blank" rel="noreferrer">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-purple-50 hover:border-purple-200 hover:text-purple-600 transition-all duration-300 dark:hover:bg-purple-900/20 dark:hover:border-purple-700"
                  asChild
                >
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vicente.dannunzio17@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </a>
                </Button>
              </div>

              <Button className="mt-4 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                <a href="/D´Annunzio, Vicente - eCV.pdf" download="D´Annunzio, Vicente - eCV.pdf">
                  Download CV
                </a>
              </Button>

              <Button
                variant="outline"
                className="mt-4 gap-1 border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 dark:border-slate-700 dark:hover:border-purple-700 dark:hover:bg-purple-900/20"
                asChild
              >
                <a href="https://github.com/vicenteDAnnunzio/VicentePortfolio" target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" />
                  Source Code
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-6 md:py-8 dark:border-slate-700">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-slate-500 md:text-left dark:text-slate-400">
            © {new Date().getFullYear()} Vicente Dannunzio. All rights reserved.
          </p>
          <p className="text-center text-sm text-slate-500 md:text-right dark:text-slate-400">
            Designed & built by Vicente DAnnunzio <span className="inline-block animate-pulse text-red-500">❤️</span>
          </p>
        </div>
      </footer>
    </div>
  )
} 