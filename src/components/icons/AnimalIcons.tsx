import { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export const GoatIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Goat head with horns and beard */}
    <path d="M4 6c0-2 2-4 4-2" /> {/* Left horn */}
    <path d="M20 6c0-2-2-4-4-2" /> {/* Right horn */}
    <ellipse cx="12" cy="10" rx="6" ry="5" /> {/* Head */}
    <circle cx="9" cy="9" r="1" fill="currentColor" /> {/* Left eye */}
    <circle cx="15" cy="9" r="1" fill="currentColor" /> {/* Right eye */}
    <ellipse cx="12" cy="13" rx="2" ry="1.5" /> {/* Nose/muzzle */}
    <path d="M10 15c0 2-1 4-2 5" /> {/* Left beard */}
    <path d="M14 15c0 2 1 4 2 5" /> {/* Right beard */}
    <path d="M12 15v4" /> {/* Center beard */}
  </svg>
);

export const ElephantIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Elephant body */}
    <ellipse cx="14" cy="12" rx="7" ry="6" /> {/* Body */}
    <circle cx="6" cy="9" r="4" /> {/* Head */}
    <path d="M3 7c-1 0-2 1-2 2s0 3 1 5c1 2 2 4 2 6" /> {/* Trunk */}
    <circle cx="5" cy="8" r="0.5" fill="currentColor" /> {/* Eye */}
    <path d="M2 6c-1-1-1-3 0-3s2 1 2 3" /> {/* Ear */}
    <path d="M10 18v3" /> {/* Front leg */}
    <path d="M14 18v3" /> {/* Back leg 1 */}
    <path d="M18 18v3" /> {/* Back leg 2 */}
    <path d="M21 12c1 0 2-1 1-2" /> {/* Tail */}
  </svg>
);

export const CowIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Cow head */}
    <ellipse cx="12" cy="12" rx="7" ry="6" /> {/* Face */}
    <path d="M3 8c-1-2 0-5 2-4" /> {/* Left horn */}
    <path d="M21 8c1-2 0-5-2-4" /> {/* Right horn */}
    <path d="M3 10c-2 0-2 3 0 3" /> {/* Left ear */}
    <path d="M21 10c2 0 2 3 0 3" /> {/* Right ear */}
    <circle cx="9" cy="10" r="1.5" fill="currentColor" /> {/* Left eye */}
    <circle cx="15" cy="10" r="1.5" fill="currentColor" /> {/* Right eye */}
    <ellipse cx="12" cy="16" rx="3" ry="2" /> {/* Nose area */}
    <circle cx="10.5" cy="16" r="0.5" fill="currentColor" /> {/* Left nostril */}
    <circle cx="13.5" cy="16" r="0.5" fill="currentColor" /> {/* Right nostril */}
  </svg>
);

export const PigIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Pig face */}
    <circle cx="12" cy="12" r="8" /> {/* Head */}
    <ellipse cx="12" cy="14" rx="3" ry="2" /> {/* Snout */}
    <circle cx="10.5" cy="14" r="0.5" fill="currentColor" /> {/* Left nostril */}
    <circle cx="13.5" cy="14" r="0.5" fill="currentColor" /> {/* Right nostril */}
    <circle cx="8" cy="9" r="1" fill="currentColor" /> {/* Left eye */}
    <circle cx="16" cy="9" r="1" fill="currentColor" /> {/* Right eye */}
    <path d="M5 7c-1-2-2-3-1-4s2 1 3 2" /> {/* Left ear */}
    <path d="M19 7c1-2 2-3 1-4s-2 1-3 2" /> {/* Right ear */}
  </svg>
);

export const HorseIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Horse head */}
    <path d="M6 20c0-4 2-8 6-10" /> {/* Neck */}
    <ellipse cx="16" cy="8" rx="5" ry="4" /> {/* Head */}
    <path d="M21 7l2-2" /> {/* Ear */}
    <circle cx="18" cy="7" r="0.5" fill="currentColor" /> {/* Eye */}
    <path d="M12 10c-1 0-2 1-2 3" /> {/* Muzzle */}
    <path d="M16 4c0-2 2-3 4-2" /> {/* Mane top */}
    <path d="M14 5c-1-1 0-3 2-3" /> {/* Mane */}
    <path d="M6 20h4" /> {/* Ground line */}
  </svg>
);

