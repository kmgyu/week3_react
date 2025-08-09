import React from 'react';
import styled, { css } from 'styled-components';

const gradeTheme = {
  S: { bg: 'linear-gradient(135deg, #f9d423 0%, #ff4e50 100%)', badge: '#ff4e50' },
  A: { bg: 'linear-gradient(135deg, #00b09b 0%, #96c93d 100%)', badge: '#00b09b' },
  B: { bg: 'linear-gradient(135deg, #36d1dc 0%, #5b86e5 100%)', badge: '#36d1dc' },
  C: { bg: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)', badge: '#4f86f7' },
  NA: { bg: 'linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 100%)', badge: '#9e9e9e' },
};

const Card = styled.div`
  position: relative;
  width: 240px;
  border-radius: 1rem;
  padding: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  overflow: hidden;
  transition: transform .15s ease, box-shadow .15s ease;
  cursor: pointer;
  ${({ $grade }) => {
    const g = gradeTheme[$grade] || gradeTheme.NA;
    return css`background: ${g.bg};`;
  }}
  &:hover { transform: translateY(-2px); box-shadow: 0 14px 30px rgba(0,0,0,0.2); }
`;

const Badge = styled.span`
  position: absolute;
  top: 10px; left: 10px;
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 700;
  color: white;
  border-radius: 999px;
  letter-spacing: .5px;
  ${({ $grade }) => {
    const g = gradeTheme[$grade] || gradeTheme.NA;
    return css`background-color: ${g.badge};`;
  }}
  text-transform: uppercase;
`;

const Rarity = styled.span`
  position: absolute;
  top: 10px; right: 10px;
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 600;
  color: #1f2937;
  background: rgba(255,255,255,.85);
  border-radius: 999px;
  letter-spacing: .3px;
`;

const ImgWrap = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: .75rem;
  overflow: hidden;
  background: rgba(255,255,255,.4);
  display: grid;
  place-items: center;
  img { width: 100%; height: 100%; object-fit: cover; display: block; }
`;

const Title = styled.h3`
  margin: 10px 4px 2px;
  color: #111827;
  font-weight: 800;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  margin: 0 4px 6px;
  color: #374151;
  font-size: 14px;
  opacity: .9;
`;

export default function GradeCard({
  title = 'Capybara',
  subtitle = 'Gentle swamp potato',
  image = 'https://images.unsplash.com/photo-1548611716-1b4e34c2c2a3?q=80&w=1200&auto=format&fit=crop',
  grade,     // 'S' | 'A' | 'B' | 'C' | undefined
  rarity = 'Common',
  onClick,
}) {
  const badgeGrade = grade || 'NA';

  return (
    <Card $grade={badgeGrade} onClick={onClick} role="button" aria-label={`${title} card`}>
      <Badge $grade={badgeGrade}>{badgeGrade === 'NA' ? 'N/A' : `${badgeGrade} Grade`}</Badge>
      <Rarity>{rarity}</Rarity>
      <ImgWrap>
        <img src={image} alt={title} loading="lazy" />
      </ImgWrap>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Card>
  );
}
