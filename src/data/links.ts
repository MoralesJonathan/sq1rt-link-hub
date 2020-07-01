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
      title: 'Revolution 93.5 Mix 1',
      subTitle: 'Aired: 06/30/20',
      icon: 'assets/soundcloud.png',
      url: 'https://sq1rt.me/rev-mix',
      cta: 'Play',
      id: 0
    },
    {
      title: 'Revolution 93.5 Mix 2',
      subTitle: 'Aired: 05/09/20',
      icon: 'assets/soundcloud.png',
      url: 'https://sq1rt.me/rev-mix-2',
      cta: 'Play',
      id: 1
    }
  ];
  
  export const getLinks = () => links;
  
  export const getLink = (id: number) => links.find(l => l.id === id);
  