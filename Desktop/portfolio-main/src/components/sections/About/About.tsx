import { useState, ReactElement } from 'react';
import { LayoutTemplate } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';
import './About.css';

type CodeLanguage = 'js' | 'ts' | 'jsx' | 'node';

interface CodeExample {
  code: ReactElement;
}

const About = () => {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<CodeLanguage>('js');

  const codeExamples: Record<CodeLanguage, CodeExample> = {
    js: {
      code: (
        <>
          <p>
            <span className="text-purple-400">export</span>{' '}
            <span className="text-blue-400">const</span>{' '}
            <span className="text-pink-200">Animation</span> = ({' '}
            <span className="text-orange-300">target</span> ) =&gt; {'{'}
          </p>
          <p className="pl-4 py-1">
            gsap.<span className="text-blue-300">to</span>target, {'{'}
          </p>
          <p className="pl-8">
            duration: <span className="text-orange-300">1.5</span>,
          </p>
          <p className="pl-8">
            ease: <span className="text-orange-300">&quot;power4.out&quot;</span>,
          </p>
          <p className="pl-8">
            y: <span className="text-orange-300">0</span>,
          </p>
          <p className="pl-8">
            opacity: <span className="text-orange-300">1</span>
          </p>
          <p className="pl-4">{'});'}</p>
          <p>{'};'}</p>
        </>
      ),
    },
    ts: {
      code: (
        <>
          <p>
            <span className="text-purple-400">export</span>{' '}
            <span className="text-blue-400">const</span>{' '}
            <span className="text-pink-200">Animation</span> = (
          </p>
          <p className="pl-4">
            <span className="text-orange-300">target</span>: <span className="text-blue-300">HTMLElement</span>
          </p>
          <p>
            ): <span className="text-blue-300">void</span> =&gt; {'{'}
          </p>
          <p className="pl-4 py-1">
            gsap.<span className="text-blue-300">to</span>target, {'{'}
          </p>
          <p className="pl-8">
            duration: <span className="text-orange-300">1.5</span>,
          </p>
          <p className="pl-8">
            ease: <span className="text-orange-300">&quot;power4.out&quot;</span> <span className="text-blue-300">as</span> <span className="text-purple-400">Ease</span>,
          </p>
          <p className="pl-8">
            y: <span className="text-orange-300">0</span>,
          </p>
          <p className="pl-8">
            opacity: <span className="text-orange-300">1</span>
          </p>
          <p className="pl-4">{'});'}</p>
          <p>{'};'}</p>
        </>
      ),
    },
    jsx: {
      code: (
        <>
          <p>
            <span className="text-purple-400">import</span> {'{'} <span className="text-pink-200">useEffect</span>, <span className="text-pink-200">useRef</span> {'}'} <span className="text-purple-400">from</span> <span className="text-orange-300">&quot;react&quot;</span>;
          </p>
          <p className="pt-2">
            <span className="text-purple-400">export</span> <span className="text-blue-400">const</span> <span className="text-pink-200">Animation</span> = ({' '}
            <span className="text-orange-300">target</span> {'}'}) =&gt; {'{'}
          </p>
          <p className="pl-4 py-1">
            <span className="text-purple-400">useEffect</span>() =&gt; {'{'}
          </p>
          <p className="pl-8">
            gsap.<span className="text-blue-300">to</span>target.current, {'{'}
          </p>
          <p className="pl-12">
            duration: <span className="text-orange-300">1.5</span>,
          </p>
          <p className="pl-12">
            ease: <span className="text-orange-300">&quot;power4.out&quot;</span>,
          </p>
          <p className="pl-12">
            y: <span className="text-orange-300">0</span>,
          </p>
          <p className="pl-12">
            opacity: <span className="text-orange-300">1</span>
          </p>
          <p className="pl-8">{'});'}</p>
          <p className="pl-4">{'}, [target]);'}</p>
          <p>{'};'}</p>
        </>
      ),
    },
    node: {
      code: (
        <>
          <p>
            <span className="text-purple-400">const</span> <span className="text-blue-400">express</span> = <span className="text-purple-400">require</span>(<span className="text-orange-300">&quot;express&quot;</span>);
          </p>
          <p className="pt-2">
            <span className="text-purple-400">const</span> <span className="text-pink-200">app</span> = <span className="text-blue-300">express</span>();
          </p>
          <p className="pt-2">
            <span className="text-pink-200">app</span>.<span className="text-blue-300">get</span>(<span className="text-orange-300">&quot;/api/animation&quot;</span>, (<span className="text-orange-300">req</span>, <span className="text-orange-300">res</span>) =&gt; {'{'}
          </p>
          <p className="pl-4 py-1">
            <span className="text-purple-400">const</span> <span className="text-pink-200">animation</span> = {'{'}
          </p>
          <p className="pl-8">
            duration: <span className="text-orange-300">1.5</span>,
          </p>
          <p className="pl-8">
            ease: <span className="text-orange-300">&quot;power4.out&quot;</span>,
          </p>
          <p className="pl-8">
            y: <span className="text-orange-300">0</span>,
          </p>
          <p className="pl-8">
            opacity: <span className="text-orange-300">1</span>
          </p>
          <p className="pl-4">{'};'}</p>
          <p className="pl-4">
            <span className="text-pink-200">res</span>.<span className="text-blue-300">json</span>(<span className="text-pink-200">animation</span>);
          </p>
          <p>{'});'}</p>
        </>
      ),
    },
  };

  const languages: { key: CodeLanguage; label: string }[] = [
    { key: 'js', label: 'JavaScript' },
    { key: 'ts', label: 'TypeScript' },
    { key: 'jsx', label: 'React' },
    { key: 'node', label: 'Node.js' },
  ];

  return (
    <section className="z-10 md:px-6 max-w-6xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4 relative" id="about">
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">
          {t('about.title') || 'Чем я занимаюсь'}
        </h2>
        <div className="h-0.5 w-12 bg-purple-500 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]">
        {/* Card 1: Main Service */}
        <div className="glass glass-hover rounded-3xl p-8 md:col-span-2 transition-all duration-300 group">
          <div className="flex justify-between items-start mb-6">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-purple-400">
              <LayoutTemplate className="w-5 h-5" />
            </div>
          </div>
          <h3 className="text-xl font-medium text-white mb-2 tracking-tight">
            {t('about.services.title') || 'Разработка под ключ'}
          </h3>
          <p className="text-sm text-stone-400 leading-relaxed max-w-md font-light">
            {t('about.services.description') || 'Полный цикл создания веб-сайта: от прототипирования в Figma до верстки и интеграции CMS. Адаптивность, SEO-оптимизация и высокая производительность.'}
          </p>
        </div>
        
        {/* Card 2: Stats */}
        <div className="glass glass-hover rounded-3xl p-8 flex flex-col justify-center items-center text-center transition-all duration-300">
          <span className="text-5xl font-semibold tracking-tighter text-white mb-2">1,5+</span>
          <span className="text-sm text-stone-400 font-medium">{t('about.stats.experience') || 'Лет опыта'}</span>
          <div className="mt-6 flex -space-x-3">
            <div className="w-8 h-8 rounded-full border-2 border-[#1a1a1a] bg-stone-700"></div>
            <div className="w-8 h-8 rounded-full border-2 border-[#1a1a1a] bg-stone-600"></div>
            <div className="w-8 h-8 rounded-full border-2 border-[#1a1a1a] bg-stone-500"></div>
            <div className="w-8 h-8 rounded-full border-2 border-[#1a1a1a] bg-stone-800 flex items-center justify-center text-[10px] text-white font-medium">
              +40
            </div>
          </div>
          <span className="text-xs text-stone-500 mt-2">{t('about.stats.clients') || 'Довольных клиентов'}</span>
        </div>
        
        {/* Card 3: Philosophy */}
        <div className="glass glass-hover rounded-3xl p-8 md:col-span-1 transition-all duration-300 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 [--fx-filter:blur(10px)_liquid-glass(1.4,10)_saturate(1.25)_noise(0.5,1,0)]"></div>
          <div className="relative z-10">
            <h3 className="text-lg font-medium text-white mb-2 tracking-tight">
              {t('about.philosophy.title') || 'Внимание к деталям'}
            </h3>
            <p className="text-sm text-stone-400 font-light">
              {t('about.philosophy.description') || 'Каждый пиксель имеет значение. Я создаю системы, которые масштабируются и живут долго.'}
            </p>
          </div>
          <div className="mt-8 flex gap-2">
            <div className="w-full h-1 bg-stone-800 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 w-3/4"></div>
            </div>
          </div>
        </div>
        
        {/* Card 4: Code Preview */}
        <div className="glass glass-hover rounded-3xl p-0 md:col-span-2 overflow-hidden flex flex-col transition-all duration-300 relative">
          <div className="p-6 border-b border-white/5 bg-black/20">
            <div className="flex justify-end items-center mb-0">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-pink-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-orange-500/50"></div>
              </div>
            </div>
            <div className="flex items-center gap-0 mt-4">
              {languages.map((lang, index) => (
                <div key={lang.key} className="flex items-center gap-0">
                  <button
                    onClick={() => setSelectedLanguage(lang.key)}
                    className={`px-4 py-2.5 text-sm font-medium rounded-md transition-all duration-200 ${
                      selectedLanguage === lang.key
                        ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                        : 'text-stone-500 hover:text-stone-300 hover:bg-white/5'
                    }`}
                  >
                    {lang.label}
                  </button>
                  {index < languages.length - 1 && (
                    <div className="h-6 w-px bg-white/10 mx-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 font-mono text-xs text-stone-400 bg-black/40 h-full overflow-auto">
            {codeExamples[selectedLanguage].code}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
