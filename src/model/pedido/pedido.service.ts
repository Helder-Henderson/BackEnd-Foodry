import { Injectable } from '@nestjs/common';
import { PedidoRepository } from './repositories/pedido.mongo';

@Injectable()
export class PedidoService {
  constructor(private readonly pedidoRepo: PedidoRepository) { }

  async search() {
    return await this.pedidoRepo.findAll();
  }

  async create(createDB: any) {
    return await this.pedidoRepo.create(createDB);
  }

  async delete(id: string) {
    return await this.pedidoRepo.delete(id);
  }

  async update(id: string, pedido: any) {
    return await this.pedidoRepo.update(id, pedido);
  }

  //   async pegandoIdMongo(id: string) {
  //     const pegandoId = await this.clienteRepo.findAll();
  //     return pegandoId.filter(r => r._id == id);
  //   }
}
