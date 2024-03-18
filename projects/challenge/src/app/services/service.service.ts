import { Gentleman } from '../interfaces/gentleman';

export const getGentlemenData = (): Gentleman[] => {
  // :Gentleman[] va a devolver un array de gentlemans
  return [
    {
      id: 1,
      name: 'Bertin Osborne',
      status: 'Alive',
      profession: 'Youtuber',
      twitter: '@osbourne',
      picture: 'bertin.jpg',
      alternativeText: 'Osbourne pointing at you',
      selected: true,
      initial: 'B',
    },
    {
      name: 'The Farytale',
      status: 'RIP',
      profession: 'Influencer',
      twitter: 'pending',
      picture: 'fary.jpg',
      alternativeText: 'The Fary pointing at you',
      id: 2,
      selected: false,
      initial: 'F',
    },
    {
      id: 3,
      name: 'Julius Churchs',
      status: 'Alive',
      profession: 'Java developer',
      twitter: '@julius_churchs',
      picture: 'julio.jpg',
      alternativeText: 'Churchs pointing at you',
      selected: true,
      initial: 'J',
    },
  ];
};
