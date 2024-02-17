import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Theme } from 'theme-ui'
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}


export const theme: Theme = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
  },
}

