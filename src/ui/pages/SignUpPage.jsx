import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { signUpSchema } from "schemas";
import { registerUser, setSignUpError } from "store/actions";
import { AuthLayout } from "ui/layouts";

const SignUpPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isSignUpError } = useSelector((state) => state.ui);

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(signUpSchema),
  });

  function onSubmit(data) {
    dispatch(registerUser(data, navigate));
  }

  useEffect(() => {
    return () => {
      dispatch(setSignUpError(false));
    };
  }, []);

  return (
    <AuthLayout title="Sign up">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="column" sx={{ p: "10px 0", rowGap: "10px" }}>
          {isSignUpError && (
            <Grid item>
              <Typography sx={{ color: "error.main" }}>
                An error occurred, try again later.
              </Typography>
            </Grid>
          )}
          <Grid item>
            <TextField
              {...register("user")}
              label="Github user"
              type="text"
              placeholder="Github user"
              fullWidth
            />
          </Grid>

          <Grid item>
            <TextField
              {...register("email")}
              label="email"
              type="email"
              placeholder="email"
              fullWidth
            />
          </Grid>

          <Grid item>
            <TextField
              {...register("password")}
              label="password"
              type="password"
              placeholder="password"
              fullWidth
            />
          </Grid>

          <Grid item>
            <Button
              disabled={!isValid}
              variant="contained"
              fullWidth
              type="submit"
            >
              Sign up
            </Button>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/">
              Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

export default SignUpPage;
