import { Document } from 'mongoose';

export interface Pedido extends Document {
  readonly nome : string;
  readonly status: boolean;
  readonly tempoEstimado: string;
  readonly numeroPedido: string;
  readonly totalPedido: string;
  readonly cpf: string;
  readonly produtos: [object];
  readonly tempo: string;
}
