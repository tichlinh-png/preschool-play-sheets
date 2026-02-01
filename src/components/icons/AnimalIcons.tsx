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

// ==================== FOOD ICONS ====================

export const BreadIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="12" rx="9" ry="6" />
    <path d="M6 12c0 2 2 4 6 4s6-2 6-4" />
    <path d="M8 10c0-1 2-2 4-2s4 1 4 2" />
  </svg>
);

export const RiceIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 16c0 3 4 5 8 5s8-2 8-5" />
    <ellipse cx="12" cy="16" rx="8" ry="3" />
    <ellipse cx="10" cy="14" rx="1" ry="0.5" fill="currentColor" />
    <ellipse cx="14" cy="14" rx="1" ry="0.5" fill="currentColor" />
    <ellipse cx="12" cy="15" rx="1" ry="0.5" fill="currentColor" />
    <ellipse cx="9" cy="16" rx="1" ry="0.5" fill="currentColor" />
    <ellipse cx="15" cy="16" rx="1" ry="0.5" fill="currentColor" />
  </svg>
);

export const NoodleIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 12c0 4 4 8 8 8s8-4 8-8" />
    <ellipse cx="12" cy="12" rx="8" ry="3" />
    <path d="M6 14c2 2 4 4 6 6" />
    <path d="M10 14c1 2 2 4 2 6" />
    <path d="M14 14c-1 2-2 4-2 6" />
    <path d="M18 14c-2 2-4 4-6 6" />
  </svg>
);

export const CheeseIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 17l10-12 10 5v7l-10 4z" />
    <path d="M12 5v12" />
    <circle cx="8" cy="14" r="1" />
    <circle cx="16" cy="12" r="1.5" />
    <circle cx="14" cy="16" r="1" />
  </svg>
);

export const HamburgerIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 8c0-2 4-4 8-4s8 2 8 4" />
    <ellipse cx="12" cy="8" rx="8" ry="2" />
    <path d="M4 12h16" />
    <path d="M5 14c1 1 3 1 7 1s6 0 7-1" />
    <path d="M4 16c0 2 4 4 8 4s8-2 8-4" />
    <ellipse cx="12" cy="16" rx="8" ry="2" />
  </svg>
);

export const HotdogIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="12" rx="10" ry="4" />
    <path d="M4 10c2-1 6-1 8-1s6 0 8 1" />
    <path d="M4 14c2 1 6 1 8 1s6 0 8-1" />
    <path d="M6 12h12" />
  </svg>
);

export const SandwichIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 11l9-7 9 7" />
    <path d="M4 11h16v2H4z" />
    <path d="M5 13c1 0 2 1 3 1s2-1 3-1 2 1 3 1 2-1 3-1 2 1 3 1" />
    <path d="M4 15h16v2H4z" />
    <path d="M3 17h18v2H3z" />
  </svg>
);

export const SoupIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 11c0 5 4 9 8 9s8-4 8-9" />
    <path d="M2 11h20" />
    <path d="M6 8c0-1 1-2 1-3" />
    <path d="M12 8c0-1 1-2 1-3" />
    <path d="M18 8c0-1 1-2 1-3" />
  </svg>
);

export const FriesIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 22l1-10" />
    <path d="M9 22l0-12" />
    <path d="M12 22l0-13" />
    <path d="M15 22l0-12" />
    <path d="M18 22l-1-10" />
    <path d="M5 12h14c1 0 2-1 1-2l-1-1H5l-1 1c-1 1 0 2 1 2z" />
  </svg>
);

export const DonutIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3" />
    <path d="M8 6c1-1 3-1 4 0" />
    <path d="M14 7c1 0 2 1 2 2" />
    <path d="M17 11c0 1-1 2-1 3" />
  </svg>
);

export const CandyIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="12" rx="5" ry="4" />
    <path d="M7 12c-2-1-4-1-5 0s1 2 3 2" />
    <path d="M17 12c2-1 4-1 5 0s-1 2-3 2" />
  </svg>
);

export const ChocolateIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="4" y="6" width="16" height="12" rx="2" />
    <path d="M4 10h16" />
    <path d="M4 14h16" />
    <path d="M9 6v12" />
    <path d="M15 6v12" />
  </svg>
);

export const LollipopIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="8" r="6" />
    <path d="M12 14v8" />
    <path d="M8 5c2 3 6 3 8 0" />
    <path d="M8 8c2 2 6 2 8 0" />
  </svg>
);

export const WatermelonIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 18c0-8 4-14 8-14s8 6 8 14z" />
    <path d="M4 18h16" />
    <ellipse cx="9" cy="12" rx="0.5" ry="1" fill="currentColor" />
    <ellipse cx="12" cy="10" rx="0.5" ry="1" fill="currentColor" />
    <ellipse cx="15" cy="12" rx="0.5" ry="1" fill="currentColor" />
    <ellipse cx="11" cy="14" rx="0.5" ry="1" fill="currentColor" />
    <ellipse cx="14" cy="15" rx="0.5" ry="1" fill="currentColor" />
  </svg>
);

export const OrangeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="13" r="8" />
    <path d="M12 5c0-2 1-3 2-3" />
    <path d="M10 6c-1-1-1-3 0-4" />
  </svg>
);

export const StrawberryIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 4c-4 0-7 4-7 9s3 7 7 7 7-2 7-7-3-9-7-9z" />
    <path d="M9 3c1 0 2 1 3 1s2-1 3-1" />
    <path d="M8 5l1 1" />
    <path d="M15 5l-1 1" />
    <circle cx="9" cy="11" r="0.5" fill="currentColor" />
    <circle cx="12" cy="9" r="0.5" fill="currentColor" />
    <circle cx="15" cy="11" r="0.5" fill="currentColor" />
    <circle cx="10" cy="14" r="0.5" fill="currentColor" />
    <circle cx="14" cy="14" r="0.5" fill="currentColor" />
    <circle cx="12" cy="17" r="0.5" fill="currentColor" />
  </svg>
);

export const PearIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 4c-1 0-2 1-2 3 0 3-4 4-4 8 0 4 3 6 6 6s6-2 6-6c0-4-4-5-4-8 0-2-1-3-2-3z" />
    <path d="M12 4c0-1 1-2 2-2" />
  </svg>
);

export const LemonIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="12" rx="8" ry="6" />
    <path d="M4 12c0-1 1-2 2-2" />
    <path d="M20 12c0-1-1-2-2-2" />
  </svg>
);

export const PineappleIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="14" rx="5" ry="7" />
    <path d="M9 7l-2-4" />
    <path d="M12 7l0-5" />
    <path d="M15 7l2-4" />
    <path d="M7 9l-3-2" />
    <path d="M17 9l3-2" />
    <path d="M9 12l6 4" />
    <path d="M15 12l-6 4" />
    <path d="M9 16l6-4" />
  </svg>
);

export const CornIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="12" rx="4" ry="8" />
    <path d="M8 4c2-2 6-2 8 0" />
    <path d="M8 20c2 2 6 2 8 0" />
    <path d="M12 4v16" />
    <path d="M9 6v12" />
    <path d="M15 6v12" />
  </svg>
);

export const TomatoIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="13" r="7" />
    <path d="M9 6l-2-3" />
    <path d="M15 6l2-3" />
    <path d="M12 6c0-2 0-3 0-4" />
    <path d="M8 7c1 0 2-1 4-1s3 1 4 1" />
  </svg>
);

