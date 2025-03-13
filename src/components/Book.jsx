import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import ColorThief from "colorthief";
import { Button } from "@mui/material";

/* Cores: */
const rosaClarinho = "#FAD9D1";
const rosaPessego = "#FF9B8B";
const rosaBlush = "#EF7E6D";
const rosaVermelhinho = "#892E2E";


const useStyles = makeStyles({
    bookContent: {
        display: "flex",
        flexDirection: "column",
    },
    
    book: {
        zIndex: -1,
        position: "relative",
        display: "flex",
        justifyContent: "flex-end",
        width: "120px",
        height: "150px",
        borderRadius: "20px 12px 12px 20px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        alignItems: "flex-end",
        overflow: "hidden",
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
        backgroundColor: "#FACC15",
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
        marginTop: "7%",
        textAlign: "center",
        fontSize: "12px",
    },
    
    bookContainer: {
        display: "flex",
        gap: 20,
        margin: "0 15px",
        width: "100%",
    },
    
    carousel: {
        width: "fit-content",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    
    button: {
        "&:hover": {
            backgroundColor: "transparent",
        },
    },
    
    container: {
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
    },

    showBooks: {
        display: "flex",
        justifyContent: "center",
        gap: 40,
        flexWrap: "wrap",
        width: "100%",
    },
});

const livros = [
    { nomeLivro: "Ladrão de Raios", capa: "https://apagina.vtexassets.com/arquivos/ids/173565-800-auto?v=638325377484270000&width=800&height=auto&aspect=true" },
    { nomeLivro: "Mar de Monstros", capa: "https://images.tcdn.com.br/img/img_prod/824711/percy_jackson_v_02_o_mar_de_monstros_4491_1_2d9eb6fcdff10f16d17894b7051088b4.jpg" },
    { nomeLivro: "Maldição do Titã", capa: "https://apagina.vtexassets.com/arquivos/ids/173547-800-auto?v=638325377128200000&width=800&height=auto&aspect=true" },
    { nomeLivro: "Batalha do Labirinto", capa: "https://images.tcdn.com.br/img/img_prod/824711/percy_jackson_nc_v_04_a_batalha_do_labirinto_4495_1_7575f25c0ad567cd460bbc74cf486c74.jpg" },
    { nomeLivro: "Último Olimpiano", capa: "https://images.tcdn.com.br/img/img_prod/824711/percy_jackson_nc_v_05_o_ultimo_olimpiano_4497_1_1ca3dedace705f97311451c53959c610.jpg" },
    { nomeLivro: "Ladrão de Raios", capa: "https://apagina.vtexassets.com/arquivos/ids/173565-800-auto?v=638325377484270000&width=800&height=auto&aspect=true" },
    { nomeLivro: "Mar de Monstros", capa: "https://images.tcdn.com.br/img/img_prod/824711/percy_jackson_v_02_o_mar_de_monstros_4491_1_2d9eb6fcdff10f16d17894b7051088b4.jpg" },
    { nomeLivro: "Maldição do Titã", capa: "https://apagina.vtexassets.com/arquivos/ids/173547-800-auto?v=638325377128200000&width=800&height=auto&aspect=true" },
    { nomeLivro: "Batalha do Labirinto", capa: "https://images.tcdn.com.br/img/img_prod/824711/percy_jackson_nc_v_04_a_batalha_do_labirinto_4495_1_7575f25c0ad567cd460bbc74cf486c74.jpg" },
    { nomeLivro: "Último Olimpiano", capa: "https://images.tcdn.com.br/img/img_prod/824711/percy_jackson_nc_v_05_o_ultimo_olimpiano_4497_1_1ca3dedace705f97311451c53959c610.jpg" },
    { nomeLivro: "Ladrão de Raios", capa: "https://apagina.vtexassets.com/arquivos/ids/173565-800-auto?v=638325377484270000&width=800&height=auto&aspect=true" },
    { nomeLivro: "Mar de Monstros", capa: "https://images.tcdn.com.br/img/img_prod/824711/percy_jackson_v_02_o_mar_de_monstros_4491_1_2d9eb6fcdff10f16d17894b7051088b4.jpg" },
    { nomeLivro: "Maldição do Titã", capa: "https://apagina.vtexassets.com/arquivos/ids/173547-800-auto?v=638325377128200000&width=800&height=auto&aspect=true" },
    { nomeLivro: "Batalha do Labirinto", capa: "https://images.tcdn.com.br/img/img_prod/824711/percy_jackson_nc_v_04_a_batalha_do_labirinto_4495_1_7575f25c0ad567cd460bbc74cf486c74.jpg" },
    { nomeLivro: "Último Olimpiano", capa: "https://images.tcdn.com.br/img/img_prod/824711/percy_jackson_nc_v_05_o_ultimo_olimpiano_4497_1_1ca3dedace705f97311451c53959c610.jpg" },
    { nomeLivro: "Ladrão de Raios", capa: "https://apagina.vtexassets.com/arquivos/ids/173565-800-auto?v=638325377484270000&width=800&height=auto&aspect=true" },
    { nomeLivro: "Mar de Monstros", capa: "https://images.tcdn.com.br/img/img_prod/824711/percy_jackson_v_02_o_mar_de_monstros_4491_1_2d9eb6fcdff10f16d17894b7051088b4.jpg" },
    { nomeLivro: "Maldição do Titã", capa: "https://apagina.vtexassets.com/arquivos/ids/173547-800-auto?v=638325377128200000&width=800&height=auto&aspect=true" },
    { nomeLivro: "Batalha do Labirinto", capa: "https://images.tcdn.com.br/img/img_prod/824711/percy_jackson_nc_v_04_a_batalha_do_labirinto_4495_1_7575f25c0ad567cd460bbc74cf486c74.jpg" },
    { nomeLivro: "Último Olimpiano", capa: "https://images.tcdn.com.br/img/img_prod/824711/percy_jackson_nc_v_05_o_ultimo_olimpiano_4497_1_1ca3dedace705f97311451c53959c610.jpg" },
];

const LivroCard = ({ nomeLivro, capa }) => {
    const [bgColor, setBgColor] = useState(rosaClarinho);
    const classes = useStyles({ bgColor });

    useEffect(() => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = capa;

        img.onload = () => {
            const colorThief = new ColorThief();
            try {
                const color = colorThief.getColor(img);
                setBgColor(`rgb(${color[0]}, ${color[1]}, ${color[2]})`);
            } catch (error) {
                console.error("Erro ao extrair cor:", error);
            }
        };
    }, [capa]);

    return (
        <div className={classes.bookContent}>
            <div className={classes.book} style={{ backgroundColor: bgColor }}>
                <img src={capa} alt={nomeLivro} className={classes.cover} />
                <div className={classes.bottomBar}></div>
                <div className={classes.bookmark}></div>
            </div>
            <p className={classes.bookTitle}>{nomeLivro}</p>
        </div>
    );
};

