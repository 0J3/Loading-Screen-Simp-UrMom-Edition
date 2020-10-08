const template_upgradeString: string = `
<td style='padding: 10px;'></td>
<td class="image circle responsive-img" src="{{IMAGE_SRC}}" alt="{{TITLE}}" />
<td class="title">{{TITLE}}</td>
<td class="description">{{DESCRIPTION}}</td>
<td class="cost">{{COST}}</td>
<td>
  <a class="btn-floating btn-large waves-effect waves-light green">
    <i class="material-icons">shopping_cart</i>
  </a>
</td>
<td style='padding: 10px;'></td>
`;

const addUpgradeFrame = (
  name: string,
  cost: number | string | undefined = 0,
  description: string | undefined = 'No Description Specified',
  image: string | undefined = 'https://via.placeholder.com/2069x2069'
) => {
  const frame = document.createElement('tr');
  let upgradeString = template_upgradeString;
  const remove = (a: string, b: string) =>
    (upgradeString = upgradeString.split(a).join(b));

  cost = Number(cost);

  remove('{{TITLE}}', name);
  remove('{{DESCRIPTION}}', description);
  remove('{{COST}}', cost.toString());
  remove('{{IMAGE_SRC}}', image);

  frame.innerHTML = upgradeString;
  frame.className = 'upgrade frame';
  $('#upgradetable').append(frame);

  return;
};

$(() => {
  const _upgrades = require('./addUpgradeFunction');
  const getUpgrades = _upgrades.getUpgrades;

  _upgrades.upgradeAdded((upgrade: object) => {});

  _upgrades.ready();
});