export const PotatoIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="12" rx="8" ry="6" />
    <circle cx="8" cy="10" r="0.5" fill="currentColor" />
    <circle cx="14" cy="9" r="0.5" fill="currentColor" />
    <circle cx="16" cy="13" r="0.5" fill="currentColor" />
    <circle cx="10" cy="14" r="0.5" fill="currentColor" />
  </svg>
);

export const OnionIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 4c-4 0-7 4-7 9s3 7 7 7 7-2 7-7-3-9-7-9z" />
    <path d="M12 4c0-2 0-3 0-3" />
    <path d="M10 4l-1-2" />
    <path d="M14 4l1-2" />
    <path d="M8 10c2 4 6 4 8 0" />
  </svg>
);

export const MushroomIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 12c0-5 4-8 8-8s8 3 8 8z" />
    <path d="M8 12v8c0 1 2 2 4 2s4-1 4-2v-8" />
    <circle cx="9" cy="8" r="1" />
    <circle cx="15" cy="9" r="1.5" />
    <circle cx="12" cy="6" r="1" />
  </svg>
);

// ==================== CLOTHING ICONS ====================

export const PantsIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 4h12v4c0 2-1 4-1 8v6H13v-6c0-1-1-2-1-2s-1 1-1 2v6H7v-6c0-4-1-6-1-8V4z" />
  </svg>
);

export const DressIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M8 4h8l-1 4h-6z" />
    <path d="M7 8l-2 12h14l-2-12" />
    <path d="M10 4c0-1 1-2 2-2s2 1 2 2" />
  </svg>
);

export const SkirtIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 6h12v2H6z" />
    <path d="M5 8l2 12h10l2-12" />
  </svg>
);

export const SocksIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M8 2v10c0 2-3 4-3 6s2 4 5 4 6-2 6-4v-2c0-2-2-3-2-6V2" />
    <path d="M8 6h6" />
  </svg>
);

export const ShoesIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 16c0 2 2 4 6 4h10c2 0 3-1 3-2v-2c0-1-1-2-3-2h-6c-3 0-4-2-4-4V8c0-1-1-2-2-2H5c-1 0-2 1-2 2v8z" />
  </svg>
);

export const BootsIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 2v12c0 2-2 3-2 5 0 2 2 3 5 3h8c2 0 3-1 3-2v-2c0-1-1-2-3-2h-4V2" />
    <path d="M6 8h7" />
  </svg>
);

export const HatIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="16" rx="10" ry="3" />
    <path d="M6 16V12c0-4 3-6 6-6s6 2 6 6v4" />
  </svg>
);

export const CapIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 14c0-5 4-8 8-8s8 3 8 8" />
    <path d="M2 14h20" />
    <path d="M20 14c2 1 3 2 2 3" />
  </svg>
);

export const ScarfIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 8c0-2 3-4 6-4s6 2 6 4" />
    <path d="M6 8v4c0 1 1 2 2 2h2v8" />
    <path d="M18 8v4c0 1-1 2-2 2h-2v8" />
    <path d="M8 22h4" />
    <path d="M12 22h4" />
  </svg>
);

export const GlovesIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 12V6c0-1 1-2 2-2s2 1 2 2v1" />
    <path d="M10 7V4c0-1 1-2 2-2s2 1 2 2v3" />
    <path d="M14 7V5c0-1 1-2 2-2s2 1 2 2v7" />
    <path d="M6 12c-1 0-2 1-2 2v4c0 2 2 4 5 4h5c3 0 5-2 5-4v-6" />
    <path d="M6 14h2" />
  </svg>
);

export const JacketIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 4l-3 4v12h6v-8h6v8h6V8l-3-4" />
    <path d="M6 4h12" />
    <path d="M9 4v4" />
    <path d="M15 4v4" />
    <path d="M12 4v6" />
  </svg>
);

export const CoatIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 4l-3 4v14h8V10h2v12h8V8l-3-4" />
    <path d="M6 4h12" />
    <path d="M10 4c0-1 1-2 2-2s2 1 2 2" />
    <circle cx="8" cy="14" r="1" />
    <circle cx="8" cy="18" r="1" />
  </svg>
);

// ==================== ROOM & FURNITURE ICONS ====================

export const KitchenIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 10h18" />
    <circle cx="7" cy="7" r="1" />
    <circle cx="12" cy="7" r="1" />
    <rect x="6" y="13" width="5" height="4" />
    <rect x="13" y="13" width="5" height="4" />
  </svg>
);

export const BathroomIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 12h16" />
    <path d="M4 12V6c0-1 1-2 2-2h2c1 0 2 1 2 2" />
    <path d="M4 12v4c0 2 2 4 8 4s8-2 8-4v-4" />
    <path d="M8 20v2" />
    <path d="M16 20v2" />
  </svg>
);

export const BedroomIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 18V8c0-1 1-2 2-2h14c1 0 2 1 2 2v10" />
    <path d="M3 14h18" />
    <path d="M6 14V10c0-1 1-2 2-2h3c1 0 1 1 1 2v4" />
    <path d="M3 18h3v2H3zM18 18h3v2h-3z" />
  </svg>
);

export const LivingroomIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 14v-2c0-1 1-2 2-2h12c1 0 2 1 2 2v2" />
    <path d="M2 14v4h20v-4" />
    <path d="M6 18v2" />
    <path d="M18 18v2" />
    <rect x="8" y="4" width="8" height="6" rx="1" />
  </svg>
);

export const TableIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="8" width="18" height="3" rx="1" />
    <path d="M5 11v9" />
    <path d="M19 11v9" />
  </svg>
);

export const DeskIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="6" width="18" height="3" rx="1" />
    <path d="M5 9v11" />
    <path d="M19 9v11" />
    <rect x="13" y="9" width="5" height="4" />
    <rect x="13" y="13" width="5" height="4" />
  </svg>
);

export const DoorIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="5" y="2" width="14" height="20" rx="1" />
    <circle cx="15" cy="12" r="1" />
  </svg>
);

export const WindowIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="4" y="4" width="16" height="16" rx="1" />
    <path d="M12 4v16" />
    <path d="M4 12h16" />
  </svg>
);

export const MirrorIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="10" rx="7" ry="8" />
    <path d="M12 18v4" />
    <path d="M8 22h8" />
  </svg>
);

export const CurtainIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 3h16" />
    <path d="M4 3v18c3-2 5-4 8-4s5 2 8 4V3" />
    <path d="M7 6c1 2 2 4 5 6" />
    <path d="M17 6c-1 2-2 4-5 6" />
  </svg>
);

export const CarpetIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="6" width="18" height="12" rx="1" />
    <path d="M3 10h18" />
    <path d="M3 14h18" />
    <path d="M1 18l2-2" />
    <path d="M21 18l2-2" />
    <path d="M1 6l2 2" />
    <path d="M21 6l2 2" />
  </svg>
);

// ==================== BODY PARTS ICONS ====================

export const HeadIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="10" r="8" />
    <circle cx="9" cy="9" r="1" fill="currentColor" />
    <circle cx="15" cy="9" r="1" fill="currentColor" />
    <path d="M9 14c1.5 1.5 4.5 1.5 6 0" />
    <path d="M12 18v4" />
  </svg>
);

export const NoseIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 4v10c0 2-2 4-4 5" />
    <path d="M12 14c0 2 2 4 4 5" />
    <path d="M8 19c1 1 3 1 4 1s3 0 4-1" />
  </svg>
);

export const MouthIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 12c0 4 4 6 8 6s8-2 8-6" />
    <path d="M4 12c0-4 4-6 8-6s8 2 8 6" />
    <path d="M4 12h16" />
  </svg>
);

