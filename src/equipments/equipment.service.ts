import {Equipment} from './entities/Equipment'
import {IEquipment, IEquipmentService} from './interface/equipment.interface'


export class EquipmentService implements IEquipmentService {

    async create(equipment: IEquipment): Promise<IEquipment> {
        return await Equipment.create(equipment);
    }

    async findAll(): Promise<IEquipment[]> {
        return await Equipment.find();
    }

    async findOne(id: string): Promise<IEquipment> {
        const equipment = await Equipment.findOne({ _id: id });
        if (!equipment) {
            throw new Error('Equipo no encontrado');
        }
        return equipment;
    }

    async update(id: string, equipment: IEquipment): Promise<void> {
        await Equipment.findByIdAndUpdate(id, equipment);
    }

    async remove(id: string): Promise<void> {
        await Equipment.findByIdAndDelete(id);
    }
}
