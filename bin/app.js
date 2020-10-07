var template_upgradeString = "\n<td style='padding: 10px;'></td>\n<td class=\"image circle responsive-img\" src=\"{{IMAGE_SRC}}\" alt=\"{{TITLE}}\" />\n<td class=\"title\">{{TITLE}}</td>\n<td class=\"description\">{{DESCRIPTION}}</td>\n<td class=\"cost\">{{COST}}</td>\n<td><a class=\"btn-floating btn-large waves-effect waves-light green\"><i class=\"material-icons\">shopping_cart</i></a></td><td style='padding: 10px;'></td>\n";
var addUpgradeFrame = function (name, description, image) {
    if (description === void 0) { description = "No Description Specified"; }
    if (image === void 0) { image = "https://via.placeholder.com/2069x2069"; }
    var frame = document.createElement('tr');
    var upgradeString = template_upgradeString;
    var x = function (a, b) {
        upgradeString = upgradeString.split(a).join(b);
    };
    description = description || "No Description Specified";
    image = image || "https://via.placeholder.com/2069x2069";
    x("{{TITLE}}", name);
    x("{{DESCRIPTION}}", description);
    frame.innerHTML = upgradeString;
    frame.className = 'upgrade frame';
    $('#upgradetable').append(frame);
    return;
};
$(function () {
    var _upgrades = require("./addUpgradeFunction");
    var getUpgrades = _upgrades.getUpgrades;
    _upgrades.upgradeAdded(function (upgrade) {
    });
    _upgrades.ready();
});