export const ToothIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2c-3 0-5 2-6 4s-1 5 0 8c1 4 2 8 3 8s2-2 3-2 2 2 3 2 2-4 3-8c1-3 1-6 0-8s-3-4-6-4z" />
  </svg>
);

export const HairIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 12c0-5 4-9 8-9s8 4 8 9" />
    <path d="M4 12c0 3 2 5 4 5" />
    <path d="M20 12c0 3-2 5-4 5" />
    <path d="M6 6c2-1 4-1 6-1s4 0 6 1" />
    <path d="M8 4c1-1 3-1 4-1s3 0 4 1" />
  </svg>
);

export const LegIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 2c0 4-1 8-1 12s1 6 1 8" />
    <path d="M15 2c0 4 1 8 1 12s-1 6-1 8" />
    <path d="M9 22c-2 0-4 0-5 1" />
    <path d="M15 22c2 0 4 0 5 1" />
  </svg>
);

export const ArmIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4c2 4 4 8 6 12" />
    <path d="M10 16c1 0 2 1 3 1s2-1 2-2" />
    <path d="M15 15l2-1" />
    <path d="M15 15l1 2" />
    <path d="M15 15l2 1" />
  </svg>
);

export const FingerIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22V6c0-2-1-4-1-4" />
    <path d="M12 6c0-2 1-4 1-4" />
    <path d="M9 10h6" />
  </svg>
);

export const ToeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="6" cy="8" rx="2" ry="3" />
    <ellipse cx="10" cy="6" rx="2" ry="4" />
    <ellipse cx="14" cy="6" rx="2" ry="4" />
    <ellipse cx="18" cy="8" rx="2" ry="3" />
    <path d="M4 14c0 4 4 6 8 6s8-2 8-6" />
  </svg>
);

// ==================== ACTION/VERB ICONS ====================

export const RunIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="14" cy="4" r="2" />
    <path d="M6 20l4-8 4 2 4-10" />
    <path d="M6 20l-4 2" />
    <path d="M14 12l4 8" />
  </svg>
);

export const WalkIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="4" r="2" />
    <path d="M12 6v6" />
    <path d="M9 12l-3 8" />
    <path d="M15 12l3 8" />
    <path d="M8 10l-4 2" />
    <path d="M16 10l4 2" />
  </svg>
);

export const JumpIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="4" r="2" />
    <path d="M12 6v4" />
    <path d="M8 10l-4-2" />
    <path d="M16 10l4-2" />
    <path d="M8 10l-2 6" />
    <path d="M16 10l2 6" />
    <path d="M4 20h16" />
  </svg>
);

export const SwimIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="6" cy="8" r="2" />
    <path d="M6 10c4 2 8 2 12 0" />
    <path d="M2 16c2 2 4 2 6 0s4-2 6 0 4 2 6 0" />
    <path d="M2 20c2 2 4 2 6 0s4-2 6 0 4 2 6 0" />
  </svg>
);

export const SleepIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 18h18" />
    <path d="M5 18V14c0-1 1-2 2-2h10c1 0 2 1 2 2v4" />
    <circle cx="8" cy="10" r="3" />
    <path d="M16 4h2l-2 3h2" />
    <path d="M19 2h3l-3 4h3" />
  </svg>
);

export const EatIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="6" r="4" />
    <path d="M8 10c-2 2-4 6-4 10h16c0-4-2-8-4-10" />
    <path d="M10 16h4" />
    <path d="M12 14v4" />
  </svg>
);

export const DrinkIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 4h12l-2 16H8z" />
    <path d="M6 10h12" />
    <ellipse cx="12" cy="4" rx="6" ry="2" />
  </svg>
);

export const ReadIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 4c2-1 5-1 10 1 5-2 8-2 10-1v14c-2-1-5-1-10 1-5-2-8-2-10-1z" />
    <path d="M12 5v14" />
  </svg>
);

export const WriteIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 20h16" />
    <path d="M4 20L14 4l4 2L8 22z" />
    <path d="M14 4l2-2 4 2-2 2z" />
  </svg>
);

export const SingIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="10" cy="10" r="6" />
    <circle cx="8" cy="9" r="1" fill="currentColor" />
    <circle cx="12" cy="9" r="1" fill="currentColor" />
    <ellipse cx="10" cy="13" rx="2" ry="1" />
    <path d="M16 6c1-1 3-1 4 0" />
    <path d="M18 4c1-1 3 0 3 1" />
    <path d="M17 9c2 0 4 1 4 2" />
  </svg>
);

export const DanceIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="4" r="2" />
    <path d="M12 6v4" />
    <path d="M8 10l-4 4" />
    <path d="M16 10l4 4" />
    <path d="M9 14l-3 6" />
    <path d="M15 14l3 6" />
  </svg>
);

export const PlayIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M10 8l6 4-6 4z" fill="currentColor" />
  </svg>
);

export const CookIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 14h16" />
    <path d="M4 14c0 4 4 6 8 6s8-2 8-6" />
    <ellipse cx="12" cy="14" rx="8" ry="2" />
    <path d="M6 10c0-1 1-2 1-3" />
    <path d="M12 10c0-1 1-2 1-3" />
    <path d="M18 10c0-1 1-2 1-3" />
  </svg>
);

export const CleanIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2v6" />
    <path d="M8 8h8l-1 12H9z" />
    <path d="M10 12v4" />
    <path d="M14 12v4" />
  </svg>
);

export const WashIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 14c0 4 4 6 8 6s8-2 8-6" />
    <ellipse cx="12" cy="14" rx="8" ry="3" />
    <path d="M8 14c0-2 2-4 4-4s4 2 4 4" />
    <path d="M8 8c0-2 0-4 2-4" />
    <path d="M16 8c0-2 0-4-2-4" />
  </svg>
);

// ==================== WEATHER ICONS ====================

export const SunnyIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="5" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="M4.93 4.93l1.41 1.41" />
    <path d="M17.66 17.66l1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="M6.34 17.66l-1.41 1.41" />
    <path d="M19.07 4.93l-1.41 1.41" />
  </svg>
);

export const CloudyIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 16a4 4 0 0 1 0-8c.6-2.3 2.6-4 5-4a5 5 0 0 1 5 4h1a3 3 0 0 1 0 6H6z" />
  </svg>
);

export const RainyIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 12a4 4 0 0 1 0-8c.6-2.3 2.6-4 5-4a5 5 0 0 1 5 4h1a3 3 0 0 1 0 6H6z" />
    <path d="M8 16v4" />
    <path d="M12 14v6" />
    <path d="M16 16v4" />
  </svg>
);

export const SnowyIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 12a4 4 0 0 1 0-8c.6-2.3 2.6-4 5-4a5 5 0 0 1 5 4h1a3 3 0 0 1 0 6H6z" />
    <circle cx="8" cy="16" r="1" fill="currentColor" />
    <circle cx="12" cy="18" r="1" fill="currentColor" />
    <circle cx="16" cy="16" r="1" fill="currentColor" />
    <circle cx="10" cy="20" r="1" fill="currentColor" />
    <circle cx="14" cy="20" r="1" fill="currentColor" />
  </svg>
);

export const WindyIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 12h14c2 0 4-2 4-4s-2-4-4-3" />
    <path d="M2 8h8c1.5 0 3-1 3-2.5S8.5 3 7 4" />
    <path d="M2 16h10c2 0 4 2 4 4s-2 3-4 2" />
  </svg>
);

export const StormyIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 12a4 4 0 0 1 0-8c.6-2.3 2.6-4 5-4a5 5 0 0 1 5 4h1a3 3 0 0 1 0 6H6z" />
    <path d="M13 14l-4 6h5l-2 4" />
  </svg>
);