const Carrousel = ({ divisaoTitulo }) => {
    const classes = useStyles();
    const [indice, setIndice] = useState(0);

    const avancar = () => {
        if (indice + 4 < livros.length) {
            setIndice(indice + 1);
        }
    };

    const voltar = () => {
        if (indice > 0) {
            setIndice(indice - 1);
        }
    };

    return (
        <div className={classes.bookList}>
            <h2 className={classes.title}>{divisaoTitulo}</h2>
            <div className={classes.carousel}>
                <Button onClick={voltar} disabled={indice === 0} className={classes.button} style={{ color: rosaVermelhinho }}>❮</Button>

                <div className={classes.bookContainer}>
                    {livros.slice(indice, indice + 3).map((livro, index) => (
                        <LivroCard key={index} nomeLivro={livro.nomeLivro} capa={livro.capa} />
                    ))}
                </div>

                <Button onClick={avancar} disabled={indice + 3 >= livros.length} className={classes.button} style={{ color: rosaVermelhinho }}>❯</Button>
            </div>
        </div>
    );
};

const ShowBooks = () => {
    const classes = useStyles();

    return (
        <div className={classes.showBooks}>
            {livros.map((livro, index) => (
                <LivroCard key={index} nomeLivro={livro.nomeLivro} capa={livro.capa} />
            ))}
        </div>
    );
};

const CarrouselBooks = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Carrousel divisaoTitulo="Populares no momento:" />
            <Carrousel divisaoTitulo="Últimos Empréstimos:" />
        </div>
    );
};

const BookList = () => {
    const classes = useStyles();

    return (
        <ShowBooks/>
    );
};

export { CarrouselBooks };
export { LivroCard };
export default BookList;