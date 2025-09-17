import { AppBar, Button, MenuItem, Toolbar, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

function WebsiteHeader() {
  return (
    <AppBar>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Typography variant="h3"> GoCar </Typography>

            <div style={{display: "flex", gap: "25px", padding: "10px"}}>
                <Toolbar>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Booking</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Cars</Button>
                    <Button color="inherit">Services</Button>
                    <Button color="inherit">Contact</Button>
                </Toolbar>
            </div>
            <div>
                <PersonIcon></PersonIcon>
            </div>
        </div>
    </AppBar>
  );
}

export default WebsiteHeader;
