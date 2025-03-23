import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import ColorThief from "colorthief";

/* Cores */
const rosaClarinho = "#FAD9D1";
const rosaPessego = "#FF9B8B";
const rosaBlush = "#EF7E6D";
const rosaVermelhinho = "#892E2E";
const verdeConfirmado = "#4CAF50";
const amareloSol = "#FACC15";

const useStyles = makeStyles({
    bookContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    
    book: {
        zIndex: 1,
        position: "relative",
        display: "flex",
        justifyContent: "flex-end",
        width: "120px",
        height: "150px",
        borderRadius: "20px 12px 12px 20px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        alignItems: "flex-end",
        overflow: "hidden",
        cursor: "pointer",
    },
    
    cover: {
        position: "absolute",
        top: 0,
        width: "81%",
        height: "80%",
        borderRadius: "0px 12px 0px 0px",
    },
    
    bottomBar: {
        width: "84%",
        height: "10%",
        backgroundColor: "#EDE6DE",
        position: "absolute",
        bottom: 10,
        borderRadius: "8px 0px 0px 8px",
    },
    
    bookmark: {
        position: "absolute",
        bottom: "0.8%",
        left: "75%",
        width: "10%",
        height: "16%",
        backgroundColor: amareloSol,
        borderRadius: "2px",

        "&::after": {
            content: "''",
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 0,
            height: 0,
            borderLeft: "5px solid transparent",
            borderRight: "5px solid transparent",
            borderBottom: (props) => `7px solid ${props.bgColor}`,
        },
    },
    
    bookTitle: {
        width: "100px",
        marginTop: "7%",
        textAlign: "center",
        fontSize: "12px",
    },
    
    popupOverlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
    },

    popupContent: {
        width: "70%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        background: "white",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        textAlign: "center",
    },

    popupCard: {
        marginTop: "2%",
        width: "90%",
        height: "90%",
        display: "flex",
    },

    popupInfos: {
        margin: "0 2%",
        textAlign: "start",
        width: "90%",
        height: "44%",
        "& p": {
            fontSize: "14px",
            padding: "0 15px",
            textAlign: "justify",
        }
    },

    nomeAutor: {
        fontSize: "small",
    },

    capaPopup: {
        marginRight: "20px",
        borderRadius: "20px",
        width: "200px",
        height: "240px",
    },

    popupFooter: {
        margin: "0 0 1%",
    },

    button: {
        margin: "2% 20px 2%",
        padding: "8px 15px",
        border: "none",
        backgroundColor: rosaPessego,
        color: "#fff",
        borderRadius: "5px",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: rosaBlush,
        },
    },
});

const BookCard = ({ nomeLivro, capa, sinopse, nomeAutor, anoPublicacao, categorias }) => {
    const [bgColor, setBgColor] = useState(rosaClarinho);
    const [showPopup, setShowPopup] = useState(false);
    const [favorito, setFavorito] = useState(false);
    const [emprestado, setEmprestado] = useState(false);
    const [disponivel, setDisponivel] = useState(true);
    const classes = useStyles();

    useEffect(() => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = capa;

        img.onload = () => {
            try {
                const colorThief = new ColorThief();
                const color = colorThief.getColor(img);
                setBgColor(`rgb(${color[0]}, ${color[1]}, ${color[2]})`);
            } catch (error) {
                console.error("Erro ao extrair cor:", error);
            }
        };

        img.onerror = () => {
            console.error("Erro ao carregar a imagem");
        };
    }, [capa]);

    return (
        <div className={classes.bookContent}>
            <div 
                className={classes.book} 
                style={{ backgroundColor: bgColor }} 
                onClick={() => setShowPopup(true)}
            >
                <img src={capa} alt={nomeLivro} className={classes.cover} />
                <div className={classes.bottomBar}></div>
                <div className={classes.bookmark}></div>
            </div>
            <p className={classes.bookTitle}>{nomeLivro}</p>
            
            {showPopup && (
                <div className={classes.popupOverlay} onClick={() => setShowPopup(false)}>
                    <div className={classes.popupContent} onClick={(e) => e.stopPropagation()}>
                        <div className={classes.popupCard}>
                            <div style={{ display: "flex", alignItems:"center", flexDirection: "column" }}>
                                <img src={capa} alt={nomeLivro} width="100" className={classes.capaPopup}/>
                            </div>
                            <div className={classes.popupInfos}>
                                <h3>{nomeLivro}:</h3>
                                <p>{sinopse}</p>
                                <div style={{ display: "flex" }}>
                                    <p className={classes.nomeAutor}><strong>Autor: </strong> {nomeAutor}</p>
                                    <p className={classes.nomeAutor}><strong>Ano de publicação: </strong> {anoPublicacao}</p>
                                    <p className={classes.nomeAutor}><strong>Categoria: </strong> {categorias}</p>
                                </div>
                            </div>
                        </div>

                        <div className={classes.popupFooter}>
                            <button  // Guardar os favoritados no banco
                                className={classes.button} 
                                onClick={() => setFavorito(!favorito)}
                                style={{ backgroundColor: favorito ? amareloSol : rosaPessego, color: "#fff" }}>
                                {favorito ? "★ Favoritado" : "✩ Favoritar"}
                            </button>
                            
                            <button  // Guardar os emprestados no banco
                                className={classes.button} 
                                onClick={() => {
                                    if (disponivel) { // Verificar se está disponível no banco, se sim, criar pop-up para a pessoa colocar o endereço e dps um de empréstimo realizado com sucesso
                                        setEmprestado(true);
                                        setDisponivel(false);
                                    }
                                    else if (emprestado) { // Arrumar lógica, para verificar se o usuário foi o que pegou emprestado e se sim se ele deseja mesmo devolver o livro
                                        setEmprestado(false);
                                        setDisponivel(true);
                                    }

                                    // Usem os pop-up das páginas Favoritos, Login, Cadastro e Perfil de exemplo para criar os citados em cima

                                }} style={{ backgroundColor: emprestado ? verdeConfirmado : rosaPessego, color: "#fff" }}>
                                {emprestado ? "✓ Emprestado" : "✛ Pegar emprestado"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookCard;
