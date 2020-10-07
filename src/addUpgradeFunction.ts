const upgrades: any = [];

const addUpgrade = (data: { cost: number; image: string; name: string }) => {
  const id = upgrades.length - 1;
  upgrades[id] = new Upgrade({
    ...data,
    id
  });
};

class Upgrade {
  constructor(data: { cost: number; image: string; name: string; id: number }) {
    this.data = data;
    this.name = data.name;
    this.image = this.image;
  }

  data: {};
  name: string = '';
  image: string;
  buy: {};
}

module.exports = addUpgrade;

module.exports.getUpgrades = () => {
  return upgrades;
};
