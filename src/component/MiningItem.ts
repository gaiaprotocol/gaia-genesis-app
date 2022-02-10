import { DomNode, el } from "@hanul/skynode";
import { BigNumber, utils } from "ethers";
import msg from "msg.js";
import CommonUtil from "../CommonUtil";
import GaiaNFTContract from "../contracts/GaiaNFTContract";
import GaiaOperationContract from "../contracts/GaiaOperationContract";
import ViewUtil from "../view/ViewUtil";
import Confirm from "./shared/dialogue/Confirm";
import Prompt from "./shared/dialogue/Prompt";

export default class MiningItem extends DomNode {

    private imageDisplay: DomNode<HTMLImageElement>;
    private nameDisplay: DomNode;
    private krnoDisplay: DomNode;
    private klayDisplay: DomNode;

    private id = -1;
    private krno = BigNumber.from(0);
    private klay = BigNumber.from(0);

    constructor() {
        super(".mining-item");
        this.append(
            this.imageDisplay = el("img"),
            this.nameDisplay = el("h3"),
            el("a",
                el("img.send", { src: "/images/shared/icn/send.svg", alt: "send icon" }),
                {
                    click: () => new Prompt(msg("SEND_PROMPT_TITLE"), msg("SEND_PROMPT_DESC"), msg("SEND_PROMPT_BUTTON"), async (to) => {
                        await GaiaNFTContract.transfer(to, this.id);
                        ViewUtil.waitTransactionAndRefresh();
                    }),
                }),
            el(".content-wrap",
                el(".amount-wrap",
                    this.krnoDisplay = el(".krno", "... KRNO"),
                    this.klayDisplay = el(".klay", "... KLAY"),
                ),
                el(".button-wrap",
                    el("button.krno-button", msg("CLAIM_KRNO_BUTTON"), {
                        click: () => {
                            new Confirm(msg("CLAIM_KRNO_TITLE"), msg("CLAIM_ALERT_DESC"), msg("CLAIM_ALERT_BUTTON"), async () => {
                                await GaiaOperationContract.claim([this.id], [this.krno]);
                                ViewUtil.waitTransactionAndRefresh();
                            });
                        },
                    }),
                    el("button.klay-button", msg("CLAIM_KLAY_BUTTON"), {
                        click: () => {
                            new Confirm(msg("CLAIM_KLAY_ALERT_TITLE"), msg("CLAIM_ALERT_DESC"), msg("CLAIM_ALERT_BUTTON"), async () => {
                                await GaiaOperationContract.claimKlayViaZap([this.id], [this.krno], this.klay, []);
                                ViewUtil.waitTransactionAndRefresh();
                            });
                        },
                    }),
                ),
            ),
        );
    }

    public init(id: number) {
        this.id = id;
        this.imageDisplay.domElement.src = `https://storage.googleapis.com/gaia-protocol/kronos/${id}.png`;
        this.nameDisplay.appendText(`#${this.id}`);
        this.loadKRNO();
        this.loadKlay();
    }

    private async loadKRNO() {
        this.krno = await GaiaOperationContract.claimableKRNO([this.id]);
        this.krnoDisplay.empty().appendText(`${CommonUtil.numberWithCommas(utils.formatUnits(this.krno, 9))} KRNO`);
    }

    private async loadKlay() {
        this.klay = await GaiaOperationContract.claimableKlay([this.id]);
        this.klayDisplay.empty().appendText(`${CommonUtil.numberWithCommas(utils.formatEther(this.klay))} KLAY`);
    }

    public delete() {
        super.delete();
    }
}
