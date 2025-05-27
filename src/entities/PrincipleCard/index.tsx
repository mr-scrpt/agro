import React from 'react';
import { Card } from '@/shared/ui/Card';

interface PrincipleCardProps {
  number: number;
  title: string;
  description: string;
}

export function PrincipleCard({ number, title, description }: PrincipleCardProps) {
  return (
    <Card>
      <h3 className="text-xl font-semibold mb-3">{number}. {title}</h3>
      <p>{description}</p>
    </Card>
  );
}

export default PrincipleCard; 