import { useState } from "react";
import logoImg from "./assets/logo.png";
import "./App.css";

function App() {
    const [textoFrase, setTextoFrase] = useState("");
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

    const allFrases = [
        {
            id: 1,
            nome: "Motivação",
            frases: [
                "É importante agradecer pelo hoje sem nunca desistir do amanhã!",
                "Quem cultiva gratidão é capaz de realizar sonhos que parecem inalcançáveis!",
                "Só há felicidade se não exigirmos nada do amanhã e aceitarmos do hoje, com gratidão, o que nos trouxer. A hora mágica chega sempre.",
                "Quando seu coração está pleno de gratidão, qualquer porta aparentemente fechada pode ser uma abertura para uma bênção maior.",
                "Sucesso é um esporte coletivo. Demonstre gratidão a todos os que colaboram com suas vitórias.",
                "A melhor maneira de agradecer por um belo momento é desfrutá-lo plenamente.",
                "A gratidão é o único tesouro dos humildes.",
            ],
        },
        {
            id: 2,
            nome: "Bem estar",
            frases: [
                "Quando a alegria se torna tristeza e o bem-estar infortúnio, as almas pacientes extrairão prazer mesmo da dor.",
                "O bem-estar na vida obtém-se com o aperfeiçoamento da convivência entre os homens.",
                "Quando trata-se de nosso bem-estar, seja ele físico ou psíquico, devemos agir de forma egoísta sempre nos priorizando.",
                "Alcançar o bem-estar e o amor-próprio faz parte da nossa existência, mas deixar para lá algo importante para o outro que não é importante para você é ferir alguém muito importante.",
            ],
        },
    ];

    function handleSwitchCategory(index: number) {
        setCategoriaSelecionada(index);
    }

    function gerarFrase() {
        let numeroAleatorio = Math.floor(
            Math.random() * allFrases[categoriaSelecionada].frases.length
        );

        setTextoFrase(
            `"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`
        );
    }

    return (
        <div className="container">
            <img className="logo" src={logoImg} alt="Logo Dev Frases" />

            <h2 className="title">Categorias</h2>
            <section className="category-area">
                {allFrases.map((item, index) => (
                    <button
                        key={item.id}
                        style={{
                            borderWidth:
                                item.nome ===
                                allFrases[categoriaSelecionada].nome
                                    ? 2
                                    : 0,
                            borderColor: "#1fa4db",
                        }}
                        onClick={() => handleSwitchCategory(index)}
                        className="category-button"
                    >
                        {item.nome}
                    </button>
                ))}
            </section>

            <button className="button-frase" onClick={gerarFrase}>
                Gerar frase
            </button>

            {textoFrase !== "" && <h3 className="texto-frase">{textoFrase}</h3>}
        </div>
    );
}

export default App;
