import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";



export default (props) => <Box py={10} bgcolor="secondary.main" color="white">
    <Grid container justifyContent="center">
        <Grid item xs={10}>
            <Box display="flex" justifyContent="space-between">
                <Typography variant="h5">
                    Research Opportunities
                </Typography>
                <Button variant="contained" disableElevation>Post a job</Button>
            </Box>
        </Grid>
    </Grid>
</Box> 