export const SheepIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Sheep with fluffy wool */}
    <circle cx="8" cy="8" r="2" /> {/* Wool puff 1 */}
    <circle cx="12" cy="6" r="2" /> {/* Wool puff 2 */}
    <circle cx="16" cy="8" r="2" /> {/* Wool puff 3 */}
    <circle cx="7" cy="12" r="2" /> {/* Wool puff 4 */}
    <circle cx="12" cy="11" r="3" /> {/* Body center */}
    <circle cx="17" cy="12" r="2" /> {/* Wool puff 5 */}
    <ellipse cx="12" cy="16" rx="3" ry="2" /> {/* Face */}
    <circle cx="10.5" cy="15.5" r="0.5" fill="currentColor" /> {/* Left eye */}
    <circle cx="13.5" cy="15.5" r="0.5" fill="currentColor" /> {/* Right eye */}
    <path d="M8 19v2" /> {/* Left leg */}
    <path d="M16 19v2" /> {/* Right leg */}
  </svg>
);

export const ChickenIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Chicken */}
    <circle cx="12" cy="10" r="6" /> {/* Body */}
    <path d="M12 4c0-1 1-2 2-2s1 1 0 2" /> {/* Comb */}
    <path d="M10 4c0-1-1-2-2-2s-1 1 0 2" /> {/* Comb 2 */}
    <circle cx="10" cy="9" r="1" fill="currentColor" /> {/* Eye */}
    <path d="M14 10l3 0" /> {/* Beak */}
    <path d="M17 10l-2 1" /> {/* Beak bottom */}
    <path d="M8 11c-2 1-4 0-5 1" /> {/* Wing */}
    <path d="M10 16v3l1-1" /> {/* Left leg */}
    <path d="M14 16v3l-1-1" /> {/* Right leg */}
    <path d="M6 14c-2 0-3 1-3 2" /> {/* Tail */}
  </svg>
);

export const DuckIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Duck */}
    <ellipse cx="12" cy="14" rx="7" ry="5" /> {/* Body */}
    <circle cx="6" cy="8" r="4" /> {/* Head */}
    <path d="M2 9h2" /> {/* Beak */}
    <circle cx="5" cy="7" r="0.5" fill="currentColor" /> {/* Eye */}
    <path d="M19 14c2 0 3-2 2-3" /> {/* Tail */}
    <path d="M9 19v2" /> {/* Left leg */}
    <path d="M15 19v2" /> {/* Right leg */}
  </svg>
);

export const LionIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Lion with mane */}
    <circle cx="12" cy="12" r="5" /> {/* Face */}
    {/* Mane */}
    <circle cx="12" cy="5" r="2" />
    <circle cx="7" cy="7" r="2" />
    <circle cx="5" cy="12" r="2" />
    <circle cx="7" cy="17" r="2" />
    <circle cx="12" cy="19" r="2" />
    <circle cx="17" cy="17" r="2" />
    <circle cx="19" cy="12" r="2" />
    <circle cx="17" cy="7" r="2" />
    {/* Face details */}
    <circle cx="10" cy="11" r="1" fill="currentColor" /> {/* Left eye */}
    <circle cx="14" cy="11" r="1" fill="currentColor" /> {/* Right eye */}
    <ellipse cx="12" cy="14" rx="1.5" ry="1" /> {/* Nose */}
  </svg>
);

export const TigerIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Tiger face */}
    <ellipse cx="12" cy="12" rx="8" ry="7" /> {/* Face */}
    <path d="M4 6c-1-2 0-4 2-3" /> {/* Left ear */}
    <path d="M20 6c1-2 0-4-2-3" /> {/* Right ear */}
    <circle cx="8" cy="10" r="1.5" fill="currentColor" /> {/* Left eye */}
    <circle cx="16" cy="10" r="1.5" fill="currentColor" /> {/* Right eye */}
    <path d="M12 13v2" /> {/* Nose line */}
    <ellipse cx="12" cy="13" rx="1" ry="0.5" fill="currentColor" /> {/* Nose */}
    <path d="M10 16c1 1 3 1 4 0" /> {/* Mouth */}
    {/* Stripes */}
    <path d="M7 7l-2 3" />
    <path d="M9 6l-1 3" />
    <path d="M17 7l2 3" />
    <path d="M15 6l1 3" />
  </svg>
);

