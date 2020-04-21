export class Hospital {
  id: number;
  name: string;
  address: string;

  constructor(id = 0, name = "", address = ""){
    this.id = id;
    this.name = name;
    this.address = address;
  }
}