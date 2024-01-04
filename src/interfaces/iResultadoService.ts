import { IResultadoProps } from "./iResultadoProps";

export interface IResultadoService {
  listarResultado(id: string): Promise<any>;
  listarResultados(): Promise<any>;
  registrarResultado(data: any): Promise<IResultadoProps>;
  removerResultado(id: string): Promise<any>;
}
