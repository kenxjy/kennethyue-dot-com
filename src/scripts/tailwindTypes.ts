type FontSize =
  | 'sm'
  | 'base'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl';
export type FontSizeClass = `text-${FontSize}`;

type ItemsPosition = 'start' | 'center' | 'end';
export type ItemsPositionClass = `items-${ItemsPosition}`;

export type Screens = 'md' | 'lg';
