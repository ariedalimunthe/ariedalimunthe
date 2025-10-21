import dynamic from 'next/dynamic';
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ReactMarkdown from 'react-markdown';
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { PersonSchema } from "@/components/schema/person-schema";
import { Metadata } from 'next';
import { Icons } from "@/components/icons";
import ShinyButton from "@/components/ui/shiny-button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { SocialIconLink } from "@/components/social-icon-link";
import { BlogSkeleton } from "@/components/skeletons/blog-skeleton";
import { GithubSkeleton } from "@/components/skeletons/github-skeleton";
import { ProjectSkeleton } from "@/components/skeletons/project-skeleton";
import { HackathonSkeleton } from "@/components/skeletons/hackathon-skeleton";
import { BorderBeam } from "@/components/magicui/border-beam";
import { GhibliSkyBackground } from "@/components/ghibli-elements";
import SpotifyEmbed from '@/components/spotify-play';


const BLUR_FADE_DELAY = 0.04;
export const metadata: Metadata = {
  title: DATA.name,
  description: DATA.summary,
  openGraph: {
    title: DATA.name,
    description: DATA.summary,
    url: DATA.url,
    siteName: DATA.name,
    images: [
      {
        url: 'https://ariedalimunthe.vercel.app/portfolio.png',
        width: 1200,
        height: 630,
        alt: `${DATA.name}'s Portfolio`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: DATA.name,
    description: DATA.summary,
    creator: '@' + 'Star_Knight12',
    images: ['https://ariedalimunthe.vercel.app/portfolio.png'],
  },
};





export default function Page() {
  return (
    <>
      
      
      <main className="flex flex-col min-h-[100dvh] space-y-10">
        <PersonSchema />
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-2xl xl:text-4xl/none"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name} 👨🏻‍💻`}
                />
                <BlurFadeText
                  className="max-w-[600px] md:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="profile-wrapper">
                  <Avatar className="size-28 relative z-10">
                    <AvatarImage
                      alt={DATA.name}
                      src={DATA.avatarUrl}
                      width={112}
                      height={112}
                      loading="eager"
                    />
                    <AvatarFallback>{DATA.initials}</AvatarFallback>
                  </Avatar>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>
        
        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            <Markdown>{DATA.summary}</Markdown>
        </div>
           
          </BlurFade>
        </section>

        <section id="connect">
          <BlurFade delay={BLUR_FADE_DELAY * 4.5}>
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Let's collaborate 🤝🏻</h2>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                {Object.entries(DATA.contact.social).map(([name, social], idx) => (
                  <SocialIconLink
                    key={name}
                    name={name}
                    url={social.url}
                    icon={<social.icon />}
                    delay={BLUR_FADE_DELAY * 5 + idx * 0.05}
                  />
                ))}
              </div>
            </div>
          </BlurFade>
        </section>

        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* <section id="projects">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Featured Projects</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 8}>
              <div className="grid gap-4 sm:grid-cols-2">
                {DATA.projects.slice(0, 4).map((project) => (
                  <div key={project.title} className="relative overflow-hidden rounded-xl">
                    <ProjectCard
                      {...project}
                      tags={Array.from(project.technologies)}
                    />
                  </div>
                ))}
              </div>
              <Link
                href="/projects"
                className="mt-4 block"
              >
                <ShinyButton
                  className="w-full sm:w-auto group transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] font-semibold"
                >
                  View All Projects →
                </ShinyButton>
              </Link>
            </BlurFade>
          </div>
        </section> */}

        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
                
              </BlurFade>
            ))}
           
          </div>
         
        </section>

        <section id="spotify">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">My Fav Song Lately</h2>
            
           <SpotifyEmbed playlistId="5yJx9xGKLxOGHVdmrhyNDX?utm_source=generator&theme=0"/>
           </BlurFade>
         </section>
          
        <section id="contact">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Contact</h2>
              
              <p className="text-muted-foreground">
                Always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
              </p>
              
              <div className="mt-6 space-y-4">
                <a
                  href="mailto:aridalimunthe11@gmail.com"
                  className="flex items-center gap-2 underline underline-offset-4 hover:opacity-70 transition-opacity"
                >
                  <Icons.email className="size-4" />
                  aridalimunthe11@gmail.com
                </a>
              </div>
            </div>
          </BlurFade>
        </section>
        <footer className="mt-10 border-t py-8">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <div className="container mx-auto">
              <div className="flex flex-col items-center">  {/* Add items-start */}
                <div className="text-sm text-muted-foreground text-left">
                  <p>© {new Date().getFullYear()} {DATA.name}. All rights reserved.</p>
                </div>
              </div>
            </div>
          </BlurFade>
        </footer>
      </main>
    </>
  );
}