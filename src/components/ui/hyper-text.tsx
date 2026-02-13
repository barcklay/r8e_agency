"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { useIntersection } from 'react-use'

import { cn } from "@/helpers/lib";

export interface HyperTextProps {
  text: string;
  duration?: number;
  framerProps?: Variants;
  className?: string;
  classNameRoot?: string;
  animateOnLoad?: boolean;
  animateOnHover?: boolean;
  animateOnIntersection?: boolean;
  intersectionOptions?: IntersectionObserverInit
}

const alphabets = "abcdefghijklmnopqrstuvwxyz$#/".split("");

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

export function HyperText({
  text,
  duration = 1000,
  framerProps = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 3 },
  },
  className,
  classNameRoot,
  animateOnLoad = false,
  animateOnHover = false,
  animateOnIntersection = true,
  intersectionOptions = {
    rootMargin: "50px",
    threshold: 1,
  },
}: HyperTextProps) {
  const [displayText, setDisplayText] = useState(text.split(""));
  const [trigger, setTrigger] = useState(false);
  const interations = useRef(0);
  const isFirstRender = useRef(true);
  const intersectionRef = useRef(null);

  const intersection = useIntersection(intersectionRef, intersectionOptions);

  const triggerAnimation = useCallback(
    () => {
      interations.current = 0;
      setTrigger(true);
    },
    [setTrigger]
  );

  const handleMouseEnter = () => {
    if (!animateOnHover) return;
    triggerAnimation()
  }

  useEffect(() => {
    if (animateOnIntersection && isFirstRender && intersection?.isIntersecting) {
      triggerAnimation()
      intersectionRef.current = null
    }
  }, [animateOnIntersection, isFirstRender, intersection, triggerAnimation]);

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (!animateOnLoad && isFirstRender.current) {
          clearInterval(interval);
          isFirstRender.current = false;
          return;
        }
        if (interations.current < text.length) {
          setDisplayText((t) =>
            t.map((l, i) =>
              l === " "
                ? l
                : i < interations.current
                  ? text[i]
                  : alphabets[getRandomInt(alphabets.length)],
            ),
          );
          interations.current += 0.1;
        } else {
          setTrigger(false);
          clearInterval(interval);
        }
      },
      duration / (text.length * 10),
    );
    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [text, duration, trigger, animateOnLoad]);

  return (
    <div
      ref={intersectionRef}
      className={cn('flex flex-wrap overflow-hidden', classNameRoot)}
      onMouseEnter={handleMouseEnter}
    >
      <AnimatePresence>
        {displayText.map((letter, i) => (
          <motion.span
            key={i}
            className={cn("", letter === " " ? "w-3" : "", className)}
            {...framerProps}
          >
            {letter}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
