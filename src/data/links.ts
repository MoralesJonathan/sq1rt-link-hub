export interface Link {
    title: string;
    subTitle: string;
    icon: string;
    cta: string;
    url: string;
    id: number;
  }
  
  const links: Link[] = [
    {
      title: 'Jumpin X No Mercy X Losing it X Anything Mashup',
      subTitle: 'Jumpin X No Mercy X Losing it X Anything SQ!RT Mashup',
      icon: process.env.PUBLIC_URL + '/assets/soundcloud.png',
      url: 'https://sq1rt.me/jumpin-mashup',
      cta: 'Play',
      id: 0
    },
    {
      title: 'On my mind x Heads will roll Mashup',
      subTitle: 'On my mind x heads will roll SQ!RT mashup',
      icon: process.env.PUBLIC_URL + '/assets/soundcloud.png',
      url: 'https://sq1rt.me/on-my-mind-heads-will-roll-mashup',
      cta: 'Play',
      id: 1
    },
    {
      title: '2021 Mix',
      subTitle: 'Released: 02/11/21',
      icon: process.env.PUBLIC_URL + '/assets/soundcloud.png',
      url: 'https://sq1rt.me/2021-mix',
      cta: 'Play',
      id: 2
    },
    {
      title: 'Revolution 93.5 Mix 3',
      subTitle: 'Aired: 07/14/20',
      icon: process.env.PUBLIC_URL + '/assets/soundcloud.png',
      url: 'https://sq1rt.me/rev-mix-3',
      cta: 'Play',
      id: 3
    },
    {
      title: 'Revolution 93.5 Mix 2',
      subTitle: 'Aired: 06/30/20',
      icon: process.env.PUBLIC_URL + '/assets/soundcloud.png',
      url: 'https://sq1rt.me/rev-mix-2',
      cta: 'Play',
      id: 4
    },
    {
      title: 'Revolution 93.5 Mix 1',
      subTitle: 'Aired: 06/09/20',
      icon: process.env.PUBLIC_URL + '/assets/soundcloud.png',
      url: 'https://sq1rt.me/rev-mix',
      cta: 'Play',
      id: 5
    }
  ];
  
  export const getLinks = () => links;
  
  export const getLink = (id: number) => links.find(l => l.id === id);
  