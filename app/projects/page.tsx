"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Mail, Linkedin, Instagram, ChevronLeft, ChevronRight } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"

const pastProjects = [
  {
    logo: "/images/unicef-logo-clean.png",
    alt: "UNICEF",
    width: 300,
    height: 150,
    logoClass: "max-h-28 w-auto object-contain hover:scale-110 transition-transform duration-300",
    logoBg: true,
    description:
      "Created web scrapers to identify potential partner organizations for UNICEF by utilizing sentiment analysis on social media posts to target organizations with a higher propensity to join.",
  },
  {
    logo: "/images/ea-logo.png",
    alt: "EA Games",
    width: 220,
    height: 110,
    logoClass: "max-h-28 w-auto object-contain hover:scale-110 transition-transform duration-300",
    logoBg: false,
    description:
      "Developed a web scraper to capture game leak data, integrating it with an ETL pipeline into Snowflake. Enhanced classification accuracy using confusion matrices and initiated predictive analytics on sentiment and revenue trends.",
  },
  {
    logo: "/images/seagate-logo.png",
    alt: "Seagate",
    width: 300,
    height: 150,
    logoClass: "max-h-28 w-auto object-contain hover:scale-110 transition-transform duration-300",
    logoBg: false,
    description:
      "Developed a PostgreSQL-integrated priority scoring framework for automating accounts payable and cost modeling. Built Tableau dashboards with drill-down analytics and streamlined ETL workflows using Metabase and Streamlit.",
  },
  {
    logo: "/images/epri-logo.png",
    alt: "EPRI",
    width: 160,
    height: 80,
    logoClass: "max-h-28 w-auto object-contain hover:scale-110 transition-transform duration-300",
    logoBg: false,
    description:
      "Built generative machine learning models including LSTM, GANs, and VAEs to synthesize ultrasonic A-scans for non-destructive testing.",
  },
  {
    logo: "/images/education-trust-logo-updated.png",
    alt: "The Education Trust",
    width: 160,
    height: 80,
    logoClass: "max-h-28 w-auto object-contain hover:scale-110 transition-transform duration-300",
    logoBg: false,
    description:
      "Constructed an ETL Snowflake pipeline to automate collection and data. Generated multiple Tableau visualizations using piped data.",
  },
  {
    logo: "/images/farmlink-project-logo.png",
    alt: "The Farmlink Project",
    width: 160,
    height: 80,
    logoClass: "max-h-28 w-auto object-contain hover:scale-110 transition-transform duration-300",
    logoBg: false,
    description:
      "Conducted an ML-driven data analysis to segment donors. Identified key factors to increase donations from newsletters.",
  },
]

const recentProjects: ((typeof pastProjects)[number] | null)[] = [
  {
    logo: "/images/Aflac-logo.png",
    alt: "Aflac",
    width: 300,
    height: 150,
    logoClass: "max-h-28 w-auto object-contain hover:scale-110 transition-transform duration-300",
    logoBg: false,
    description:
      "Engineered an ETL pipeline that transformed over one million U.S. Department of Labor Form 5500 records into a highly accurate, queryable dataset. Utilized NLP, entity resolution, and automated validation workflows to improve subsidiary mapping and ensure data quality at scale.",
  },
  {
    logo: "/images/selector-logo.png",
    alt: "Selector",
    width: 300,
    height: 150,
    logoClass: "max-h-28 w-auto object-contain hover:scale-110 transition-transform duration-300",
    logoBg: false,
    description:
      "Developed low-latency machine learning pipelines for real-time anomaly detection and automated security data analysis. Optimized data processing and inference workflows to deliver rapid insights across cloud infrastructure and CI/CD environments.",
  },
  {
    logo: "/images/Oracle-Logo.png",
    alt: "Oracle",
    width: 300,
    height: 150,
    logoClass: "max-h-28 w-auto object-contain hover:scale-110 transition-transform duration-300",
    logoBg: false,
    description:
      "Built a multi-agent research platform using LangChain and Oracle AI Database 26ai to analyze financial metrics and live news in parallel. Synthesized insights into strategic briefs, SWOT analyses, and an interactive dashboard to support investment research and decision-making.",
  },
  {
    logo: "/images/datastory-logo.png",
    alt: "DataStory",
    width: 300,
    height: 150,
    logoClass: "max-h-28 w-auto object-contain hover:scale-110 transition-transform duration-300",
    logoBg: false,
    description:
      "Built a full-stack sourcing and outreach platform that combined PitchBook data, web scraping, and company enrichment to automate prospect research. Leveraged LLMs to generate personalized outbound email drafts and streamline lead tracking, outreach, and engagement workflows.",
  },
]

