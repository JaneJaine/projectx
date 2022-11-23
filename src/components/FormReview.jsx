import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import AdjustIcon from '@mui/icons-material/Adjust';
import ArticleIcon from '@mui/icons-material/Article';
import { useEffect } from 'react';


export default function Review({ data, setSubmitData, submitData }) {
  const location = data.coordinates ? data.coordinates : data.street + ' ' + data.strNr + ', ' + data.zip;
  const userName = data.firstname + ' ' + data.lastname;
  useEffect(() => {
    console.log(data.type);
    setSubmitData({ ...submitData, location: location, type: data.type, description: data.description, userMail: data.email, userName: userName  })
  },[])
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Bitte überprüfen sie Ihre Eingaben
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <List >
            <ListItem>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText
                primary="Name"
                secondary={userName}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText
                primary="Email"
                secondary={data.email}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={6}>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <AdjustIcon />
              </ListItemIcon>
              <ListItemText
                primary="Mangelart"
                secondary={data.type}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText
                primary="Beschreibung"
                secondary={data.description}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ListItem>
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText
              primary="Ortangabe"
              secondary={location}
            />
          </ListItem>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}