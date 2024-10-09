// CometBackground.js
import React, { useEffect, useRef } from 'react';

const CometBackground = () => {
    const canvasRef = useRef(null);

    const drawComet = (ctx, x, y) => {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
    };

    const animateComets = (ctx, comets) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        comets.forEach((comet, index) => {
            drawComet(ctx, comet.x, comet.y);
            comet.y += comet.speed;

            // Reset comet position when it goes off the screen
            if (comet.y > ctx.canvas.height) {
                comet.y = 0;
                comet.x = Math.random() * ctx.canvas.width;
            }
        });
        requestAnimationFrame(() => animateComets(ctx, comets));
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const comets = Array.from({ length: 50 }).map(() => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speed: Math.random() * 2 + 1,
        }));

        // Resize canvas to fill the window
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Start animation
        animateComets(ctx, comets);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 z-0" />;
};

export default CometBackground;
