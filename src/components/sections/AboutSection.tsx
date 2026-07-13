import { User, Briefcase, Award } from 'lucide-react';
import { ACHIEVEMENTS, ROTATING_PHRASES, ABOUT_CONTENT } from '../../data/content';
import { RotatingText } from '../ui/RotatingText';
import advocatePhoto from '../../assets/AdvocateVinayakAmte.jpeg';
import pic2 from '../../assets/pic2.png';

interface AboutSectionProps {
  onNavigate: (id: string) => void;
}

export function AboutSection({ onNavigate }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{ABOUT_CONTENT.title}</h2>
          <p className="text-gray-800 md:text-lg font-medium max-w-3xl mx-auto">
            {ABOUT_CONTENT.subtitle}
          </p>
          <RotatingText phrases={ROTATING_PHRASES} prefix="Advocate Vinayak Amte" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                <User className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                  {ABOUT_CONTENT.sections[0].title}
                </h3>
                <p className="text-gray-800 md:text-lg font-medium">
                  {ABOUT_CONTENT.sections[0].content}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                <Briefcase className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                  {ABOUT_CONTENT.sections[1].title}
                </h3>
                <p className="text-gray-800 md:text-lg font-medium">
                  {ABOUT_CONTENT.sections[1].content}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                <Award className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                  {ABOUT_CONTENT.sections[2].title}
                </h3>
                <p className="text-gray-800 md:text-lg font-medium">
                  {ABOUT_CONTENT.sections[2].content}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                <Briefcase className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                  {ABOUT_CONTENT.sections[3].title}
                </h3>
                <ul className="list-disc list-inside text-gray-800 md:text-lg font-medium space-y-2">
                  {ABOUT_CONTENT.sections[3].listItems?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gray-50 p-12 rounded-3xl shadow-2xl border w-full max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10">
                Key Achievements
              </h3>
              <div className="grid grid-cols-2 gap-10">
                {ACHIEVEMENTS.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-extrabold text-black mb-3">
                      {achievement.number}
                    </div>
                    <div className="text-base md:text-lg text-gray-600">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating images on desktop */}
      <img
        src={advocatePhoto}
        alt="Advocate Vinayak Amte in office"
        className="hidden md:block absolute top-80 right-60 w-full max-w-md h-auto max-h-[420px] object-cover rounded-2xl shadow-2xl border-4 border-white bg-gray-100 z-10"
        loading="lazy"
      />
      <img
        src={pic2}
        alt="Panel Advocate"
        className="hidden md:block absolute top-[99rem] right-56 w-[370px] h-[440px] object-cover rounded-2xl shadow-2xl border-4 border-white bg-gray-100 z-10"
        loading="lazy"
      />
    </section>
  );
}