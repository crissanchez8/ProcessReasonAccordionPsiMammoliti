import { useState } from 'react';
import { AccordionCategory } from './components/AccordionCategory';
import { CheckboxItem } from './components/CheckboxItem';
import svgPaths from './imports/svg-tmohvqxqyv';

// Icon components
function HealthIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 24">
      <g>
        <path d={svgPaths.p2198b500} fill="#F1EDFE" />
        <path d={svgPaths.p2899a600} fill="#F1EDFE" />
        <g>
          <path d={svgPaths.p3364a880} fill="#383644" />
          <path d={svgPaths.p13cab080} fill="#383644" />
        </g>
        <path d={svgPaths.p22c8b480} fill="#A08DDA" />
        <path d={svgPaths.p2503c900} fill="#EAF7F4" />
        <path d={svgPaths.p27221f80} fill="#FEAFC3" />
        <path d={svgPaths.p1df8c00} fill="#A08DDA" />
        <path d={svgPaths.p261b8000} fill="#F1EDFE" />
        <path d={svgPaths.p722fb00} fill="#EAF7F4" />
        <path d={svgPaths.p46d2300} fill="#A08DDA" />
        <path d={svgPaths.p1a6e8d80} fill="#FEAFC3" />
      </g>
    </svg>
  );
}

function WellnessIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24">
      <g>
        <path d={svgPaths.p2b9e2600} fill="#383644" />
        <path d={svgPaths.p5887800} fill="#FEAFC3" />
        <path d={svgPaths.p5d47f00} fill="#C6BAEA" />
        <path d={svgPaths.p395bbd00} fill="#FFD18B" />
      </g>
    </svg>
  );
}

function RelationshipsIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <g>
        <path d={svgPaths.p1ed81f00} fill="#383644" />
        <path d={svgPaths.p28163c80} fill="#F1EDFE" />
        <path d={svgPaths.p2bd35480} fill="#F1EDFE" />
        <path d={svgPaths.pb7adc00} fill="#F1EDFE" />
        <path d={svgPaths.p3632d600} fill="#F1EDFE" />
        <path d={svgPaths.p2fd3f4f2} fill="#F1EDFE" />
        <path d={svgPaths.p1b841100} fill="#EAF7F4" />
        <path d={svgPaths.p1042c700} fill="#F1EDFE" />
        <path d={svgPaths.p2b9cd200} fill="#C6BAEA" />
        <path d={svgPaths.p191a700} fill="#EAF7F4" />
      </g>
    </svg>
  );
}

function MomentsIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
      <g>
        <path d={svgPaths.p35358ef0} fill="#383644" />
        <path d={svgPaths.p3016a880} fill="#F1EDFE" />
        <path d={svgPaths.p2ad42400} fill="#C6BAEA" />
        <path d={svgPaths.p366f2ac0} fill="#F1EDFE" />
        <path d={svgPaths.pae5ac80} fill="#C6BAEA" />
        <path d={svgPaths.p26a1d780} fill="#F1EDFE" />
        <path d={svgPaths.p15411000} fill="#F1EDFE" />
        <path d={svgPaths.p33df8c80} fill="#EAF7F4" />
        <path d={svgPaths.p2f047400} fill="#EAF7F4" />
        <path d={svgPaths.p146a2700} fill="#FFD18B" />
        <path d={svgPaths.p34678300} fill="#383644" />
        <path d={svgPaths.p9de5900} fill="#FFD18B" />
        <path d={svgPaths.p12c76d00} fill="#383644" />
      </g>
    </svg>
  );
}

interface CategoryData {
  id: string;
  title: string;
  icon: JSX.Element;
  items: { id: string; label: string }[];
}

