import {
  Body,
  Controller,
  Param,
  Delete,
  Get,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('')
  findAll() {
    return 'This action return all coffees';
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action return #${id} coffee`;
  }
  @Post()
  create(@Body() body) {
    return body;
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates #${id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes #${id} coffee`;
  }
}
