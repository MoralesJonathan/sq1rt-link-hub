import LinkListItem from '../components/LinkListItem';
import React, { useState } from 'react';
import { Link, getLinks } from '../data/links';
import { logoInstagram, logoTwitch, mailOutline, logoSoundcloud } from 'ionicons/icons';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonToolbar,
  IonTitle,
  IonFooter,
  IonButtons,
  IonButton,
  IonIcon,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {

  const [links, setLinks] = useState<Link[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getLinks();
    setLinks(msgs);
  });

  return (
    <IonPage id="home-page">
      <IonHeader>
        <img src="assets/logo.jpg" className="headerImage" alt="logo"></img>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {links.map(l => <LinkListItem key={l.id} link={l} />)}
        </IonList>
      </IonContent>
      <IonFooter mode="md">
        <IonToolbar>
          <IonTitle slot="start">©2020 SQ!RT. All rights reserve.</IonTitle>
          <IonButtons slot="end">
            <IonButton href="https://sq1rt.me/instagram" >
              <IonIcon icon={logoInstagram} />
            </IonButton>
            <IonButton href="https://sq1rt.me/twitch" >
              <IonIcon icon={logoTwitch} />
            </IonButton>
            <IonButton href="https://sq1rt.me/soundcloud" >
              <IonIcon icon={logoSoundcloud} />
            </IonButton>
            <IonButton href="mailto:sq1rtme@gmail.com" >
              <IonIcon icon={mailOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
