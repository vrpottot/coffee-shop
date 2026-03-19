import { useState, useEffect } from 'react'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation'
import { useTranslation } from '../../../hooks/useTranslation'
import './Projects.css'

interface Project {
  id: string
  title: string
  category?: string
  projectType?: string
  tags?: string[]
  year?: number
  link: string
  github?: string
  image?: {
    type: string
    content: string
    alt?: string
  }
}

interface Category {
  id: string
  name: string
}

export default function Projects() {
  const { t } = useTranslation()
  const [projects, setProjects] = useState<Project[]>([])
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const projectsPerPage = 6
  const sectionRef = useScrollAnimation({ threshold: 0.2, animationClass: 'slide-up' })

  useEffect(() => {
    loadProjects()
  }, [])

  useEffect(() => {
    if (projects.length > 0) {
      filterAndSortProjects()
    } else {
      setFilteredProjects([])
    }
    setCurrentPage(1)
  }, [projects, activeFilter])

  const loadProjects = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch('/assets/data/portfolio.json')
      const data = await response.json()
      
      if (!data || !Array.isArray(data.projects)) {
        throw new Error(t('common.invalidDataFormat'))
      }
      
      const validProjects = data.projects.filter((p: Project) => p && p.id && p.title)
      
      if (validProjects.length === 0) {
        throw new Error(t('common.noProjectsFound'))
      }
      
      setProjects(validProjects)
      setError(null)
      setFilteredProjects(validProjects)
    } catch (err) {
      const errorMessage = (err as Error).message || t('common.unknownError')
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  const filterAndSortProjects = () => {
    if (projects.length === 0) {
      setFilteredProjects([])
      return
    }

    let filtered = [...projects]

    if (activeFilter !== 'all') {
      filtered = filtered.filter(p => p.category === activeFilter)
    }

    // Сортировка по умолчанию - по году (новые сначала)
    filtered.sort((a, b) => (b.year || 0) - (a.year || 0))

    setFilteredProjects(filtered)
  }

  const getCategoryCount = (category: string): number => {
    if (category === 'all') return projects.length
    return projects.filter(p => p.category === category).length
  }

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  const startIndex = (currentPage - 1) * projectsPerPage
  const endIndex = startIndex + projectsPerPage
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Убрали автоматический скролл вверх при переключении страниц
  }

  const categories: Category[] = [
    { id: 'all', name: t('projects.all') },
    { id: 'fullstack', name: t('projects.fullstack') },
    { id: 'frontend', name: t('projects.frontend') }
  ]

  if (loading) {
    return (
      <section id="projects" ref={sectionRef} className="projects-section">
        <div className="projects-container">
          <div className="projects-loading">
            <p>{t('projects.loading') || 'Loading...'}</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="projects" className="projects-section">
        <div className="projects-container">
          <div className="projects-error">
            <p>{t('projects.error')}: {error}</p>
            <button 
              onClick={loadProjects}
              className="projects-retry-btn"
            >
              {t('projects.retry')}
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <section id="projects" ref={sectionRef} className="projects-section">
        <div className="projects-container">
          <div className="projects-header">
            <span className="projects-label">{t('projects.label')}</span>
            <h2 className="projects-title">{t('projects.title')}</h2>
            
            <div className="projects-filters">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`projects-filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
                >
                  {cat.name} <span className="projects-filter-count">{getCategoryCount(cat.id)}</span>
                </button>
              ))}
            </div>
            
          </div>

          {filteredProjects.length === 0 && !loading ? (
            <div className="projects-empty">
              <p>{t('projects.empty')}</p>
              {projects.length > 0 && (
                <p className="projects-empty-hint">{t('projects.emptyHint')}</p>
              )}
            </div>
          ) : (
            <>
              <div className="projects-grid">
                {paginatedProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    t={t}
                  />
                ))}
              </div>
              
              {totalPages > 1 && (
                <div className="projects-pagination">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="pagination-btn pagination-btn-prev"
                    aria-label={t('projects.prevPage')}
                  >
                    <i className="fas fa-chevron-left" aria-hidden="true"></i>
                  </button>
                  
                  <div className="pagination-pages">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                      if (
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 1 && page <= currentPage + 1)
                      ) {
                        return (
                          <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`pagination-page-btn ${currentPage === page ? 'active' : ''}`}
                            aria-label={`${t('projects.page')} ${page}`}
                            aria-current={currentPage === page ? 'page' : undefined}
                          >
                            {page}
                          </button>
                        )
                      } else if (page === currentPage - 2 || page === currentPage + 2) {
                        return <span key={page} className="pagination-ellipsis">...</span>
                      }
                      return null
                    })}
                  </div>
                  
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="pagination-btn pagination-btn-next"
                    aria-label={t('projects.nextPage')}
                  >
                    <i className="fas fa-chevron-right" aria-hidden="true"></i>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  )
}

interface ProjectCardProps {
  project: Project
  index: number
  t: (path: string) => string
}

function ProjectCard({ project, index, t }: ProjectCardProps) {
  const [imageError, setImageError] = useState<boolean>(false)

  const getImageSrc = (): string | null => {
    if (project.image?.content) {
      let path = project.image.content
      // Убираем начальный слеш, если есть
      path = path.replace(/^\//, '')
      // Если путь не начинается с assets/img, добавляем
      if (!path.startsWith('assets/img/') && !path.startsWith('assets/')) {
        path = `assets/img/${path.split('/').pop()}`
      }
      return `/${path}`
    }
    return null
  }

  const imageSrc = getImageSrc()

  return (
    <div
      className="project-card"
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      <div className="project-image">
        {imageSrc && !imageError ? (
          <img
            src={imageSrc}
            alt={project.image?.alt || project.title}
            className="project-img"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="project-placeholder">
            <i className="fas fa-image"></i>
          </div>
        )}
      </div>
      <div className="project-info">
        <div className="project-header">
          <h3>{project.title}</h3>
          {project.year && <span className="project-year">{project.year}</span>}
        </div>
        {project.tags && project.tags.length > 0 && (
          <div className="project-tags">
            {project.tags.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="project-tag">{tag}</span>
            ))}
          </div>
        )}
        <div className="project-actions">
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-primary"
          >
            {t('projects.viewProject')}
          </a>
          {project.github && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-github"
              aria-label="GitHub repository"
            >
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
