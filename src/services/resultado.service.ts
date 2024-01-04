import { Bimestre, Disciplina, Resultado } from "@prisma/client";
import { database } from "../database";
import { IResultadoProps } from "../interfaces/iResultadoProps";
import { IResultadoService } from "../interfaces/iResultadoService";

let result;
export class ResultadoService implements IResultadoService {
  async listarResultado(id: string): Promise<any> {
    result = await database.resultado.findUnique({ where: { id } });
    return result;
  }
  async listarResultados(): Promise<any> {
    result = await database.resultado.findMany();
    return result;
  }
  async registrarResultado({
    nota,
    bimestre,
    disciplina,
    criadoEm,
  }: IResultadoProps): Promise<Resultado | any> {
    result = await database.resultado.create({
      data: {
        nota,
        bimestre: bimestre as unknown as Bimestre,
        disciplina: disciplina as unknown as Disciplina,
        criadoEm: (criadoEm = new Date() as unknown as Date),
      },
    });

    return result;
  }
  async removerResultado(id: string): Promise<any> {
    result = await database.resultado.delete({ where: { id } });
    return result;
  }
}