export const RainbowIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 18c0-8 4.5-14 10-14s10 6 10 14" />
    <path d="M4 18c0-6 3.6-11 8-11s8 5 8 11" />
    <path d="M6 18c0-4 2.7-8 6-8s6 4 6 8" />
  </svg>
);

// ==================== SCHOOL ITEMS ICONS ====================

export const CrayonIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 4h12l-1 2H7z" />
    <path d="M7 6h10v12l-5 4-5-4z" />
    <path d="M12 6v12" />
  </svg>
);

export const RulerIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="8" width="20" height="8" rx="1" />
    <path d="M6 8v3" />
    <path d="M10 8v5" />
    <path d="M14 8v3" />
    <path d="M18 8v5" />
  </svg>
);

export const EraserIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 18l-4-4 8-10 8 8-4 6z" />
    <path d="M10 14l-4 4" />
    <path d="M4 22h16" />
  </svg>
);

export const GlueIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 6h6l1 2v12c0 1-1 2-2 2h-4c-1 0-2-1-2-2V8z" />
    <path d="M10 2h4v4h-4z" />
    <path d="M9 10h6" />
  </svg>
);

export const NotebookIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <path d="M8 2v20" />
    <path d="M12 6h4" />
    <path d="M12 10h4" />
    <path d="M12 14h4" />
  </svg>
);

export const BlackboardIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="4" width="20" height="14" rx="1" />
    <path d="M6 22l3-4" />
    <path d="M18 22l-3-4" />
    <path d="M6 9h4" />
    <path d="M6 12h8" />
  </svg>
);

export const ChalkIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 20l4-16h4l4 16" />
    <path d="M8 4c0-1 1-2 2-2s2 1 2 2" />
  </svg>
);

export const GlobeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="10" r="8" />
    <ellipse cx="12" cy="10" rx="3" ry="8" />
    <path d="M4 10h16" />
    <path d="M12 18v4" />
    <path d="M8 22h8" />
  </svg>
);

// ==================== TOY ICONS ====================

export const BallIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3c-2 3-2 6 0 9s2 6 0 9" />
    <path d="M3 12h18" />
  </svg>
);

export const DollIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="6" r="4" />
    <path d="M12 10v4" />
    <path d="M8 14l-2 6" />
    <path d="M16 14l2 6" />
    <path d="M9 14h6l1 8H8z" />
    <circle cx="10" cy="5" r="0.5" fill="currentColor" />
    <circle cx="14" cy="5" r="0.5" fill="currentColor" />
    <path d="M10 7c1 1 3 1 4 0" />
  </svg>
);

export const TeddyBearIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="6" cy="6" r="3" />
    <circle cx="18" cy="6" r="3" />
    <ellipse cx="12" cy="12" rx="7" ry="8" />
    <circle cx="9" cy="10" r="1" fill="currentColor" />
    <circle cx="15" cy="10" r="1" fill="currentColor" />
    <ellipse cx="12" cy="14" rx="2" ry="1.5" />
    <path d="M10 16c1 1 3 1 4 0" />
  </svg>
);

export const BlocksIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="12" width="8" height="8" rx="1" />
    <rect x="11" y="4" width="8" height="8" rx="1" />
    <rect x="7" y="8" width="6" height="6" rx="1" />
  </svg>
);

export const KiteIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2l8 10-8 6-8-6z" />
    <path d="M12 2v16" />
    <path d="M4 12h16" />
    <path d="M12 18c0 2-1 3-2 4" />
    <path d="M10 20c1 0 1 1 0 2" />
    <path d="M12 21c-1 0-1 1 0 2" />
  </svg>
);

export const PuzzleIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 8h2c0-2 2-2 2 0h4c0-2 2-2 2 0h2v2c2 0 2 2 0 2v4c2 0 2 2 0 2v2h-2c0 2-2 2-2 0h-4c0 2-2 2-2 0H4v-2c-2 0-2-2 0-2v-4c-2 0-2-2 0-2z" />
  </svg>
);

export const RobotIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="5" y="6" width="14" height="12" rx="2" />
    <path d="M12 2v4" />
    <circle cx="12" cy="2" r="1" />
    <circle cx="9" cy="11" r="2" />
    <circle cx="15" cy="11" r="2" />
    <path d="M9 15h6" />
    <path d="M5 12H3" />
    <path d="M21 12h-2" />
    <path d="M8 18v3" />
    <path d="M16 18v3" />
  </svg>
);

export const DrumIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="8" rx="8" ry="3" />
    <path d="M4 8v8c0 1.66 3.58 3 8 3s8-1.34 8-3V8" />
    <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    <path d="M2 4l6 6" />
    <path d="M22 4l-6 6" />
  </svg>
);

// ==================== NUMBER ICONS (1-10) ====================

export const OneIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 4v16" />
    <path d="M8 8l4-4" />
    <path d="M8 20h8" />
  </svg>
);

export const TwoIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M7 8c0-2 2-4 5-4s5 2 5 4c0 3-10 6-10 12h10" />
  </svg>
);

export const ThreeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M7 4h8l-4 6c3 0 5 2 5 5s-2 5-5 5c-2 0-4-1-5-3" />
  </svg>
);

export const FourIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 4v16" />
    <path d="M15 14H5l8-10" />
  </svg>
);

export const FiveIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17 4H9v6h6c2 0 4 2 4 5s-2 5-5 5c-2 0-4-1-5-3" />
  </svg>
);

export const SixIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 6c-2-2-4-2-6 0-4 4-4 10 0 12 2 1 5 1 6-1 2-2 2-5 0-7s-5-2-6 1" />
  </svg>
);

export const SevenIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 4h12l-8 16" />
  </svg>
);

export const EightIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="8" r="4" />
    <circle cx="12" cy="16" r="4" />
  </svg>
);

export const NineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M8 18c2 2 4 2 6 0 4-4 4-10 0-12-2-1-5-1-6 1-2 2-2 5 0 7s5 2 6-1" />
  </svg>
);

export const TenIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 4v16" />
    <path d="M3 6l2-2" />
    <circle cx="16" cy="12" r="5" />
  </svg>
);

export const ZeroIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="12" rx="6" ry="8" />
  </svg>
);

// ==================== COLOR ICONS ====================

export const RedColorIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" fill="#ef4444" stroke="#dc2626" />
    <path d="M12 3c0 2-2 4-2 6s2 4 2 6" stroke="white" strokeWidth="1" />
  </svg>
);

export const BlueColorIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" fill="#3b82f6" stroke="#2563eb" />
    <path d="M12 3c0 2-2 4-2 6s2 4 2 6" stroke="white" strokeWidth="1" />
  </svg>
);

export const YellowColorIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" fill="#facc15" stroke="#eab308" />
    <path d="M12 3c0 2-2 4-2 6s2 4 2 6" stroke="white" strokeWidth="1" />
  </svg>
);

export const GreenColorIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" fill="#22c55e" stroke="#16a34a" />
    <path d="M12 3c0 2-2 4-2 6s2 4 2 6" stroke="white" strokeWidth="1" />
  </svg>
);

export const OrangeColorIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" fill="#f97316" stroke="#ea580c" />
    <path d="M12 3c0 2-2 4-2 6s2 4 2 6" stroke="white" strokeWidth="1" />
  </svg>
);

export const PurpleColorIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" fill="#a855f7" stroke="#9333ea" />
    <path d="M12 3c0 2-2 4-2 6s2 4 2 6" stroke="white" strokeWidth="1" />
  </svg>
);

