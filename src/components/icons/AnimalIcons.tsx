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
