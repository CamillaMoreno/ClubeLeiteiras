import Header1 from '../components/Header1';
import Slogan from '../components/Slogan';
import mocaLendo from "../assets/mocaLendo2.png";
import mocaLendo2 from "../assets/mocaLendo.png";
import fraseDia from "../assets/fraseDia.png";
import { makeStyles } from "@mui/styles";
import Book from '../components/Book';

/* Cores: */
const rosaClarinho = "#FAD9D1";
const rosaPessego = "#FF9B8B";
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

  sobreNos: {
    marginTop: "-5%",
    padding: "5% 0",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    "& h1": {
      margin: "0",
      fontFamily: "Agbalumo",
      fontSize: "50px",
    },

    "& p": {
      lineHeight: "25px",
      borderRadius: "25px",
      padding: "4% 3%",
      backgroundColor: rosaPessego,
      width: "40%",
    }
  },

  mocaLendo: {
    width: "25%",
  },

  mocaLendo2: {
    width: "30%",
  },

  sobreNosTexto: {
    margin: "0.5% 0 -2%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: "7%",

    "& p": {
      color: "white",
    }
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
      top: "262%",
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
      top: "317.5%",
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
      <Header1 />
      <Slogan />

      <div className={classes.container}>
        <div className={classes.sobreNos}>
          <h1>O que é o nosso clube?</h1>
          <div class={classes.sobreNosTexto}>
            <p>Nosso clube é um espaço para debate e aprendizado, criado por estudantes instituto J&F com o objetivo de incentivar o hábito de leitura e apoiar outras jovens na jornada dos vestibulares. Nossa proposta é que uma vez ao mês haja o sorteio de pelo menos 2 livros, sendo um, uma obra obrigatória para os vestibulares da Fuvest ou Unicamp e outro indicado pelas membros.</p>
            <img src={mocaLendo} alt="" class={classes.mocaLendo} />
          </div>
          <div class={classes.sobreNosTexto}>
            <img src={mocaLendo2} alt="" class={classes.mocaLendo2} />  
            <p>Durante a leitura do livro obrigatório, é indicada a criação de um documento, que anote os principais pontos e sirva de apoio para a discução sobre a obra. Nossa plataforma serve de apoio para esse processo, a ideia é que cada vez mais essas moças tenham apreço pela literatura.</p>
          </div>
        </div>

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