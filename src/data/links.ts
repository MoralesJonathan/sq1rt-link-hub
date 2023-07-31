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
      title: 'Zombie (Remix)',
      subTitle: 'Listen to my latest remix - "Zombie"',
      icon: process.env.PUBLIC_URL + '/assets/zombie.jpg',
      url: 'https://sq1rt.me/zombie-remix',
      cta: 'Listen now',
      id: 0
    },
    {
      title: 'Here we go Chico (Remix)',
      subTitle: 'Stream my remix - "Here we go Chico"',
      icon: process.env.PUBLIC_URL + '/assets/herewegochico.jpg',
      url: 'https://sq1rt.me/here-we-go-chico-remix',
      cta: 'STREAM',
      id: 1
    },
    {
      title: 'Alone again (Remix)',
      subTitle: 'Listen to my remix of "Alone again" on Youtube',
      icon: process.env.PUBLIC_URL + '/assets/aloneAgain.jpg',
      url: 'https://sq1rt.me/alone-again-yt',
      cta: 'LISTEN',
      id: 2
    },
    {
      title: 'Front To Back',
      subTitle: 'Listen to my latest single "Front To Back"!',
      icon: process.env.PUBLIC_URL + '/assets/FrontToBack.jpeg',
      url: 'https://sq1rt.me/front-to-back',
      cta: 'LISTEN',
      id: 3
    },
    {
      title: 'Gimme some keys (Remix)',
      subTitle: 'My remix of Matroda\'s "Gimme some keys"',
      icon: process.env.PUBLIC_URL + '/assets/gimmeKeys.jpg',
      url: 'https://sq1rt.me/gimme-some-keys',
      cta: 'Listen now',
      id: 4
    },
    {
      title: 'Moscow Mule EDIT',
      subTitle: 'Listen to my edit of Bad Bunny\s new song',
      icon: process.env.PUBLIC_URL + '/assets/moscowMule.png',
      url: 'https://sq1rt.me/moscow-mule',
      cta: 'Listen now',
      id: 5
    },
    {
      title: 'SQ!RT Mashup Pack Vol 1',
      subTitle: 'Free Volume 1 Mashup Pack',
      icon: process.env.PUBLIC_URL + '/assets/soundcloud.png',
      url: 'https://sq1rt.me/mashups-vol-1',
      cta: 'Download',
      id: 6
    },
  ];
  
  export const getLinks = () => links;
  
  export const getLink = (id: number) => links.find(l => l.id === id);
  