export const PinkColorIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" fill="#ec4899" stroke="#db2777" />
    <path d="M12 3c0 2-2 4-2 6s2 4 2 6" stroke="white" strokeWidth="1" />
  </svg>
);

export const BrownColorIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" fill="#a16207" stroke="#854d0e" />
    <path d="M12 3c0 2-2 4-2 6s2 4 2 6" stroke="white" strokeWidth="1" />
  </svg>
);

export const BlackColorIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" fill="#171717" stroke="#0a0a0a" />
    <path d="M12 3c0 2-2 4-2 6s2 4 2 6" stroke="white" strokeWidth="1" />
  </svg>
);

export const WhiteColorIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" fill="#fafafa" stroke="#d4d4d4" />
    <path d="M12 3c0 2-2 4-2 6s2 4 2 6" stroke="#a3a3a3" strokeWidth="1" />
  </svg>
);

export const GrayColorIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" fill="#6b7280" stroke="#4b5563" />
    <path d="M12 3c0 2-2 4-2 6s2 4 2 6" stroke="white" strokeWidth="1" />
  </svg>
);

// ==================== SHAPE ICONS ====================

export const CircleShapeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" />
  </svg>
);

export const SquareShapeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="4" y="4" width="16" height="16" />
  </svg>
);

export const TriangleShapeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3L22 21H2z" />
  </svg>
);

export const RectangleShapeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="6" width="20" height="12" />
  </svg>
);

export const OvalShapeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="12" rx="9" ry="6" />
  </svg>
);

export const DiamondShapeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2L22 12L12 22L2 12z" />
  </svg>
);

export const StarShapeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2l2.5 7h7l-5.5 4.5 2 7-6-4.5-6 4.5 2-7L2.5 9h7z" />
  </svg>
);

export const HeartShapeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 21c-5-4-9-8-9-12 0-3 2-5 5-5 2 0 3 1 4 3 1-2 2-3 4-3 3 0 5 2 5 5 0 4-4 8-9 12z" />
  </svg>
);

export const PentagonShapeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2l9 7-3 9H6l-3-9z" />
  </svg>
);

export const HexagonShapeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2l8 5v10l-8 5-8-5V7z" />
  </svg>
);

export const CrescentShapeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3a9 9 0 1 0 0 18 7 7 0 1 1 0-18z" />
  </svg>
);

export const CrossShapeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3v18M3 12h18" />
  </svg>
);

export const ArrowShapeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

// ==================== MORE DIVERSE ICONS ====================

// Insects
export const AntIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="6" cy="12" r="3" />
    <ellipse cx="12" cy="12" rx="3" ry="2" />
    <ellipse cx="18" cy="12" rx="2" ry="3" />
    <path d="M3 8l-1-3" />
    <path d="M3 16l-1 3" />
    <path d="M9 9l-2-4" />
    <path d="M9 15l-2 4" />
    <path d="M15 9l2-4" />
    <path d="M15 15l2 4" />
  </svg>
);

export const LadybugIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="14" rx="8" ry="6" />
    <circle cx="12" cy="6" r="3" />
    <path d="M12 8v12" />
    <circle cx="8" cy="12" r="1" fill="currentColor" />
    <circle cx="16" cy="12" r="1" fill="currentColor" />
    <circle cx="9" cy="16" r="1" fill="currentColor" />
    <circle cx="15" cy="16" r="1" fill="currentColor" />
    <path d="M10 3l-2-2" />
    <path d="M14 3l2-2" />
  </svg>
);

export const GrasshopperIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="16" cy="12" rx="6" ry="3" />
    <circle cx="6" cy="10" r="3" />
    <circle cx="5" cy="9" r="0.5" fill="currentColor" />
    <path d="M3 7l-1-3" />
    <path d="M18 15l3 5" />
    <path d="M14 15l-2 5" />
    <path d="M16 9l4-5" />
  </svg>
);

export const DragonFlyIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="8" cy="12" rx="4" ry="2" />
    <path d="M12 12h10" />
    <ellipse cx="6" cy="6" rx="4" ry="2" transform="rotate(-30 6 6)" />
    <ellipse cx="6" cy="18" rx="4" ry="2" transform="rotate(30 6 18)" />
    <circle cx="5" cy="11" r="1" fill="currentColor" />
    <circle cx="5" cy="13" r="1" fill="currentColor" />
  </svg>
);

export const CaterpillarIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="4" cy="12" r="2" />
    <circle cx="8" cy="13" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="16" cy="13" r="2" />
    <circle cx="20" cy="12" r="2" />
    <circle cx="19" cy="11" r="0.5" fill="currentColor" />
    <path d="M21 9l1-2" />
    <path d="M22 10l1-1" />
  </svg>
);

// Sea creatures
export const JellyfishIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 10c0-4 4-7 8-7s8 3 8 7" />
    <ellipse cx="12" cy="10" rx="8" ry="3" />
    <path d="M6 13c0 3 1 6 0 9" />
    <path d="M10 13c0 4 0 6 1 9" />
    <path d="M14 13c0 4 0 6-1 9" />
    <path d="M18 13c0 3-1 6 0 9" />
  </svg>
);

export const ShrimpIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 8c-2-2-6-2-8 0s-4 6-8 8" />
    <ellipse cx="18" cy="8" rx="3" ry="4" />
    <circle cx="19" cy="6" r="0.5" fill="currentColor" />
    <path d="M21 4l2-2" />
    <path d="M22 5l1-1" />
    <path d="M4 16l-2 2" />
    <path d="M6 18l-2 2" />
  </svg>
);

export const LobsterIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="14" rx="5" ry="6" />
    <path d="M7 14l-4-2c-1-1-1-3 1-3l3 2" />
    <path d="M17 14l4-2c1-1 1-3-1-3l-3 2" />
    <circle cx="10" cy="12" r="1" fill="currentColor" />
    <circle cx="14" cy="12" r="1" fill="currentColor" />
    <path d="M10 8l-1-4" />
    <path d="M14 8l1-4" />
    <path d="M12 20l0 2" />
  </svg>
);

export const ClownfishIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="12" rx="9" ry="6" />
    <path d="M8 8v8" />
    <path d="M12 7v10" />
    <path d="M16 8v8" />
    <circle cx="6" cy="11" r="1" fill="currentColor" />
    <path d="M21 12l2 2-2 2" />
    <path d="M3 10c-1 0-2 1-2 2s1 2 2 2" />
  </svg>
);

// Birds
export const ParrotIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="12" rx="5" ry="8" />
    <circle cx="12" cy="6" r="4" />
    <circle cx="11" cy="5" r="1" fill="currentColor" />
    <path d="M8 7c-2 0-4 1-4 2" />
    <path d="M10 20v2l-1 1" />
    <path d="M14 20v2l1 1" />
    <path d="M16 10c2-2 4-2 5 0" />
    <path d="M17 12c2 0 3 1 3 2" />
  </svg>
);

export const FlamingoIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="14" cy="8" rx="5" ry="4" />
    <circle cx="13" cy="7" r="0.5" fill="currentColor" />
    <path d="M9 8c-2 0-4 1-4 2l2 0" />
    <path d="M14 12c-2 6-2 8 0 10" />
    <path d="M14 22h-2" />
    <path d="M16 12c0 4 1 8 0 10" />
    <path d="M16 22h2" />
  </svg>
);

export const PeacockIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="16" cy="16" rx="4" ry="5" />
    <circle cx="17" cy="14" r="0.5" fill="currentColor" />
    <path d="M13 16l-1 4" />
    <path d="M19 16l1 4" />
    <path d="M8 4c-2 4-4 8-4 12" />
    <path d="M12 3c0 4-2 8-3 12" />
    <path d="M16 4c2 4 4 8 4 10" />
    <circle cx="5" cy="6" r="1" />
    <circle cx="11" cy="4" r="1" />
    <circle cx="19" cy="6" r="1" />
  </svg>
);

