import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Header2 from "../components/Header2";
import filtro from '../assets/filtro.png';

/* Cores */
const rosaClarinho = "#FAD9D1";
const rosaPessego = "#FF9B8B";
const rosaBlush = "#EF7E6D";
const rosaVermelhinho = "#892E2E";

const useStyles = makeStyles(() => ({
    container: {
        width: "100%",
        height: "65vh",
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
        zIndex: 1,
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
        zIndex: 2,
    },

    popupContent: {
        width: "30%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        background: "white",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        minWidth: "300px",
        textAlign: "center",
    },

    opcoes: {
        marginTop: "-3%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        width: "85%",
        gap: 15,
    },

    button: {
        margin: "6% 20px 2%",
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

    filterButton: {
        backgroundColor: "transparent",
        padding: "8px 15px",
        border: `2px solid ${rosaBlush}`,
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s, color 0.3s",
    },

    selectedFilter: {
        border: "2px solid black",
        backgroundColor: rosaClarinho,
    },
}));

const Favoritados = () => {
    const classes = useStyles();
    const [popupOpen, setPopupOpen] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState([]);

    const filters = [ // Arrumar para trazer as opções das categorias salvas no banco na tabela favoritos
        "Aventura",
        "Biografia",
        "Drama",
        "Fantasia",
        "Ficção Científica",
        "Romance",
        "Suspense"
    ];

    const toggleFilter = (filter) => {
        setSelectedFilters((prev) =>
            prev.includes(filter)
                ? prev.filter((f) => f !== filter)
                : [...prev, filter]
        );
    };

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

                        <div className={classes.opcoes}>
                            {filters.map((filter) => (
                                <button
                                    key={filter}
                                    className={`${classes.filterButton} ${
                                        selectedFilters.includes(filter) ? classes.selectedFilter : ""
                                    }`}
                                    onClick={() => toggleFilter(filter)}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>

                        <div>
                            <button className={classes.button}>Aplicar</button>
                            <button className={classes.button} onClick={() => setPopupOpen(false)}>Fechar</button>
                        </div>
                    </div>
                </div>
            )}

            <div className={classes.bookList}>
                {/* Livros favoritados - Trazer do banco*/}
            </div>
        </div>
    );
};

export default Favoritados;
