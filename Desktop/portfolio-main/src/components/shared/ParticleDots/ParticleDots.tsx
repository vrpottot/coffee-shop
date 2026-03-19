import { useEffect, useRef, useState } from 'react'
import './ParticleDots.css'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  element: HTMLElement
}

export default function ParticleDots() {
  const containerRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    if (!containerRef.current || !svgRef.current) return

    const container = containerRef.current
    const svg = svgRef.current
    const dotCount = window.innerWidth < 768 ? 50 : 100
    const connectionDistance = 140
    const mouseRadius = 200

    // Initialize particles
    const newParticles: Particle[] = []
    for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('div')
        dot.className = 'particle-dot'
        const x = Math.random() * 100
        const y = Math.random() * 100
        dot.style.left = `${x}%`
        dot.style.top = `${y}%`
        container.appendChild(dot)

        newParticles.push({
            x: (x / 100) * window.innerWidth,
            y: (y / 100) * window.innerHeight,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            element: dot
        })
    }
    particlesRef.current = newParticles

    const animate = () => {
        const width = window.innerWidth
        const height = window.innerHeight
        
        // Update SVG size
        svg.setAttribute('width', width.toString())
        svg.setAttribute('height', height.toString())
        
        // Clear SVG
        while (svg.firstChild) svg.removeChild(svg.firstChild)

        particlesRef.current.forEach((p, i) => {
            // Background movement
            p.x += p.vx
            p.y += p.vy

            // Mouse interaction
            const dx = p.x - mouseRef.current.x
            const dy = p.y - mouseRef.current.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            
            if (dist < mouseRadius) {
                const force = (mouseRadius - dist) / mouseRadius
                p.x += dx * force * 0.05
                p.y += dy * force * 0.05
            }

            // Boundary checks
            if (p.x < 0) p.x = width
            if (p.x > width) p.x = 0
            if (p.y < 0) p.y = height
            if (p.y > height) p.y = 0

            // Update DOM element
            p.element.style.transform = `translate(${p.x - (p.x % 1)}px, ${p.y - (p.y % 1)}px)`
            p.element.style.left = '0'
            p.element.style.top = '0'

            // Draw connections
            for (let j = i + 1; j < particlesRef.current.length; j++) {
                const p2 = particlesRef.current[j]
                const dx2 = p.x - p2.x
                const dy2 = p.y - p2.y
                const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2)

                if (dist2 < connectionDistance) {
                    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
                    line.setAttribute('x1', p.x.toString())
                    line.setAttribute('y1', p.y.toString())
                    line.setAttribute('x2', p2.x.toString())
                    line.setAttribute('y2', p2.y.toString())
                    line.setAttribute('class', 'particle-connection')
                    const opacity = 1 - dist2 / connectionDistance
                    line.style.opacity = (opacity * 0.2).toString()
                    svg.appendChild(line)
                }
            }
        })

        requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
        mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const handleResize = () => {
        particlesRef.current.forEach(p => {
            p.x = Math.random() * window.innerWidth
            p.y = Math.random() * window.innerHeight
        })
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)
    const animationId = requestAnimationFrame(animate)

    return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('resize', handleResize)
        cancelAnimationFrame(animationId)
        // Clean up particles
        newParticles.forEach(p => p.element.remove())
    }
  }, [])

  return (
    <div ref={containerRef} className="particle-dots-container" aria-hidden="true">
      <svg ref={svgRef} className="particle-connections-svg" />
    </div>
  )
}