export const EagleIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="12" rx="8" ry="5" />
    <path d="M20 12c2-1 3-3 2-4" />
    <path d="M4 12c-2-1-3-3-2-4" />
    <circle cx="8" cy="10" r="3" />
    <circle cx="9" cy="9" r="1" fill="currentColor" />
    <path d="M4 11l-2 2" />
    <path d="M10 17v3l-1 1" />
    <path d="M14 17v3l1 1" />
  </svg>
);

// More animals
export const BatIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="10" r="4" />
    <path d="M8 8l-6 4c0 2 2 4 6 2" />
    <path d="M16 8l6 4c0 2-2 4-6 2" />
    <path d="M10 3l-1-2" />
    <path d="M14 3l1-2" />
    <circle cx="10" cy="9" r="0.5" fill="currentColor" />
    <circle cx="14" cy="9" r="0.5" fill="currentColor" />
    <path d="M4 12l-2 2 2 2" />
    <path d="M20 12l2 2-2 2" />
  </svg>
);

export const MooseIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="14" rx="5" ry="4" />
    <circle cx="12" cy="9" r="3" />
    <circle cx="11" cy="8" r="0.5" fill="currentColor" />
    <circle cx="13" cy="8" r="0.5" fill="currentColor" />
    <path d="M7 4c-2-1-4-1-5 1l3 2" />
    <path d="M17 4c2-1 4-1 5 1l-3 2" />
    <path d="M4 3l-1-1M3 4l-1 0" />
    <path d="M20 3l1-1M21 4l1 0" />
    <path d="M9 18v3" />
    <path d="M15 18v3" />
  </svg>
);

export const GorillaIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="14" rx="7" ry="6" />
    <circle cx="12" cy="8" r="5" />
    <circle cx="10" cy="7" r="1" fill="currentColor" />
    <circle cx="14" cy="7" r="1" fill="currentColor" />
    <ellipse cx="12" cy="10" rx="2" ry="1.5" />
    <path d="M5 12c-2 0-3 2-3 4" />
    <path d="M19 12c2 0 3 2 3 4" />
  </svg>
);

export const LlamaIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="16" rx="5" ry="4" />
    <path d="M12 12V6" />
    <ellipse cx="12" cy="5" rx="2" ry="3" />
    <path d="M10 3l-2-2" />
    <path d="M14 3l2-2" />
    <circle cx="11" cy="4" r="0.5" fill="currentColor" />
    <circle cx="13" cy="4" r="0.5" fill="currentColor" />
    <path d="M8 20v2" />
    <path d="M16 20v2" />
  </svg>
);

export const PelicanIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="14" cy="14" rx="6" ry="5" />
    <circle cx="8" cy="8" r="4" />
    <circle cx="7" cy="7" r="0.5" fill="currentColor" />
    <path d="M4 9l-2 6c0 2 3 2 4 0" />
    <path d="M11 19v3" />
    <path d="M17 19v3" />
    <path d="M18 10c2-2 4-1 4 1" />
  </svg>
);

// Sports & activities
export const SoccerIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3l2 4h5l-3 4 2 4h-4l-2 5-2-5H6l2-4-3-4h5z" />
  </svg>
);

export const BasketballIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3v18" />
    <path d="M3 12h18" />
    <path d="M5 5c4 2 4 12 0 14" />
    <path d="M19 5c-4 2-4 12 0 14" />
  </svg>
);

export const TennisIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M4 6c5 1 8 5 8 12" />
    <path d="M20 6c-5 1-8 5-8 12" />
  </svg>
);

export const BaseballIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M5 5c1 2 1 4 0 6s-1 4 0 6" />
    <path d="M19 5c-1 2-1 4 0 6s1 4 0 6" />
  </svg>
);

// Musical instruments  
export const GuitarIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="10" cy="16" rx="6" ry="5" />
    <circle cx="10" cy="16" r="2" />
    <path d="M16 11l4-7" />
    <path d="M20 4l2-2" />
    <path d="M20 4l-2 0" />
    <path d="M20 4l0 2" />
  </svg>
);

export const PianoIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="6" width="20" height="12" rx="1" />
    <path d="M6 6v8" />
    <path d="M10 6v8" />
    <path d="M14 6v8" />
    <path d="M18 6v8" />
    <rect x="5" y="6" width="2" height="5" fill="currentColor" />
    <rect x="9" y="6" width="2" height="5" fill="currentColor" />
    <rect x="13" y="6" width="2" height="5" fill="currentColor" />
    <rect x="17" y="6" width="2" height="5" fill="currentColor" />
  </svg>
);

export const ViolinIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="10" cy="17" rx="4" ry="4" />
    <ellipse cx="10" cy="9" rx="3" ry="3" />
    <path d="M10 12v2" />
    <path d="M10 6V2" />
    <path d="M8 2h4" />
    <path d="M14 14l6 6" />
  </svg>
);

export const TrumpetIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 10h12c4 0 6 2 6 4v2H4z" />
    <path d="M4 10v6" />
    <circle cx="8" cy="14" r="1" />
    <circle cx="12" cy="14" r="1" />
    <circle cx="16" cy="14" r="1" />
    <path d="M22 12c2-1 2-4 0-4" />
  </svg>
);

// More fruits/vegetables
export const MangoIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 4c-5 0-8 4-8 9s3 7 8 7 8-2 8-7-3-9-8-9z" />
    <path d="M12 4c0-2 1-3 2-3" />
    <path d="M10 4c-1-1-1-2 0-3" />
  </svg>
);

export const KiwiIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="12" rx="8" ry="6" />
    <ellipse cx="12" cy="12" rx="5" ry="4" />
    <circle cx="10" cy="10" r="0.5" fill="currentColor" />
    <circle cx="14" cy="10" r="0.5" fill="currentColor" />
    <circle cx="12" cy="13" r="0.5" fill="currentColor" />
    <circle cx="9" cy="13" r="0.5" fill="currentColor" />
    <circle cx="15" cy="13" r="0.5" fill="currentColor" />
  </svg>
);

export const CoconutIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="14" r="7" />
    <circle cx="9" cy="12" r="1" />
    <circle cx="15" cy="12" r="1" />
    <circle cx="12" cy="16" r="1" />
    <path d="M8 7c2-3 6-3 8 0" />
  </svg>
);

export const AvocadoIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2c-4 0-7 5-7 11s3 9 7 9 7-3 7-9-3-11-7-11z" />
    <ellipse cx="12" cy="14" rx="3" ry="4" />
  </svg>
);

export const BroccoliIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="8" cy="8" r="4" />
    <circle cx="16" cy="8" r="4" />
    <circle cx="12" cy="6" r="4" />
    <path d="M10 12v8c0 1 1 2 2 2s2-1 2-2v-8" />
  </svg>
);

export const PepperIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 4c-4 0-6 4-6 9s2 7 6 7 6-2 6-7-2-9-6-9z" />
    <path d="M12 4c0-2 0-3 0-3" />
    <path d="M10 4l-1-2" />
    <path d="M14 4l1-2" />
  </svg>
);

// Buildings/Places
export const CastleIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 22V10l2-2V4h2v2h2V4h2v2h2V4h2v2h2V4h2v4l2 2v12z" />
    <path d="M4 10h16" />
    <rect x="9" y="14" width="6" height="8" />
    <path d="M12 14v-2" />
  </svg>
);

