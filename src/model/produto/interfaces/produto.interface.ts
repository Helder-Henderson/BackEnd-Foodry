import { Document } from 'mongoose';

export interface Produto extends Document {

  readonly nome: string;
  readonly descricao: string;
  readonly tempoPreparo: string;
  readonly categoria: string;
  readonly preco: string; 
  
}
