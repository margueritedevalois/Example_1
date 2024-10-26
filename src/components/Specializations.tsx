import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const specializations = [
  'HR', 'IT', 'FMCG', 'Sales', 'Финансы и бухгалтерия',
  'Юриспруденция', 'Инженерия', 'Производство', 'Маркетинг',
  'Ритейл', 'Проектирование/Дизайн'
];

const services = [
  {
    title: 'Executive Search',
    subtitle: 'Подбор руководителей',
    color: 'bg-[#1A1F3D]'
  },
  {
    title: 'Подбор IT-специалистов',
    subtitle: '',
    color: 'bg-[#1A1F3D]'
  },
  {
    title: 'Подбор в back office',
    subtitle: '',
    color: 'bg-[#1A1F3D]'
  }
];

function Specializations() {
  const { ref: textRef, inView: textInView } = useInView({ threshold: 0.1 });
  const { ref: tagsRef, inView: tagsInView } = useInView({ threshold: 0.1 });
  const { ref: servicesRef, inView: servicesInView } = useInView({ threshold: 0.1 });
  const { ref: quoteRef, inView: quoteInView } = useInView({ threshold: 0.1 });

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div 
        ref={textRef}
        className={`transition-all duration-1000 transform ${
          textInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h2 className="text-4xl font-bold mb-12">
          Найдем <span className="text-[#F8976C]">лучших специалистов</span> из этих сфер:
        </h2>
      </div>

      <div 
        ref={tagsRef}
        className={`flex flex-wrap gap-3 mb-16 transition-all duration-1000 delay-300 transform ${
          tagsInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {specializations.map((spec, index) => (
          <span
            key={index}
            className="px-6 py-3 bg-gray-50 rounded-full text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            {spec}
          </span>
        ))}
      </div>

      <div 
        ref={servicesRef}
        className={`grid md:grid-cols-3 gap-6 mb-20 transition-all duration-1000 delay-500 transform ${
          servicesInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className={`${service.color} text-white p-8 rounded-lg hover:scale-105 transition-transform cursor-pointer`}
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            {service.subtitle && (
              <p className="text-gray-300 mb-4">{service.subtitle}</p>
            )}
            <ArrowRight className="text-[#F8976C]" />
          </div>
        ))}
      </div>

      <div 
        ref={quoteRef}
        className={`bg-[#E8F4FF] rounded-lg p-12 flex items-center gap-12 transition-all duration-1000 delay-700 transform ${
          quoteInView ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
        }`}
      >
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
          alt="Professional"
          className="w-72 h-72 object-cover rounded-lg"
        />
        <blockquote className="text-xl text-gray-700 leading-relaxed">
          "Мы не только подбираем квалифицированный персонал для вашей компании, но и стратегически развиваем ваш бизнес, обеспечивая долгосрочный успех и прогресс."
        </blockquote>
      </div>
    </div>
  );
}

export default Specializations;