export const LighthouseIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M8 22l2-14h4l2 14z" />
    <rect x="10" y="4" width="4" height="4" />
    <path d="M12 4V2" />
    <path d="M6 6h4" />
    <path d="M14 6h4" />
    <path d="M9 12h6" />
    <path d="M9 16h6" />
  </svg>
);

export const WindmillIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 22l1-12h4l1 12z" />
    <circle cx="12" cy="8" r="2" />
    <path d="M12 6V2" />
    <path d="M14 8l4 2" />
    <path d="M10 8l-4 2" />
    <path d="M14 8l2-4" />
    <path d="M10 8l-2-4" />
  </svg>
);

export const BarnIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 12l9-8 9 8" />
    <path d="M4 12v10h16V12" />
    <rect x="9" y="14" width="6" height="8" />
    <path d="M4 12h16" />
    <path d="M12 4v4" />
  </svg>
);

// Emotions/Expressions
export const HappyIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="8" cy="10" r="1" fill="currentColor" />
    <circle cx="16" cy="10" r="1" fill="currentColor" />
    <path d="M8 15c2 2 6 2 8 0" />
  </svg>
);

export const SadIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="8" cy="10" r="1" fill="currentColor" />
    <circle cx="16" cy="10" r="1" fill="currentColor" />
    <path d="M8 17c2-2 6-2 8 0" />
  </svg>
);

export const AngryIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="8" cy="11" r="1" fill="currentColor" />
    <circle cx="16" cy="11" r="1" fill="currentColor" />
    <path d="M6 8l4 2" />
    <path d="M18 8l-4 2" />
    <path d="M8 17c2-2 6-2 8 0" />
  </svg>
);

export const SurprisedIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="8" cy="10" r="1.5" />
    <circle cx="16" cy="10" r="1.5" />
    <ellipse cx="12" cy="16" rx="2" ry="3" />
  </svg>
);

export const ScaredIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <ellipse cx="8" cy="10" rx="1.5" ry="2" />
    <ellipse cx="16" cy="10" rx="1.5" ry="2" />
    <path d="M8 16h8" />
    <path d="M10 16v1" />
    <path d="M12 16v1" />
    <path d="M14 16v1" />
  </svg>
);

export const SleepyIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M7 10c1-1 3-1 4 0" />
    <path d="M13 10c1-1 3-1 4 0" />
    <ellipse cx="12" cy="16" rx="2" ry="1" />
    <path d="M18 4h2l-2 2h2" />
    <path d="M20 2h2l-2 2h2" />
  </svg>
);

// Cambridge Starters - Places
export const SchoolIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 21h18" />
    <path d="M5 21V7l7-4 7 4v14" />
    <path d="M9 21v-6h6v6" />
    <path d="M10 9h4" />
    <circle cx="12" cy="5" r="1" />
  </svg>
);

export const HospitalIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="6" width="18" height="16" rx="2" />
    <path d="M12 6V2" />
    <path d="M9 10h6" />
    <path d="M12 7v6" />
    <path d="M7 18h4" />
    <path d="M13 18h4" />
  </svg>
);

export const ShopIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 21h18" />
    <path d="M5 21V10" />
    <path d="M19 21V10" />
    <path d="M3 10l2-7h14l2 7" />
    <rect x="8" y="14" width="8" height="7" />
  </svg>
);

export const ParkIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22v-6" />
    <path d="M12 16c-3 0-6-3-6-6s3-6 6-6 6 3 6 6-3 6-6 6z" />
    <path d="M8 22h8" />
    <circle cx="18" cy="18" r="3" />
    <path d="M4 18h2" />
  </svg>
);

export const BeachIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3v9" />
    <path d="M12 12l-6 9" />
    <path d="M12 12l6 9" />
    <path d="M12 3c3 0 6 4 6 9" />
    <path d="M12 3c-3 0-6 4-6 9" />
    <path d="M2 21h20" />
  </svg>
);

export const ZooIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="8" width="18" height="13" />
    <path d="M7 8V5c0-1 1-2 2-2h6c1 0 2 1 2 2v3" />
    <path d="M3 21h18" />
    <path d="M8 14h2v4H8z" />
    <path d="M14 14h2v4h-2z" />
  </svg>
);

export const GardenIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22v-8" />
    <path d="M8 18c-2-2-2-5 0-7s5-2 7 0" />
    <path d="M16 18c2-2 2-5 0-7" />
    <circle cx="6" cy="8" r="3" />
    <circle cx="18" cy="8" r="3" />
    <path d="M2 22h20" />
  </svg>
);

export const PoolIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="8" width="20" height="12" rx="2" />
    <path d="M4 14c2 1 4 1 6 0s4-1 6 0 4 1 6 0" />
    <path d="M4 18c2 1 4 1 6 0s4-1 6 0 4 1 6 0" />
    <path d="M6 8V5" />
    <path d="M18 8V5" />
  </svg>
);

// Cambridge Starters - More Body Parts
export const FaceIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="8" cy="10" r="1" fill="currentColor" />
    <circle cx="16" cy="10" r="1" fill="currentColor" />
    <path d="M12 14v1" />
    <path d="M9 17h6" />
  </svg>
);

export const BodyIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="4" r="2" />
    <path d="M12 6v8" />
    <path d="M8 8l4 2 4-2" />
    <path d="M8 22l4-8 4 8" />
  </svg>
);

export const StomachIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="14" rx="6" ry="7" />
    <path d="M12 7c-2 0-4-2-4-4h8c0 2-2 4-4 4z" />
  </svg>
);

export const ShoulderIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="6" r="4" />
    <path d="M4 22v-4c0-3 4-5 8-5s8 2 8 5v4" />
    <path d="M4 18h16" />
  </svg>
);

// Cambridge Starters - More Clothes
export const TshirtIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M8 2l-6 4v4l3 1v11h14V11l3-1V6l-6-4" />
    <path d="M8 2c1 1 3 2 4 2s3-1 4-2" />
  </svg>
);

export const JeansIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 2h14v6l-3 14H8L5 8V2z" />
    <path d="M5 8h14" />
    <path d="M12 8v14" />
    <path d="M8 4h2" />
    <path d="M14 4h2" />
  </svg>
);

export const SweaterIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M8 2l-6 6v6l3 1v7h14v-7l3-1V8l-6-6" />
    <path d="M8 2c1 1 3 2 4 2s3-1 4-2" />
    <path d="M2 8l5 3" />
    <path d="M22 8l-5 3" />
  </svg>
);

export const SandalsIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="7" cy="16" rx="5" ry="6" />
    <ellipse cx="17" cy="16" rx="5" ry="6" />
    <path d="M5 12l4 8" />
    <path d="M9 12l-2 8" />
    <path d="M15 12l4 8" />
    <path d="M19 12l-2 8" />
  </svg>
);

export const TrainersIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 18c0-2 2-6 6-6h4c4 0 6 4 6 6v2H4v-2z" />
    <path d="M4 18h16" />
    <path d="M8 12v-2c0-2 2-4 4-4s4 2 4 4v2" />
    <circle cx="8" cy="16" r="1" />
    <circle cx="12" cy="16" r="1" />
    <circle cx="16" cy="16" r="1" />
  </svg>
);

// Cambridge Starters - Family/People
export const GrandmotherIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="7" r="4" />
    <path d="M8 7c-2 0-3-1-3-2" />
    <path d="M16 7c2 0 3-1 3-2" />
    <path d="M5 21v-4c0-3 3-5 7-5s7 2 7 5v4" />
    <circle cx="10" cy="6" r="0.5" fill="currentColor" />
    <circle cx="14" cy="6" r="0.5" fill="currentColor" />
    <path d="M10 8c1 1 3 1 4 0" />
  </svg>
);

