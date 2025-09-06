import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';


export function useScrollReveal() {
    const elementRef = useRef(null)


    useEffect(() => {
        if (elementRef.current) {
            const sr = ScrollReveal();

            sr.reveal('.scroll-reveal', {
                origin: 'bottom',
                distance: '30px',
                duration: 800,
                delay: 200,
                scale: 1,
                easing: 'cubic-bezier(0.5, 0, 0, 1)',
                reset: false,
                interval: 150
            })
        }
    }, [])

    return elementRef
}