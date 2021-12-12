import { Schema } from 'mongoose';

const PedidoSchema = new Schema(
  {
    nome : {type:String},
    status : {type:Boolean},
    tempoEstimado: {type:String},
    numeroPedido: {type: String},
    totalPedido: { type: String },
    cpf: { type: String, ref: 'Cliente', index: true },
    produtos: { type: [Object] },
    tempo : {type : String} 
  },
  {
    timestamps: {
      createdAt: 'created_at_mongo',
      updatedAt: 'updated_at_mongo',
    },
  },
  // eslint-disable-next-line @typescript-eslint/camelcase
).index({ updated_at_mongo: 1 }, { expires: '25h' });
// mongoose.model('Cliente', ClienteSchema);
export { PedidoSchema };
