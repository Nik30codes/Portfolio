import { frame, motion, useSpring, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const spring = { damping: 20, stiffness: 160 };

function useFollowPointer(ref, active) {
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  useEffect(() => {
    if (!active) return;
    const handleMove = ({ clientX, clientY }) => {
      const el = ref.current;
      if (!el) return;
      frame.read(() => {
        x.set(clientX - el.offsetWidth / 2);
        y.set(clientY - el.offsetHeight / 2);
      });
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [active, ref, x, y]);

  return { x, y };
}

export default function CursorFollower() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Only run where there is a precise pointer. Touch users got a dead,
  // invisible cursor in the old build.
  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const sync = () => setEnabled(mq.matches && !reduce);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [reduce]);

  useEffect(() => {
    if (enabled) document.body.classList.add("custom-cursor-on");
    else document.body.classList.remove("custom-cursor-on");
  }, [enabled]);

  // Delegated, so elements added after mount still trigger the hover state.
  useEffect(() => {
    if (!enabled) return;
    const sel = "a, button, h1, h2, h3, img, .hover-target";
    const over = (e) => e.target.closest(sel) && setHovered(true);
    const out = (e) => e.target.closest(sel) && setHovered(false);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    return () => {
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, [enabled]);

  const dot = useFollowPointer(dotRef, enabled);
  const ring = useFollowPointer(ringRef, enabled);

  if (!enabled) return null;

  const base = {
    position: "fixed",
    top: 0,
    left: 0,
    borderRadius: "50%",
    pointerEvents: "none",
  };

  return (
    <>
      <motion.div
        ref={dotRef}
        aria-hidden="true"
        style={{
          ...base,
          width: 8,
          height: 8,
          backgroundColor: "var(--accent)",
          zIndex: 99999,
          x: dot.x,
          y: dot.y,
        }}
      />
      <motion.div
        ref={ringRef}
        aria-hidden="true"
        animate={{ scale: hovered ? 1.7 : 1 }}
        transition={{ duration: 0.25 }}
        style={{
          ...base,
          width: 36,
          height: 36,
          border: "1.5px solid var(--accent)",
          zIndex: 99998,
          x: ring.x,
          y: ring.y,
        }}
      />
    </>
  );
}
