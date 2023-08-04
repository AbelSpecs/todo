import  { FC, useState } from 'react';
import styles from './participants.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface ParticipantsProps {
  setParticipants: React.Dispatch<React.SetStateAction<number>>
}

const Participants: FC<ParticipantsProps> = ({setParticipants}) => {
  const [number, setNumber] = useState(0);

  const handleChange = (event: any) => {
    const value: number = event.target.value;

    setNumber(value);
  }

  const handleSubmit = () => {
    setParticipants(number);
  }

  return (
    <div className={styles.Participants} data-testid="Participants">
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleChange}/>
        <Button variant="contained" onClick={handleSubmit}>Agregar</Button>
      </Box>
    </div>
  )
}
  


export default Participants;
