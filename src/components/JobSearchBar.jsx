import React from "react";
import { Box, Button, Select, MenuItem } from "@mui/material";

export default (props) => {
    return (
        <Box p={2} mt={-5} mb={2} sx={{backgroundColor:"#fff",display:"flex",boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.1)", borderRadius:"5px",}}>
            <Select disableUnderline variant="filled" defaultValue="Undergraduate" sx={{flex:1,height:"45px",margin:"8px",}}>
                <MenuItem value="Undergraduate">Undergraduate</MenuItem>
                <MenuItem value="Graduate">Graduate</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
            </Select>
            <Select disableUnderline variant="filled" defaultValue="Faculty Of Science" sx={{flex:1,height:"45px",margin:"8px",}}>
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
            <Button variant="contained" disableElevation sx={{flex:1,height:"45px",margin:"8px",}}>Search</Button>
        </Box>
    );
}