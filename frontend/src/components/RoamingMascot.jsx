import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./RoamingMascot.css";

const MESSAGES = [
  "Hi! I'm Sasha — welcome to SashaInfinity!",
  "This is an education site — explore our courses!",
  "Try our Meiporul AR demo for immersive learning.",
  "Drag me around — I'll walk from wherever you drop me!",
  "Need guidance? Tap me anytime!",
  "New courses are live — check them out!",
  "Level up with analytics & data science tracks.",
  "Hybrid tutoring = the best of online and offline."
];

const MASCOT_WIDTH = 130;
const BOTTOM_OFFSET = 16;
const WALK_SPEED = 55;
const DRAG_THRESHOLD = 5;

export default function RoamingMascot() {
  const mountRef = useRef(null);
  const wrapperRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const draggingRef = useRef(false);
  const spinRef = useRef(null);
  const [bubble, setBubble] = useState(null);
  const msgIdxRef = useRef(0);

  const showMessage = () => {
    const msg = MESSAGES[msgIdxRef.current % MESSAGES.length];
    msgIdxRef.current += 1;
    setBubble(msg);
  };

  useEffect(() => {
    const canvas = mountRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(MASCOT_WIDTH, MASCOT_WIDTH, false);
    renderer.setClearColor(0x000000, 0);

    scene.add(new THREE.AmbientLight(0xffffff, 0.9));
    const key = new THREE.DirectionalLight(0xffffff, 1.1);
    key.position.set(2, 3, 2);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x88bbff, 0.5);
    rim.position.set(-2, 2, -1);
    scene.add(rim);

    let model = null;
    let mixer = null;
    const clock = new THREE.Clock();
    let raf;

    const loader = new GLTFLoader();
    loader.load("/Sasha-Walking.glb", (gltf) => {
      model = gltf.scene;

      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());

      model.position.x -= center.x;
      model.position.y -= box.min.y;
      model.position.z -= center.z;
      scene.add(model);

      const maxDim = Math.max(size.x, size.y);
      const fov = camera.fov * (Math.PI / 180);
      const distance = (maxDim / 2) / Math.tan(fov / 2) * 1.35;
      const centerY = size.y / 2;
      camera.position.set(0, centerY, distance);
      camera.lookAt(0, centerY, 0);
      camera.near = distance / 50;
      camera.far = distance * 10;
      camera.updateProjectionMatrix();

      if (gltf.animations.length > 0) {
        mixer = new THREE.AnimationMixer(model);
        gltf.animations.forEach((clip) => mixer.clipAction(clip).play());
      }
    });

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const dt = clock.getDelta();
      if (mixer) mixer.update(dt);
      if (model) {
        let rotation = 0;
        const spin = spinRef.current;
        if (spin) {
          const elapsed = performance.now() - spin.startTs;
          const progress = elapsed / spin.duration;
          if (progress >= 1) {
            spinRef.current = null;
          } else {
            const eased = 0.5 - Math.cos(progress * Math.PI) / 2;
            rotation = eased * Math.PI * 2 * spin.direction;
          }
        }
        model.rotation.y = rotation;
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      renderer.dispose();
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
          else obj.material.dispose();
        }
      });
    };
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const pos = posRef.current;
    pos.x = window.innerWidth - MASCOT_WIDTH - 24;
    pos.y = 0;
    const vel = { vy: 0 };

    const GRAVITY = 2200;
    const BOUNCE_DAMPING = 0.38;
    const MIN_BOUNCE_VELOCITY = 220;

    const apply = () => {
      wrapper.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
    };
    apply();

    const triggerSpin = () => {
      spinRef.current = {
        startTs: performance.now(),
        duration: 1400,
        direction: Math.random() < 0.5 ? 1 : -1
      };
    };

    let lastTs = performance.now();
    let raf;
    const tick = (ts) => {
      const dt = Math.min(0.05, (ts - lastTs) / 1000);
      lastTs = ts;

      if (draggingRef.current) {
        vel.vy = 0;
      } else if (pos.y < 0 || vel.vy !== 0) {
        vel.vy += GRAVITY * dt;
        pos.y += vel.vy * dt;
        if (pos.y >= 0) {
          pos.y = 0;
          if (Math.abs(vel.vy) > MIN_BOUNCE_VELOCITY) {
            vel.vy = -vel.vy * BOUNCE_DAMPING;
          } else {
            vel.vy = 0;
          }
        }
        apply();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame((t) => {
      lastTs = t;
      tick(t);
    });

    const spinInterval = setInterval(() => {
      if (!draggingRef.current && !spinRef.current && pos.y === 0) {
        triggerSpin();
        if (Math.random() < 0.55) showMessage();
      }
    }, 4500);

    const onResize = () => {
      const margin = MASCOT_WIDTH + 20;
      pos.x = Math.min(pos.x, window.innerWidth - margin);
      apply();
    };
    window.addEventListener("resize", onResize);

    const greet = setTimeout(() => showMessage(), 1200);

    wrapper._apply = apply;
    wrapper._triggerSpin = triggerSpin;
    wrapper._resetVel = () => {
      vel.vy = 0;
    };

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(spinInterval);
      clearTimeout(greet);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let startPointer = null;
    let startPos = null;
    let moved = false;
    let activePointerId = null;

    const onPointerDown = (e) => {
      if (e.button !== undefined && e.button !== 0) return;
      activePointerId = e.pointerId;
      wrapper.setPointerCapture?.(e.pointerId);
      startPointer = { x: e.clientX, y: e.clientY };
      startPos = { x: posRef.current.x, y: posRef.current.y };
      moved = false;
      wrapper._resetVel?.();
      wrapper.classList.add("is-grabbing");
    };

    const onPointerMove = (e) => {
      if (activePointerId !== e.pointerId || !startPointer) return;
      const dx = e.clientX - startPointer.x;
      const dy = e.clientY - startPointer.y;
      if (!moved && Math.hypot(dx, dy) > DRAG_THRESHOLD) {
        moved = true;
        draggingRef.current = true;
      }
      if (moved) {
        const margin = 10;
        const maxX = window.innerWidth - MASCOT_WIDTH - margin;
        const maxYUp = window.innerHeight - MASCOT_WIDTH - BOTTOM_OFFSET - margin;
        const nextX = Math.max(margin, Math.min(maxX, startPos.x + dx));
        const nextY = Math.max(-maxYUp, Math.min(0, startPos.y + dy));
        posRef.current.x = nextX;
        posRef.current.y = nextY;
        wrapper._apply?.();
      }
    };

    const onPointerUp = (e) => {
      if (activePointerId !== e.pointerId) return;
      wrapper.releasePointerCapture?.(e.pointerId);
      wrapper.classList.remove("is-grabbing");
      activePointerId = null;
      startPointer = null;
      if (moved) {
        draggingRef.current = false;
      } else {
        showMessage();
      }
    };

    wrapper.addEventListener("pointerdown", onPointerDown);
    wrapper.addEventListener("pointermove", onPointerMove);
    wrapper.addEventListener("pointerup", onPointerUp);
    wrapper.addEventListener("pointercancel", onPointerUp);

    return () => {
      wrapper.removeEventListener("pointerdown", onPointerDown);
      wrapper.removeEventListener("pointermove", onPointerMove);
      wrapper.removeEventListener("pointerup", onPointerUp);
      wrapper.removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  useEffect(() => {
    if (!bubble) return;
    const t = setTimeout(() => setBubble(null), 5000);
    return () => clearTimeout(t);
  }, [bubble]);

  return (
    <div
      ref={wrapperRef}
      className="roaming-mascot"
      style={{ bottom: `${BOTTOM_OFFSET}px` }}
    >
      {bubble && <div className="roaming-mascot__bubble">{bubble}</div>}
      <canvas
        ref={mountRef}
        className="roaming-mascot__canvas"
        width={MASCOT_WIDTH}
        height={MASCOT_WIDTH}
        style={{ width: MASCOT_WIDTH, height: MASCOT_WIDTH }}
      />
    </div>
  );
}
