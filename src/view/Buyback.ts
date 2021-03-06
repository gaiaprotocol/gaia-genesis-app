import Debouncer from "@hanul/debouncer";
import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import SkyUtil from "skyutil";
import BuybackItem from "../component/BuybackItem";
import TeamNFT from "../component/TeamNFT";
import GaiaBuyBackFundContract from "../contracts/GaiaBuyBackFundContract";
import GaiaNFTContract from "../contracts/GaiaNFTContract";
import Wallet from "../klaytn/Wallet";
import Layout from "./Layout";

export default class Buyback implements View {

    private container: DomNode;
    private nftList: DomNode;
    private interval: any;

    constructor() {
        Layout.current.title = msg("BUYBACK_TITLE");
        Layout.current.content.append(
            this.container = el("section.buyback-view", { "data-aos": "zoom-in" },
                el("header",
                    el("h1", msg("BUYBACK_TITLE")),
                    el("h2", msg("BUYBACK_DESC"))
                ),
                new TeamNFT(),
                el(".warning-container",
                    el("p", "Gaia Genesis Buyback을 백킹으로 활용한다는 거버넌스가 통과됨에 따라서 바이백은 종료되었습니다."),
                ),
                this.nftList = el(".nft-container"),
            ),
        );

        this.resizeDebouncer.run();
        Wallet.on("connect", () => this.resizeDebouncer.run());
    }

    private resizeDebouncer: Debouncer = new Debouncer(200, () => this.loadNFTs());

    private async loadNFTs() {

        const address = await Wallet.loadAddress();
        if (address !== undefined) {
            const refundableKlay = await GaiaBuyBackFundContract.refundableKlay();
            const balance = (await GaiaNFTContract.balanceOf(address)).toNumber();
            const promises: Promise<void>[] = [];
            SkyUtil.repeat(balance, (i: number) => {
                const promise = async (index: number) => {
                    const item = new BuybackItem(refundableKlay).appendTo(this.nftList);
                    const tokenId = (await GaiaNFTContract.tokenOfOwnerByIndex(address, index)).toNumber();
                    if (tokenId === 0) {
                        item.delete();
                    } else {
                        item.init(tokenId);
                    }
                };
                promises.push(promise(i));
            });
            await Promise.all(promises);
        }
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}