var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var upgrades = [];
var addUpgrade = function (data) {
    var id = upgrades.length - 1;
    upgrades[id] = new Upgrade(__assign(__assign({}, data), { id: id }));
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
module.exports = addUpgrade;
module.exports.getUpgrades = function () {
    return upgrades;
};
