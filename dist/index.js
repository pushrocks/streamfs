"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./streamfs.plugins");
exports.createReadStream = (pathArg) => {
    return plugins.fs.createReadStream(pathArg);
};
exports.createWriteStream = (pathArg) => {
    return plugins.fs.createWriteStream(pathArg);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUlsQyxRQUFBLGdCQUFnQixHQUFHLENBQUMsT0FBZTtJQUM1QyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUM3QyxDQUFDLENBQUE7QUFFVSxRQUFBLGlCQUFpQixHQUFHLENBQUMsT0FBZTtJQUM3QyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUM5QyxDQUFDLENBQUEifQ==