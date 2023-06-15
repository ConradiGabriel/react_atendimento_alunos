import "./styles.css";
import { Fragment, useState } from "react";

const App = () => {
  const [paciente, setPaciente] = useState(["Ana", "Carlos", "João", "Maria"]);
  const [atendido, setAtendido] = useState("");
  const [nome, setNome] = useState("");

  const novoPaciente = (e) => {
    e.preventDefault();
    setPaciente([...paciente, nome]);
    setNome("");
  };
  //método para adicionar aluno na primeira posiçãodo vetor
  const novoUrgente = () => {
    //chama o metodo setAlunos e passa primeiro o nome
    //e depois mantém o vetor com os nomes
    //o método setAlunos soma o nome do form com os alunos do vetor
    setPaciente([nome, ...paciente]);
    setNome("");
  };
  //função do atendimento de alunos
  const novoAtender = () => {
    //verificar se existe alunos no vetor
    //o alunos.length se tem alunos retorna
    //por isso precisa do ! ponto e interrogação para inverter para TRUE
    if (!paciente.length) {
      alert("Não há pacientes na fila de espera");
      return;
    }
    //atende o primeiro aluno[0]
    //o que está na posição 0
    setAtendido(paciente[0]);
    //o método slice fatia(corta) o vetor
    //no caso abaixo corta o primeiro ítem salvo no vetor
    setPaciente(paciente.slice(1));
    setNome("");
  };
  //função retorno é o que vai ser renderizado no navegador
  //chamamos de view
  return (
    <Fragment>
      <h1>Psiquiatria</h1>
      <form onSubmit={novoPaciente}>
        <p>
          Paciente:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input type="submit" value="Adicionar" />
          <input
            type="button"
            id="btnUrgencia"
            value="urgência"
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
        Em Atendimento: <span className="fonte-azul">{atendido}</span>
      </h3>
      <pre> {paciente}</pre>
      {/*método map vai pegar o vetor alunos e imprimi na tela e
       deixando uma linha entre eles atravpes do \n
        a variável aluno é utlizada para percorrer o vetor
      */}
      <pre>{paciente.map((paciente) => paciente + "\n")}</pre>
    </Fragment>
  );
};

export default App;
