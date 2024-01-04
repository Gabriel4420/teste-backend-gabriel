enum Disciplina {
  Biologia,
  Artes,
  Geografia,
  Sociologia,
}

enum Bimestre {
  PRIMEIRO,
  SEGUNDO,
  TERCEIRO,
  QUARTO,
}

export interface IResultadoProps {
  id?: string;
  bimestre: Bimestre;
  disciplina: Disciplina;
  nota: number;
  criadoEm?: Date;
  atualizadoEm?: Date;
}
