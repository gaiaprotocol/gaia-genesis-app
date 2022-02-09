"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const CommonUtil_1 = __importDefault(require("../CommonUtil"));
const GaiaBuyBackFundContract_1 = __importDefault(require("../contracts/GaiaBuyBackFundContract"));
const GaiaOperationContract_1 = __importDefault(require("../contracts/GaiaOperationContract"));
class TeamNFT extends skynode_1.DomNode {
    constructor() {
        super(".team-nft-container");
        this.append((0, skynode_1.el)(".content", { "data-aos": "zoom-in" }, (0, skynode_1.el)(".team-item", (0, skynode_1.el)("h3", "최초의 가이아"), (0, skynode_1.el)("img", { src: "https://storage.googleapis.com/gaia-protocol/kronos/0.png" })), (0, skynode_1.el)(".team-info", (0, skynode_1.el)(".content-wrap", (0, skynode_1.el)("h2", "민팅가"), (0, skynode_1.el)("p", "1,000 KLAY")), (0, skynode_1.el)(".content-wrap", (0, skynode_1.el)("h2", "쌓인 복리 이자"), this.klayDisplay = (0, skynode_1.el)("p", "... KLAY")), (0, skynode_1.el)(".content-wrap", (0, skynode_1.el)("h2", "받을 수 있는 KLAY수량"), this.refundableKlayDisplay = (0, skynode_1.el)("p", "... KLAY")))));
        this.load();
    }
    async load() {
        const klay = await GaiaOperationContract_1.default.claimableKlay([0]);
        this.klayDisplay.empty().appendText(`${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatEther(klay))} KLAY`);
        const refundableKlay = await GaiaBuyBackFundContract_1.default.refundableKlay();
        this.refundableKlayDisplay.empty().appendText(`${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatEther(refundableKlay))} KLAY`);
    }
    delete() {
        super.delete();
    }
}
exports.default = TeamNFT;
//# sourceMappingURL=TeamNFT.js.map