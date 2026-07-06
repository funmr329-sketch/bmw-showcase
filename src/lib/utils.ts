import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat().format(num);
}

export function formatSpec(value: string | number, unit?: string): string {
  const num = typeof value === 'number' ? value : parseFloat(value.toString());
  if (isNaN(num)) return value.toString();
  return `${num.toLocaleString()}${unit ? ` ${unit}` : ''}`;
}