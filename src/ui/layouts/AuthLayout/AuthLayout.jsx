import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import "./AuthLayout.scss";

const AuthLayout = ({ children, title }) => {
  return (
    <Grid
      container
      className="authLayout"
      spacing={0}
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.main",
        padding: 4,
      }}
    >
      <Grid item className="authLayout__card">
        <span className="authLayout__card--title">{title}</span>
        {children}
      </Grid>
    </Grid>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default AuthLayout;