const PROJECT_CARD_WIDTH =
  "min-w-[300px] md:min-w-[340px] max-w-[340px] min-h-[360px] flex-shrink-0 snap-start flex flex-col"

const SCROLL_ROW_CLASS =
  "flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2 md:px-12 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"

function PastProjectCard({
  logo,
  alt,
  width,
  height,
  logoClass,
  logoBg,
  description,
}: (typeof pastProjects)[number]) {
  return (
    <div className={`bg-white rounded-lg p-8 shadow-lg ${PROJECT_CARD_WIDTH}`}>
      <div
        className={`flex justify-center items-center h-32 flex-shrink-0 mb-6 ${logoBg ? "bg-white rounded-lg p-4" : ""}`}
      >
        <Image src={logo} alt={alt} width={width} height={height} className={logoClass} />
      </div>
      <div className="flex flex-1 items-center">
        <p className="text-gray-600 text-base leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

function RecentProjectPlaceholder({ slot }: { slot: number }) {
  return (
    <div
      className={`bg-white rounded-lg p-8 shadow-lg border-2 border-dashed border-[#eee1c6]/40 ${PROJECT_CARD_WIDTH}`}
    >
      <div className="flex justify-center items-center h-32 flex-shrink-0 mb-6 bg-gray-50 rounded-lg">
        <span className="text-gray-400 text-sm font-medium">Project {slot}</span>
      </div>
      <div className="flex flex-1 items-center">
        <p className="text-gray-400 text-base leading-relaxed italic">Project description coming soon.</p>
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  const recentScrollRef = useRef<HTMLDivElement>(null)
  const pastScrollRef = useRef<HTMLDivElement>(null)

  const scrollProjects = (ref: React.RefObject<HTMLDivElement | null>, direction: "left" | "right") => {
    ref.current?.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <MobileNav currentPage="projects" />

      <header className="sticky top-0 z-40 w-full bg-[#023020] text-[#eee1c6] hidden md:block">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/images/datastory-logo.png"
                alt="DataStory Logo"
                width={120}
                height={40}
                className="h-8 w-auto hover:scale-105 transition-transform duration-300"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(93%) sepia(12%) saturate(346%) hue-rotate(15deg) brightness(96%) contrast(92%)",
                }}
              />
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/about"
              className="text-sm font-medium hover:text-white transition-all duration-300 hover:scale-105"
            >
              About
            </Link>
            <Link href="/projects" className="text-sm font-medium bg-[#eee1c6] text-[#023020] px-3 py-1 rounded">
              Projects
            </Link>
            <Link
              href="/development"
              className="text-sm font-medium hover:text-white transition-all duration-300 hover:scale-105"
            >
              Development
            </Link>
            <Link
              href="/team"
              className="text-sm font-medium hover:text-white transition-all duration-300 hover:scale-105"
            >
              Our Team
            </Link>
            <Link
              href="/apply"
              className="text-sm font-medium hover:text-white transition-all duration-300 hover:scale-105"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-white transition-all duration-300 hover:scale-105"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative h-[375px] md:h-[600px] overflow-hidden">
        <Image
          src="/images/our-work-hero-new.jpeg"
          alt="DataStory team"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#023020] opacity-30"></div>
        <div className="absolute inset-0 flex items-start justify-center pt-8 md:pt-12 z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-center text-[#eee1c6] tracking-wider">OUR WORK</h1>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#023020] to-[#034030] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 1000 1000" className="w-full h-full">
            <path d="M0,300 Q250,100 500,300 T1000,300 L1000,1000 L0,1000 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">RECENT PROJECTS</h2>
          <div className="relative max-w-6xl mx-auto">
            <button
              onClick={() => scrollProjects(recentScrollRef, "left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-[#eee1c6] hover:text-white bg-[#023020]/80 rounded-full p-2 hidden md:block"
              aria-label="Scroll recent projects left"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={() => scrollProjects(recentScrollRef, "right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-[#eee1c6] hover:text-white bg-[#023020]/80 rounded-full p-2 hidden md:block"
              aria-label="Scroll recent projects right"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
            <div ref={recentScrollRef} className={SCROLL_ROW_CLASS}>
              {recentProjects.map((project, index) =>
                project ? (
                  <PastProjectCard key={project.alt} {...project} />
                ) : (
                  <RecentProjectPlaceholder key={`placeholder-${index}`} slot={index + 1} />
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#023020] to-[#034030] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 1000 1000" className="w-full h-full">
            <path d="M0,300 Q250,100 500,300 T1000,300 L1000,1000 L0,1000 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">PAST PROJECTS</h2>
          <div className="relative max-w-6xl mx-auto">
            <button
              onClick={() => scrollProjects(pastScrollRef, "left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-[#eee1c6] hover:text-white bg-[#023020]/80 rounded-full p-2 hidden md:block"
              aria-label="Scroll past projects left"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={() => scrollProjects(pastScrollRef, "right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-[#eee1c6] hover:text-white bg-[#023020]/80 rounded-full p-2 hidden md:block"
              aria-label="Scroll past projects right"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
            <div ref={pastScrollRef} className={SCROLL_ROW_CLASS}>
              {pastProjects.map((project) => (
                <PastProjectCard key={project.alt} {...project} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#023020] text-center mb-16">OUR SERVICES</h2>
          <div className="max-w-4xl mx-auto">
            <Image
              src="/images/services-icons-only.png"
              alt="Our Services - Machine Learning & AI, Software Development, Data Visualization & Dashboards, Data Driven Business Strategy, Data Driven Marketing, Data Management & Strategy"
              width={800}
              height={600}
              className="w-full h-auto hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#023020] to-[#034030] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 1000 1000" className="w-full h-full">
            <path d="M0,300 Q250,100 500,300 T1000,300 L1000,1000 L0,1000 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">TESTIMONIALS</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <Image
                  src="/images/good360-logo.png"
                  alt="Good360"
                  width={120}
                  height={80}
                  className="h-20 w-auto object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex-1">
                <blockquote className="text-lg text-gray-600 italic mb-4 leading-relaxed">
                  &ldquo;Each of the customer-facing consultants were professional and mature beyond their years. The team was
                  adaptable to various challenges and scope adjustments necessitated by the project and ultimately
                  delivered several PowerBI dashboards that will have ongoing value to Good360. I would definitely
                  recommend the Berkeley Data Story team for supplemental BI and Data Science projects.&rdquo;
                </blockquote>
                <cite className="text-base text-gray-500 font-medium">
                  - Kniffen Kelly, Sr. Director of Business Intelligence Center of Excellence at Good 360
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#023020] text-center mb-16">ADDITIONAL PAST CLIENTS</h2>
          <div className="max-w-4xl mx-auto">
            <Image
              src="/images/additional-past-clients.png"
              alt="Additional Past Clients - SimpleLab, IBM, GIG Car Share, Leaf, Plan International, LifeMoves, Fingenic"
              width={800}
              height={300}
              className="w-full h-auto hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      <footer className="bg-white py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4 text-[#023020]">DataStory at Berkeley</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We are a student group acting independently of the University of California. We take full responsibility
                for our organization and this website.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-[#023020]">General</h4>
              <div className="space-y-2">
                <Link
                  href="/about"
                  className="block bg-[#023020] text-white px-3 py-1 text-sm rounded hover:bg-[#023020]/80 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  className="block bg-[#023020] text-white px-3 py-1 text-sm rounded hover:bg-[#023020]/80 transition-colors"
                >
                  Projects
                </Link>
                <Link
                  href="/team"
                  className="block bg-[#023020] text-white px-3 py-1 text-sm rounded hover:bg-[#023020]/80 transition-colors"
                >
                  Our Team
                </Link>
                <Link
                  href="/apply"
                  className="block bg-[#023020] text-white px-3 py-1 text-sm rounded hover:bg-[#023020]/80 transition-colors"
                >
                  Apply Now
                </Link>
                <Link
                  href="/contact"
                  className="block bg-[#023020] text-white px-3 py-1 text-sm rounded hover:bg-[#023020]/80 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-[#023020]">Contact</h4>
              <div className="flex gap-2">
                <Link href="/contact">
                  <Mail className="h-5 w-5 text-[#023020] cursor-pointer hover:text-[#023020]/70" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/datastoryconsulting/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 text-[#023020] cursor-pointer hover:text-[#023020]/70" />
                </Link>
                <Link href="https://www.instagram.com/datastoryberkeley/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5 text-[#023020] cursor-pointer hover:text-[#023020]/70" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
