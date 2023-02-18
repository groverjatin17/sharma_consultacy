import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import AppAppBar from "../modules/views/AppAppBar";
import AppFooter from "../modules/views/AppFooter";
import withRoot from "../modules/withRoot";

function JobApplication() {

  const { listOfJobOpenings } = useSelector((state) => state.jobs);


  const useQuery = () => {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  };

  let query = useQuery();
  const jobId = query.get("jobId");
  const job = listOfJobOpenings.find((job) => job._id === jobId)
  return (
    <React.Fragment>
      <AppAppBar />
      <Grid>
        <Box>Descript about the job</Box>
        <Box>Form to apply for the job</Box>
      </Grid>
      Kindly email your resume at{" "}
      <a href="mailto:s.s783766.ss@gmail.com">s.s783766.ss@gmail.com</a>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(JobApplication);
