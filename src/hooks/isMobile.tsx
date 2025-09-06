import { useEffect, useState } from "react";

export function useIsMobile(breakpoint: number = 768) {
    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined"
            ? window.matchMedia(`(max-width: ${breakpoint}px)`).matches
            : false
    );

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${breakpoint}px)`);
        const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);

        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, [breakpoint]);

    return isMobile;
}
