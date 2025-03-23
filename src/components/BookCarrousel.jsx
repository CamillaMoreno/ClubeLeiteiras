import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import BookCard from "./Book";

const rosaVermelhinho = "#892E2E";

const useStyles = makeStyles({
    container: {
        margin: "2% 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },

    bookContainer: {
        display: "flex",
        gap: 25,
        margin: "0 15px",
        width: "100%",
    },

    bookList: {
        margin: "1% 0",
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
});

// Trocar pelos dados do banco
const livros = [
    {
        nomeLivro: "Dom Casmurro", 
        capa: "https://images.unsplash.com/photo-1605296852892-73aab1baf317?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400", 
        sinopse: "Bentinho narra a história de sua paixão por Capitu e sua dúvida sobre a fidelidade de sua esposa, explorando temas como ciúmes, traição e as complexidades do amor.", 
        nomeAutor: "Machado de Assis", 
        anoPublicacao: "1899", 
        categorias: "Romance, Literatura Brasileira"
    },
    {
        nomeLivro: "Memórias Póstumas de Brás Cubas", 
        capa: "https://images.unsplash.com/photo-1531297468868-5d1b0a7d5f56?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400", 
        sinopse: "Narrada pelo próprio Brás Cubas, um morto, a obra ironiza a sociedade brasileira do século XIX e faz uma crítica às convenções sociais, à política e ao comportamento humano.", 
        nomeAutor: "Machado de Assis", 
        anoPublicacao: "1881", 
        categorias: "Romance, Crônica, Literatura Brasileira"
    },
    {
        nomeLivro: "Grande Sertão: Veredas", 
        capa: "https://images.unsplash.com/photo-1521206022750-f0a2e76399c6?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400", 
        sinopse: "A história de Riobaldo, um jagunço, e sua jornada de autodescoberta, amor e busca por um sentido em meio ao sertão nordestino e à violência dos conflitos.", 
        nomeAutor: "João Guimarães Rosa", 
        anoPublicacao: "1956", 
        categorias: "Romance, Literatura Brasileira"
    },
    {
        nomeLivro: "O Primo Basílio", 
        capa: "https://images.unsplash.com/photo-1532236311469-efb9b77e4fc5?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400", 
        sinopse: "A obra de José de Alencar aborda a infidelidade, os problemas da classe média urbana e as complexidades do comportamento humano em uma sociedade carioca do século XIX.", 
        nomeAutor: "José de Alencar", 
        anoPublicacao: "1878", 
        categorias: "Romance, Literatura Brasileira"
    },
    {
        nomeLivro: "O Cortiço", 
        capa: "https://images.unsplash.com/photo-1579547948035-55b8e45712b5?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400", 
        sinopse: "A obra de Aluísio Azevedo retrata a vida de moradores de um cortiço no Rio de Janeiro, abordando temas como desigualdade social, exploração e a luta pela sobrevivência.", 
        nomeAutor: "Aluísio Azevedo", 
        anoPublicacao: "1890", 
        categorias: "Romance, Naturalismo"
    },
    {
        nomeLivro: "Vidas Secas", 
        capa: "https://upload.wikimedia.org/wikipedia/pt/thumb/c/c4/Vidas_Secas_-_Capa.jpg/300px-Vidas_Secas_-_Capa.jpg", 
        sinopse: "A obra de Graciliano Ramos narra a história de uma família nordestina em busca de sobrevivência, explorando as dificuldades e o sofrimento da seca no sertão brasileiro.", 
        nomeAutor: "Graciliano Ramos", 
        anoPublicacao: "1938", 
        categorias: "Romance, Literatura Brasileira"
    },
    {
        nomeLivro: "A Moreninha", 
        capa: "https://upload.wikimedia.org/wikipedia/pt/thumb/9/98/A_Moreninha.jpg/300px-A_Moreninha.jpg", 
        sinopse: "Narrada pelo jovem Augusto, a obra relata o romance entre ele e Carolina, a moreninha, desafiando convenções sociais e abordando a questão do amor e da lealdade.", 
        nomeAutor: "Joaquim Manuel de Macedo", 
        anoPublicacao: "1844", 
        categorias: "Romance, Literatura Brasileira"
    },
    {
        nomeLivro: "Senhora", 
        capa: "https://upload.wikimedia.org/wikipedia/pt/thumb/3/3c/Senhora_-_Capa.jpg/300px-Senhora_-_Capa.jpg", 
        sinopse: "A história de Aurélia Camargo, uma mulher que, após enriquecer, resolve vingar-se de seu ex-noivo, explorando questões de amor, vingança e poder.", 
        nomeAutor: "José de Alencar", 
        anoPublicacao: "1875", 
        categorias: "Romance, Literatura Brasileira"
    },
    {
        nomeLivro: "O Guarani", 
        capa: "https://upload.wikimedia.org/wikipedia/pt/thumb/d/db/O_Guarani.jpg/300px-O_Guarani.jpg", 
        sinopse: "A obra de José de Alencar é um romance histórico que narra a história de amor entre o índio Peri e a donzela Ceci, com o pano de fundo das disputas entre colonizadores e indígenas.", 
        nomeAutor: "José de Alencar", 
        anoPublicacao: "1857", 
        categorias: "Romance, Literatura Brasileira, Romance Histórico"
    },
    {
        nomeLivro: "Iracema", 
        capa: "https://upload.wikimedia.org/wikipedia/pt/thumb/f/f5/Iracema_-_Capa.jpg/300px-Iracema_-_Capa.jpg", 
        sinopse: "A obra de José de Alencar narra a história de amor entre o português Martim e a índia Iracema, com a representação da fundação da nação brasileira e o encontro das culturas indígena e europeia.", 
        nomeAutor: "José de Alencar", 
        anoPublicacao: "1865", 
        categorias: "Romance, Literatura Brasileira, Romance Histórico"
    }
];

const Carrousel = ({ divisaoTitulo }) => {
    const classes = useStyles();
    const [indice, setIndice] = useState(0);

    const avancar = () => {
        if (indice + 5 < livros.length) {
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
            <h2>{divisaoTitulo}</h2>
            <div className={classes.carousel}>
                <Button onClick={voltar} disabled={indice === 0} className={classes.button} style={{ color: rosaVermelhinho }}>❮</Button>

                <div className={classes.bookContainer}>
                    {livros.slice(indice, indice + 5).map((livro, index) => (
                        <BookCard 
                            key={index} 
                            nomeLivro={livro.nomeLivro} 
                            capa={livro.capa} 
                            sinopse={livro.sinopse} 
                            nomeAutor={livro.nomeAutor} 
                            anoPublicacao={livro.anoPublicacao} 
                            categorias={livro.categorias} 
                        />
                    ))}
                </div>

                <Button onClick={avancar} disabled={indice + 5 >= livros.length} className={classes.button} style={{ color: rosaVermelhinho }}>❯</Button>
            </div>
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

export default CarrouselBooks;
