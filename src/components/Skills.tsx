import { useLanguage } from '../contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();
  const skillCategories = [
    {
      title: t.skills.categories.backend,
      icon: "⚙️",
      color: "from-green-500 to-green-600",
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "Django", icon: "🎸" },
        { name: "REST API", icon: "🔌" },
        { name: "Databases", icon: "🗄️" }
      ]
    },
    {
      title: t.skills.categories.frontend,
      icon: "🎨",
      color: "from-blue-500 to-blue-600",
      skills: [
        { name: "HTML/CSS", icon: "📄" },
        { name: "JavaScript", icon: "⚡" },
        { name: "React", icon: "⚛️" },
        { name: "Tailwind CSS", icon: "🎨" }
      ]
    },
    {
      title: t.skills.categories.ai,
      icon: "🤖",
      color: "from-purple-500 to-purple-600",
      skills: [
        { name: "AI Integration", icon: "🧠" },
        { name: "Voicebot Development", icon: "🗣️" },
        { name: "Process Automation", icon: "🔄" },
        { name: "Machine Learning", icon: "📊" }
      ]
    },
    {
      title: t.skills.categories.other,
      icon: "🛠️",
      color: "from-orange-500 to-orange-600",
      skills: [
        { name: "Git & GitHub", icon: "🔀" },
        { name: "SEO Optimization", icon: "📈" },
        { name: "Network Administration", icon: "🌐" },
        { name: "Log Analysis", icon: "📋" }
      ]
    }
  ];

  const softSkills = t.skills.softSkillsList;

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.skills.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-navy-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl border-2 border-gray-100 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all"
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-3xl mr-4 shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-750 rounded-xl hover:from-primary-50 hover:to-blue-50 dark:hover:from-gray-700 dark:hover:to-gray-650 transition-all shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-700"
                  >
                    <span className="text-2xl mr-4">{skill.icon}</span>
                    <span className="text-gray-800 dark:text-gray-200 font-semibold">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="bg-white dark:bg-gray-900 p-10 rounded-2xl shadow-xl border-2 border-gray-200 dark:border-gray-700">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t.skills.softSkillsTitle}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl text-center hover:shadow-lg transition-all transform hover:scale-105 border-2 border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500"
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <p className="text-gray-900 dark:text-white font-semibold text-sm">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Stack */}
        <div className="mt-12 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border-2 border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            {t.skills.techStack}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-center hover:scale-105 transition-transform shadow-lg">
                <div className="text-5xl mb-3">🐍</div>
                <p className="text-white font-semibold text-lg">Python</p>
              </div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-green-600 to-green-700 p-6 rounded-xl text-center hover:scale-105 transition-transform shadow-lg">
                <div className="text-5xl mb-3">🎸</div>
                <p className="text-white font-semibold text-lg">Django</p>
              </div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-6 rounded-xl text-center hover:scale-105 transition-transform shadow-lg">
                <div className="text-5xl mb-3">⚛️</div>
                <p className="text-white font-semibold text-lg">React</p>
              </div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-xl text-center hover:scale-105 transition-transform shadow-lg">
                <div className="text-5xl mb-3">📄</div>
                <p className="text-white font-semibold text-lg">HTML/CSS</p>
              </div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-6 rounded-xl text-center hover:scale-105 transition-transform shadow-lg">
                <div className="text-5xl mb-3">⚡</div>
                <p className="text-white font-semibold text-lg">JavaScript</p>
              </div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-gray-700 to-gray-900 p-6 rounded-xl text-center hover:scale-105 transition-transform shadow-lg">
                <div className="text-5xl mb-3">🗄️</div>
                <p className="text-white font-semibold text-lg">Database</p>
              </div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-orange-600 to-red-700 p-6 rounded-xl text-center hover:scale-105 transition-transform shadow-lg">
                <div className="text-5xl mb-3">🔀</div>
                <p className="text-white font-semibold text-lg">Git</p>
              </div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-6 rounded-xl text-center hover:scale-105 transition-transform shadow-lg">
                <div className="text-5xl mb-3">🤖</div>
                <p className="text-white font-semibold text-lg">AI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
