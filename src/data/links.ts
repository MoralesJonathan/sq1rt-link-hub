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
      title: 'Slow down Amsterdam',
      subTitle: 'Listen to my latest mashup".',
      icon: process.env.PUBLIC_URL + '/assets/soundcloud.png',
      url: 'https://sq1rt.me/slow-down-amsterdam',
      cta: 'Listen now',
      id: 0
    },
    {
      title: 'Moscow Mule EDIT',
      subTitle: 'Listen to my edit of Bad Bunny\s new song',
      icon: process.env.PUBLIC_URL + '/assets/moscowMule.png',
      url: 'https://sq1rt.me/moscow-mule',
      cta: 'Listen now',
      id: 1
    },
    {
      title: 'SQ!RT Mashup Pack Vol 1',
      subTitle: 'Free Volume 1 Mashup Pack',
      icon: process.env.PUBLIC_URL + '/assets/soundcloud.png',
      url: 'https://sq1rt.me/mashups-vol-1',
      cta: 'Download',
      id: 2
    },
    {
      title: 'GET NASTY',
      subTitle: 'Stream my latest single "GET NASTY"!',
      icon: process.env.PUBLIC_URL + '/assets/GetNasty.png',
      url: 'https://gate.fm/W9TcTC',
      cta: 'STREAM',
      id: 3
    }
  ];
  
  export const getLinks = () => links;
  
  export const getLink = (id: number) => links.find(l => l.id === id);
  