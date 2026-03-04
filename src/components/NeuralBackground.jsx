import { useEffect, useRef } from "react";

export default function NeuralBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        let animationId;
        let nodes = [];
        let pulses = [];

        const isMobile = window.innerWidth < 768;
        const NODE_COUNT = isMobile ? 30 : 40;
        const MAX_DIST = 180;
        const PULSE_SPEED = isMobile ? 0.45 : 0.9;
        const PULSE_SPAWN_RATE = isMobile ? 0.003 : 0.008;

        function resize() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            initNodes();
        }

        function initNodes() {
            nodes = Array.from({ length: NODE_COUNT }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * (isMobile ? 0.07 : 0.15),
                vy: (Math.random() - 0.5) * (isMobile ? 0.07 : 0.15),
                r: Math.random() * 1.5 + 1,
                pulse: 0,
            }));
            pulses = [];
        }

        function getEdges() {
            const edges = [];
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < MAX_DIST) edges.push({ i, j, dist });
                }
            }
            return edges;
        }

        function spawnPulses(edges) {
            edges.forEach(({ i, j }) => {
                if (Math.random() < PULSE_SPAWN_RATE) {
                    pulses.push({ i, j, t: 0, dir: Math.random() < 0.5 ? 1 : -1 });
                }
            });
            // Limit total pulses to keep it calm
            if (pulses.length > 25) pulses.splice(0, pulses.length - 25);
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const edges = getEdges();
            spawnPulses(edges);

            // Draw connections — more visible, highlighted
            edges.forEach(({ i, j, dist }) => {
                const alpha = (1 - dist / MAX_DIST) * 0.55;
                ctx.beginPath();
                ctx.moveTo(nodes[i].x, nodes[i].y);
                ctx.lineTo(nodes[j].x, nodes[j].y);
                ctx.strokeStyle = `rgba(59,130,246,${alpha})`;
                ctx.lineWidth = 1.2;
                ctx.stroke();
            });

            // Draw pulses (data flowing along edges)
            pulses = pulses.filter((p) => {
                p.t += PULSE_SPEED / Math.max(
                    Math.hypot(nodes[p.i].x - nodes[p.j].x, nodes[p.i].y - nodes[p.j].y),
                    1
                );
                if (p.t > 1) return false;

                const src = p.dir === 1 ? nodes[p.i] : nodes[p.j];
                const dst = p.dir === 1 ? nodes[p.j] : nodes[p.i];
                const px = src.x + (dst.x - src.x) * p.t;
                const py = src.y + (dst.y - src.y) * p.t;

                // Glow
                const grad = ctx.createRadialGradient(px, py, 0, px, py, 8);
                grad.addColorStop(0, "rgba(147,210,255,0.9)");
                grad.addColorStop(0.4, "rgba(59,130,246,0.5)");
                grad.addColorStop(1, "rgba(59,130,246,0)");
                ctx.beginPath();
                ctx.arc(px, py, 8, 0, Math.PI * 2);
                ctx.fillStyle = grad;
                ctx.fill();

                // Core dot
                ctx.beginPath();
                ctx.arc(px, py, 2, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(200,230,255,0.95)";
                ctx.fill();

                // Light the destination node briefly
                dst.pulse = 1;

                return true;
            });

            // Draw nodes
            nodes.forEach((n) => {
                const glow = n.pulse > 0 ? n.pulse : 0;
                if (glow > 0) {
                    const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 10);
                    g.addColorStop(0, `rgba(59,130,246,${glow * 0.4})`);
                    g.addColorStop(1, "rgba(59,130,246,0)");
                    ctx.beginPath();
                    ctx.arc(n.x, n.y, 10, 0, Math.PI * 2);
                    ctx.fillStyle = g;
                    ctx.fill();
                    n.pulse -= 0.015;
                }

                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(80,140,220,${(isMobile ? 0.08 : 0.18) + (glow * 0.25)})`;
                ctx.fill();

                // Move
                n.x += n.vx;
                n.y += n.vy;
                if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
                if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
            });

            animationId = requestAnimationFrame(draw);
        }

        const ro = new ResizeObserver(resize);
        ro.observe(canvas);
        resize();
        draw();

        return () => {
            cancelAnimationFrame(animationId);
            ro.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ opacity: 0.55 }}
        />
    );
}
