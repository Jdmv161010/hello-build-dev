import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { loginSchema } from "schemas";
import { authUser, setLoginError } from "store/actions";
import { AuthLayout } from "ui/layouts";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoginError } = useSelector((state) => state.ui);

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  function onSubmit(data) {
    dispatch(authUser(data, navigate));
  }

  useEffect(() => {
    return () => {
      dispatch(setLoginError(false));
    };
  }, []);

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="column" sx={{ p: "10px 0", rowGap: "10px" }}>
          {isLoginError && (
            <Grid item>
              <Typography sx={{ color: "error.main" }}>
                An error occurred, try again later.
              </Typography>
            </Grid>
          )}

          <Grid item>
            <TextField
              {...register("user")}
              label="user"
              type="text"
              placeholder="user"
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
              variant="contained"
              fullWidth
              type="submit"
              disabled={!isValid}
            >
              Login
            </Button>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/sign-up">
              Sign up
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
