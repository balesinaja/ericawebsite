"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "../../lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface TextBlockAnimationProps {
  children: React.ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
  blockColor?: string;
  stagger?: number;
  duration?: number;
  className?: string;
}

export default function TextBlockAnimation({
  children,
  animateOnScroll = true,
  delay = 0,
  blockColor = "#4b644e",
  stagger = 0.1,
  duration = 0.6,
  className,
}: TextBlockAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const elements = containerRef.current.querySelectorAll<HTMLElement>(".block-anim-target, p, h1, h2, h3, h4, span, div.block-anim-line");
      const targetNodes = elements.length > 0 ? Array.from(elements) : [containerRef.current];

      const blocks: HTMLDivElement[] = [];
      const lines: HTMLElement[] = [];

      targetNodes.forEach((node) => {
        // Skip if already wrapped
        if (node.dataset.blockAnimated === "true") return;
        node.dataset.blockAnimated = "true";

        const wrapper = document.createElement("div");
        wrapper.style.position = "relative";
        wrapper.style.display = "inline-block";
        wrapper.style.maxWidth = "100%";
        wrapper.style.overflow = "hidden";
        wrapper.style.verticalAlign = "top";

        const block = document.createElement("div");
        block.style.position = "absolute";
        block.style.top = "0";
        block.style.left = "0";
        block.style.width = "100%";
        block.style.height = "100%";
        block.style.backgroundColor = blockColor;
        block.style.zIndex = "2";
        block.style.transform = "scaleX(0)";
        block.style.transformOrigin = "left center";

        if (node.parentNode) {
          node.parentNode.insertBefore(wrapper, node);
          wrapper.appendChild(node);
          wrapper.appendChild(block);
        }

        gsap.set(node, { opacity: 0 });
        lines.push(node);
        blocks.push(block);
      });

      if (blocks.length === 0) return;

      const tl = gsap.timeline({
        defaults: { ease: "expo.inOut" },
        scrollTrigger: animateOnScroll
          ? {
              trigger: containerRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          : null,
        delay: delay,
      });

      tl.to(blocks, {
        scaleX: 1,
        duration: duration,
        stagger: stagger,
        transformOrigin: "left center",
      })
        .set(
          lines,
          {
            opacity: 1,
            stagger: stagger,
          },
          `<${duration / 2}`
        )
        .to(
          blocks,
          {
            scaleX: 0,
            duration: duration,
            stagger: stagger,
            transformOrigin: "right center",
          },
          `<${duration * 0.4}`
        );
    },
    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay, blockColor, stagger, duration],
    }
  );

  return (
    <div ref={containerRef} className={cn("relative inline-block max-w-full", className)}>
      {children}
    </div>
  );
}