export const MonkeyIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Monkey face */}
    <circle cx="12" cy="12" r="7" /> {/* Face */}
    <circle cx="3" cy="10" r="2" /> {/* Left ear */}
    <circle cx="21" cy="10" r="2" /> {/* Right ear */}
    <ellipse cx="12" cy="14" rx="4" ry="3" /> {/* Muzzle area */}
    <circle cx="9" cy="10" r="1" fill="currentColor" /> {/* Left eye */}
    <circle cx="15" cy="10" r="1" fill="currentColor" /> {/* Right eye */}
    <ellipse cx="12" cy="13" rx="1" ry="0.5" fill="currentColor" /> {/* Nose */}
    <path d="M10 16c1 1 3 1 4 0" /> {/* Smile */}
  </svg>
);

export const BearIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Bear face */}
    <circle cx="12" cy="13" r="8" /> {/* Face */}
    <circle cx="6" cy="6" r="3" /> {/* Left ear */}
    <circle cx="18" cy="6" r="3" /> {/* Right ear */}
    <circle cx="8" cy="11" r="1.5" fill="currentColor" /> {/* Left eye */}
    <circle cx="16" cy="11" r="1.5" fill="currentColor" /> {/* Right eye */}
    <ellipse cx="12" cy="16" rx="3" ry="2" /> {/* Muzzle */}
    <ellipse cx="12" cy="15" rx="1" ry="0.5" fill="currentColor" /> {/* Nose */}
  </svg>
);

export const FrogIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Frog face */}
    <ellipse cx="12" cy="14" rx="9" ry="6" /> {/* Body/face */}
    <circle cx="6" cy="8" r="3" /> {/* Left eye bump */}
    <circle cx="18" cy="8" r="3" /> {/* Right eye bump */}
    <circle cx="6" cy="8" r="1.5" fill="currentColor" /> {/* Left eye */}
    <circle cx="18" cy="8" r="1.5" fill="currentColor" /> {/* Right eye */}
    <path d="M8 16c2 2 6 2 8 0" /> {/* Smile */}
  </svg>
);

export const GiraffeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <ellipse cx="12" cy="6" rx="4" ry="3" /> {/* Head */}
    <path d="M9 3l-1-2" /> {/* Left horn */}
    <path d="M15 3l1-2" /> {/* Right horn */}
    <circle cx="10" cy="5" r="0.5" fill="currentColor" /> {/* Left eye */}
    <circle cx="14" cy="5" r="0.5" fill="currentColor" /> {/* Right eye */}
    <path d="M12 9v10" /> {/* Neck */}
    <ellipse cx="12" cy="19" rx="3" ry="2" /> {/* Body */}
    <path d="M9 21v2" /> {/* Left leg */}
    <path d="M15 21v2" /> {/* Right leg */}
  </svg>
);

export const ZebraIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <ellipse cx="12" cy="12" rx="7" ry="5" /> {/* Body */}
    <ellipse cx="18" cy="8" rx="3" ry="2" /> {/* Head */}
    <path d="M20 6l1-2" /> {/* Ear */}
    <circle cx="19" cy="7" r="0.5" fill="currentColor" /> {/* Eye */}
    <path d="M6 12c-2 1-3 0-4 1" /> {/* Tail */}
    {/* Stripes */}
    <path d="M8 9v6" />
    <path d="M11 8v8" />
    <path d="M14 9v6" />
    <path d="M9 17v3" /> {/* Left leg */}
    <path d="M15 17v3" /> {/* Right leg */}
  </svg>
);

export const CrocodileIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <ellipse cx="12" cy="12" rx="10" ry="4" /> {/* Body */}
    <path d="M22 12l2 1" /> {/* Tail tip */}
    <path d="M2 12c-1 0-2-1-1-2" /> {/* Snout */}
    <circle cx="4" cy="10" r="0.5" fill="currentColor" /> {/* Eye */}
    <path d="M6 14v2" /> {/* Front leg */}
    <path d="M18 14v2" /> {/* Back leg */}
    {/* Teeth */}
    <path d="M2 13l1-1 1 1 1-1" />
  </svg>
);

