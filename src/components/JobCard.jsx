import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import theme from "../theme/theme";
export default props => {
    //const attachments= ["resume", "transcript", "research portfolio"]
    return (
        <Box p={2} sx={{border:"1px solid #e8e8e8", cursor:"pointer",transition:".3s",
        "&:hover":{boxShadow:"0px 5px 25px rgba(0,0,0,0.1)",borderLeft:"6px solid #a689e1"}
        }}>
            <Grid container alignItems="center">
                <Grid item xs>
                    <Typography variant="subtitle1">{props.title}</Typography>
                    <Typography sx={{fontSize:"13.5px",backgroundColor:theme.palette.third.main,
                    borderRadius:"5px",padding:theme.spacing(0.75),display:"inline-block",fontWeight:600
                 }} variant="subtitile2">{props.companyName}</Typography>
                </Grid>
                <Grid item container xs>
                    {props.attachments.map(attachment => <Grid key={attachment} item sx={{margin:theme.spacing(0.5),padding:theme.spacing(0.75),
                    fontSize:"14.5px",borderRadius:"5px",fontWeight:600,backgroundColor:theme.palette.secondary.main,color:"#fff"
                }} >{attachment}</Grid>)}
                </Grid>
                <Grid item container direction="column" alignItems="flex-end" xs>
                    <Grid item>
                        <Typography variant="caption">
                            {`${props.postedOn}`} | {props.type} | {props.Faculty}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Box mt={2} alignItems="center">
                            <Button variant="outlined">Apply now</Button>
                        </Box>
                    </Grid>

                </Grid>
            </Grid>
        </Box>
    );
}