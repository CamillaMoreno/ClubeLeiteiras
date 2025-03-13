import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from "@mui/styles";
import logo from '../assets/vaquinha.png';

/* Cores: */
const rosaClarinho = "#FAD9D1";
const rosaPessego = "#FF9B8B";
const rosaBlush = "#EF7E6D";
const rosaVermelhinho = "#892E2E";

const useStyles = makeStyles({
  '@global': {
    '@import': "url('https://fonts.googleapis.com/css2?family=Montserrat&family=Agbalumo&display=swap')",
  },

  header: {
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "35px",
    padding: "0.8% 0",
    backgroundColor: "white",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
    fontFamily: "Montserrat",
  },

  link: {
    textDecoration: 'none',
  },

  logo: {
    width: "fit-content",
    marginLeft: "25%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Agbalumo",
    fontSize: "150%",
    '& img': {
      width: "50px",
    },
  },

  clube: {
    color: rosaVermelhinho,
  },

  leiteras: {
    color: rosaPessego,
  },

  search: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2%",
    width: "100%",
    height: "35px",
    '& button': {
      display: "flex",
      alignItems: "center",
      height: "100%",
      backgroundColor: "black",
      color: "white",
      borderRadius: "6px",
      border: "none",
      padding: "10px 15px",
      cursor: "pointer",
    },
    '& input': {
      height: "100%",
      borderRadius: "6px",
      border: `2px solid ${rosaPessego}`,
      outlineColor: rosaPessego,
      padding: "10px 15px",
      width: "40%",
    },
  },

  options: {
    marginRight: "4%",
    display: "flex",
    gap: "15%",
    '& a': {
      color: "black",
      textDecoration: "none",
      fontSize: "85%",
      cursor: "pointer",
    },
    '& :hover': {
      color: rosaBlush,
      textShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
    },
  },
});

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Link to="/" className={classes.link}>
        <div className={classes.logo}>
          <img src={logo} alt="Logo" />
          <h5 className={classes.clube}>Clube</h5>
          <h5 className={classes.leiteras}>Leiteras</h5>
        </div>
      </Link>

      <div className={classes.search}>
        <input type="search" placeholder="Pesquisar livro" />
        <button>BUSCAR</button>
      </div>

      <div className={classes.options}>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Header;
