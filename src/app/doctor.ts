export class Doctor {
  id: number;
  name: string;
  gender: number;
  birthDate?: Date;
  constructor(id = 0, name = "", gender = 1, birthDate = new Date()){
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.birthDate = birthDate;
  }
}