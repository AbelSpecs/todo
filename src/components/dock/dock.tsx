import { FC, useState } from 'react';
import styles from './dock.module.css';
import ActivitiesList from '../activitiesList/activitiesList';
import Participants from '../participants/participants';

interface DockProps {}

const Dock: FC<DockProps> = () => {
  const [participants, setParticipants] = useState(2);

  return (
    <div className={styles.Dock} data-testid="Dock">
      <Participants setParticipants={setParticipants}></Participants>
      <ActivitiesList participants={participants}></ActivitiesList>
    </div>
  )
}

export default Dock;
