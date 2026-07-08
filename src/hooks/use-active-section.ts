import { useEffect, useState } from "react"

export const useActiveSection = (sectionIds: string[]) => {
    const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "")

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                // Anggap section "aktif" kalau sudah masuk 40% dari atas viewport
                rootMargin: "-20% 0px -60% 0px",
                threshold: 0,
            }
        )

        sectionIds.forEach((id) => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [sectionIds])

    return activeSection
}