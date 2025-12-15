import { useEffect, useRef } from 'react';
// Import particles.js - it attaches to window.particlesJS
// @ts-ignore
import 'particles.js';

interface ParticlesProps {
  params?: any;
  canvasClassName?: string;
  className?: string;
  id?: string;
  width?: string;
  height?: string;
  style?: React.CSSProperties;
}

const Particles: React.FC<ParticlesProps> = ({
  params,
  canvasClassName,
  className,
  id = 'particles-js',
  width = '100%',
  height = '100%',
  style,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Generate unique ID once per component instance
  const particlesIdRef = useRef<string>(`${id}-${Math.random().toString(36).substr(2, 9)}`);
  const instanceRef = useRef<any>(null);

  useEffect(() => {
    const uniqueId = particlesIdRef.current;
    let retryCount = 0;
    const maxRetries = 40; // Max 2 seconds of retries

    if (containerRef.current && params) {
      // Set container ID immediately so canvas can be found
      containerRef.current.id = uniqueId;

      // Wait for particles.js to be available
      const initParticles = () => {
        // particles.js attaches itself to window.particlesJS
        const particlesJS = (window as any).particlesJS;
        console.log('Checking particlesJS:', typeof particlesJS, 'retry:', retryCount);

        if (particlesJS && typeof particlesJS === 'function') {
          // Ensure container has the correct ID and dimensions
          if (containerRef.current) {
            const container = containerRef.current;

            // Ensure container has dimensions
            if (!container.offsetWidth || !container.offsetHeight) {
              // If container has no dimensions, set them based on viewport
              container.style.width = container.style.width || '100vw';
              container.style.height = container.style.height || '100vh';
            }

            // Create a proper config object for particles.js
            // Merge provided params with defaults
            const defaultConfig = {
              particles: {
                number: {
                  value: 80,
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                },
                color: {
                  value: '#ffffff',
                },
                shape: {
                  type: 'circle',
                },
                opacity: {
                  value: 0.5,
                  random: false,
                },
                size: {
                  value: 3,
                  random: true,
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: '#ffffff',
                  opacity: 0.4,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 2,
                  direction: 'none',
                  random: false,
                  straight: false,
                  out_mode: 'out',
                  bounce: false,
                },
              },
              interactivity: {
                detect_on: 'canvas',
                events: {
                  onhover: {
                    enable: true,
                    mode: 'repulse',
                  },
                  onclick: {
                    enable: true,
                    mode: 'push',
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 140,
                    line_linked: {
                      opacity: 1,
                    },
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                  push: {
                    particles_nb: 4,
                  },
                  remove: {
                    particles_nb: 2,
                  },
                },
              },
              retina_detect: true,
            };

            // Deep merge params into default config
            const deepMerge = (target: any, source: any): any => {
              const output = { ...target };
              if (source && typeof source === 'object') {
                Object.keys(source).forEach((key) => {
                  if (
                    source[key] &&
                    typeof source[key] === 'object' &&
                    !Array.isArray(source[key])
                  ) {
                    output[key] = deepMerge(target[key] || {}, source[key]);
                  } else {
                    output[key] = source[key];
                  }
                });
              }
              return output;
            };

            const config = deepMerge(defaultConfig, params);

            // Ensure line_linked is enabled if it's in params
            if (params.particles?.line_linked && !config.particles.line_linked.enable) {
              config.particles.line_linked.enable = true;
            }

            console.log('Final config:', JSON.stringify(config, null, 2).substring(0, 500));

            try {
              // particles.js expects the canvas to already exist as a DIRECT CHILD
              // It queries for: #uniqueId > .particles-js-canvas-el
              // Remove any existing canvas that might not be a direct child
              const existingCanvases = container.querySelectorAll('.particles-js-canvas-el');
              existingCanvases.forEach((c) => {
                if (c.parentElement !== container) {
                  c.remove();
                }
              });

              // Check if canvas exists as direct child
              let canvas = container.querySelector(
                ':scope > .particles-js-canvas-el',
              ) as HTMLCanvasElement;

              if (!canvas) {
                console.warn('Canvas not found as direct child, creating it');
                // Create canvas as direct child
                canvas = document.createElement('canvas');
                canvas.className = `particles-js-canvas-el ${canvasClassName || ''}`.trim();
                canvas.style.width = '100%';
                canvas.style.height = '100%';
                container.appendChild(canvas);
              }

              // Verify particles.js can find it using the exact query it uses
              const testQuery = document.querySelector(`#${uniqueId} > .particles-js-canvas-el`);
              if (!testQuery) {
                console.error(
                  'particles.js query selector test failed:',
                  `#${uniqueId} > .particles-js-canvas-el`,
                );
                console.log('Container ID:', container.id, 'Expected:', uniqueId);
                console.log('Canvas parent:', canvas.parentElement?.id);
                console.log(
                  'All children:',
                  Array.from(container.children).map((c) => ({
                    tag: c.tagName,
                    id: c.id,
                    className: c.className,
                  })),
                );
                return;
              }

              // Ensure container has dimensions - use actual pixel values
              const containerWidth = container.offsetWidth || window.innerWidth;
              const containerHeight = container.offsetHeight || window.innerHeight;

              if (container.offsetWidth === 0 || container.offsetHeight === 0) {
                container.style.width = containerWidth + 'px';
                container.style.height = containerHeight + 'px';
              }

              console.log('Initializing particles with:', {
                id: uniqueId,
                containerSize: `${containerWidth}x${containerHeight}`,
                canvasExists: !!canvas,
                canvasSize: canvas ? `${canvas.offsetWidth}x${canvas.offsetHeight}` : 'N/A',
                queryTest: !!testQuery,
              });

              // Initialize particles.js
              instanceRef.current = particlesJS(uniqueId, config);

              // Check if particles were actually created (with cleanup)
              const checkTimeout = setTimeout(() => {
                const pJSDom = (window as any).pJSDom;
                const instance = pJSDom?.find((p: any) => p.pJS?.id === uniqueId);
                if (instance) {
                  console.log('Particles instance found:', {
                    id: uniqueId,
                    canvas: instance.pJS?.canvas?.el,
                    particles: instance.pJS?.particles?.array?.length || 0,
                  });
                } else {
                  console.warn('Particles instance not found in pJSDom. pJSDom:', pJSDom);
                  console.log(
                    'Available IDs in pJSDom:',
                    pJSDom?.map((p: any) => p.pJS?.id),
                  );
                }
              }, 300);

              // Store timeout for cleanup
              if (instanceRef.current) {
                (instanceRef.current as any)._checkTimeout = checkTimeout;
              }

              console.log('Particles initialized successfully');
            } catch (error) {
              console.error('Error initializing particles.js:', error);
            }
          }
        } else if (retryCount < maxRetries) {
          // Retry after a short delay if particles.js isn't ready
          retryCount++;
          setTimeout(initParticles, 50);
        } else {
          console.warn(
            'particles.js failed to load after maximum retries. window.particlesJS:',
            typeof (window as any).particlesJS,
          );
        }
      };

      // Small delay to ensure DOM is ready
      setTimeout(initParticles, 100);
    }

    return () => {
      // Cleanup particles on unmount
      const uniqueId = particlesIdRef.current;

      // Clear any pending timeouts
      if (instanceRef.current?._checkTimeout) {
        clearTimeout(instanceRef.current._checkTimeout);
      }

      if ((window as any).pJSDom) {
        const pJS = (window as any).pJSDom?.find((p: any) => p.pJS?.id === uniqueId);
        if (pJS && pJS.pJS && pJS.pJS.fn && pJS.pJS.fn.vendors && pJS.pJS.fn.vendors.destroypJS) {
          pJS.pJS.fn.vendors.destroypJS();
          (window as any).pJSDom = (window as any).pJSDom?.filter(
            (p: any) => p.pJS?.id !== uniqueId,
          );
        }
      }
    };
  }, [params]);

  return (
    <div
      ref={containerRef}
      id={particlesIdRef.current}
      className={className}
      style={{
        width: width || '100vw',
        height: height || '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: 'none',
        ...style,
      }}
    >
      <canvas
        className={`particles-js-canvas-el ${canvasClassName || ''}`.trim()}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default Particles;
