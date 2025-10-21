"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StarIcon } from "lucide-react";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { PlayIcon } from "lucide-react";
import { useState } from "react";
import { MovieModal } from "./movie-modal";

interface MovieCardProps {
  movie: {
    title: string;
    description: string;
    thumbnail: string;
    url: string;
    date: string;
    ratings: number;
  };
}

export function MovieCard({ movie }: MovieCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
 const [showFullDescription, setShowFullDescription] = useState(false);
 const isLongDescription = movie.description.length > 70;
  const shortDescription = movie.description.slice(0, 70) + "...";
  return (
    <>
      <div className="cursor-pointer">
        <Card className="overflow-hidden border hover:shadow-lg transition-all duration-300">
          <div className="relative group">
            <Image
              src={movie.thumbnail}
              alt={movie.title}
              width={500}
              height={280}
              className="w-full  object-cover"
              priority
            />
           
          </div>
          <CardHeader className="p-4">
            <CardTitle className="text-lg">{movie.title}</CardTitle>
             {/* Rating */}
            <div className="flex items-center gap-1 mt-1 mb-2">
              {Array.from({ length: 5 }, (_, i) => {
              const starValue = i + 1;
              const fullStars = Math.floor(movie.ratings / 2);
              const hasHalfStar = movie.ratings / 2 - fullStars >= 0.5;

              let fill = "none";
              let color = "text-muted";

              if (starValue <= fullStars) {
                fill = "#facc15"; // full star
                color = "text-yellow-400";
              } else if (starValue === fullStars + 1 && hasHalfStar) {
                fill = "url(#half)"; // custom half fill
                color = "text-yellow-400";
              }

              return (
                <StarIcon
                  key={i}
                  className={`w-4 h-4 ${color}`}
                  fill={fill}
                  strokeWidth={1.5}
                />
              );
            })}
              <span className="text-xs text-muted-foreground ml-1">({movie.ratings.toFixed(1)}/10)</span>
            </div>
            <time className="text-sm text-muted-foreground">
             Tahun Rilis {movie.date}
            </time>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            
             <p className="text-sm text-muted-foreground">
    {showFullDescription || !isLongDescription
      ? movie.description
      : shortDescription}
  </p>

  {isLongDescription && (
    <button
      onClick={(e) => {
        e.stopPropagation(); // biar tidak buka modal saat klik tombol
        setShowFullDescription(!showFullDescription);
      }}
      className="mt-2 text-xs text-blue-600 hover:underline"
    >
      {showFullDescription ? "Sembunyikan" : "Baca selengkapnya"}
    </button>
  )}
          </CardContent>
        </Card>
      </div>
        
      <MovieModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={movie.url}
        videoTitle={movie.title}
      />
    </>
  );
}
