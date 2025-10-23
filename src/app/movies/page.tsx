import BlurFade from "@/components/magicui/blur-fade";
import dynamic from "next/dynamic";
import { DATA } from "@/data/resume";
import { MovieSkeleton } from "@/components/skeletons/movie-skeleton";
import { BorderBeam } from "@/components/magicui/border-beam";

export const metadata = {
  title: "Movies",
  description: "Watch my latest videos about software development and technology.",
};

const BLUR_FADE_DELAY = 0.04;

const MovieCard = dynamic(() => import("@/components/movie-card").then(mod => mod.MovieCard), {
  loading: () => <MovieSkeleton />
});

export default function MoviesPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="movies">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-5 py-1 text-sm mb-8">
                Movies
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                My Favorite Movies
              </h1>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Watch my favorite movies.
              </p>
            </div>
          </div>
        </BlurFade>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">

          {DATA.movies.map((video, idx) => (
            <BlurFade key={video.url} delay={BLUR_FADE_DELAY * (idx + 2)}>
             
              <MovieCard movie={video} />
            </BlurFade>
          ))}
        </div>
      </section>
    </main>
  );
}
