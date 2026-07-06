import { cn } from '@/lib/utils';

interface GridPatternProps {
  className?: string;
}

export function GridPattern({ className }: GridPatternProps) {
  return (
    <svg
      className={cn('absolute inset-0 w-full h-full', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="grid-pattern"
          x={0}
          y={0}
          width={32}
          height={32}
          patternUnits="userSpaceOnUse"
        >
          <circle cx={1} cy={1} r={1} className="fill-white/10" />
        </pattern>
        <pattern
          id="grid-pattern-lg"
          x={0}
          y={0}
          width={64}
          height={64}
          patternUnits="userSpaceOnUse"
        >
          <circle cx={2} cy={2} r={1.5} className="fill-white/5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern-lg)" />
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  );
}