export const DolphinIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3 14c2-4 8-6 14-4" /> {/* Top body */}
    <path d="M3 14c0 2 4 4 8 4s6-1 6-2" /> {/* Bottom body */}
    <path d="M17 12c2-1 4-2 5-1" /> {/* Tail */}
    <path d="M10 10c0-2-1-4-2-5" /> {/* Fin */}
    <circle cx="6" cy="13" r="0.5" fill="currentColor" /> {/* Eye */}
    <path d="M3 12l-1-2" /> {/* Nose */}
  </svg>
);

export const WhaleIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <ellipse cx="10" cy="12" rx="8" ry="5" /> {/* Body */}
    <path d="M18 12c2 0 4-2 4-1s-2 3-4 3" /> {/* Tail */}
    <circle cx="5" cy="11" r="1" fill="currentColor" /> {/* Eye */}
    <path d="M8 8c0-2 1-4 2-5" /> {/* Water spout */}
    <path d="M10 3l-1 1 2 0" /> {/* Water */}
    <path d="M12 15c-2 0-4 1-6 0" /> {/* Belly */}
  </svg>
);

export const PenguinIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <ellipse cx="12" cy="14" rx="5" ry="7" /> {/* Body */}
    <ellipse cx="12" cy="14" rx="3" ry="5" /> {/* Belly */}
    <circle cx="12" cy="6" r="3" /> {/* Head */}
    <circle cx="11" cy="5" r="0.5" fill="currentColor" /> {/* Left eye */}
    <circle cx="13" cy="5" r="0.5" fill="currentColor" /> {/* Right eye */}
    <path d="M12 7l0 1" /> {/* Beak */}
    <path d="M7 12c-2 1-3 3-2 4" /> {/* Left wing */}
    <path d="M17 12c2 1 3 3 2 4" /> {/* Right wing */}
    <path d="M10 21l-1 1" /> {/* Left foot */}
    <path d="M14 21l1 1" /> {/* Right foot */}
  </svg>
);

export const OwlIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <ellipse cx="12" cy="13" rx="7" ry="8" /> {/* Body */}
    <circle cx="9" cy="10" r="3" /> {/* Left eye circle */}
    <circle cx="15" cy="10" r="3" /> {/* Right eye circle */}
    <circle cx="9" cy="10" r="1" fill="currentColor" /> {/* Left eye */}
    <circle cx="15" cy="10" r="1" fill="currentColor" /> {/* Right eye */}
    <path d="M12 13l0 2" /> {/* Beak */}
    <path d="M11 15l1-1 1 1" /> {/* Beak tip */}
    <path d="M5 6c-1-2 1-4 3-3" /> {/* Left ear */}
    <path d="M19 6c1-2-1-4-3-3" /> {/* Right ear */}
    <path d="M9 19v2" /> {/* Left foot */}
    <path d="M15 19v2" /> {/* Right foot */}
  </svg>
);

export const ButterflyIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <ellipse cx="6" cy="8" rx="4" ry="5" /> {/* Left top wing */}
    <ellipse cx="18" cy="8" rx="4" ry="5" /> {/* Right top wing */}
    <ellipse cx="6" cy="16" rx="3" ry="4" /> {/* Left bottom wing */}
    <ellipse cx="18" cy="16" rx="3" ry="4" /> {/* Right bottom wing */}
    <path d="M12 4v16" /> {/* Body */}
    <path d="M10 3c-1-2-2-2-3-1" /> {/* Left antenna */}
    <path d="M14 3c1-2 2-2 3-1" /> {/* Right antenna */}
  </svg>
);

export const BeeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <ellipse cx="12" cy="14" rx="6" ry="5" /> {/* Body */}
    <circle cx="12" cy="7" r="3" /> {/* Head */}
    <path d="M10 4c-1-2-2-2-3-1" /> {/* Left antenna */}
    <path d="M14 4c1-2 2-2 3-1" /> {/* Right antenna */}
    <circle cx="11" cy="6" r="0.5" fill="currentColor" /> {/* Left eye */}
    <circle cx="13" cy="6" r="0.5" fill="currentColor" /> {/* Right eye */}
    {/* Stripes */}
    <path d="M8 12h8" />
    <path d="M7 15h10" />
    <path d="M6 12c-2-1-4-2-4-1s1 3 3 3" /> {/* Left wing */}
    <path d="M18 12c2-1 4-2 4-1s-1 3-3 3" /> {/* Right wing */}
    <path d="M12 19l0 2" /> {/* Stinger */}
  </svg>
);

