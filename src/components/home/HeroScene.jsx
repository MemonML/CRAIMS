import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function HeroScene() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particles
    const particleCount = 300;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 25;
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.04,
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // DNA Helix spheres
    const helixGroup = new THREE.Group();
    const sphereGeo = new THREE.SphereGeometry(0.06, 8, 8);
    const mat1 = new THREE.MeshBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.8 });
    const mat2 = new THREE.MeshBasicMaterial({ color: 0x14b8a6, transparent: true, opacity: 0.8 });

    for (let i = 0; i < 60; i++) {
      const t = i * 0.2;
      const s1 = new THREE.Mesh(sphereGeo, mat1);
      s1.position.set(Math.cos(t) * 1.5, t * 0.3 - 4, Math.sin(t) * 1.5);
      helixGroup.add(s1);

      const s2 = new THREE.Mesh(sphereGeo, mat2);
      s2.position.set(Math.cos(t + Math.PI) * 1.5, t * 0.3 - 4, Math.sin(t + Math.PI) * 1.5);
      helixGroup.add(s2);
    }
    helixGroup.position.set(3, 0, -2);
    scene.add(helixGroup);

    // Neural nodes
    const nodeGroup = new THREE.Group();
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x0ea5e9, transparent: true, opacity: 0.6 });
    const nodeGeo = new THREE.SphereGeometry(0.08, 8, 8);

    for (let i = 0; i < 30; i++) {
      const m = new THREE.Mesh(nodeGeo, nodeMat);
      m.position.set((Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 4 - 3);
      nodeGroup.add(m);
    }
    nodeGroup.position.set(-3, 0, -2);
    scene.add(nodeGroup);

    // Animate
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      particles.rotation.y = t * 0.02;
      particles.rotation.x = Math.sin(t * 0.01) * 0.1;

      helixGroup.rotation.y = t * 0.15;
      nodeGroup.rotation.y = t * 0.05;
      nodeGroup.position.y = Math.sin(t * 0.3) * 0.3;

      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0" />;
}
