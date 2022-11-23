import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';


export default function Review({ data, setSubmitData }) {
  const submitData = {
    location: '',
    type: '',
    description: '',
    userMail: '',
    userName: '',
  };
  const location = data.coordinates ? data.coordinates : data.street + ' ' + data.strNr + ', ' + data.zip;
  const userName = data.firstname + ' ' + data.lastname;
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
                secondary={
                  <React.Fragment>
                    <Typography> {userName} </Typography>
                  </React.Fragment>}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText
                primary="Email"
                secondary={
                  <React.Fragment>
                    <Typography> {data.email} </Typography>
                  </React.Fragment>}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={6}>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText
                primary="Mangelart"
                secondary={
                  <React.Fragment>
                    <Typography> {data.type} </Typography>
                  </React.Fragment>}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText
                primary="Beschreibung"
                secondary={
                  <React.Fragment>
                    <Typography> {data.description} </Typography>
                  </React.Fragment>}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ListItem>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText
              primary="Ortangabe"
              secondary={
                <React.Fragment>
                  <Typography> {location} </Typography>
                </React.Fragment>}
            />
          </ListItem>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}