import React from "react";
import {
    Box,
    Grid, FilledInput, Select, MenuItem, Dialog, DialogContent, DialogTitle, DialogActions,
    Typography, Button, IconButton
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import theme from "../theme/theme";
export default props => {
    const attachments=["resume", "transcript", "cover letter","research portfolio"]
    return (
        <Dialog open={false}>
            <DialogTitle>
                <Box display="flex" justifyContent="space-between"
                alignItems="center">
                    Post a Job
                    <IconButton>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FilledInput placeholder="Job Title *" disableUnderline fullWidth></FilledInput>
                    </Grid>
                    <Grid item xs={6}>
                        <Select fullWidth disableUnderline variant="filled" defaultValue="Undergraduate" sx={{ flex: 1, height: "45px", margin: "8px", }}>
                            <MenuItem value="Undergraduate">Undergraduate</MenuItem>
                            <MenuItem value="Graduate">Graduate</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput placeholder="Name Of Organization *" disableUnderline fullWidth></FilledInput>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput placeholder="Contact Email *" disableUnderline fullWidth></FilledInput>
                    </Grid>
                    <Grid item xs={12}>
                        <Select fullWidth disableUnderline variant="filled" defaultValue="Faculty Of Science" sx={{ flex: 1, height: "45px", margin: "8px", }}>
                            <MenuItem value="Faculty Of Science">Faculty Of Science</MenuItem>
                            <MenuItem value="Faculty of Arts and Social Sciences">Faculty of Arts and Social Sciences</MenuItem>
                            <MenuItem value="School Of Business">School Of Business</MenuItem>
                            <MenuItem value="School Of Computing">School Of Computing</MenuItem>
                            <MenuItem value="School of Continuing and Lifelong Education"> School of Continuing and Lifelong Education</MenuItem>
                            <MenuItem value="Faculty of Dentistry">Faculty of Dentistry</MenuItem>
                            <MenuItem value="College of Design and Engineering">College of Design and Engineering</MenuItem>
                            <MenuItem value="NUS College">NUS College</MenuItem>
                            <MenuItem value="NUS Graduate School"> NUS Graduate School</MenuItem>
                            <MenuItem value="Faculty of Law">Faculty of Law</MenuItem>
                            <MenuItem value="Yong Loo Lin School of Medicine">Yong Loo Lin School of Medicine</MenuItem>
                            <MenuItem value="Yong Siew Toh Conservatory of Music">Yong Siew Toh Conservatory of Music</MenuItem>
                            <MenuItem value="Saw Swee Hock School of Public Health">Saw Swee Hock School of Public Health</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={12}>
                        <FilledInput multiline rows={4} fullWidth placeholder="Job Description *" disableUnderline ></FilledInput>
                    </Grid>
                </Grid>
                <Box mt={2}>
                    <Typography>Attachments Required (to mail the professor with the following)</Typography>
                    <Box display="flex">
                        {attachments.map(attachment=>
                        (<Box sx={{margin:theme.spacing(0.5),padding:theme.spacing(0.75),
                            fontSize:"14.5px",borderRadius:"5px",fontWeight:600,border:`1px solid ${theme.palette.secondary.main}`,
                            color:theme.palette.secondary.main,cursor:"pointer",
                            "&:hover":{backgroundColor:theme.palette.secondary.main,color:"#fff"}
                        }} key={attachments}>{attachment}</Box>))}
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Box color="red" width="100%" display="flex" justifyContent="space-between"
                alignItems="center">
                    <Typography variant="caption">*Required fields</Typography>
                    <Button variant="contained" disableElevation color="primary">Post Job</Button>
                </Box>
            </DialogActions>
        </Dialog>
    );
}