import { CarrouselBooks, LivroCard } from '../components/Book';
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
      padding: "3% 5%",
      width: "40%",
      height: "70%",
      border: `3px solid ${rosaVermelhinho}`,

      "& img": {
        zIndex: -1,
        position: "absolute",
        right: "15%",
        width: "15%",
      },

      "& h3": {
        zIndex: -1,
        left: "27%",
        padding: "0 0.5%",
        position: "absolute",
        top: "149%",
        color: rosaVermelhinho,
        backgroundColor: "white",
      },
    },

    frase: {
      fontSize: "20px",
    },

    nomeLivroFrase: {
      float: "right",
      fontWeight: "bold",
    },

    box2: {
      zIndex: -1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "30px",
      padding: "3% 5%",
      width: "40%",
      height: "70%",
      border: `3px solid ${rosaVermelhinho}`,

      "& h3": {
        zIndex: -1,
        right: "27%",
        padding: "0 0.5%",
        position: "absolute",
        top: "199%",
        color: rosaVermelhinho,
        backgroundColor: "white",
      },

      "& p": {
        marginLeft: "5%",
      }
    },

    livroDia: {
      zIndex: -1,
      position: "absolute",
      left: "20%",
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
      <CarrouselBooks />

      <div className={classes.container}>
        <div className={classes.box1}>
          <img src={fraseDia} alt="fraseDiaImg" />
      
          <h3>Frase do Dia:</h3>
          <div className={classes.textoFrase}>
            <p className={classes.frase} >- Porque pessoas incríveis escolhem pessoas tão horríveis para amar?<br/>- Nós aceitamos o amor que achamos que merecemos.</p>
            <p className={classes.nomeLivroFrase} >- As vantagens de ser invísivel</p>
          </div>
        </div>
      
        <div className={classes.box2}>
          <div className={classes.livroDia}><LivroCard /></div>

          <h3>Livro do Dia:</h3>
          <div className={classes.textoLivro}>
            <p className={classes.nomeLivro} >Percy Jackson e o Ladrão de Raios:</p>
            <p className={classes.sinopse} >O adolescente Percy Jackson descobre que os deuses gregos e as criaturas mitológicas são reais. Ele é filho de uma divindade e logo entra para um acampamento de treinamento para semideuses. Enquanto tenta se adaptar a seus novos poderes e amigos, ele descobre que o Raio-Mestre do poderoso Zeus foi roubado e ele é o principal suspeito. Assim, ele tenta solucionar o mistério junto com seus novos colegas, Grover e Annabeth.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage_PosLogin;