const categories: CategoryData[] = [
  {
    id: 'health',
    title: 'Salud emocional y mental',
    icon: <HealthIcon />,
    items: [
      { id: 'health-1', label: 'Ansiedad, miedos o preocupación excesiva' },
      { id: 'health-2', label: 'Estado de ánimo bajo o depresivo' },
      { id: 'health-3', label: 'Cambios extremos en el estado de ánimo' },
      { id: 'health-4', label: 'Dificultades con la atención o impulsividad' },
      { id: 'health-5', label: 'Conducta compulsiva y/o repetitiva' },
      { id: 'health-6', label: 'Trauma o experiencias dolorosas del pasado' },
      { id: 'health-7', label: 'Adicciones' },
    ],
  },
  {
    id: 'wellness',
    title: 'Bienestar y auto-descubrimiento',
    icon: <WellnessIcon />,
    items: [
      { id: 'wellness-1', label: 'Mejorar mi bienestar general' },
      { id: 'wellness-2', label: 'Orientación en mi autoconocimiento' },
      { id: 'wellness-3', label: 'Problemas de peso, alimentación o imagen' },
    ],
  },
  {
    id: 'relationships',
    title: 'Relaciones personales',
    icon: <RelationshipsIcon />,
    items: [
      { id: 'relationships-1', label: 'Conflictos con familia o relaciones personales' },
      { id: 'relationships-2', label: 'Dificultad al conectar o comunicarme' },
      { id: 'relationships-3', label: 'Apego emocional o inseguridad emocional' },
      { id: 'relationships-4', label: 'Sexualidad y/o relaciones amorosas no trad.' },
      { id: 'relationships-5', label: 'Violencia o la manipulación en mis relaciones' },
      { id: 'relationships-6', label: 'Explorar mi identidad sexual o de género' },
    ],
  },
  {
    id: 'moments',
    title: 'Acompañamiento en momentos',
    icon: <MomentsIcon />,
    items: [
      { id: 'moments-1', label: 'Proceso de duelo, pérdida o desarraigo' },
      { id: 'moments-2', label: 'Necesito ayuda con pensamientos de suicidio' },
      { id: 'moments-3', label: 'Necesito apoyo en cuidados al final de la vida' },
      { id: 'moments-4', label: 'Apoyo en proceso de un embarazo o crianza' },
    ],
  },
];

export default function App() {
  const [openCategories, setOpenCategories] = useState<string[]>(['health']);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const MAX_SELECTIONS = 3;

  const toggleCategory = (categoryId: string) => {
    setOpenCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleCheckboxChange = (itemId: string, checked: boolean) => {
    if (checked && selectedItems.length >= MAX_SELECTIONS) {
      return; // Don't allow more than MAX_SELECTIONS
    }

    setSelectedItems((prev) =>
      checked ? [...prev, itemId] : prev.filter((id) => id !== itemId)
    );
  };

  const getCategoryHasSelection = (categoryId: string) => {
    const category = categories.find((cat) => cat.id === categoryId);
    if (!category) return false;
    return category.items.some((item) => selectedItems.includes(item.id));
  };

  return (
    <div className="min-h-screen bg-white flex items-start justify-center p-8">
      <div className="w-[328px]">
        {/* Counter */}
        <div className="mb-[8px] flex items-center justify-start">
          <p className="font-['Poppins'] text-[12px] font-normal">
            <span className="text-[#6d57bc]">{selectedItems.length}/3</span>
            <span className="text-[#292731]"> motivos</span>
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col">
          {categories.map((category, index) => (
            <AccordionCategory
              key={category.id}
              id={category.id}
              title={category.title}
              icon={category.icon}
              isOpen={openCategories.includes(category.id)}
              hasSelection={getCategoryHasSelection(category.id)}
              onToggle={() => toggleCategory(category.id)}
              isFirst={index === 0}
              isLast={index === categories.length - 1}
            >
              <div>
                {category.items.map((item) => {
                  const isChecked = selectedItems.includes(item.id);
                  const isDisabled = !isChecked && selectedItems.length >= MAX_SELECTIONS;

                  return (
                    <CheckboxItem
                      key={item.id}
                      id={item.id}
                      label={item.label}
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      disabled={isDisabled}
                    />
                  );
                })}
              </div>
            </AccordionCategory>
          ))}
        </div>
      </div>
    </div>
  );
}