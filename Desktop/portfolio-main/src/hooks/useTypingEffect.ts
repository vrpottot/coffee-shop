import { useState, useEffect } from 'react'

export function useTypingEffect(
  texts: string[],
  typingSpeed: number = 100,
  deletingSpeed: number = 50,
  pauseTime: number = 2000
): string {
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0)
  const [currentText, setCurrentText] = useState<string>('')
  const [isDeleting, setIsDeleting] = useState<boolean>(false)

  useEffect(() => {
    const currentFullText = texts[currentTextIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.slice(0, currentText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseTime])

  return currentText
}
