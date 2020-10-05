var template_upgradeString = "<div class=\"upgrade\">\n  <img class=\"image\" src=\"{{IMAGE_SRC}}\" alt=\"{{TITLE}}\" />\n  <h2 class=\"title\">{{TITLE}}</h2>\n  <p class=\"description\">{{DESCRIPTION}}</p>\n</div>";
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
$(function () {
    var x = document.createElement("div");
    document.body.append(x);
});
