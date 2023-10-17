import { Animal } from './Models/Animal';

export class Farm{
    private animals: Animal[] = [];

    public addAnimal(animal: Animal): void {
        this.animals.push(animal);
    }

    public findAnimalByName(name: string): Animal{
        return this.animals.filter(animal => animal.name === name)[0];
    }
}