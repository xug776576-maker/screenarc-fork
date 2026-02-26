import { useState, useEffect } from 'react';

const use3dTilt = () => {
    const [style, setStyle] = useState({});

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const x = (clientX / innerWidth - 0.5) * 30;
            const y = (clientY / innerHeight - 0.5) * 30;

            setStyle({
                transform: `perspective(500px) rotateY(${x}deg) rotateX(${y}deg)`,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return style;
};

export default use3dTilt;