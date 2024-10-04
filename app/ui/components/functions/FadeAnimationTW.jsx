import { useEffect, useState } from "react";

export function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const currentRef = ref.current; // Capturamos el valor actual de ref.current
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting);
        });

        // Verifica que currentRef sea un elemento DOM válido
        if (currentRef) {
            observer.observe(currentRef);
        }
        

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
            observer.disconnect();
        };
    }, [ref]);

    return isIntersecting;
}
