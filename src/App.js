import "./styles.css";
import { Fragment, useState } from "react";
//declaração de constantes
const [alunos, setAlunos] = useState(["Ana", "Carlos", "João"]);
//hooks
//o useState declara uma variável e mantém seu conteúdo
//quando seu conteúdo for alterado em qualquer função do componente
//a página é atualizada.
const [atendido, setAtendido] = useState("");
const [nome, setNome] = useState("");

//declaraçao de função novoAluno
const novoAluno = (e) => {
  e.preventDefault();
  //setAlunos é um método que insere um nome
  //na última posição do vetor de Alunos
  setAlunos([...alunos, nome]);
  //apaga o nome do Aluno digitado
  setNome("");
};
//declaração da função novoUrgente
const novoUrgente = () => {
  setAlunos([nome, ...alunos]);
  //apaga o nome do Aluno digitado
  setNome("");
};

//declaração da função novoAtender
const novoAtender = () => {
  if (!alunos.length) {
    //se não tiver nenhum nome, retorna
    alert("Não há alunos na fila de espera...");
    return;
  }
  setAtendido(alunos[0]);
  //função slice 1 elimina o primeiro elemento do array
  setAlunos(alunos.slice(1));
  //apaga o nome do Aluno digitado
  setNome("");
};

const App = () => {
  return (
    <Fragment>
      <h1> Escola de Tecnologia </h1>
      <form onSubmit={novoAluno}>
        <p>
          Aluno:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input type="submit" value="Adicionar" />
          <input
            type="button"
            id="btnUrgencia"
            value="Urgência"
            onClick={novoUrgente}
          />
          <input
            type="button"
            id="btnAtender"
            value="Atender"
            onClick={novoAtender}
          />
        </p>
      </form>
      <h3>
        Em atendimento:
        <span className="fonte-azul">{atendido} </span>
      </h3>
      <pre>{alunos.map((aluno) => aluno + "\n")}</pre>
    </Fragment>
  );
};
export default App;
