import React from 'react'

const skills = [
  { name: 'UI Design', level: 95 },
  { name: 'UX Design', level: 90 },
  { name: 'Web Design', level: 85 },
  { name: 'Mobile Design', level: 80 },
  { name: 'Prototyping', level: 85 },
  { name: 'User Research', level: 75 }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="wrapper">
        <h2 className="text-3xl font-bold mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-black/20 p-6 rounded-xl">
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold">{skill.name}</h3>
                <span className="text-[#FF881F]">{skill.level}%</span>
              </div>
              <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#FF881F] rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 