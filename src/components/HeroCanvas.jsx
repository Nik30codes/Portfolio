import { useEffect, useRef, useState } from "react";

/**
 * Ambient particle field behind the hero.
 *
 * Deliberately constrained so it can never cost a recruiter a page view:
 *   - three.js is dynamically imported, so it stays out of the main bundle
 *   - never loads below 1024px (phones and small tablets skip it entirely)
 *   - never loads under prefers-reduced-motion
 *   - pauses its RAF loop when the tab is hidden or the hero scrolls away
 *   - reads --accent from the live theme, so it flips with dark mode
 */
export default function HeroCanvas() {
  const hostRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1024px)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!wide || reduce) return;

    let renderer, scene, camera, points, frameId, observer, THREE;
    let disposed = false;
    let visible = true;
    const host = hostRef.current;
    if (!host) return;

    (async () => {
      THREE = await import("three");
      if (disposed || !hostRef.current) return;

      const w = host.clientWidth;
      const h = host.clientHeight;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 100);
      camera.position.z = 15;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      host.appendChild(renderer.domElement);

      // Points distributed on a sphere shell, so it reads as a considered
      // form rather than random noise.
      const COUNT = 900;
      const pos = new Float32Array(COUNT * 3);
      for (let i = 0; i < COUNT; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = 7 + Math.random() * 1.6;
        pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        pos[i * 3 + 2] = r * Math.cos(phi);
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));

      const accent = getComputedStyle(document.documentElement)
        .getPropertyValue("--accent")
        .trim();

      const mat = new THREE.PointsMaterial({
        color: new THREE.Color(accent || "#5a5fff"),
        size: 0.075,
        transparent: true,
        opacity: 0.55,
        depthWrite: false,
      });

      points = new THREE.Points(geo, mat);
      scene.add(points);
      setReady(true);

      const tick = () => {
        frameId = requestAnimationFrame(tick);
        if (!visible) return;
        points.rotation.y += 0.0012;
        points.rotation.x += 0.0004;
        renderer.render(scene, camera);
      };
      tick();

      const onResize = () => {
        if (!hostRef.current) return;
        const nw = hostRef.current.clientWidth;
        const nh = hostRef.current.clientHeight;
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
        renderer.setSize(nw, nh);
      };
      window.addEventListener("resize", onResize);

      // Stop rendering once the hero is off screen or the tab is backgrounded.
      observer = new IntersectionObserver(
        ([e]) => {
          visible = e.isIntersecting;
        },
        { threshold: 0 }
      );
      observer.observe(host);

      const onVis = () => {
        visible = !document.hidden;
      };
      document.addEventListener("visibilitychange", onVis);

      // Repaint the point colour when the theme flips.
      const themeWatcher = new MutationObserver(() => {
        const next = getComputedStyle(document.documentElement)
          .getPropertyValue("--accent")
          .trim();
        if (next) mat.color.set(next);
      });
      themeWatcher.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });

      host._cleanup = () => {
        window.removeEventListener("resize", onResize);
        document.removeEventListener("visibilitychange", onVis);
        themeWatcher.disconnect();
      };
    })();

    return () => {
      disposed = true;
      if (frameId) cancelAnimationFrame(frameId);
      if (observer) observer.disconnect();
      if (host && host._cleanup) host._cleanup();
      if (points) {
        points.geometry.dispose();
        points.material.dispose();
      }
      if (renderer) {
        renderer.dispose();
        if (renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 transition-opacity duration-1000 ${
        ready ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}
