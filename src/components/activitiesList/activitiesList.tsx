import { FC, useEffect, useState } from 'react';
import styles from './activitiesList.module.css';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { activity } from '../../services/api.activities';
import { Activity } from '../../types/activities';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';

interface ActivitiesListProps {
  participants: number
}

const ActivitiesList: FC<ActivitiesListProps> = ({participants}) => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [checked, setChecked] = useState([0]);
  let newActivity: Activity;

  const handleToggle = (index: number) => {
    const currentIndex = checked.indexOf(index);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(index);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleDelete = (key: string) => {
    const activitiesCopy = [...activities];
    const index = activitiesCopy.findIndex(a => a.key === key);
    activitiesCopy.splice(index, 1);
    setActivities(activitiesCopy);
  }
  
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    activity(participants, signal)
    .then(data => {
      newActivity = data;
      setActivities([...activities, newActivity]);
    })
    .catch(error => {
      console.log(error);
    });
  },[participants]);

  return (
    <div className={styles.ActivitiesList} data-testid="ActivitiesList">
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <nav aria-label="main mailbox folders">
          <List>
            {
              activities.map((activity, i) => {
                return (
                  <div key={i}>
                    <ListItem disablePadding style={{color: 'black'}}
                      secondaryAction={
                        <IconButton edge="end" aria-label="comments" onClick={() => handleDelete(activity.key)}>
                          <DeleteIcon />
                        </IconButton>
                      }
                      >
                      <ListItemButton onClick={() => handleToggle(i)}>
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checked={checked.indexOf(i) !== -1}
                            tabIndex={-1}
                            disableRipple
                          />
                        </ListItemIcon>
                        <ListItemText primary={activity.activity} />
                      </ListItemButton>
                    </ListItem>
                    <Divider/>
                  </div>
                )
              })
            }
          </List>
        </nav>
      </Box>  
    </div>
  )
}

export default ActivitiesList;