export const SpiderIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="4" /> {/* Body */}
    <circle cx="12" cy="7" r="2" /> {/* Head */}
    <circle cx="11" cy="6.5" r="0.3" fill="currentColor" /> {/* Left eye */}
    <circle cx="13" cy="6.5" r="0.3" fill="currentColor" /> {/* Right eye */}
    {/* Legs */}
    <path d="M8 10c-2-1-4-1-5 1" />
    <path d="M8 12c-3 0-5 1-6 2" />
    <path d="M8 14c-2 1-4 2-5 4" />
    <path d="M9 15c-1 2-2 4-2 6" />
    <path d="M16 10c2-1 4-1 5 1" />
    <path d="M16 12c3 0 5 1 6 2" />
    <path d="M16 14c2 1 4 2 5 4" />
    <path d="M15 15c1 2 2 4 2 6" />
  </svg>
);

export const SnakeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3 12c0-3 3-6 6-6s4 3 4 6-2 6-5 6c-2 0-1-3 2-3s5 1 6-2c1-3 3-4 5-3" />
    <circle cx="20" cy="9" r="1.5" /> {/* Head */}
    <circle cx="20.5" cy="8.5" r="0.3" fill="currentColor" /> {/* Eye */}
    <path d="M22 10l1 0.5-1 0.5" /> {/* Tongue */}
  </svg>
);

export const DeerIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <ellipse cx="12" cy="10" rx="5" ry="4" /> {/* Head */}
    <path d="M7 4c-1-2-2-3-3-2s0 3 1 4" /> {/* Left antler */}
    <path d="M6 3c-1-1-2-1-2 0" /> {/* Left antler branch */}
    <path d="M17 4c1-2 2-3 3-2s0 3-1 4" /> {/* Right antler */}
    <path d="M18 3c1-1 2-1 2 0" /> {/* Right antler branch */}
    <circle cx="9" cy="9" r="1" fill="currentColor" /> {/* Left eye */}
    <circle cx="15" cy="9" r="1" fill="currentColor" /> {/* Right eye */}
    <ellipse cx="12" cy="13" rx="1.5" ry="1" /> {/* Nose */}
    <path d="M12 14v4" /> {/* Neck */}
    <ellipse cx="12" cy="19" rx="3" ry="2" /> {/* Body hint */}
  </svg>
);

export const FoxIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <ellipse cx="12" cy="14" rx="7" ry="5" /> {/* Face */}
    <path d="M5 9c-2-4-1-7 1-7s3 4 2 7" /> {/* Left ear */}
    <path d="M19 9c2-4 1-7-1-7s-3 4-2 7" /> {/* Right ear */}
    <circle cx="9" cy="12" r="1" fill="currentColor" /> {/* Left eye */}
    <circle cx="15" cy="12" r="1" fill="currentColor" /> {/* Right eye */}
    <path d="M12 15v2" /> {/* Nose line */}
    <ellipse cx="12" cy="15" rx="1" ry="0.5" fill="currentColor" /> {/* Nose */}
    <path d="M10 18c1 1 3 1 4 0" /> {/* Mouth */}
  </svg>
);

export const WolfIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <ellipse cx="12" cy="14" rx="7" ry="5" /> {/* Face */}
    <path d="M5 9c-1-4-1-7 1-8s3 3 3 6" /> {/* Left ear */}
    <path d="M19 9c1-4 1-7-1-8s-3 3-3 6" /> {/* Right ear */}
    <circle cx="9" cy="12" r="1.5" fill="currentColor" /> {/* Left eye */}
    <circle cx="15" cy="12" r="1.5" fill="currentColor" /> {/* Right eye */}
    <path d="M12 15l0 3" /> {/* Snout */}
    <ellipse cx="12" cy="15" rx="1" ry="0.5" fill="currentColor" /> {/* Nose */}
  </svg>
);

