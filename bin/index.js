var upgrades = [];
var addUpgrade = function (data) {
    var data2 = {
        cost: data.cost,
        image: data.image,
        name: data.name,
        id: 0
    };
    data2.name = name;
    data2.id = upgrades.length - 1;
    upgrades[data2.id] = new Upgrade(data2);
};
var Upgrade = /** @class */ (function () {
    function Upgrade(data) {
        this.name = '';
        this.data = data;
        this.name = data.name;
        this.image = this.image;
    }
    return Upgrade;
}());
