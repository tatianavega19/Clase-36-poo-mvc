const plants = [
    {
      name: "Rosa",
      type: "Flor",
      area: "Jardín",
    },
    {
      name: "Bambú",
      type: "Planta ornamental",
      area: "Interior",
    },
    {
      name: "Tomate",
      type: "Hortaliza",
      area: "Huerto",
    },
  ];
  
  class Plant {
    name: string;
    type: string;
    area: string;
  
    constructor(name: string, type: string, area: string) {
      this.name = name;
      this.type = type;
      this.area = area;
    }
  
    static getLengthPlants() {
      return plants.length;
    }
  
    getArea() {
      return this.area;
    }
  
    getType() {
      return this.type;
    }
  }
  
  const rosa = new Plant("Rosa", "Flor", "Mundial");
  
  console.log(rosa.getArea());
  
  const lengthPlantas = Plant.getLengthPlants();
  
  console.log(lengthPlantas);