import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Pedido } from '../interfaces/pedido.interfaces';

@Injectable()
export class PedidoRepository {
  constructor(
    @InjectModel('Pedido') private readonly pedidoModel: Model<Pedido>,
  ) { }

  async findAll(): Promise<Pedido[]> {
    return this.pedidoModel.find().exec();
  }

  async create(createDB: any): Promise<Pedido> {
    const createdPedido = new this.pedidoModel(createDB);
    return createdPedido.save();
  }

  // async findAtMongo(codigoDoProduto: string): Promise<Produto> {
  //   return await this.produtoModel.findOne({ codigoDoProduto }).exec();
  // }

  async delete(_id: string): Promise<Pedido> {
    return await this.pedidoModel.findOneAndDelete( {_id});
  }

  async update(id: string, pedido: any): Promise<Pedido> {
    return await this.pedidoModel.findByIdAndUpdate( id, pedido, {
      new: true,
    });
  }
}
