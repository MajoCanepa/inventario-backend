import { Document } from 'mongoose';

export interface IEquipment extends Document {
    name: string;
    location: string;
    status: string;
    acquisitionDate: Date;
}

export interface IEquipmentService {
    create(equipment: IEquipment): Promise<IEquipment>;
    findAll(): Promise<IEquipment[]>;
    findOne(id: string): Promise<IEquipment>;
    update(id: string, equipment: IEquipment): Promise<void>;
    remove(id: string): Promise<void>;
}