import Colaborador from './Colaborador';
import QuadroColaboradores from './QuadroColaboradores';
import { Cargos } from './enum/cargos';
import Pagamento from './Pagamento';
import GeraRelatorio from './GeraRelatorio';
import CalculaSalario from './CalculaSalario';

const quadroColaboradores = new QuadroColaboradores();
const calculaSalario = new CalculaSalario();
const pagamento = new Pagamento(calculaSalario);
const gerarRelatorio = new GeraRelatorio(
  calculaSalario,
  quadroColaboradores.colaboradores
);

const colaborador1 = new Colaborador('José', Cargos.Estagiario);
const colaborador2 = new Colaborador('Maria', Cargos.Junior);
const colaborador3 = new Colaborador('João', Cargos.Pleno);

quadroColaboradores.contratarColaborador(colaborador1);
quadroColaboradores.contratarColaborador(colaborador2);
quadroColaboradores.contratarColaborador(colaborador3);

console.log(gerarRelatorio.gerarJSON());

console.log(colaborador1);
pagamento.pagar(colaborador1);
console.log(colaborador1);
