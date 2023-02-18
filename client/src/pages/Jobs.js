import React, { useEffect, useState } from "react";
import AppAppBar from "../modules/views/AppAppBar";
import AppFooter from "../modules/views/AppFooter";
import withRoot from "../modules/withRoot";
import * as api from "../api";
import { useDispatch } from "react-redux";
import { setJobs } from "../redux/jobsSlice";
import { useSelector } from "react-redux";
import JobCard from "../modules/components/JobCard";
import { Container } from "@mui/system";

function Jobs() {
  const dispatch = useDispatch();
  const { listOfJobOpenings } = useSelector((state) => state.jobs);

  useEffect(() => {
    api.fetchJobs().then((response) => {
      dispatch(setJobs(response.data));
    });
  }, []);

  return (
    <React.Fragment>
      <AppAppBar />
      <Container>
        {listOfJobOpenings?.map((jobPost) => (
          <JobCard key={jobPost.title} job={jobPost} />
        ))}
      </Container>

      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Jobs);
