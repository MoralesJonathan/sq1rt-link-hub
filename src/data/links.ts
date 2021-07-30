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
      title: 'FEEL',
      subTitle: 'Stream my newest single "FEEL"!',
      icon: process.env.PUBLIC_URL + '/assets/feel.png',
      url: 'https://gate.fm/TkQKlwA',
      cta: 'Listen now',
      id: 0
    },
    {
      title: 'SQ!RT Mashup Pack Vol 1',
      subTitle: 'Free Volume 1 Mashup Pack',
      icon: process.env.PUBLIC_URL + '/assets/soundcloud.png',
      url: 'https://sq1rt.me/mashups-vol-1',
      cta: 'Download',
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
  ];
  
  export const getLinks = () => links;
  
  export const getLink = (id: number) => links.find(l => l.id === id);
  