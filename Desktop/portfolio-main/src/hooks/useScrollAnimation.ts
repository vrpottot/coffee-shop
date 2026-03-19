import { useEffect, useRef, RefObject } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  animationClass?: string
  once?: boolean
}

export function useScrollAnimation<T extends HTMLElement>(options: UseScrollAnimationOptions = {}): RefObject<T | null> {
  const ref = useRef<T>(null)
  const {
    threshold = 0.1,
    rootMargin = '0px',
    animationClass = 'fade-in-up',
    once = true
  } = options

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Изначально добавляем класс анимации для начального состояния
    element.classList.add(animationClass)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            if (once) {
              observer.unobserve(entry.target)
            }
          } else if (!once) {
            entry.target.classList.remove('visible')
          }
        })
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, rootMargin, animationClass, once])

  return ref
}
