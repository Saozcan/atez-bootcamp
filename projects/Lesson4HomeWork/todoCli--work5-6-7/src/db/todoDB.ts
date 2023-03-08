
interface ItodoDB {
  text: string;
  isCompleted: boolean;
  date: Date;
}

const todoDB: ItodoDB[] = [
  {
    text: 'Learn TypeScript',
    isCompleted: false,
    date: new Date(),
  },
  {
    text: 'Learn NodoJS',
    isCompleted: false,
    date: new Date(),
  },
  {
    text: 'Learn SQL',
    isCompleted: false,
    date: new Date(),
  }
];

export default todoDB;