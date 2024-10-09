import { Request, Response } from "express";
import { EquipmentService } from "./equipment.service";

export class EquipmentController {
  
    constructor(private equipmentService: EquipmentService) {}

    create = async (req: Request, res: Response) => {
        try {
            const equipment = await this.equipmentService.create(req.body);
            res.status(201).json({ message: 'Equipo Creado', equipment });
            
        } catch (error) {
            console.log('Error', error);
            res.status(400).json({ message: 'Error al crear el equipo' });
        }
    };

    findAll = async (req: Request, res: Response) => {
        try {
            const equipments = await this.equipmentService.findAll();
            if(!equipments) {
                res.status(404).json({ message: 'No hay equipos' });
            }
            res.status(200).json(equipments);
        } catch (error) {
            console.log('Error', error);
            res.status(500).json({ message: 'Error al buscar los equipos' });
        }
    };

    findOne = async (req: Request, res: Response) => {
        try {
            const equipment = await this.equipmentService.findOne(req.params.id);
            if(!equipment) {
                res.status(404).json({ message: 'Equipo no encontrado' });
            }
            res.status(200).json(equipment);
        } catch (error) {
            console.log('Error', error);
            res.status(500).json({ message: 'Error al buscar el equipo' });
        }
    };

    update = async (req: Request, res: Response) => {
        try {
            await this.equipmentService.update(req.params.id, req.body);
            res.status(200).json({ message: 'Equipo Actualizado' });
        } catch (error) {
            console.log('Error', error);
            res.status(500).json({ message: 'Error al actualizar el equipo' });
        }
    };

    remove = async (req: Request, res: Response) => {
        try {
            await this.equipmentService.remove(req.params.id);
            res.status(200).json({ message: 'Equipo Eliminado' });
        } catch (error) {
            console.log('Error', error);
            res.status(500).json({ message: 'Error al eliminar el equipo' });
        }
    };
}