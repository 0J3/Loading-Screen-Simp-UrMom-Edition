let upgrades: any = [];

const addUpgrade = (data: {
  cost: number; image: string; name: string
}) => {
  let data2 = {
    cost: data.cost,
    image: data.image,
    name: data.name,
    id: 0
  };
  data2.name = name;
  data2.id = upgrades.length - 1;
  upgrades[data2.id] = new Upgrade(data2);
};

class Upgrade {
  constructor(data: {
    cost: number; image: string; name: string; id: number
  }) {
    this.data = data;
    this.name = data.name;
    this.image = this.image;
  }

  data: {};
  name: string = '';
  image: string;
  buy: {};
}
