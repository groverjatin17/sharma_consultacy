import * as React from "react";
import { Field, Form, FormSpy } from "react-final-form";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import Typography from "../modules/components/Typography";
import AppFooter from "../modules/views/AppFooter";
import AppAppBar from "../modules/views/AppAppBar";
import AppForm from "../modules/views/AppForm";
import { email, required } from "../modules/form/validation";
import RFTextField from "../modules/form/RFTextField";
import FormButton from "../modules/form/FormButton";
import FormFeedback from "../modules/form/FormFeedback";
import withRoot from "../modules/withRoot";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import * as api from "../api";

function SignIn() {
  const [sent, setSent] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const googleError = () =>
    alert("Google Sign In was unsuccessful. Try again later");

  const googleSuccess = async (res) => {
    let { name, email } = jwt_decode(res?.credential);
    const user = { name: name, email: email };

    try {
      dispatch(setUser(user));
    } catch (error) {
      console.log(error);
    }
  };

  const validate = (values) => {
    const errors = required(["email", "password"], values);

    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = emailError;
      }
    }
    return errors;
  };

  const handleSubmit = async (formValues) => {
    const response = await api.signIn(formValues);
    if (response.status === 200) {
      const { name, email } = response?.data.result;
      dispatch(setUser({ name, email }));
      navigate("/");
    }

    setSent(true);
  };

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign In
          </Typography>
          <Typography variant="body2" align="center">
            {"Not a member yet? "}
            <Link
              to="/signup"
              style={{
                textDecoration: "underline",
                color: "#28282a",
                textDecorationColor: "rgba(40, 40, 42, 0.4)",
              }}
            >
              Sign Up here
            </Link>
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box
              component="form"
              onSubmit={handleSubmit2}
              noValidate
              sx={{ mt: 6 }}
            >
              <Field
                autoComplete="email"
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
                size="large"
              />
              <Field
                fullWidth
                size="large"
                component={RFTextField}
                disabled={submitting || sent}
                required
                name="password"
                autoComplete="current-password"
                label="Password"
                type="password"
                margin="normal"
              />
              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback error sx={{ mt: 2 }}>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
                sx={{ mt: 3, mb: 2 }}
                disabled={submitting || sent}
                size="large"
                color="secondary"
                fullWidth
              >
                {submitting || sent ? "In progress…" : "Sign In"}
              </FormButton>
              <GoogleLogin onSuccess={googleSuccess} onError={googleError} />
            </Box>
          )}
        </Form>
        <Typography align="center">
          <Link
            underline="always"
            href="/premium-themes/onepirate/forgot-password/"
          >
            Forgot password?
          </Link>
        </Typography>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(SignIn);
