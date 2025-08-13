import React from 'react';
import GradeCard from '@/components/styled/GradeCard.styled';

export default function StyledDesignSandbox() {
  const cards = [
    { title: 'Capybara', subtitle: 'Chill river unit', grade: 'S', rarity: 'Legendary' },
    { title: 'Capybara', subtitle: 'Marsh wanderer', grade: 'A', rarity: 'Epic' },
    { title: 'Capybara', subtitle: 'Sunbathing pro', grade: 'B', rarity: 'Rare' },
    { title: 'Capybara', subtitle: 'Mud enjoyer', grade: 'C', rarity: 'Uncommon' },
    { title: 'Capybara', subtitle: 'Background was white', grade: undefined, rarity: 'Common' },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold mb-6">Card grade showcase</h1>
        <p className="text-zinc-300 mb-8">
          그레이드 유무에 따라 배경과 배지가 달라집니다. 기존 Tailwind 설정은 건드리지 않습니다.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <GradeCard key={i} {...c} />
          ))}
        </div>
      </div>
    </div>
  );
}
