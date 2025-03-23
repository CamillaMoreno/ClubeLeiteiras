import Book from '../components/Book';
import BookCarrousel from '../components/BookCarrousel';
import Header2 from '../components/Header2';
import Slogan from '../components/Slogan';
import fraseDia from "../assets/fraseDia.png";
import { makeStyles } from "@mui/styles";

/* Cores: */
const rosaClarinho = "#FAD9D1";
const rosaPessego = "#FF9B8B";
const rosaBlush = "#EF7E6D";
const rosaVermelhinho = "#892E2E";

const useStyles = makeStyles({
  container: {
    margin: "5% 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 80,
  },

  box1: {
    zIndex: -1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "30px",
    padding: "1.5% 5%",
    width: "40%",
    border: `3px solid ${rosaVermelhinho}`,

    "& img": {
      zIndex: -1,
      position: "relative",
      right: "-80%",
      width: "35%",
    },

    "& h3": {
      zIndex: -1,
      padding: "0 0.5%",
      position: "absolute",
      top: "218%",
      left: "27%",
      color: rosaVermelhinho,
      backgroundColor: "white",
    },
  },

  textoFrase: {
    marginLeft: "-50%",
    width: "90%",
    textAlign: "start",
  },

  frase: {
    fontSize: "20px",
  },

  nomeLivroFrase: {
    marginTop: "4%",
    textAlign: "end",
    fontWeight: "bold",
  },

  box2: {
    zIndex: -1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "30px",
    padding: "1.5% 5%",
    width: "40%",
    border: `3px solid ${rosaVermelhinho}`,

    "& h3": {
      zIndex: -1,
      padding: "0 0.5%",
      position: "absolute",
      right: "27%",
      top: "267%",
      color: rosaVermelhinho,
      backgroundColor: "white",
    },
  },

  textoLivro: {
    marginLeft: "-15%",
    width: "135%",
    textAlign: "start",
  },

  livroDia: {
    zIndex: -1,
    position: "relative",
    left: "-25%",
    transform: "rotate(-8deg)",
  },

  nomeLivro: {
    fontWeight: "bold",
  },
})

const LandingPage_PosLogin = () => {
  const classes = useStyles();

  return (
    <>
      <Header2 />
      <Slogan />
      <BookCarrousel />

      <div className={classes.container}>
        <div className={classes.box1}>
            <img src={fraseDia} alt="fraseDiaImg" />
        
            <h3>Frase do Dia:</h3>
            <div className={classes.textoFrase}>
              <p className={classes.frase} >Frase</p> {/* Trazer do banco */}
              <p className={classes.nomeLivroFrase} >nomeLivro</p> {/* Trazer do banco */}
            </div>
          </div>
        
          <div className={classes.box2}>
            <div className={classes.livroDia}><Book /></div> {/* Arrumar para renderizar só a capa do livro do dia */}

            <h3>Livro do Dia:</h3>
            <div className={classes.textoLivro}>
              <p className={classes.nomeLivro} >nomeLivro</p> {/* Trazer do banco */}
              <p className={classes.sinopse} >sinopse</p> {/* Trazer do banco */}
            </div>
          </div>
      </div>
    </>
  );
}

export default LandingPage_PosLogin;