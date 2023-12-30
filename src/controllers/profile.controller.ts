import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from '../entities/profile.entity';

@Controller('users')
export class ProfileController {
  constructor(
    @InjectRepository(Profile)
    private readonly userRepository: Repository<Profile>,
  ) {}

  @Get()
  async getAllUsers(): Promise<Profile[]> {
    return await this.userRepository.find();
  }

  @Get(':id')
  async findUserById(@Param('id') id: any): Promise<Profile> {
    return await this.userRepository.findOneById(id);
  }

  @Post()
  async createUser(@Body() profile: Profile): Promise<Profile> {
    return await this.userRepository.save(profile);
  }

  @Put(':id')
  async updateUser(@Param('id') id: any, @Body() profile: Profile): Promise<Profile> {
    await this.userRepository.update(id, profile);
    return await this.userRepository.findOneById(id);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
