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
      title: 'GET NASTY',
      subTitle: 'Stream my latest single "GET NASTY"!',
      icon: process.env.PUBLIC_URL + '/assets/GetNasty.png',
      url: 'https://gate.fm/W9TcTC',
      cta: 'STREAM',
      id: 0
    },
    {
      title: 'Discovery project mix',
      subTitle: 'Listen to my submission for the discovery project contest.',
      icon: process.env.PUBLIC_URL + '/assets/soundcloud.png',
      url: 'https://sq1rt.me/DiscoveryProjectMix',
      cta: 'Listen now',
      id: 1
    },
    {
      title: 'FEEL',
      subTitle: 'Stream my newest single "FEEL"!',
      icon: process.env.PUBLIC_URL + '/assets/feel.png',
      url: 'https://gate.fm/TkQKlwA',
      cta: 'STREAM',
      id: 2
    },
    {
      title: 'SQ!RT Mashup Pack Vol 1',
      subTitle: 'Free Volume 1 Mashup Pack',
      icon: process.env.PUBLIC_URL + '/assets/soundcloud.png',
      url: 'https://sq1rt.me/mashups-vol-1',
      cta: 'Download',
      id: 3
    },
  ];
  
  export const getLinks = () => links;
  
  export const getLink = (id: number) => links.find(l => l.id === id);
  