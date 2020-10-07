var template_upgradeString = "<td style='padding: 10px;'></td><td class=\"image circle responsive-img\" src=\"{{IMAGE_SRC}}\" alt=\"{{TITLE}}\" /><td class=\"title\">{{TITLE}}</td><td class=\"description\">{{DESCRIPTION}}</td><td><a class=\"btn-floating btn-large waves-effect waves-light green\"><i class=\"material-icons\">shopping_cart</i></a></td><td style='padding: 10px;'></td>";
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
    var x = document.createElement("tr");
    x.innerHTML = template_upgradeString;
    x.className = "upgrade frame";
    $("#upgradetable").append(x);
});
