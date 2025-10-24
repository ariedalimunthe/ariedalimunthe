
"use client";

import { useEffect, useRef, useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";


export default function ContactSection() {
  const signatureRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const BLUR_FADE_DELAY = 0.04;


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // only trigger once
          }
        });
      },
      { threshold: 0.5 } // adjust as needed
    );

    if (signatureRef.current) {
      observer.observe(signatureRef.current);
    }

    return () => {
      if (signatureRef.current) {
        observer.unobserve(signatureRef.current);
      }
    };
  }, []);

  return (
    <section id="contact">
      <BlurFade delay={BLUR_FADE_DELAY * 16}>
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Contact</h2>
          <p className="text-dark-200 dark:text-dark-200 text-sm">
            Always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
          </p>

          <div className="mt-6 space-y-4">
            <p
              ref={signatureRef}
              className={`italic font-signature text-2xl text-dark-700 mt-4 ${
                isVisible ? "typing-fade" : ""
              }`}
            >
              — Ari Dalimunthe
            </p>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