export const PandaIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="8" /> {/* Face */}
    <circle cx="6" cy="6" r="3" /> {/* Left ear */}
    <circle cx="18" cy="6" r="3" /> {/* Right ear */}
    <ellipse cx="8" cy="11" rx="2.5" ry="3" /> {/* Left eye patch */}
    <ellipse cx="16" cy="11" rx="2.5" ry="3" /> {/* Right eye patch */}
    <circle cx="8" cy="11" r="1" fill="currentColor" /> {/* Left eye */}
    <circle cx="16" cy="11" r="1" fill="currentColor" /> {/* Right eye */}
    <ellipse cx="12" cy="15" rx="2" ry="1.5" /> {/* Nose area */}
    <ellipse cx="12" cy="14.5" rx="1" ry="0.5" fill="currentColor" /> {/* Nose */}
  </svg>
);

export const KoalaIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="13" r="7" /> {/* Face */}
    <circle cx="4" cy="9" r="3" /> {/* Left ear */}
    <circle cx="20" cy="9" r="3" /> {/* Right ear */}
    <circle cx="9" cy="11" r="1" fill="currentColor" /> {/* Left eye */}
    <circle cx="15" cy="11" r="1" fill="currentColor" /> {/* Right eye */}
    <ellipse cx="12" cy="15" rx="2" ry="1.5" fill="currentColor" /> {/* Nose */}
  </svg>
);

export const KangarooIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <ellipse cx="14" cy="14" rx="6" ry="7" /> {/* Body */}
    <ellipse cx="10" cy="6" rx="3" ry="4" /> {/* Head */}
    <path d="M8 3l-1-2" /> {/* Left ear */}
    <path d="M12 3l1-2" /> {/* Right ear */}
    <circle cx="9" cy="5" r="0.5" fill="currentColor" /> {/* Eye */}
    <path d="M7 7l-1 1" /> {/* Nose */}
    <path d="M20 14c2 2 3 5 2 7" /> {/* Tail */}
    <path d="M10 21v2" /> {/* Left leg */}
    <path d="M16 21v2" /> {/* Right leg */}
  </svg>
);

export const HippoIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <ellipse cx="12" cy="12" rx="8" ry="6" /> {/* Head */}
    <ellipse cx="12" cy="16" rx="5" ry="3" /> {/* Muzzle */}
    <circle cx="8" cy="10" r="1.5" fill="currentColor" /> {/* Left eye */}
    <circle cx="16" cy="10" r="1.5" fill="currentColor" /> {/* Right eye */}
    <circle cx="10" cy="16" r="0.5" fill="currentColor" /> {/* Left nostril */}
    <circle cx="14" cy="16" r="0.5" fill="currentColor" /> {/* Right nostril */}
    <path d="M5 8c-1-2 0-4 2-4" /> {/* Left ear */}
    <path d="M19 8c1-2 0-4-2-4" /> {/* Right ear */}
  </svg>
);

export const RhinoIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <ellipse cx="12" cy="12" rx="8" ry="6" /> {/* Head */}
    <path d="M4 10l-2-4" /> {/* Horn */}
    <path d="M6 11l-1-2" /> {/* Small horn */}
    <circle cx="14" cy="10" r="1.5" fill="currentColor" /> {/* Eye */}
    <path d="M4 8c-2-1-3 1-2 3" /> {/* Ear */}
    <ellipse cx="8" cy="14" rx="2" ry="1" /> {/* Nostril area */}
    <circle cx="7" cy="14" r="0.5" fill="currentColor" /> {/* Nostril */}
    <circle cx="9" cy="14" r="0.5" fill="currentColor" /> {/* Nostril */}
  </svg>
);

export const CamelIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <ellipse cx="12" cy="14" rx="7" ry="4" /> {/* Body */}
    <path d="M9 14c0-3 1-5 0-7s1-4 3-4" /> {/* Hump 1 */}
    <path d="M15 14c0-3-1-5 0-7s-1-4-3-4" /> {/* Hump 2 */}
    <ellipse cx="19" cy="10" rx="2" ry="3" /> {/* Head */}
    <path d="M17 12c-2 1-3 2-3 4" /> {/* Neck */}
    <circle cx="20" cy="9" r="0.5" fill="currentColor" /> {/* Eye */}
    <path d="M21 8l1-1" /> {/* Ear */}
    <path d="M8 18v3" /> {/* Front leg */}
    <path d="M16 18v3" /> {/* Back leg */}
  </svg>
);

