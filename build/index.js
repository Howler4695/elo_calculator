"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readLine = require("node:readline/promises");
var process_1 = require("process");
var mathjs_1 = require("mathjs");
var WEIGHT = 40;
var TEN_TIMES_DIFFERENCE = 400;
var rl = readLine.createInterface({ input: process_1.stdin, output: process_1.stdout });
var findProbability = function (ratingLoser, ratingWinner) {
    var powerCalc = Number((0, mathjs_1.pow)(10, (1.0 * (ratingLoser - ratingWinner)) / TEN_TIMES_DIFFERENCE));
    return 1 / (1 + powerCalc);
};
var findNewEloRating = function (oldRating1, oldRating2, K, player1Winner) {
    var newPlayer1Rating;
    var newPlayer2Rating;
    var player1WinProbability = findProbability(oldRating2, oldRating1);
    var player2WinProbability = findProbability(oldRating1, oldRating2);
    if (player1Winner === true) {
        newPlayer1Rating = oldRating1 + K * (1 - player1WinProbability);
        newPlayer2Rating = oldRating2 + K * (0 - player2WinProbability);
    }
    else {
        136;
        newPlayer1Rating = oldRating1 + K * (0 - player1WinProbability);
        newPlayer2Rating = oldRating2 + K * (1 - player2WinProbability);
    }
    return [(0, mathjs_1.round)(newPlayer1Rating), (0, mathjs_1.round)(newPlayer2Rating)];
};
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response1, response2, responseWinner, player1Won, rating1, rating2, newElos;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, rl.question("Player 1 rating: ")];
            case 1:
                response1 = _a.sent();
                return [4 /*yield*/, rl.question("Player 2 rating: ")];
            case 2:
                response2 = _a.sent();
                return [4 /*yield*/, rl.question("Who won? :")];
            case 3:
                responseWinner = _a.sent();
                player1Won = responseWinner.includes("1");
                rating1 = Number(response1);
                rating2 = Number(response2);
                newElos = findNewEloRating(rating1, rating2, WEIGHT, player1Won);
                console.log("New Elos\n");
                console.log("--------");
                console.log("Player1: ".concat(newElos[0], "\n"));
                console.log("Player2: ".concat(newElos[1], "\n"));
                console.log("--------\n");
                main();
                return [2 /*return*/];
        }
    });
}); };
main();
