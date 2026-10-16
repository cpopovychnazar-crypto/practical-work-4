
import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CreatePetSupplyDto } from './dto/create-pet-supply.dto';

interface PetSupply {
  id: number;
  title: string;
  price: number;
  petCategory: string;
  packageWeightKg: number;
  brand: string;
}

@Controller('pet-supplies')
export class PetSuppliesController {
  private readonly petSupplies: PetSupply[] = [
    {
      id: 1,
      title: 'Сухий корм для собак',
      price: 850,
      petCategory: 'Собаки',
      packageWeightKg: 10,
      brand: 'Royal Canin',
    },
    {
      id: 2,
      title: 'Корм для котів',
      price: 620,
      petCategory: 'Коти',
      packageWeightKg: 5,
      brand: 'Purina',
    },
  ];

  @Get()
  findAll(): PetSupply[] {
    return this.petSupplies;
  }

  @Get(':id')
  findOne(@Param('id') id: string): PetSupply {
    const petSupply = this.petSupplies.find(
      (item) => item.id === Number(id),
    );

    if (!petSupply) {
      throw new NotFoundException('Товар не знайдено');
    }

    return petSupply;
  }

  @Post()
  create(@Body() createDto: CreatePetSupplyDto): PetSupply {
    const newPetSupply: PetSupply = {
      id:
        this.petSupplies.length > 0
          ? Math.max(...this.petSupplies.map((item) => item.id)) + 1
          : 1,
      ...createDto,
    };

    this.petSupplies.push(newPetSupply);

    return newPetSupply;
  }
}
