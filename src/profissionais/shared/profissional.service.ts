import { Injectable } from '@nestjs/common';
import { Profissional } from './profissional';

@Injectable()
export class ProfissionalService {

    profissionais: Profissional[] = [
        { id: 1, nome: 'Messi', dataNascimento: '01/01/1982' },
        { id: 2, nome: 'Alba', dataNascimento: '01/01/1980' },
        { id: 3, nome: 'Trapp', dataNascimento: '01/01/1990' },
        { id: 4, nome: 'Praxedes', dataNascimento: '01/01/1996' },     
    ];

    getAll() {
        return this.profissionais;
    }

    getById(id: number) {
        const profissional = this.profissionais.find((value) => value.id == id);
        return profissional;
    }

    create(profissional: Profissional) {
        let lastId = 0;
        if (this.profissionais.length > 0) {
            lastId = this.profissionais[this.profissionais.length -1].id;
        }

        profissional.id = lastId + 1;
        this.profissionais.push(profissional);

        return profissional;
    }

    update(profissional: Profissional) {
        const profissionalArray = this.getById(profissional.id);
        if (profissionalArray) {
            profissionalArray.nome = profissional.nome;
            profissionalArray.dataNascimento = profissional.dataNascimento;
        }

        return profissionalArray;
    }

    delete(id: number) {
        const index = this.profissionais.findIndex((value) => value.id == id);
        this.profissionais.splice(index);
    }
}
