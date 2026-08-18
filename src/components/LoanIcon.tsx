import React from 'react';
import {
  UserCheck,
  Home,
  Hammer,
  Paintbrush,
  Building2,
  Briefcase,
  Factory,
  Rocket,
  RefreshCw,
  GraduationCap,
  BookOpen,
  Car,
  Bike,
  Truck,
  Coins,
  HeartPulse,
  Sparkles,
  Plane,
  Tv,
  Cog,
  Tractor,
  Layers,
  CreditCard,
  Zap,
  HelpCircle
} from 'lucide-react';

interface LoanIconProps {
  name: string;
  className?: string;
}

export const LoanIcon: React.FC<LoanIconProps> = ({ name, className = 'w-6 h-6' }) => {
  switch (name) {
    case 'UserCheck': return <UserCheck className={className} />;
    case 'Home': return <Home className={className} />;
    case 'Hammer': return <Hammer className={className} />;
    case 'Paintbrush': return <Paintbrush className={className} />;
    case 'Building2': return <Building2 className={className} />;
    case 'Briefcase': return <Briefcase className={className} />;
    case 'Factory': return <Factory className={className} />;
    case 'Rocket': return <Rocket className={className} />;
    case 'RefreshCw': return <RefreshCw className={className} />;
    case 'GraduationCap': return <GraduationCap className={className} />;
    case 'BookOpen': return <BookOpen className={className} />;
    case 'Car': return <Car className={className} />;
    case 'Bike': return <Bike className={className} />;
    case 'Truck': return <Truck className={className} />;
    case 'Coins': return <Coins className={className} />;
    case 'HeartPulse': return <HeartPulse className={className} />;
    case 'Sparkles': return <Sparkles className={className} />;
    case 'Plane': return <Plane className={className} />;
    case 'Tv': return <Tv className={className} />;
    case 'Cog': return <Cog className={className} />;
    case 'Tractor': return <Tractor className={className} />;
    case 'Layers': return <Layers className={className} />;
    case 'CreditCard': return <CreditCard className={className} />;
    case 'Zap': return <Zap className={className} />;
    default: return <HelpCircle className={className} />;
  }
};
