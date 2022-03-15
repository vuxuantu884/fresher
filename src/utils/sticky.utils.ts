import { useEffect, useState } from "react"

function useSticky(offset: number = 84) {
    const [isSticky, setSticky] = useState(false)

    const handleScroll = () => {
        setSticky(window.scrollY >= offset);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", () => handleScroll)
        }
    }, [handleScroll])

    return { isSticky }
}

export default useSticky