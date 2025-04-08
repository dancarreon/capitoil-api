import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { EstadosService } from './estados.service';
import { CreateEstadoDto, UpdateEstadoDto } from './dto/estado.dto';
import { QueryParams } from '../common/query-params.dto';

@Controller('estados')
export class EstadosController {
  constructor(private readonly estadosService: EstadosService) {}

  @Post()
  create(@Body() createEstadoDto: CreateEstadoDto) {
    return this.estadosService.create(createEstadoDto);
  }

  @Get()
  findAll(@Query() query: QueryParams) {
    return this.estadosService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estadosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstadoDto: UpdateEstadoDto) {
    return this.estadosService.update(id, updateEstadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estadosService.remove(id);
  }
}
