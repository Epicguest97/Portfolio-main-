// components/ParticlesBackground.tsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: "#000000", // black background, change as needed
        },
        particles: {
          number: {
            value: 25,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#ffffff", // white dots
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 2,
            random: true,
          },
          links: {
            enable: false, // ✅ No connecting lines
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            outModes: {
              default: "bounce",
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: false,
              mode: "push",
            },
          },
          modes: {
            repulse: {
              distance: 100,
            },
            push: {
              quantity: 4,
            },
          },
        },
      }}
    />
  );
}
