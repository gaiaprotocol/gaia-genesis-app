import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface MocksKRNOInterface extends utils.Interface {
    contractName: "MocksKRNO";
    functions: {
        "supportsInterface(bytes4)": FunctionFragment;
        "rebase(uint256,uint256)": FunctionFragment;
        "renounceManagement()": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "gonsForBalance(uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "index()": FunctionFragment;
        "INDEX()": FunctionFragment;
        "setIndex(uint256)": FunctionFragment;
        "safeTransfer(address,uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256)": FunctionFragment;
        "pushManagement(address)": FunctionFragment;
        "manager()": FunctionFragment;
        "pullManagement()": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "rebases(uint256)": FunctionFragment;
        "balanceForGons(uint256)": FunctionFragment;
        "circulatingSupply()": FunctionFragment;
        "initializer()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "stakingContract()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "rebase", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "renounceManagement", values?: undefined): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "gonsForBalance", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "index", values?: undefined): string;
    encodeFunctionData(functionFragment: "INDEX", values?: undefined): string;
    encodeFunctionData(functionFragment: "setIndex", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "safeTransfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "pushManagement", values: [string]): string;
    encodeFunctionData(functionFragment: "manager", values?: undefined): string;
    encodeFunctionData(functionFragment: "pullManagement", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "rebases", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceForGons", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "circulatingSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "initializer", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string]): string;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "stakingContract", values?: undefined): string;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rebase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceManagement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gonsForBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "index", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "INDEX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pushManagement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pullManagement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rebases", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceForGons", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "circulatingSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakingContract", data: BytesLike): Result;
    events: {
        "LogSupply(uint256,uint256,uint256)": EventFragment;
        "LogRebase(uint256,uint256,uint256)": EventFragment;
        "LogStakingContractUpdated(address)": EventFragment;
        "OwnershipPushed(address,address)": EventFragment;
        "OwnershipPulled(address,address)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "Approval(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LogSupply"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogRebase"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogStakingContractUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipPushed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipPulled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
}
export declare type LogSupplyEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], {
    epoch: BigNumber;
    timestamp: BigNumber;
    totalSupply: BigNumber;
}>;
export declare type LogSupplyEventFilter = TypedEventFilter<LogSupplyEvent>;
export declare type LogRebaseEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], {
    epoch: BigNumber;
    rebase: BigNumber;
    index: BigNumber;
}>;
export declare type LogRebaseEventFilter = TypedEventFilter<LogRebaseEvent>;
export declare type LogStakingContractUpdatedEvent = TypedEvent<[
    string
], {
    stakingContract: string;
}>;
export declare type LogStakingContractUpdatedEventFilter = TypedEventFilter<LogStakingContractUpdatedEvent>;
export declare type OwnershipPushedEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export declare type OwnershipPushedEventFilter = TypedEventFilter<OwnershipPushedEvent>;
export declare type OwnershipPulledEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export declare type OwnershipPulledEventFilter = TypedEventFilter<OwnershipPulledEvent>;
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    from: string;
    to: string;
    value: BigNumber;
}>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    owner: string;
    spender: string;
    value: BigNumber;
}>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface MocksKRNO extends BaseContract {
    contractName: "MocksKRNO";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MocksKRNOInterface;
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
        supportsInterface(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        rebase(profit_: BigNumberish, epoch_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceManagement(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        approve(spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        gonsForBalance(amount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        index(overrides?: CallOverrides): Promise<[BigNumber]>;
        INDEX(overrides?: CallOverrides): Promise<[BigNumber]>;
        setIndex(_INDEX: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "safeTransfer(address,uint256)"(recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "safeTransfer(address,uint256,bytes)"(recipient: string, amount: BigNumberish, arg2: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256)"(sender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(sender: string, recipient: string, amount: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        pushManagement(newOwner_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        manager(overrides?: CallOverrides): Promise<[string]>;
        pullManagement(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(who: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        rebases(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            number
        ] & {
            epoch: BigNumber;
            rebase: BigNumber;
            totalStakedBefore: BigNumber;
            totalStakedAfter: BigNumber;
            amountRebased: BigNumber;
            index: BigNumber;
            blockNumberOccured: number;
        }>;
        balanceForGons(gons: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        circulatingSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        initializer(overrides?: CallOverrides): Promise<[string]>;
        transfer(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initialize(stakingContract_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        allowance(owner_: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        stakingContract(overrides?: CallOverrides): Promise<[string]>;
    };
    supportsInterface(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    rebase(profit_: BigNumberish, epoch_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceManagement(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    approve(spender: string, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    gonsForBalance(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    index(overrides?: CallOverrides): Promise<BigNumber>;
    INDEX(overrides?: CallOverrides): Promise<BigNumber>;
    setIndex(_INDEX: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "safeTransfer(address,uint256)"(recipient: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "safeTransfer(address,uint256,bytes)"(recipient: string, amount: BigNumberish, arg2: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256)"(sender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256,bytes)"(sender: string, recipient: string, amount: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    pushManagement(newOwner_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    manager(overrides?: CallOverrides): Promise<string>;
    pullManagement(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(who: string, overrides?: CallOverrides): Promise<BigNumber>;
    rebases(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number
    ] & {
        epoch: BigNumber;
        rebase: BigNumber;
        totalStakedBefore: BigNumber;
        totalStakedAfter: BigNumber;
        amountRebased: BigNumber;
        index: BigNumber;
        blockNumberOccured: number;
    }>;
    balanceForGons(gons: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    circulatingSupply(overrides?: CallOverrides): Promise<BigNumber>;
    initializer(overrides?: CallOverrides): Promise<string>;
    transfer(to: string, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initialize(stakingContract_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    allowance(owner_: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    stakingContract(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        supportsInterface(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        rebase(profit_: BigNumberish, epoch_: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        renounceManagement(overrides?: CallOverrides): Promise<void>;
        approve(spender: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        gonsForBalance(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        index(overrides?: CallOverrides): Promise<BigNumber>;
        INDEX(overrides?: CallOverrides): Promise<BigNumber>;
        setIndex(_INDEX: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        "safeTransfer(address,uint256)"(recipient: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "safeTransfer(address,uint256,bytes)"(recipient: string, amount: BigNumberish, arg2: BytesLike, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256)"(sender: string, recipient: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256,bytes)"(sender: string, recipient: string, amount: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<void>;
        pushManagement(newOwner_: string, overrides?: CallOverrides): Promise<void>;
        manager(overrides?: CallOverrides): Promise<string>;
        pullManagement(overrides?: CallOverrides): Promise<void>;
        balanceOf(who: string, overrides?: CallOverrides): Promise<BigNumber>;
        rebases(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            number
        ] & {
            epoch: BigNumber;
            rebase: BigNumber;
            totalStakedBefore: BigNumber;
            totalStakedAfter: BigNumber;
            amountRebased: BigNumber;
            index: BigNumber;
            blockNumberOccured: number;
        }>;
        balanceForGons(gons: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        circulatingSupply(overrides?: CallOverrides): Promise<BigNumber>;
        initializer(overrides?: CallOverrides): Promise<string>;
        transfer(to: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        initialize(stakingContract_: string, overrides?: CallOverrides): Promise<boolean>;
        allowance(owner_: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        stakingContract(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "LogSupply(uint256,uint256,uint256)"(epoch?: BigNumberish | null, timestamp?: null, totalSupply?: null): LogSupplyEventFilter;
        LogSupply(epoch?: BigNumberish | null, timestamp?: null, totalSupply?: null): LogSupplyEventFilter;
        "LogRebase(uint256,uint256,uint256)"(epoch?: BigNumberish | null, rebase?: null, index?: null): LogRebaseEventFilter;
        LogRebase(epoch?: BigNumberish | null, rebase?: null, index?: null): LogRebaseEventFilter;
        "LogStakingContractUpdated(address)"(stakingContract?: null): LogStakingContractUpdatedEventFilter;
        LogStakingContractUpdated(stakingContract?: null): LogStakingContractUpdatedEventFilter;
        "OwnershipPushed(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipPushedEventFilter;
        OwnershipPushed(previousOwner?: string | null, newOwner?: string | null): OwnershipPushedEventFilter;
        "OwnershipPulled(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipPulledEventFilter;
        OwnershipPulled(previousOwner?: string | null, newOwner?: string | null): OwnershipPulledEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        "Approval(address,address,uint256)"(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        Approval(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
    };
    estimateGas: {
        supportsInterface(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        rebase(profit_: BigNumberish, epoch_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceManagement(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        approve(spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        gonsForBalance(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        index(overrides?: CallOverrides): Promise<BigNumber>;
        INDEX(overrides?: CallOverrides): Promise<BigNumber>;
        setIndex(_INDEX: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "safeTransfer(address,uint256)"(recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "safeTransfer(address,uint256,bytes)"(recipient: string, amount: BigNumberish, arg2: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256)"(sender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256,bytes)"(sender: string, recipient: string, amount: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        pushManagement(newOwner_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        manager(overrides?: CallOverrides): Promise<BigNumber>;
        pullManagement(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(who: string, overrides?: CallOverrides): Promise<BigNumber>;
        rebases(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        balanceForGons(gons: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        circulatingSupply(overrides?: CallOverrides): Promise<BigNumber>;
        initializer(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initialize(stakingContract_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        allowance(owner_: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        stakingContract(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        supportsInterface(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rebase(profit_: BigNumberish, epoch_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceManagement(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        approve(spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gonsForBalance(amount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        index(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        INDEX(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setIndex(_INDEX: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransfer(address,uint256)"(recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransfer(address,uint256,bytes)"(recipient: string, amount: BigNumberish, arg2: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256)"(sender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(sender: string, recipient: string, amount: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        pushManagement(newOwner_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        manager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pullManagement(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(who: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rebases(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceForGons(gons: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        circulatingSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initializer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initialize(stakingContract_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        allowance(owner_: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stakingContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=MocksKRNO.d.ts.map