export const SealIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <ellipse cx="12" cy="14" rx="8" ry="5" /> {/* Body */}
    <circle cx="6" cy="10" r="4" /> {/* Head */}
    <circle cx="5" cy="9" r="0.5" fill="currentColor" /> {/* Eye */}
    <ellipse cx="4" cy="12" rx="1" ry="0.5" fill="currentColor" /> {/* Nose */}
    <path d="M20 14c2 1 3 3 2 4" /> {/* Tail */}
    <path d="M8 18c-2 1-3 2-4 1" /> {/* Flipper */}
  </svg>
);

export const OctopusIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <ellipse cx="12" cy="8" rx="6" ry="5" /> {/* Head */}
    <circle cx="10" cy="7" r="1" fill="currentColor" /> {/* Left eye */}
    <circle cx="14" cy="7" r="1" fill="currentColor" /> {/* Right eye */}
    {/* Tentacles */}
    <path d="M6 12c-2 2-3 5-2 7" />
    <path d="M8 13c-1 3-1 5 0 7" />
    <path d="M10 13c0 3 0 5 1 7" />
    <path d="M12 13c0 3 0 5 0 7" />
    <path d="M14 13c0 3 0 5-1 7" />
    <path d="M16 13c1 3 1 5 0 7" />
    <path d="M18 12c2 2 3 5 2 7" />
  </svg>
);

export const CrabIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <ellipse cx="12" cy="12" rx="7" ry="5" /> {/* Body */}
    <circle cx="9" cy="10" r="1" fill="currentColor" /> {/* Left eye */}
    <circle cx="15" cy="10" r="1" fill="currentColor" /> {/* Right eye */}
    <path d="M9 6l-2-3" /> {/* Left eye stalk */}
    <path d="M15 6l2-3" /> {/* Right eye stalk */}
    {/* Claws */}
    <path d="M5 10c-3-1-4 1-4 3s2 2 4 1" />
    <path d="M19 10c3-1 4 1 4 3s-2 2-4 1" />
    {/* Legs */}
    <path d="M7 15l-2 3" />
    <path d="M9 16l-1 3" />
    <path d="M15 16l1 3" />
    <path d="M17 15l2 3" />
  </svg>
);

export const StarfishIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2l2.5 7h7l-5.5 4.5 2 7-6-4.5-6 4.5 2-7L2.5 9h7z" />
    <circle cx="12" cy="12" r="2" /> {/* Center */}
  </svg>
);

export const SquirrelIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <ellipse cx="10" cy="14" rx="5" ry="6" /> {/* Body */}
    <circle cx="8" cy="7" r="4" /> {/* Head */}
    <path d="M5 4l-1-2" /> {/* Left ear */}
    <path d="M11 4l1-2" /> {/* Right ear */}
    <circle cx="7" cy="6" r="0.5" fill="currentColor" /> {/* Eye */}
    <path d="M5 8l-1 1" /> {/* Nose */}
    <path d="M15 14c3-2 5-1 6 2s-1 5-3 5c-2 0-3-2-3-4" /> {/* Tail */}
    <path d="M7 20v2" /> {/* Left leg */}
    <path d="M13 20v2" /> {/* Right leg */}
  </svg>
);

export const HedgehogIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <ellipse cx="12" cy="14" rx="8" ry="5" /> {/* Body */}
    <ellipse cx="5" cy="13" rx="3" ry="4" /> {/* Face */}
    <circle cx="4" cy="12" r="0.5" fill="currentColor" /> {/* Eye */}
    <path d="M2 14l-1 0" /> {/* Nose */}
    {/* Spines */}
    <path d="M10 9l0-3" />
    <path d="M12 9l1-3" />
    <path d="M14 9l2-3" />
    <path d="M16 10l3-2" />
    <path d="M18 12l3-1" />
    <path d="M18 14l3 0" />
    <path d="M8 10l-1-2" />
  </svg>
);
