import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IGaiaBuyBackFundInterface extends utils.Interface {
    contractName: "IGaiaBuyBackFund";
    functions: {
        "refundableKlay()": FunctionFragment;
        "sellGaiaNFT(uint256[])": FunctionFragment;
        "gaiaNFT()": FunctionFragment;
        "buyBack()": FunctionFragment;
        "gaiaOperation()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "refundableKlay", values?: undefined): string;
    encodeFunctionData(functionFragment: "sellGaiaNFT", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "gaiaNFT", values?: undefined): string;
    encodeFunctionData(functionFragment: "buyBack", values?: undefined): string;
    encodeFunctionData(functionFragment: "gaiaOperation", values?: undefined): string;
    decodeFunctionResult(functionFragment: "refundableKlay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sellGaiaNFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gaiaNFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "buyBack", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gaiaOperation", data: BytesLike): Result;
    events: {
        "CloseBuyBack()": EventFragment;
        "WithdrawKlay(address,uint256)": EventFragment;
        "Sell(uint256,address,uint256)": EventFragment;
        "UpdateGaiaOperation(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CloseBuyBack"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawKlay"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Sell"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateGaiaOperation"): EventFragment;
}
export declare type CloseBuyBackEvent = TypedEvent<[], {}>;
export declare type CloseBuyBackEventFilter = TypedEventFilter<CloseBuyBackEvent>;
export declare type WithdrawKlayEvent = TypedEvent<[
    string,
    BigNumber
], {
    recipient: string;
    amount: BigNumber;
}>;
export declare type WithdrawKlayEventFilter = TypedEventFilter<WithdrawKlayEvent>;
export declare type SellEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], {
    id: BigNumber;
    seller: string;
    refundedKlay: BigNumber;
}>;
export declare type SellEventFilter = TypedEventFilter<SellEvent>;
export declare type UpdateGaiaOperationEvent = TypedEvent<[
    string
], {
    newGaiaOperation: string;
}>;
export declare type UpdateGaiaOperationEventFilter = TypedEventFilter<UpdateGaiaOperationEvent>;
export interface IGaiaBuyBackFund extends BaseContract {
    contractName: "IGaiaBuyBackFund";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IGaiaBuyBackFundInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        refundableKlay(overrides?: CallOverrides): Promise<[BigNumber]>;
        sellGaiaNFT(ids: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        gaiaNFT(overrides?: CallOverrides): Promise<[string]>;
        buyBack(overrides?: CallOverrides): Promise<[boolean]>;
        gaiaOperation(overrides?: CallOverrides): Promise<[string]>;
    };
    refundableKlay(overrides?: CallOverrides): Promise<BigNumber>;
    sellGaiaNFT(ids: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    gaiaNFT(overrides?: CallOverrides): Promise<string>;
    buyBack(overrides?: CallOverrides): Promise<boolean>;
    gaiaOperation(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        refundableKlay(overrides?: CallOverrides): Promise<BigNumber>;
        sellGaiaNFT(ids: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        gaiaNFT(overrides?: CallOverrides): Promise<string>;
        buyBack(overrides?: CallOverrides): Promise<boolean>;
        gaiaOperation(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "CloseBuyBack()"(): CloseBuyBackEventFilter;
        CloseBuyBack(): CloseBuyBackEventFilter;
        "WithdrawKlay(address,uint256)"(recipient?: string | null, amount?: null): WithdrawKlayEventFilter;
        WithdrawKlay(recipient?: string | null, amount?: null): WithdrawKlayEventFilter;
        "Sell(uint256,address,uint256)"(id?: BigNumberish | null, seller?: string | null, refundedKlay?: null): SellEventFilter;
        Sell(id?: BigNumberish | null, seller?: string | null, refundedKlay?: null): SellEventFilter;
        "UpdateGaiaOperation(address)"(newGaiaOperation?: null): UpdateGaiaOperationEventFilter;
        UpdateGaiaOperation(newGaiaOperation?: null): UpdateGaiaOperationEventFilter;
    };
    estimateGas: {
        refundableKlay(overrides?: CallOverrides): Promise<BigNumber>;
        sellGaiaNFT(ids: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        gaiaNFT(overrides?: CallOverrides): Promise<BigNumber>;
        buyBack(overrides?: CallOverrides): Promise<BigNumber>;
        gaiaOperation(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        refundableKlay(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sellGaiaNFT(ids: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        gaiaNFT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        buyBack(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gaiaOperation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IGaiaBuyBackFund.d.ts.map