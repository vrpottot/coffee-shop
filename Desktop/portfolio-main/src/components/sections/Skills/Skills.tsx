import { Code, Users, Lightbulb, Target, MessageCircle, Zap } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';
import './Skills.css';

interface Skill {
  name: string;
  level: number; // 0-100
  icon?: React.ReactNode;
}

const Skills = () => {
  const { t } = useTranslation();
  const hardSkills: Skill[] = [
    { name: 'JavaScript/TypeScript', level: 85 },
    { name: 'React/Next.js', level: 80 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Node.js', level: 70 },
    { name: 'Git/GitHub', level: 85 },
    { name: 'Figma', level: 75 },
  ];

  const softSkills: { name: string; icon: React.ReactNode }[] = [
    { name: t('skills.softSkillsList.communication') || 'Коммуникация', icon: <MessageCircle className="w-5 h-5" /> },
    { name: t('skills.softSkillsList.teamwork') || 'Работа в команде', icon: <Users className="w-5 h-5" /> },
    { name: t('skills.softSkillsList.problemSolving') || 'Решение проблем', icon: <Lightbulb className="w-5 h-5" /> },
    { name: t('skills.softSkillsList.determination') || 'Целеустремленность', icon: <Target className="w-5 h-5" /> },
    { name: t('skills.softSkillsList.adaptability') || 'Адаптивность', icon: <Zap className="w-5 h-5" /> },
    { name: t('skills.softSkillsList.creativity') || 'Креативность', icon: <Code className="w-5 h-5" /> },
  ];

  return (
    <section className="z-10 md:px-6 max-w-6xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4 relative" id="skills">
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">
          {t('skills.title') || 'Навыки'}
        </h2>
        <div className="h-0.5 w-12 bg-purple-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Hard Skills */}
        <div className="glass glass-hover rounded-3xl p-8 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-purple-400">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-medium text-white tracking-tight">
              {t('skills.hardSkills') || 'Технические навыки'}
            </h3>
          </div>
          <div className="space-y-5">
            {hardSkills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-white font-medium">{skill.name}</span>
                  <span className="text-xs text-stone-400">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-stone-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="glass glass-hover rounded-3xl p-8 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-purple-400">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-medium text-white tracking-tight">
              {t('skills.softSkills') || 'Личностные качества'}
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-white/5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-3 group-hover:bg-purple-500/30 transition-colors">
                  {skill.icon}
                </div>
                <span className="text-sm text-white font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
