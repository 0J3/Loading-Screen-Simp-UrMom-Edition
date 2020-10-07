const template_upgradeString: string = `<td>&nbsp;&nbsp;&ZeroWidthSpace;</td><td class="image circle responsive-img" src="{{IMAGE_SRC}}" alt="{{TITLE}}" /><td class="title">{{TITLE}}</td><td class="description">{{DESCRIPTION}}</td><td><a class="btn-floating btn-large waves-effect waves-light green"><i class="material-icons">shopping_cart</i></a></td><td>&ZeroWidthSpace;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>`;

let upgrades: any = [];

const addUpgrade = (data: { cost: number; image: string; name: string }) => {
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

$(() => {
  let x = document.createElement('tr');
  x.innerHTML = template_upgradeString;
  x.className = 'upgrade frame';
  $('#upgradetable').append(x);
});
