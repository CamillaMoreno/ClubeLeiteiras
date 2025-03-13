import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import manchinhas from "../assets/manchinhas-blur.png";
import fotoPerfil from "../assets/default-perfil.png";
import vaquinha from "../assets/vaquinha-com-borda.png";
import clubeNome from "../assets/clube-nome.png";
import Header2 from "../components/Header2";

/* Cores: */
const rosaClarinho = "#FAD9D1";
const rosaBlush = "#EF7E6D";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${manchinhas})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },

  carteirinhaContainer: {
    position: "relative",
    width: "40%",
    height: "55%",
    perspective: "1000px",
  },

  carteirinha: {
    width: "100%",
    height: "100%",
    position: "absolute",
    transformStyle: "preserve-3d",
    transition: "transform 0.6s ease-in-out",
  },

  flipped: {
    transform: "rotateY(180deg)",
  },

  frente: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 40,
    border: `3px solid ${rosaBlush}`,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backfaceVisibility: "hidden",
  },

  verso: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 40,
    border: `3px solid ${rosaBlush}`,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transform: "rotateY(180deg)",
    backfaceVisibility: "hidden",
  },

  titulo: {
    margin: "0 0 1% 0",
  },

  informacoes: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  forms: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
  },

  input: {
    width: "90%",
    height: "32px",
    padding: "5px 10px",
    borderRadius: 10,
    border: `3px solid ${rosaClarinho}`,
    outline: "none",
  },

  label: {
    position: "relative",
    top: 10,
    left: 20,
    padding: "0 5px",
    fontSize: "small",
    backgroundColor: "white",
  },

  fotoPerfil: {
    marginTop: "2%",
    width: "35%",
    height: "50%",
    borderRadius: 20,
  },

  img: {
    width: "40%",
  },

  clubeNome: {
    width: "50%",
  },

}));

const Perfil = () => {
  const classes = useStyles();
  const [virado, setVirado] = useState(false);

  return (
    <div className={classes.container}>
      <Header2 />

      <div className={classes.carteirinhaContainer} onClick={() => setVirado(!virado)}>
        <div className={`${classes.carteirinha} ${virado ? classes.flipped : ""}`}>

          {/* Frente da carteirinha */}
          <div className={classes.frente}>
            <h3 className={classes.titulo}>Carteirinha do Clube</h3>

            <div>
              <div className={classes.informacoes}>
                <form className={classes.forms}>
                  <div>
                    <label className={classes.label}>Nome</label>
                    <input className={classes.input} />
                  </div>

                  <div>
                    <label className={classes.label}>User</label>
                    <input className={classes.input} />
                  </div>

                  <div>
                    <label className={classes.label}>E-mail</label>
                    <input className={classes.input} />
                  </div>

                  <div>
                    <label className={classes.label}>Telefone</label>
                    <input className={classes.input} />
                  </div>
                </form>

                <img src={fotoPerfil} className={classes.fotoPerfil} alt="Perfil" />
              </div>
            </div>
          </div>

          {/* Verso da carteirinha */}
          <div className={classes.verso}>
            <img src={vaquinha} alt="Logo" className={classes.img} />
            <img src={clubeNome} alt="Clube Nome" className={classes.clubeNome} />
          </div>

        </div>
      </div>

      <p style={{ position: "absolute", bottom: "5%" }}>Clique na carteirinha para vira-lá</p>

    </div>
  );
};

export default Perfil;