export const GrandfatherIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="7" r="4" />
    <path d="M8 4h8" />
    <path d="M5 21v-4c0-3 3-5 7-5s7 2 7 5v4" />
    <circle cx="10" cy="6" r="0.5" fill="currentColor" />
    <circle cx="14" cy="6" r="0.5" fill="currentColor" />
    <path d="M10 9h4" />
  </svg>
);

export const FriendIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="8" cy="6" r="3" />
    <circle cx="16" cy="6" r="3" />
    <path d="M3 21v-3c0-2 2-4 5-4" />
    <path d="M21 21v-3c0-2-2-4-5-4" />
    <path d="M8 14h8c0 3-2 5-4 5s-4-2-4-5z" />
  </svg>
);

export const TeacherIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="6" r="4" />
    <path d="M5 21v-4c0-3 3-5 7-5s7 2 7 5v4" />
    <rect x="16" y="14" width="6" height="6" />
    <path d="M18 16h2" />
    <path d="M18 18h2" />
  </svg>
);

// Cambridge Starters - More Food
export const JuiceIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M8 22h8l2-14H6l2 14z" />
    <rect x="7" y="4" width="10" height="4" />
    <path d="M10 8v6" />
    <circle cx="14" cy="14" r="2" />
  </svg>
);

export const WaterIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2c-4 6-7 10-7 14 0 4 3 6 7 6s7-2 7-6c0-4-3-8-7-14z" />
    <path d="M8 16c1 2 3 3 4 3" />
  </svg>
);

export const ChipsIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 8l-2 14h16l-2-14z" />
    <path d="M6 8c0-3 3-6 6-6s6 3 6 6" />
    <path d="M8 14l2 6" />
    <path d="M12 12v8" />
    <path d="M16 14l-2 6" />
  </svg>
);

export const SausageIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="12" rx="9" ry="4" />
    <path d="M3 12c0 2 1 4 2 4" />
    <path d="M21 12c0 2-1 4-2 4" />
    <path d="M8 10v4" />
    <path d="M12 10v4" />
    <path d="M16 10v4" />
  </svg>
);

export const BiscuitIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="9" cy="9" r="1" fill="currentColor" />
    <circle cx="15" cy="9" r="1" fill="currentColor" />
    <circle cx="9" cy="15" r="1" fill="currentColor" />
    <circle cx="15" cy="15" r="1" fill="currentColor" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

export const PieIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="16" rx="9" ry="5" />
    <path d="M3 16c0-6 4-12 9-12s9 6 9 12" />
    <path d="M7 10c2 0 3-2 5-2s3 2 5 2" />
  </svg>
);

// Cambridge Starters - More Animals
export const MouseIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="14" rx="7" ry="5" />
    <circle cx="6" cy="10" r="3" />
    <circle cx="18" cy="10" r="3" />
    <circle cx="9" cy="13" r="1" fill="currentColor" />
    <circle cx="15" cy="13" r="1" fill="currentColor" />
    <circle cx="12" cy="15" r="0.5" fill="currentColor" />
    <path d="M12 16l-1 1" />
    <path d="M12 16l1 1" />
    <path d="M19 14c2 0 3 1 3 2" />
  </svg>
);

export const SpiderIcon2 = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="14" rx="4" ry="5" />
    <circle cx="12" cy="7" r="3" />
    <circle cx="10" cy="6" r="0.5" fill="currentColor" />
    <circle cx="14" cy="6" r="0.5" fill="currentColor" />
    <path d="M8 12l-4 2" />
    <path d="M8 14l-5 0" />
    <path d="M8 16l-4-2" />
    <path d="M16 12l4 2" />
    <path d="M16 14l5 0" />
    <path d="M16 16l4-2" />
  </svg>
);

export const LizardIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="8" cy="12" rx="5" ry="3" />
    <circle cx="5" cy="11" r="0.5" fill="currentColor" />
    <path d="M13 12c4 0 8-1 9-2" />
    <path d="M6 15l-2 3" />
    <path d="M10 15l2 3" />
    <path d="M4 9l-1-3" />
    <path d="M8 9l1-3" />
  </svg>
);

// Cambridge Starters - Classroom Objects
export const BagIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="4" y="8" width="16" height="14" rx="2" />
    <path d="M8 8V6c0-2 2-4 4-4s4 2 4 4v2" />
    <path d="M4 12h16" />
  </svg>
);

export const ClassroomDeskIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="10" width="20" height="4" />
    <path d="M4 14v8" />
    <path d="M20 14v8" />
    <path d="M6 10V8h12v2" />
  </svg>
);

export const ChairIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="5" y="12" width="14" height="4" />
    <path d="M6 16v6" />
    <path d="M18 16v6" />
    <path d="M6 12V4" />
    <path d="M18 12V4" />
    <path d="M6 4h12" />
  </svg>
);

export const BoardIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="4" width="20" height="14" />
    <path d="M8 22l4-4 4 4" />
    <path d="M12 18v-4" />
    <path d="M6 8h4" />
    <path d="M6 12h8" />
  </svg>
);

// Cambridge Starters - More Toys
export const TrainToyIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="10" width="8" height="8" rx="1" />
    <rect x="13" y="12" width="8" height="6" rx="1" />
    <circle cx="5" cy="20" r="2" />
    <circle cx="9" cy="20" r="2" />
    <circle cx="15" cy="20" r="2" />
    <circle cx="19" cy="20" r="2" />
    <path d="M6 6v4" />
    <circle cx="6" cy="5" r="2" />
  </svg>
);

export const CarToyIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 14h14l2 4H3l2-4z" />
    <path d="M5 14l2-6h10l2 6" />
    <circle cx="7" cy="18" r="2" />
    <circle cx="17" cy="18" r="2" />
    <path d="M9 11h6" />
  </svg>
);

export const BoatToyIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 18l4-8h8l4 8z" />
    <path d="M12 10V4" />
    <path d="M12 4l6 4" />
    <path d="M2 20c2 1 4 1 6 0s4-1 6 0 4 1 6 0" />
  </svg>
);

export const PlaneToyIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 12h6l3-8 3 8h6" />
    <path d="M12 12v6" />
    <path d="M9 18h6" />
    <circle cx="12" cy="6" r="2" />
  </svg>
);

// Cambridge Starters - Nature
export const GrassIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 22c0-6 2-12 4-16" />
    <path d="M8 22c0-4 2-10 4-14" />
    <path d="M12 22c0-6 2-12 4-16" />
    <path d="M16 22c0-4 2-10 4-14" />
    <path d="M20 22c0-6 1-10 2-12" />
  </svg>
);

export const RockIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 18l4-8 4 4 4-6 4 10z" />
    <path d="M4 18h16" />
  </svg>
);

export const SandIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="18" rx="10" ry="4" />
    <circle cx="8" cy="16" r="1" fill="currentColor" />
    <circle cx="14" cy="17" r="1" fill="currentColor" />
    <circle cx="16" cy="15" r="1" fill="currentColor" />
    <circle cx="10" cy="18" r="1" fill="currentColor" />
  </svg>
);

export const SeaIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
    <path d="M2 16c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
    <path d="M2 20c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
    <path d="M2 8c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
  </svg>
);

export const SkyIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="6" cy="8" r="3" />
    <path d="M4 12h20" />
    <path d="M12 4l1 2-1 2 1 2" />
    <circle cx="18" cy="6" r="2" />
  </svg>
);
