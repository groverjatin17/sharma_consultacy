import React, { useState } from "react";
import Card from "@mui/material/Card";
import { CardContent, Chip } from "@mui/material";
import Typography from "./Typography";
import { Box } from "@mui/system";
import arrow from "../../assets/images/arrow-right-big.svg";
import { useNavigate  } from "react-router-dom";

export default function JobCard({ job }) {
  const [show, setShow] = useState(false);
  let navigate = useNavigate();

  let shortDescription =
    job.description.length > 150
      ? job.description.substring(0, 150) + "..."
      : job.description;
  return (
    <>
      {/* <Link to="/apply"> */}
        <Card
          sx={{
            margin: "20px 120px",
            fontSize: "24px",
            fontFamily: "proxima-nova,sans-serif",
            transform: show && "scale(0.990)",
            border: `1px solid ${show ? "#e31837" : "#00aaad"}`,
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onMouseOver={() => setShow(true)}
          onMouseOut={() => setShow(false)}
          onClick={() => {navigate(`/apply?jobId=${job._id}`)}}
        >
          <CardContent
            sx={[
              {
                textTransform: "capitalize",
                color: "#00aaad",
                display: "flex",
                "&:hover": {
                  color: "#e31837",
                  backgroundColor: "white",
                },
              },
            ]}
          >
            <Box sx={{ padding: "10px 20px 0px 20px" }}>
              <Typography gutterBottom variant="h5" component="div">
                {job.title}
                <Typography variant="caption" display="block" gutterBottom>
                  {job.location}
                </Typography>
              </Typography>
              <Typography variant="body2">{shortDescription}</Typography>
              <Box sx={{ marginTop: "10px" }}>
                <Chip
                  label={job.jobType}
                  variant="outlined"
                  sx={{
                    color: show ? "#e31837" : "#00aaad",
                    marginLeft: "10px",
                    border: `1px solid ${show ? "#e31837" : "#00aaad"}`,
                  }}
                />
                <Chip
                  label={job.sector}
                  variant="outlined"
                  sx={{
                    color: show ? "#e31837" : "#00aaad",
                    marginLeft: "10px",
                    border: `1px solid ${show ? "#e31837" : "#00aaad"}`,
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: show ? "#e31837" : "#00aaad",
                  margin: "10px",
                }}
              >
                Apply
              </Typography>
              <Box
                component="span"
                sx={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  display: "inline-block",
                  background: show
                    ? "linear-gradient(90deg,#e01e3c -8.87%,#ff8300 80.65%)"
                    : "#00aaad",
                  marginleft: "20px",
                  position: "relative",
                  "&:after": {
                    content: '""',
                    background: `url(${arrow}) no-repeat`,
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "13px",
                    height: "15px",
                    left: "20px",
                    backgroundSize: "contain",
                  },
                }}
              ></Box>
            </Box>
          </CardContent>
        </Card>
      {/* </Link> */}
    </>
  );
}
