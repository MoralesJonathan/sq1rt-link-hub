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
      title: 'Dirtybird DJ Contest',
      subTitle: 'Vote on OnNow.TV for SQ!RT',
      icon: process.env.PUBLIC_URL + '/assets/onNowTv.png',
      url: 'https://sq1rt.me/dirtybirdcontest',
      cta: 'VOTE',
      id: 0
    },
    {
      title: 'Revolution 93.5 Mix 3',
      subTitle: 'Aired: 07/14/20',
      icon: process.env.PUBLIC_URL + '/assets/soundcloud.png',
      url: 'https://sq1rt.me/rev-mix-3',
      cta: 'Play',
      id: 1
    },
    {
      title: 'Revolution 93.5 Mix 2',
      subTitle: 'Aired: 06/30/20',
      icon: process.env.PUBLIC_URL + '/assets/soundcloud.png',
      url: 'https://sq1rt.me/rev-mix-2',
      cta: 'Play',
      id: 2
    },
    {
      title: 'Revolution 93.5 Mix 1',
      subTitle: 'Aired: 06/09/20',
      icon: process.env.PUBLIC_URL + '/assets/soundcloud.png',
      url: 'https://sq1rt.me/rev-mix',
      cta: 'Play',
      id: 3
    }
  ];
  
  export const getLinks = () => links;
  
  export const getLink = (id: number) => links.find(l => l.id === id);
  