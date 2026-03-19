import { useScrollAnimation } from '../../../hooks/useScrollAnimation'
import './TechStack.css'

export default function TechStack() {
  const sectionRef = useScrollAnimation({ threshold: 0.1, animationClass: 'blur-fade' })
  const techs: string[] = [
    'HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Python', 
    'PHP', 'Git', 'Figma', 'Bootstrap', 'Sass', 'Webpack', 'npm', 'VS Code'
  ]

  return (
    <section id="stack" ref={sectionRef} className="techstack-section">
      <div className="techstack-container">
        <div className="techstack-content">
          {techs.map((tech, idx) => (
            <span key={idx} className="techstack-item">{tech}</span>
          ))}
          {techs.map((tech, idx) => (
            <span key={`dup-${idx}`} className="techstack-item">{tech}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
