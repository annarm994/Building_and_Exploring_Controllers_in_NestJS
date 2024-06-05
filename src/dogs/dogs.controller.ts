import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

@Controller('dogs')
export class DogsController {
    @Get()
    findAll(): string {
        return 'This will return a list of all dogs';
    }

    @Post()
    create(@Body() createDogDto: any): string {
        return `This will create a new dog with the name ${createDogDto.name}`;
    }

    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `This will return dog with ID ${id}`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateDogDto: any): string {
        return `This will update dog with ID ${id} with new data`;
    }

    @Delete(':id')
    remove(@Param('id') id: string): string {
        return `This will remove dog with ID ${id}`;
    }
}
