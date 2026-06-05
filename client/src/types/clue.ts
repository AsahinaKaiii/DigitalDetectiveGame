export interface Clue {
  id: string;
  title: string;
  description: string;
  category: string;
  suspectId: string;
  discovered: boolean;
}