import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Header2 from "../components/Header2";
import BookList from '../components/Book';
import filtro from '../assets/filtro.png';

/* Cores: */
const rosaClarinho = "#FAD9D1";
const rosaPessego = "#FF9B8B";
const rosaBlush = "#EF7E6D";
const rosaVermelhinho = "#892E2E";

const useStyles = makeStyles(() => ({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        margin: "8% 0",
        position: "relative",
    },

    filtro: {
        position: "absolute",
        top: "-1%",
        left: "4%",
        width: "40px",
        zIndex: 10,
        "& img": {
            width: "30px",
        },
    },

    filtroButton: {
        cursor: "pointer",
        border: "none",
        backgroundColor: "transparent",
        width: "fit-content",
    },

    bookList: {
        width: "75%",
    },

    popupOverlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
    },

    popupContent: {
        background: "#fff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        minWidth: "300px",
        textAlign: "center",
    },

    closeButton: {
        marginTop: "10px",
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
}));

const Favoritados = () => {
    const classes = useStyles();
    const [popupOpen, setPopupOpen] = useState(false);

    return (
        <div className={classes.container}>
            <Header2 />

            <div className={classes.filtro}>
                <button className={classes.filtroButton} onClick={() => setPopupOpen(true)}>
                    <img src={filtro} alt="filtro" />
                </button>
            </div>

            {popupOpen && (
                <div className={classes.popupOverlay}>
                    <div className={classes.popupContent}>
                        <h2>Filtros</h2>
                        <p>Adicione seus filtros aqui...</p>
                        <button className={classes.closeButton} onClick={() => setPopupOpen(false)}>
                            Fechar
                        </button>
                    </div>
                </div>
            )}

            <div className={classes.bookList}>
                <BookList />
            </div>
        </div>
    );
};

export default Favoritados;
