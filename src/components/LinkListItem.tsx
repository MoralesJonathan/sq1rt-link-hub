import React from 'react';
import {
  IonItem,
  IonLabel,
  IonThumbnail
  } from '@ionic/react';
import { Link } from '../data/links';
import './LinkListItem.css';

interface LinkListItemProps {
  link: Link;
}

const LinkListItem: React.FC<LinkListItemProps> = ({ link }) => {
  return (
    <IonItem >
      <IonThumbnail>
        <img src={link.icon} alt="Service logo"/>
      </IonThumbnail>
      <IonLabel className="ion-text-wrap">
        <h2>
           {link.title} 
        </h2>
        <h3>
           {link.subTitle} 
        </h3>
      </IonLabel>
      <a href={link.url} className="button">
      {link.cta}
      </a>
    </IonItem>
  );
};

export default LinkListItem;
