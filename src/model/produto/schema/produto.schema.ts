import { Schema } from 'mongoose';

const ProdutoSchema = new Schema(
  {
    
    nome: { type: String },
    descricao: { type: String },
    preco: { type: String },
    tempoPreparo: { type: String },
    categoria: { type: String },
  },
  {
    timestamps: {
      createdAt: 'created_at_mongo',
      updatedAt: 'updated_at_mongo',
    },
  },
).index({ updated_at_mongo: 1 }, { expires: '25h' });

export { ProdutoSchema };
