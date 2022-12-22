import { Typography, Grid, Button } from '@mui/material'
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useNavigate} from 'react-router-dom';

export default function Confirmation({ success}) {
    //shown after the report is send to the backend
    //can navigate back to the home page
    //to-do: if error during request processing - possiblity to navigate back to report and change data
    //for this, the data object should be moved from the report to the app component
    //and from there passed on to the report
    //by doing this, the data object does not get lost when reloading the report and can be set on load
    //this enable the user to change data, even when reloading the page
    const navigate = useNavigate();
    const handleSuccess = () => {
        navigate("/");
    }
 /*    const handleFailure = () => {
       navigate('/report');
    } */
    return (
        <React.Fragment>
            {success ? (
                <React.Fragment>
                    <Typography variant="h5" gutterBottom >
                        Vielen Dank für Ihre Mithilfe!
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={3}>
                            <CheckCircleOutlineIcon fontSize='large' color='success' />
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <Typography variant='h6'>Die aufgegebene Meldunng wird zum nächstmöglichen Zeitpunkt bearbeitet.</Typography>
                        </Grid>
                    </Grid>
                    <Button onClick={handleSuccess}>Zurück zur Homepage</Button>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Typography variant="h5" gutterBottom >
                        Leider ist bei Ihrer Meldung ein Fehler aufgetreten!
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={3}>
                            <CloseIcon fontSize='large' color='error' />
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <Typography variant='h6'>Bitte versuchen sie den Sendevorgang erneut. Wir bitten um Entschuldigung.</Typography>
                        </Grid>
                    </Grid>
                    {/* <Button onClick={handleFailure} color='error'>Nochmal abschicken</Button> */}
                    <Button onClick={handleSuccess}>Zurück zur Homepage</Button>
                </React.Fragment>
            )}
        </React.Fragment>
    )
}
