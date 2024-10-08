{
  const MES_COMERCIAL = 20; //dias trabalhados no mês

  interface IContratoRemuneravel {
    titulo: string;
    remuneracao(): number;
  }

  class ContratoClt implements IContratoRemuneravel {
    private GANHO_POR_HORA_CLT = 24;
    private CARGA_HORARIA_DIARIA_CLT = 8;

    remuneracao(): number {
      return this.GANHO_POR_HORA_CLT * this.CARGA_HORARIA_DIARIA_CLT;
    }
    titulo: string = 'CLT';
  }

  class Estagio implements IContratoRemuneravel {
    private GANHO_POR_HORA_ESTAGIARIO = 14;
    private CARGA_HORARIA_DIARIA_ESTAGIARIO = 4;
    remuneracao(): number {
      return (
        this.GANHO_POR_HORA_ESTAGIARIO * this.CARGA_HORARIA_DIARIA_ESTAGIARIO
      );
    }
    titulo: string = 'Estagiario';
  }

  class PJ implements IContratoRemuneravel {
    private GANHO_POR_HORA_PJ = 36;
    private CARGA_HORARIA_DIARIA_PJ = 8;

    remuneracao(): number {
      return this.GANHO_POR_HORA_PJ * this.CARGA_HORARIA_DIARIA_PJ;
    }

    titulo: string = 'Pessoa Jurídica';
  }

  class FolhaDePagamento {
    static calcularSalarioMensal(funcionario: IContratoRemuneravel): number {
      return funcionario.remuneracao() * MES_COMERCIAL;
    }
  }

  const funcionarioClt = new ContratoClt();
  const funcionarioEstagiario = new Estagio();
  const funcionarioPJ = new PJ();

  console.log(
    `Sou ${
      funcionarioClt.titulo
    } e meu salário líquido mensal é R$ ${FolhaDePagamento.calcularSalarioMensal(
      funcionarioClt
    )}`
  );

  console.log(
    `Sou ${
      funcionarioEstagiario.titulo
    } e meu salário líquido mensal é R$ ${FolhaDePagamento.calcularSalarioMensal(
      funcionarioEstagiario
    )}`
  );

  console.log(
    `Sou ${
      funcionarioPJ.titulo
    } e meu salário líquido mensal é R$ ${FolhaDePagamento.calcularSalarioMensal(
      funcionarioPJ
    )}`
  );
}
