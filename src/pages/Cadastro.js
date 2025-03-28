import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Link } from 'react-router-dom';
import Header1 from "../components/Header1";
import cadastro from '../assets/facaSeuCadastro.png';
import fundoVacas from '../assets/fundoVacas.png';
import pessoa from '../assets/pessoa.png';
import telefone from '../assets/telefone.png';
import cadeado from '../assets/cadeado.png';
import prancheta from '../assets/prancheta.png';

/* Cores: */
const rosaClarinho = "#FAD9D1";
const rosaPessego = "#FF9B8B";
const rosaBlush = "#EF7E6D";
const rosaVermelhinho = "#892E2E";

const useStyles = makeStyles(() => ({
  container: {
    backgroundImage: `url(${fundoVacas})`,
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "800px",
  },

  cadastro: {
    padding: "4% 0 3%",
    position: "absolute",
    top: "22%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "35%",
    height: "fit-content",
    backgroundColor: "white",
    borderRadius: "20px",
    border: `3px solid ${rosaClarinho}`,

    "& input": {
      width: "70%",
      margin: "2% 0",
      padding: "2.5% 0",
      border: `3px solid ${rosaClarinho}`,
      borderRadius: "10px",
    },
    
    "& #nome": {
      background: `url(${pessoa}) no-repeat 10px center`,
      backgroundSize: "20px",
      paddingLeft: "30px",
    },
    
    "& #telefone": {
      background: `url(${telefone}) no-repeat 10px center`,
      backgroundSize: "20px",
      paddingLeft: "30px",
    },
    
    "& #email": {
      background: `url(${prancheta}) no-repeat 10px center`,
      backgroundSize: "20px",
      paddingLeft: "30px",
    },
    
    "& #senha": {
      background: `url(${cadeado}) no-repeat 10px center`,
      backgroundSize: "20px",
      paddingLeft: "30px",
    },
    
    "& #confirmarSenha": {
      background: `url(${cadeado}) no-repeat 10px center`,
      backgroundSize: "20px",
      paddingLeft: "30px",
    },
    
    "& img": {
      padding: "0 2%",
      position: "absolute",
      width: "70%",
      backgroundColor: "white",
      top: "-4%",
    },
    
    "& p": {
      fontSize: "small",
      margin: "1.5% 0 0",
    },
    
    "& a": {
      textDecoration: "none",
      color: "#AB3939",
      fontWeight: "bold",
    },
    
    "& button": {
      margin: "4% 0",
      padding: "2.5% 5%",
      border: "none",
      backgroundColor: rosaClarinho,
      color: rosaVermelhinho,
      fontWeight: "bold",
      borderRadius: "10px",
      cursor: "pointer",
    },
  },
}));

const Cadastro = () => {
  const classes = useStyles();
  

  const handleLogin = () => {
    // Função para processar o cadastro
  };

  return (
    <div className={classes.container}>
      <Header1 />

      <form action="" className={classes.cadastro}>
        <img src={cadastro} alt="" />
        <input type="text" placeholder="Nome Completo" name="nome" id="nome" />
        <input type="number" placeholder="Telefone" name="telefone" id="telefone" />
        <input type="email" placeholder="E-mail" name="email" id="email" />
        <input type="password" placeholder="Senha" name="senha" id="senha" />
        <input type="password" placeholder="Confirmar Senha" name="confirmarSenha" id="confirmarSenha" />
        <button type="button" className="btnEntrar" onClick={handleLogin}>Cadastrar</button>
        <p id="erro"></p>
        <p>Já tem uma conta? <Link to="/login"> Entre já!</Link></p>
      </form>
    </div>
  );
};



export default Cadastro;
