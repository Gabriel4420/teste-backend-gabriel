import { Bimestre, Disciplina, Resultado } from "@prisma/client";
import { database } from "../database";
import { IResultadoProps } from "../interfaces/iResultadoProps";
import { IResultadoService } from "../interfaces/iResultadoService";

let result;
export class ResultadoService implements IResultadoService {
  async listarResultado(id: string): Promise<Resultado | any> {
    try {
      result = await database.resultado.findUnique({ where: { id } });
      return result;
    } catch (error) {
      console.log("Erro ao buscar resultado: ", error);
    }
  }
  async listarResultados(): Promise<Resultado | any> {
    try {
      result = await database.resultado.findMany();
      return result;
    } catch (error) {
      console.log("Erro ao buscar resultados: ", error);
    }
  }
  async registrarResultado({
    nota,
    bimestre,
    disciplina,
    criadoEm,
  }: IResultadoProps): Promise<Resultado | any> {
    try {
      if (nota < 0 || nota > 10) {
        throw new Error("Nota deve ser entre 0 e 10");
      }

      result = await database.resultado.create({
        data: {
          nota,
          bimestre: bimestre as unknown as Bimestre,
          disciplina: disciplina as unknown as Disciplina,
          criadoEm: (criadoEm = new Date() as unknown as Date),
        },
      });

      return result;
    } catch (error) {
      console.log("Erro ao registrar resultado: ", error);
    }
  }
  async removerResultado(id: string): Promise<Resultado | any> {
    try {
      result = await database.resultado.delete({ where: { id } });
      return result;
    } catch (error) {
      console.log("Erro ao remover resultado: ", error);
    }
  }
}
