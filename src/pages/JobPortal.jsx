import { Box,Grid,ThemeProvider } from "@mui/material";
import theme from "../theme/theme";
import JobHeader from "../components/JobHeader";
import JobSearchBar from "../components/JobSearchBar";
import ApplyJob from "../components/ApplyJob";
import JobCard from "../components/JobCard";
import jobData from "../../src/dummyData.jsx"

function JobPortal(){
    return(
        <ThemeProvider theme={theme}>
        <JobHeader/>

        <ApplyJob />
        <Grid container justifyContent="center">
          <Grid item xs={10}>
            <JobSearchBar/>
            {jobData.map(job=><JobCard key={job.id} {...job}/>)}
          </Grid>  
        </Grid>
        
      </ThemeProvider>
    );
}
export default JobPortal