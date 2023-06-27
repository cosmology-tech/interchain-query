import * as _95 from "./abci/types";
import * as _96 from "./crypto/keys";
import * as _97 from "./crypto/proof";
import * as _98 from "./libs/bits/types";
import * as _99 from "./p2p/types";
import * as _100 from "./types/block";
import * as _101 from "./types/evidence";
import * as _102 from "./types/params";
import * as _103 from "./types/types";
import * as _104 from "./types/validator";
import * as _105 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _95.CheckTxType;
        checkTxTypeToJSON(object: _95.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _95.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _95.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _95.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _95.ResponseApplySnapshotChunk_Result): string;
        responseProcessProposal_ProposalStatusFromJSON(object: any): _95.ResponseProcessProposal_ProposalStatus;
        responseProcessProposal_ProposalStatusToJSON(object: _95.ResponseProcessProposal_ProposalStatus): string;
        misbehaviorTypeFromJSON(object: any): _95.MisbehaviorType;
        misbehaviorTypeToJSON(object: _95.MisbehaviorType): string;
        CheckTxType: typeof _95.CheckTxType;
        CheckTxTypeSDKType: typeof _95.CheckTxType;
        CheckTxTypeAmino: typeof _95.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _95.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _95.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultAmino: typeof _95.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _95.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _95.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultAmino: typeof _95.ResponseApplySnapshotChunk_Result;
        ResponseProcessProposal_ProposalStatus: typeof _95.ResponseProcessProposal_ProposalStatus;
        ResponseProcessProposal_ProposalStatusSDKType: typeof _95.ResponseProcessProposal_ProposalStatus;
        ResponseProcessProposal_ProposalStatusAmino: typeof _95.ResponseProcessProposal_ProposalStatus;
        MisbehaviorType: typeof _95.MisbehaviorType;
        MisbehaviorTypeSDKType: typeof _95.MisbehaviorType;
        MisbehaviorTypeAmino: typeof _95.MisbehaviorType;
        Request: {
            typeUrl: string;
            encode(message: _95.Request, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.Request;
            fromJSON(object: any): _95.Request;
            toJSON(message: _95.Request): unknown;
            fromPartial(object: {
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    version?: string;
                    blockVersion?: bigint;
                    p2pVersion?: bigint;
                    abciVersion?: string;
                };
                initChain?: {
                    time?: Date;
                    chainId?: string;
                    consensusParams?: {
                        block?: {
                            maxBytes?: bigint;
                            maxGas?: bigint;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: bigint;
                            maxAgeDuration?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            maxBytes?: bigint;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            app?: bigint;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: bigint;
                    }[];
                    appStateBytes?: Uint8Array;
                    initialHeight?: bigint;
                };
                query?: {
                    data?: Uint8Array;
                    path?: string;
                    height?: bigint;
                    prove?: boolean;
                };
                beginBlock?: {
                    hash?: Uint8Array;
                    header?: {
                        version?: {
                            block?: bigint;
                            app?: bigint;
                        };
                        chainId?: string;
                        height?: bigint;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    lastCommitInfo?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: bigint;
                            };
                            signedLastBlock?: boolean;
                        }[];
                    };
                    byzantineValidators?: {
                        type?: _95.MisbehaviorType;
                        validator?: {
                            address?: Uint8Array;
                            power?: bigint;
                        };
                        height?: bigint;
                        time?: Date;
                        totalVotingPower?: bigint;
                    }[];
                };
                checkTx?: {
                    tx?: Uint8Array;
                    type?: _95.CheckTxType;
                };
                deliverTx?: {
                    tx?: Uint8Array;
                };
                endBlock?: {
                    height?: bigint;
                };
                commit?: {};
                listSnapshots?: {};
                offerSnapshot?: {
                    snapshot?: {
                        height?: bigint;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    };
                    appHash?: Uint8Array;
                };
                loadSnapshotChunk?: {
                    height?: bigint;
                    format?: number;
                    chunk?: number;
                };
                applySnapshotChunk?: {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                };
                prepareProposal?: {
                    maxTxBytes?: bigint;
                    txs?: Uint8Array[];
                    localLastCommit?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: bigint;
                            };
                            signedLastBlock?: boolean;
                            voteExtension?: Uint8Array;
                        }[];
                    };
                    misbehavior?: {
                        type?: _95.MisbehaviorType;
                        validator?: {
                            address?: Uint8Array;
                            power?: bigint;
                        };
                        height?: bigint;
                        time?: Date;
                        totalVotingPower?: bigint;
                    }[];
                    height?: bigint;
                    time?: Date;
                    nextValidatorsHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                processProposal?: {
                    txs?: Uint8Array[];
                    proposedLastCommit?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: bigint;
                            };
                            signedLastBlock?: boolean;
                        }[];
                    };
                    misbehavior?: {
                        type?: _95.MisbehaviorType;
                        validator?: {
                            address?: Uint8Array;
                            power?: bigint;
                        };
                        height?: bigint;
                        time?: Date;
                        totalVotingPower?: bigint;
                    }[];
                    hash?: Uint8Array;
                    height?: bigint;
                    time?: Date;
                    nextValidatorsHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
            }): _95.Request;
            fromSDK(object: _95.RequestSDKType): _95.Request;
            toSDK(message: _95.Request): _95.RequestSDKType;
            fromAmino(object: _95.RequestAmino): _95.Request;
            toAmino(message: _95.Request): _95.RequestAmino;
            fromAminoMsg(object: _95.RequestAminoMsg): _95.Request;
            fromProtoMsg(message: _95.RequestProtoMsg): _95.Request;
            toProto(message: _95.Request): Uint8Array;
            toProtoMsg(message: _95.Request): _95.RequestProtoMsg;
        };
        RequestEcho: {
            typeUrl: string;
            encode(message: _95.RequestEcho, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.RequestEcho;
            fromJSON(object: any): _95.RequestEcho;
            toJSON(message: _95.RequestEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _95.RequestEcho;
            fromSDK(object: _95.RequestEchoSDKType): _95.RequestEcho;
            toSDK(message: _95.RequestEcho): _95.RequestEchoSDKType;
            fromAmino(object: _95.RequestEchoAmino): _95.RequestEcho;
            toAmino(message: _95.RequestEcho): _95.RequestEchoAmino;
            fromAminoMsg(object: _95.RequestEchoAminoMsg): _95.RequestEcho;
            fromProtoMsg(message: _95.RequestEchoProtoMsg): _95.RequestEcho;
            toProto(message: _95.RequestEcho): Uint8Array;
            toProtoMsg(message: _95.RequestEcho): _95.RequestEchoProtoMsg;
        };
        RequestFlush: {
            typeUrl: string;
            encode(_: _95.RequestFlush, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.RequestFlush;
            fromJSON(_: any): _95.RequestFlush;
            toJSON(_: _95.RequestFlush): unknown;
            fromPartial(_: {}): _95.RequestFlush;
            fromSDK(_: _95.RequestFlushSDKType): _95.RequestFlush;
            toSDK(_: _95.RequestFlush): _95.RequestFlushSDKType;
            fromAmino(_: _95.RequestFlushAmino): _95.RequestFlush;
            toAmino(_: _95.RequestFlush): _95.RequestFlushAmino;
            fromAminoMsg(object: _95.RequestFlushAminoMsg): _95.RequestFlush;
            fromProtoMsg(message: _95.RequestFlushProtoMsg): _95.RequestFlush;
            toProto(message: _95.RequestFlush): Uint8Array;
            toProtoMsg(message: _95.RequestFlush): _95.RequestFlushProtoMsg;
        };
        RequestInfo: {
            typeUrl: string;
            encode(message: _95.RequestInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.RequestInfo;
            fromJSON(object: any): _95.RequestInfo;
            toJSON(message: _95.RequestInfo): unknown;
            fromPartial(object: {
                version?: string;
                blockVersion?: bigint;
                p2pVersion?: bigint;
                abciVersion?: string;
            }): _95.RequestInfo;
            fromSDK(object: _95.RequestInfoSDKType): _95.RequestInfo;
            toSDK(message: _95.RequestInfo): _95.RequestInfoSDKType;
            fromAmino(object: _95.RequestInfoAmino): _95.RequestInfo;
            toAmino(message: _95.RequestInfo): _95.RequestInfoAmino;
            fromAminoMsg(object: _95.RequestInfoAminoMsg): _95.RequestInfo;
            fromProtoMsg(message: _95.RequestInfoProtoMsg): _95.RequestInfo;
            toProto(message: _95.RequestInfo): Uint8Array;
            toProtoMsg(message: _95.RequestInfo): _95.RequestInfoProtoMsg;
        };
        RequestInitChain: {
            typeUrl: string;
            encode(message: _95.RequestInitChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.RequestInitChain;
            fromJSON(object: any): _95.RequestInitChain;
            toJSON(message: _95.RequestInitChain): unknown;
            fromPartial(object: {
                time?: Date;
                chainId?: string;
                consensusParams?: {
                    block?: {
                        maxBytes?: bigint;
                        maxGas?: bigint;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: bigint;
                        maxAgeDuration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        maxBytes?: bigint;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        app?: bigint;
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: bigint;
                }[];
                appStateBytes?: Uint8Array;
                initialHeight?: bigint;
            }): _95.RequestInitChain;
            fromSDK(object: _95.RequestInitChainSDKType): _95.RequestInitChain;
            toSDK(message: _95.RequestInitChain): _95.RequestInitChainSDKType;
            fromAmino(object: _95.RequestInitChainAmino): _95.RequestInitChain;
            toAmino(message: _95.RequestInitChain): _95.RequestInitChainAmino;
            fromAminoMsg(object: _95.RequestInitChainAminoMsg): _95.RequestInitChain;
            fromProtoMsg(message: _95.RequestInitChainProtoMsg): _95.RequestInitChain;
            toProto(message: _95.RequestInitChain): Uint8Array;
            toProtoMsg(message: _95.RequestInitChain): _95.RequestInitChainProtoMsg;
        };
        RequestQuery: {
            typeUrl: string;
            encode(message: _95.RequestQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.RequestQuery;
            fromJSON(object: any): _95.RequestQuery;
            toJSON(message: _95.RequestQuery): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                path?: string;
                height?: bigint;
                prove?: boolean;
            }): _95.RequestQuery;
            fromSDK(object: _95.RequestQuerySDKType): _95.RequestQuery;
            toSDK(message: _95.RequestQuery): _95.RequestQuerySDKType;
            fromAmino(object: _95.RequestQueryAmino): _95.RequestQuery;
            toAmino(message: _95.RequestQuery): _95.RequestQueryAmino;
            fromAminoMsg(object: _95.RequestQueryAminoMsg): _95.RequestQuery;
            fromProtoMsg(message: _95.RequestQueryProtoMsg): _95.RequestQuery;
            toProto(message: _95.RequestQuery): Uint8Array;
            toProtoMsg(message: _95.RequestQuery): _95.RequestQueryProtoMsg;
        };
        RequestBeginBlock: {
            typeUrl: string;
            encode(message: _95.RequestBeginBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.RequestBeginBlock;
            fromJSON(object: any): _95.RequestBeginBlock;
            toJSON(message: _95.RequestBeginBlock): unknown;
            fromPartial(object: {
                hash?: Uint8Array;
                header?: {
                    version?: {
                        block?: bigint;
                        app?: bigint;
                    };
                    chainId?: string;
                    height?: bigint;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                lastCommitInfo?: {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: bigint;
                        };
                        signedLastBlock?: boolean;
                    }[];
                };
                byzantineValidators?: {
                    type?: _95.MisbehaviorType;
                    validator?: {
                        address?: Uint8Array;
                        power?: bigint;
                    };
                    height?: bigint;
                    time?: Date;
                    totalVotingPower?: bigint;
                }[];
            }): _95.RequestBeginBlock;
            fromSDK(object: _95.RequestBeginBlockSDKType): _95.RequestBeginBlock;
            toSDK(message: _95.RequestBeginBlock): _95.RequestBeginBlockSDKType;
            fromAmino(object: _95.RequestBeginBlockAmino): _95.RequestBeginBlock;
            toAmino(message: _95.RequestBeginBlock): _95.RequestBeginBlockAmino;
            fromAminoMsg(object: _95.RequestBeginBlockAminoMsg): _95.RequestBeginBlock;
            fromProtoMsg(message: _95.RequestBeginBlockProtoMsg): _95.RequestBeginBlock;
            toProto(message: _95.RequestBeginBlock): Uint8Array;
            toProtoMsg(message: _95.RequestBeginBlock): _95.RequestBeginBlockProtoMsg;
        };
        RequestCheckTx: {
            typeUrl: string;
            encode(message: _95.RequestCheckTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.RequestCheckTx;
            fromJSON(object: any): _95.RequestCheckTx;
            toJSON(message: _95.RequestCheckTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
                type?: _95.CheckTxType;
            }): _95.RequestCheckTx;
            fromSDK(object: _95.RequestCheckTxSDKType): _95.RequestCheckTx;
            toSDK(message: _95.RequestCheckTx): _95.RequestCheckTxSDKType;
            fromAmino(object: _95.RequestCheckTxAmino): _95.RequestCheckTx;
            toAmino(message: _95.RequestCheckTx): _95.RequestCheckTxAmino;
            fromAminoMsg(object: _95.RequestCheckTxAminoMsg): _95.RequestCheckTx;
            fromProtoMsg(message: _95.RequestCheckTxProtoMsg): _95.RequestCheckTx;
            toProto(message: _95.RequestCheckTx): Uint8Array;
            toProtoMsg(message: _95.RequestCheckTx): _95.RequestCheckTxProtoMsg;
        };
        RequestDeliverTx: {
            typeUrl: string;
            encode(message: _95.RequestDeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.RequestDeliverTx;
            fromJSON(object: any): _95.RequestDeliverTx;
            toJSON(message: _95.RequestDeliverTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
            }): _95.RequestDeliverTx;
            fromSDK(object: _95.RequestDeliverTxSDKType): _95.RequestDeliverTx;
            toSDK(message: _95.RequestDeliverTx): _95.RequestDeliverTxSDKType;
            fromAmino(object: _95.RequestDeliverTxAmino): _95.RequestDeliverTx;
            toAmino(message: _95.RequestDeliverTx): _95.RequestDeliverTxAmino;
            fromAminoMsg(object: _95.RequestDeliverTxAminoMsg): _95.RequestDeliverTx;
            fromProtoMsg(message: _95.RequestDeliverTxProtoMsg): _95.RequestDeliverTx;
            toProto(message: _95.RequestDeliverTx): Uint8Array;
            toProtoMsg(message: _95.RequestDeliverTx): _95.RequestDeliverTxProtoMsg;
        };
        RequestEndBlock: {
            typeUrl: string;
            encode(message: _95.RequestEndBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.RequestEndBlock;
            fromJSON(object: any): _95.RequestEndBlock;
            toJSON(message: _95.RequestEndBlock): unknown;
            fromPartial(object: {
                height?: bigint;
            }): _95.RequestEndBlock;
            fromSDK(object: _95.RequestEndBlockSDKType): _95.RequestEndBlock;
            toSDK(message: _95.RequestEndBlock): _95.RequestEndBlockSDKType;
            fromAmino(object: _95.RequestEndBlockAmino): _95.RequestEndBlock;
            toAmino(message: _95.RequestEndBlock): _95.RequestEndBlockAmino;
            fromAminoMsg(object: _95.RequestEndBlockAminoMsg): _95.RequestEndBlock;
            fromProtoMsg(message: _95.RequestEndBlockProtoMsg): _95.RequestEndBlock;
            toProto(message: _95.RequestEndBlock): Uint8Array;
            toProtoMsg(message: _95.RequestEndBlock): _95.RequestEndBlockProtoMsg;
        };
        RequestCommit: {
            typeUrl: string;
            encode(_: _95.RequestCommit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.RequestCommit;
            fromJSON(_: any): _95.RequestCommit;
            toJSON(_: _95.RequestCommit): unknown;
            fromPartial(_: {}): _95.RequestCommit;
            fromSDK(_: _95.RequestCommitSDKType): _95.RequestCommit;
            toSDK(_: _95.RequestCommit): _95.RequestCommitSDKType;
            fromAmino(_: _95.RequestCommitAmino): _95.RequestCommit;
            toAmino(_: _95.RequestCommit): _95.RequestCommitAmino;
            fromAminoMsg(object: _95.RequestCommitAminoMsg): _95.RequestCommit;
            fromProtoMsg(message: _95.RequestCommitProtoMsg): _95.RequestCommit;
            toProto(message: _95.RequestCommit): Uint8Array;
            toProtoMsg(message: _95.RequestCommit): _95.RequestCommitProtoMsg;
        };
        RequestListSnapshots: {
            typeUrl: string;
            encode(_: _95.RequestListSnapshots, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.RequestListSnapshots;
            fromJSON(_: any): _95.RequestListSnapshots;
            toJSON(_: _95.RequestListSnapshots): unknown;
            fromPartial(_: {}): _95.RequestListSnapshots;
            fromSDK(_: _95.RequestListSnapshotsSDKType): _95.RequestListSnapshots;
            toSDK(_: _95.RequestListSnapshots): _95.RequestListSnapshotsSDKType;
            fromAmino(_: _95.RequestListSnapshotsAmino): _95.RequestListSnapshots;
            toAmino(_: _95.RequestListSnapshots): _95.RequestListSnapshotsAmino;
            fromAminoMsg(object: _95.RequestListSnapshotsAminoMsg): _95.RequestListSnapshots;
            fromProtoMsg(message: _95.RequestListSnapshotsProtoMsg): _95.RequestListSnapshots;
            toProto(message: _95.RequestListSnapshots): Uint8Array;
            toProtoMsg(message: _95.RequestListSnapshots): _95.RequestListSnapshotsProtoMsg;
        };
        RequestOfferSnapshot: {
            typeUrl: string;
            encode(message: _95.RequestOfferSnapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.RequestOfferSnapshot;
            fromJSON(object: any): _95.RequestOfferSnapshot;
            toJSON(message: _95.RequestOfferSnapshot): unknown;
            fromPartial(object: {
                snapshot?: {
                    height?: bigint;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                appHash?: Uint8Array;
            }): _95.RequestOfferSnapshot;
            fromSDK(object: _95.RequestOfferSnapshotSDKType): _95.RequestOfferSnapshot;
            toSDK(message: _95.RequestOfferSnapshot): _95.RequestOfferSnapshotSDKType;
            fromAmino(object: _95.RequestOfferSnapshotAmino): _95.RequestOfferSnapshot;
            toAmino(message: _95.RequestOfferSnapshot): _95.RequestOfferSnapshotAmino;
            fromAminoMsg(object: _95.RequestOfferSnapshotAminoMsg): _95.RequestOfferSnapshot;
            fromProtoMsg(message: _95.RequestOfferSnapshotProtoMsg): _95.RequestOfferSnapshot;
            toProto(message: _95.RequestOfferSnapshot): Uint8Array;
            toProtoMsg(message: _95.RequestOfferSnapshot): _95.RequestOfferSnapshotProtoMsg;
        };
        RequestLoadSnapshotChunk: {
            typeUrl: string;
            encode(message: _95.RequestLoadSnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.RequestLoadSnapshotChunk;
            fromJSON(object: any): _95.RequestLoadSnapshotChunk;
            toJSON(message: _95.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: {
                height?: bigint;
                format?: number;
                chunk?: number;
            }): _95.RequestLoadSnapshotChunk;
            fromSDK(object: _95.RequestLoadSnapshotChunkSDKType): _95.RequestLoadSnapshotChunk;
            toSDK(message: _95.RequestLoadSnapshotChunk): _95.RequestLoadSnapshotChunkSDKType;
            fromAmino(object: _95.RequestLoadSnapshotChunkAmino): _95.RequestLoadSnapshotChunk;
            toAmino(message: _95.RequestLoadSnapshotChunk): _95.RequestLoadSnapshotChunkAmino;
            fromAminoMsg(object: _95.RequestLoadSnapshotChunkAminoMsg): _95.RequestLoadSnapshotChunk;
            fromProtoMsg(message: _95.RequestLoadSnapshotChunkProtoMsg): _95.RequestLoadSnapshotChunk;
            toProto(message: _95.RequestLoadSnapshotChunk): Uint8Array;
            toProtoMsg(message: _95.RequestLoadSnapshotChunk): _95.RequestLoadSnapshotChunkProtoMsg;
        };
        RequestApplySnapshotChunk: {
            typeUrl: string;
            encode(message: _95.RequestApplySnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.RequestApplySnapshotChunk;
            fromJSON(object: any): _95.RequestApplySnapshotChunk;
            toJSON(message: _95.RequestApplySnapshotChunk): unknown;
            fromPartial(object: {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            }): _95.RequestApplySnapshotChunk;
            fromSDK(object: _95.RequestApplySnapshotChunkSDKType): _95.RequestApplySnapshotChunk;
            toSDK(message: _95.RequestApplySnapshotChunk): _95.RequestApplySnapshotChunkSDKType;
            fromAmino(object: _95.RequestApplySnapshotChunkAmino): _95.RequestApplySnapshotChunk;
            toAmino(message: _95.RequestApplySnapshotChunk): _95.RequestApplySnapshotChunkAmino;
            fromAminoMsg(object: _95.RequestApplySnapshotChunkAminoMsg): _95.RequestApplySnapshotChunk;
            fromProtoMsg(message: _95.RequestApplySnapshotChunkProtoMsg): _95.RequestApplySnapshotChunk;
            toProto(message: _95.RequestApplySnapshotChunk): Uint8Array;
            toProtoMsg(message: _95.RequestApplySnapshotChunk): _95.RequestApplySnapshotChunkProtoMsg;
        };
        RequestPrepareProposal: {
            typeUrl: string;
            encode(message: _95.RequestPrepareProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.RequestPrepareProposal;
            fromJSON(object: any): _95.RequestPrepareProposal;
            toJSON(message: _95.RequestPrepareProposal): unknown;
            fromPartial(object: {
                maxTxBytes?: bigint;
                txs?: Uint8Array[];
                localLastCommit?: {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: bigint;
                        };
                        signedLastBlock?: boolean;
                        voteExtension?: Uint8Array;
                    }[];
                };
                misbehavior?: {
                    type?: _95.MisbehaviorType;
                    validator?: {
                        address?: Uint8Array;
                        power?: bigint;
                    };
                    height?: bigint;
                    time?: Date;
                    totalVotingPower?: bigint;
                }[];
                height?: bigint;
                time?: Date;
                nextValidatorsHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            }): _95.RequestPrepareProposal;
            fromSDK(object: _95.RequestPrepareProposalSDKType): _95.RequestPrepareProposal;
            toSDK(message: _95.RequestPrepareProposal): _95.RequestPrepareProposalSDKType;
            fromAmino(object: _95.RequestPrepareProposalAmino): _95.RequestPrepareProposal;
            toAmino(message: _95.RequestPrepareProposal): _95.RequestPrepareProposalAmino;
            fromAminoMsg(object: _95.RequestPrepareProposalAminoMsg): _95.RequestPrepareProposal;
            fromProtoMsg(message: _95.RequestPrepareProposalProtoMsg): _95.RequestPrepareProposal;
            toProto(message: _95.RequestPrepareProposal): Uint8Array;
            toProtoMsg(message: _95.RequestPrepareProposal): _95.RequestPrepareProposalProtoMsg;
        };
        RequestProcessProposal: {
            typeUrl: string;
            encode(message: _95.RequestProcessProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.RequestProcessProposal;
            fromJSON(object: any): _95.RequestProcessProposal;
            toJSON(message: _95.RequestProcessProposal): unknown;
            fromPartial(object: {
                txs?: Uint8Array[];
                proposedLastCommit?: {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: bigint;
                        };
                        signedLastBlock?: boolean;
                    }[];
                };
                misbehavior?: {
                    type?: _95.MisbehaviorType;
                    validator?: {
                        address?: Uint8Array;
                        power?: bigint;
                    };
                    height?: bigint;
                    time?: Date;
                    totalVotingPower?: bigint;
                }[];
                hash?: Uint8Array;
                height?: bigint;
                time?: Date;
                nextValidatorsHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            }): _95.RequestProcessProposal;
            fromSDK(object: _95.RequestProcessProposalSDKType): _95.RequestProcessProposal;
            toSDK(message: _95.RequestProcessProposal): _95.RequestProcessProposalSDKType;
            fromAmino(object: _95.RequestProcessProposalAmino): _95.RequestProcessProposal;
            toAmino(message: _95.RequestProcessProposal): _95.RequestProcessProposalAmino;
            fromAminoMsg(object: _95.RequestProcessProposalAminoMsg): _95.RequestProcessProposal;
            fromProtoMsg(message: _95.RequestProcessProposalProtoMsg): _95.RequestProcessProposal;
            toProto(message: _95.RequestProcessProposal): Uint8Array;
            toProtoMsg(message: _95.RequestProcessProposal): _95.RequestProcessProposalProtoMsg;
        };
        Response: {
            typeUrl: string;
            encode(message: _95.Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.Response;
            fromJSON(object: any): _95.Response;
            toJSON(message: _95.Response): unknown;
            fromPartial(object: {
                exception?: {
                    error?: string;
                };
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    data?: string;
                    version?: string;
                    appVersion?: bigint;
                    lastBlockHeight?: bigint;
                    lastBlockAppHash?: Uint8Array;
                };
                initChain?: {
                    consensusParams?: {
                        block?: {
                            maxBytes?: bigint;
                            maxGas?: bigint;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: bigint;
                            maxAgeDuration?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            maxBytes?: bigint;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            app?: bigint;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: bigint;
                    }[];
                    appHash?: Uint8Array;
                };
                query?: {
                    code?: number;
                    log?: string;
                    info?: string;
                    index?: bigint;
                    key?: Uint8Array;
                    value?: Uint8Array;
                    proofOps?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    };
                    height?: bigint;
                    codespace?: string;
                };
                beginBlock?: {
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                            index?: boolean;
                        }[];
                    }[];
                };
                checkTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: bigint;
                    gasUsed?: bigint;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                    sender?: string;
                    priority?: bigint;
                    mempoolError?: string;
                };
                deliverTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: bigint;
                    gasUsed?: bigint;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                endBlock?: {
                    validatorUpdates?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: bigint;
                    }[];
                    consensusParamUpdates?: {
                        block?: {
                            maxBytes?: bigint;
                            maxGas?: bigint;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: bigint;
                            maxAgeDuration?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            maxBytes?: bigint;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            app?: bigint;
                        };
                    };
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                            index?: boolean;
                        }[];
                    }[];
                };
                commit?: {
                    data?: Uint8Array;
                    retainHeight?: bigint;
                };
                listSnapshots?: {
                    snapshots?: {
                        height?: bigint;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[];
                };
                offerSnapshot?: {
                    result?: _95.ResponseOfferSnapshot_Result;
                };
                loadSnapshotChunk?: {
                    chunk?: Uint8Array;
                };
                applySnapshotChunk?: {
                    result?: _95.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[];
                    rejectSenders?: string[];
                };
                prepareProposal?: {
                    txs?: Uint8Array[];
                };
                processProposal?: {
                    status?: _95.ResponseProcessProposal_ProposalStatus;
                };
            }): _95.Response;
            fromSDK(object: _95.ResponseSDKType): _95.Response;
            toSDK(message: _95.Response): _95.ResponseSDKType;
            fromAmino(object: _95.ResponseAmino): _95.Response;
            toAmino(message: _95.Response): _95.ResponseAmino;
            fromAminoMsg(object: _95.ResponseAminoMsg): _95.Response;
            fromProtoMsg(message: _95.ResponseProtoMsg): _95.Response;
            toProto(message: _95.Response): Uint8Array;
            toProtoMsg(message: _95.Response): _95.ResponseProtoMsg;
        };
        ResponseException: {
            typeUrl: string;
            encode(message: _95.ResponseException, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.ResponseException;
            fromJSON(object: any): _95.ResponseException;
            toJSON(message: _95.ResponseException): unknown;
            fromPartial(object: {
                error?: string;
            }): _95.ResponseException;
            fromSDK(object: _95.ResponseExceptionSDKType): _95.ResponseException;
            toSDK(message: _95.ResponseException): _95.ResponseExceptionSDKType;
            fromAmino(object: _95.ResponseExceptionAmino): _95.ResponseException;
            toAmino(message: _95.ResponseException): _95.ResponseExceptionAmino;
            fromAminoMsg(object: _95.ResponseExceptionAminoMsg): _95.ResponseException;
            fromProtoMsg(message: _95.ResponseExceptionProtoMsg): _95.ResponseException;
            toProto(message: _95.ResponseException): Uint8Array;
            toProtoMsg(message: _95.ResponseException): _95.ResponseExceptionProtoMsg;
        };
        ResponseEcho: {
            typeUrl: string;
            encode(message: _95.ResponseEcho, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.ResponseEcho;
            fromJSON(object: any): _95.ResponseEcho;
            toJSON(message: _95.ResponseEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _95.ResponseEcho;
            fromSDK(object: _95.ResponseEchoSDKType): _95.ResponseEcho;
            toSDK(message: _95.ResponseEcho): _95.ResponseEchoSDKType;
            fromAmino(object: _95.ResponseEchoAmino): _95.ResponseEcho;
            toAmino(message: _95.ResponseEcho): _95.ResponseEchoAmino;
            fromAminoMsg(object: _95.ResponseEchoAminoMsg): _95.ResponseEcho;
            fromProtoMsg(message: _95.ResponseEchoProtoMsg): _95.ResponseEcho;
            toProto(message: _95.ResponseEcho): Uint8Array;
            toProtoMsg(message: _95.ResponseEcho): _95.ResponseEchoProtoMsg;
        };
        ResponseFlush: {
            typeUrl: string;
            encode(_: _95.ResponseFlush, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.ResponseFlush;
            fromJSON(_: any): _95.ResponseFlush;
            toJSON(_: _95.ResponseFlush): unknown;
            fromPartial(_: {}): _95.ResponseFlush;
            fromSDK(_: _95.ResponseFlushSDKType): _95.ResponseFlush;
            toSDK(_: _95.ResponseFlush): _95.ResponseFlushSDKType;
            fromAmino(_: _95.ResponseFlushAmino): _95.ResponseFlush;
            toAmino(_: _95.ResponseFlush): _95.ResponseFlushAmino;
            fromAminoMsg(object: _95.ResponseFlushAminoMsg): _95.ResponseFlush;
            fromProtoMsg(message: _95.ResponseFlushProtoMsg): _95.ResponseFlush;
            toProto(message: _95.ResponseFlush): Uint8Array;
            toProtoMsg(message: _95.ResponseFlush): _95.ResponseFlushProtoMsg;
        };
        ResponseInfo: {
            typeUrl: string;
            encode(message: _95.ResponseInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.ResponseInfo;
            fromJSON(object: any): _95.ResponseInfo;
            toJSON(message: _95.ResponseInfo): unknown;
            fromPartial(object: {
                data?: string;
                version?: string;
                appVersion?: bigint;
                lastBlockHeight?: bigint;
                lastBlockAppHash?: Uint8Array;
            }): _95.ResponseInfo;
            fromSDK(object: _95.ResponseInfoSDKType): _95.ResponseInfo;
            toSDK(message: _95.ResponseInfo): _95.ResponseInfoSDKType;
            fromAmino(object: _95.ResponseInfoAmino): _95.ResponseInfo;
            toAmino(message: _95.ResponseInfo): _95.ResponseInfoAmino;
            fromAminoMsg(object: _95.ResponseInfoAminoMsg): _95.ResponseInfo;
            fromProtoMsg(message: _95.ResponseInfoProtoMsg): _95.ResponseInfo;
            toProto(message: _95.ResponseInfo): Uint8Array;
            toProtoMsg(message: _95.ResponseInfo): _95.ResponseInfoProtoMsg;
        };
        ResponseInitChain: {
            typeUrl: string;
            encode(message: _95.ResponseInitChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.ResponseInitChain;
            fromJSON(object: any): _95.ResponseInitChain;
            toJSON(message: _95.ResponseInitChain): unknown;
            fromPartial(object: {
                consensusParams?: {
                    block?: {
                        maxBytes?: bigint;
                        maxGas?: bigint;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: bigint;
                        maxAgeDuration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        maxBytes?: bigint;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        app?: bigint;
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: bigint;
                }[];
                appHash?: Uint8Array;
            }): _95.ResponseInitChain;
            fromSDK(object: _95.ResponseInitChainSDKType): _95.ResponseInitChain;
            toSDK(message: _95.ResponseInitChain): _95.ResponseInitChainSDKType;
            fromAmino(object: _95.ResponseInitChainAmino): _95.ResponseInitChain;
            toAmino(message: _95.ResponseInitChain): _95.ResponseInitChainAmino;
            fromAminoMsg(object: _95.ResponseInitChainAminoMsg): _95.ResponseInitChain;
            fromProtoMsg(message: _95.ResponseInitChainProtoMsg): _95.ResponseInitChain;
            toProto(message: _95.ResponseInitChain): Uint8Array;
            toProtoMsg(message: _95.ResponseInitChain): _95.ResponseInitChainProtoMsg;
        };
        ResponseQuery: {
            typeUrl: string;
            encode(message: _95.ResponseQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.ResponseQuery;
            fromJSON(object: any): _95.ResponseQuery;
            toJSON(message: _95.ResponseQuery): unknown;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
                index?: bigint;
                key?: Uint8Array;
                value?: Uint8Array;
                proofOps?: {
                    ops?: {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                };
                height?: bigint;
                codespace?: string;
            }): _95.ResponseQuery;
            fromSDK(object: _95.ResponseQuerySDKType): _95.ResponseQuery;
            toSDK(message: _95.ResponseQuery): _95.ResponseQuerySDKType;
            fromAmino(object: _95.ResponseQueryAmino): _95.ResponseQuery;
            toAmino(message: _95.ResponseQuery): _95.ResponseQueryAmino;
            fromAminoMsg(object: _95.ResponseQueryAminoMsg): _95.ResponseQuery;
            fromProtoMsg(message: _95.ResponseQueryProtoMsg): _95.ResponseQuery;
            toProto(message: _95.ResponseQuery): Uint8Array;
            toProtoMsg(message: _95.ResponseQuery): _95.ResponseQueryProtoMsg;
        };
        ResponseBeginBlock: {
            typeUrl: string;
            encode(message: _95.ResponseBeginBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.ResponseBeginBlock;
            fromJSON(object: any): _95.ResponseBeginBlock;
            toJSON(message: _95.ResponseBeginBlock): unknown;
            fromPartial(object: {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                        index?: boolean;
                    }[];
                }[];
            }): _95.ResponseBeginBlock;
            fromSDK(object: _95.ResponseBeginBlockSDKType): _95.ResponseBeginBlock;
            toSDK(message: _95.ResponseBeginBlock): _95.ResponseBeginBlockSDKType;
            fromAmino(object: _95.ResponseBeginBlockAmino): _95.ResponseBeginBlock;
            toAmino(message: _95.ResponseBeginBlock): _95.ResponseBeginBlockAmino;
            fromAminoMsg(object: _95.ResponseBeginBlockAminoMsg): _95.ResponseBeginBlock;
            fromProtoMsg(message: _95.ResponseBeginBlockProtoMsg): _95.ResponseBeginBlock;
            toProto(message: _95.ResponseBeginBlock): Uint8Array;
            toProtoMsg(message: _95.ResponseBeginBlock): _95.ResponseBeginBlockProtoMsg;
        };
        ResponseCheckTx: {
            typeUrl: string;
            encode(message: _95.ResponseCheckTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.ResponseCheckTx;
            fromJSON(object: any): _95.ResponseCheckTx;
            toJSON(message: _95.ResponseCheckTx): unknown;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: bigint;
                gasUsed?: bigint;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
                sender?: string;
                priority?: bigint;
                mempoolError?: string;
            }): _95.ResponseCheckTx;
            fromSDK(object: _95.ResponseCheckTxSDKType): _95.ResponseCheckTx;
            toSDK(message: _95.ResponseCheckTx): _95.ResponseCheckTxSDKType;
            fromAmino(object: _95.ResponseCheckTxAmino): _95.ResponseCheckTx;
            toAmino(message: _95.ResponseCheckTx): _95.ResponseCheckTxAmino;
            fromAminoMsg(object: _95.ResponseCheckTxAminoMsg): _95.ResponseCheckTx;
            fromProtoMsg(message: _95.ResponseCheckTxProtoMsg): _95.ResponseCheckTx;
            toProto(message: _95.ResponseCheckTx): Uint8Array;
            toProtoMsg(message: _95.ResponseCheckTx): _95.ResponseCheckTxProtoMsg;
        };
        ResponseDeliverTx: {
            typeUrl: string;
            encode(message: _95.ResponseDeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.ResponseDeliverTx;
            fromJSON(object: any): _95.ResponseDeliverTx;
            toJSON(message: _95.ResponseDeliverTx): unknown;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: bigint;
                gasUsed?: bigint;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _95.ResponseDeliverTx;
            fromSDK(object: _95.ResponseDeliverTxSDKType): _95.ResponseDeliverTx;
            toSDK(message: _95.ResponseDeliverTx): _95.ResponseDeliverTxSDKType;
            fromAmino(object: _95.ResponseDeliverTxAmino): _95.ResponseDeliverTx;
            toAmino(message: _95.ResponseDeliverTx): _95.ResponseDeliverTxAmino;
            fromAminoMsg(object: _95.ResponseDeliverTxAminoMsg): _95.ResponseDeliverTx;
            fromProtoMsg(message: _95.ResponseDeliverTxProtoMsg): _95.ResponseDeliverTx;
            toProto(message: _95.ResponseDeliverTx): Uint8Array;
            toProtoMsg(message: _95.ResponseDeliverTx): _95.ResponseDeliverTxProtoMsg;
        };
        ResponseEndBlock: {
            typeUrl: string;
            encode(message: _95.ResponseEndBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.ResponseEndBlock;
            fromJSON(object: any): _95.ResponseEndBlock;
            toJSON(message: _95.ResponseEndBlock): unknown;
            fromPartial(object: {
                validatorUpdates?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: bigint;
                }[];
                consensusParamUpdates?: {
                    block?: {
                        maxBytes?: bigint;
                        maxGas?: bigint;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: bigint;
                        maxAgeDuration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        maxBytes?: bigint;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        app?: bigint;
                    };
                };
                events?: {
                    type?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                        index?: boolean;
                    }[];
                }[];
            }): _95.ResponseEndBlock;
            fromSDK(object: _95.ResponseEndBlockSDKType): _95.ResponseEndBlock;
            toSDK(message: _95.ResponseEndBlock): _95.ResponseEndBlockSDKType;
            fromAmino(object: _95.ResponseEndBlockAmino): _95.ResponseEndBlock;
            toAmino(message: _95.ResponseEndBlock): _95.ResponseEndBlockAmino;
            fromAminoMsg(object: _95.ResponseEndBlockAminoMsg): _95.ResponseEndBlock;
            fromProtoMsg(message: _95.ResponseEndBlockProtoMsg): _95.ResponseEndBlock;
            toProto(message: _95.ResponseEndBlock): Uint8Array;
            toProtoMsg(message: _95.ResponseEndBlock): _95.ResponseEndBlockProtoMsg;
        };
        ResponseCommit: {
            typeUrl: string;
            encode(message: _95.ResponseCommit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.ResponseCommit;
            fromJSON(object: any): _95.ResponseCommit;
            toJSON(message: _95.ResponseCommit): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                retainHeight?: bigint;
            }): _95.ResponseCommit;
            fromSDK(object: _95.ResponseCommitSDKType): _95.ResponseCommit;
            toSDK(message: _95.ResponseCommit): _95.ResponseCommitSDKType;
            fromAmino(object: _95.ResponseCommitAmino): _95.ResponseCommit;
            toAmino(message: _95.ResponseCommit): _95.ResponseCommitAmino;
            fromAminoMsg(object: _95.ResponseCommitAminoMsg): _95.ResponseCommit;
            fromProtoMsg(message: _95.ResponseCommitProtoMsg): _95.ResponseCommit;
            toProto(message: _95.ResponseCommit): Uint8Array;
            toProtoMsg(message: _95.ResponseCommit): _95.ResponseCommitProtoMsg;
        };
        ResponseListSnapshots: {
            typeUrl: string;
            encode(message: _95.ResponseListSnapshots, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.ResponseListSnapshots;
            fromJSON(object: any): _95.ResponseListSnapshots;
            toJSON(message: _95.ResponseListSnapshots): unknown;
            fromPartial(object: {
                snapshots?: {
                    height?: bigint;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[];
            }): _95.ResponseListSnapshots;
            fromSDK(object: _95.ResponseListSnapshotsSDKType): _95.ResponseListSnapshots;
            toSDK(message: _95.ResponseListSnapshots): _95.ResponseListSnapshotsSDKType;
            fromAmino(object: _95.ResponseListSnapshotsAmino): _95.ResponseListSnapshots;
            toAmino(message: _95.ResponseListSnapshots): _95.ResponseListSnapshotsAmino;
            fromAminoMsg(object: _95.ResponseListSnapshotsAminoMsg): _95.ResponseListSnapshots;
            fromProtoMsg(message: _95.ResponseListSnapshotsProtoMsg): _95.ResponseListSnapshots;
            toProto(message: _95.ResponseListSnapshots): Uint8Array;
            toProtoMsg(message: _95.ResponseListSnapshots): _95.ResponseListSnapshotsProtoMsg;
        };
        ResponseOfferSnapshot: {
            typeUrl: string;
            encode(message: _95.ResponseOfferSnapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.ResponseOfferSnapshot;
            fromJSON(object: any): _95.ResponseOfferSnapshot;
            toJSON(message: _95.ResponseOfferSnapshot): unknown;
            fromPartial(object: {
                result?: _95.ResponseOfferSnapshot_Result;
            }): _95.ResponseOfferSnapshot;
            fromSDK(object: _95.ResponseOfferSnapshotSDKType): _95.ResponseOfferSnapshot;
            toSDK(message: _95.ResponseOfferSnapshot): _95.ResponseOfferSnapshotSDKType;
            fromAmino(object: _95.ResponseOfferSnapshotAmino): _95.ResponseOfferSnapshot;
            toAmino(message: _95.ResponseOfferSnapshot): _95.ResponseOfferSnapshotAmino;
            fromAminoMsg(object: _95.ResponseOfferSnapshotAminoMsg): _95.ResponseOfferSnapshot;
            fromProtoMsg(message: _95.ResponseOfferSnapshotProtoMsg): _95.ResponseOfferSnapshot;
            toProto(message: _95.ResponseOfferSnapshot): Uint8Array;
            toProtoMsg(message: _95.ResponseOfferSnapshot): _95.ResponseOfferSnapshotProtoMsg;
        };
        ResponseLoadSnapshotChunk: {
            typeUrl: string;
            encode(message: _95.ResponseLoadSnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _95.ResponseLoadSnapshotChunk;
            toJSON(message: _95.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: {
                chunk?: Uint8Array;
            }): _95.ResponseLoadSnapshotChunk;
            fromSDK(object: _95.ResponseLoadSnapshotChunkSDKType): _95.ResponseLoadSnapshotChunk;
            toSDK(message: _95.ResponseLoadSnapshotChunk): _95.ResponseLoadSnapshotChunkSDKType;
            fromAmino(object: _95.ResponseLoadSnapshotChunkAmino): _95.ResponseLoadSnapshotChunk;
            toAmino(message: _95.ResponseLoadSnapshotChunk): _95.ResponseLoadSnapshotChunkAmino;
            fromAminoMsg(object: _95.ResponseLoadSnapshotChunkAminoMsg): _95.ResponseLoadSnapshotChunk;
            fromProtoMsg(message: _95.ResponseLoadSnapshotChunkProtoMsg): _95.ResponseLoadSnapshotChunk;
            toProto(message: _95.ResponseLoadSnapshotChunk): Uint8Array;
            toProtoMsg(message: _95.ResponseLoadSnapshotChunk): _95.ResponseLoadSnapshotChunkProtoMsg;
        };
        ResponseApplySnapshotChunk: {
            typeUrl: string;
            encode(message: _95.ResponseApplySnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.ResponseApplySnapshotChunk;
            fromJSON(object: any): _95.ResponseApplySnapshotChunk;
            toJSON(message: _95.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: {
                result?: _95.ResponseApplySnapshotChunk_Result;
                refetchChunks?: number[];
                rejectSenders?: string[];
            }): _95.ResponseApplySnapshotChunk;
            fromSDK(object: _95.ResponseApplySnapshotChunkSDKType): _95.ResponseApplySnapshotChunk;
            toSDK(message: _95.ResponseApplySnapshotChunk): _95.ResponseApplySnapshotChunkSDKType;
            fromAmino(object: _95.ResponseApplySnapshotChunkAmino): _95.ResponseApplySnapshotChunk;
            toAmino(message: _95.ResponseApplySnapshotChunk): _95.ResponseApplySnapshotChunkAmino;
            fromAminoMsg(object: _95.ResponseApplySnapshotChunkAminoMsg): _95.ResponseApplySnapshotChunk;
            fromProtoMsg(message: _95.ResponseApplySnapshotChunkProtoMsg): _95.ResponseApplySnapshotChunk;
            toProto(message: _95.ResponseApplySnapshotChunk): Uint8Array;
            toProtoMsg(message: _95.ResponseApplySnapshotChunk): _95.ResponseApplySnapshotChunkProtoMsg;
        };
        ResponsePrepareProposal: {
            typeUrl: string;
            encode(message: _95.ResponsePrepareProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.ResponsePrepareProposal;
            fromJSON(object: any): _95.ResponsePrepareProposal;
            toJSON(message: _95.ResponsePrepareProposal): unknown;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _95.ResponsePrepareProposal;
            fromSDK(object: _95.ResponsePrepareProposalSDKType): _95.ResponsePrepareProposal;
            toSDK(message: _95.ResponsePrepareProposal): _95.ResponsePrepareProposalSDKType;
            fromAmino(object: _95.ResponsePrepareProposalAmino): _95.ResponsePrepareProposal;
            toAmino(message: _95.ResponsePrepareProposal): _95.ResponsePrepareProposalAmino;
            fromAminoMsg(object: _95.ResponsePrepareProposalAminoMsg): _95.ResponsePrepareProposal;
            fromProtoMsg(message: _95.ResponsePrepareProposalProtoMsg): _95.ResponsePrepareProposal;
            toProto(message: _95.ResponsePrepareProposal): Uint8Array;
            toProtoMsg(message: _95.ResponsePrepareProposal): _95.ResponsePrepareProposalProtoMsg;
        };
        ResponseProcessProposal: {
            typeUrl: string;
            encode(message: _95.ResponseProcessProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.ResponseProcessProposal;
            fromJSON(object: any): _95.ResponseProcessProposal;
            toJSON(message: _95.ResponseProcessProposal): unknown;
            fromPartial(object: {
                status?: _95.ResponseProcessProposal_ProposalStatus;
            }): _95.ResponseProcessProposal;
            fromSDK(object: _95.ResponseProcessProposalSDKType): _95.ResponseProcessProposal;
            toSDK(message: _95.ResponseProcessProposal): _95.ResponseProcessProposalSDKType;
            fromAmino(object: _95.ResponseProcessProposalAmino): _95.ResponseProcessProposal;
            toAmino(message: _95.ResponseProcessProposal): _95.ResponseProcessProposalAmino;
            fromAminoMsg(object: _95.ResponseProcessProposalAminoMsg): _95.ResponseProcessProposal;
            fromProtoMsg(message: _95.ResponseProcessProposalProtoMsg): _95.ResponseProcessProposal;
            toProto(message: _95.ResponseProcessProposal): Uint8Array;
            toProtoMsg(message: _95.ResponseProcessProposal): _95.ResponseProcessProposalProtoMsg;
        };
        CommitInfo: {
            typeUrl: string;
            encode(message: _95.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.CommitInfo;
            fromJSON(object: any): _95.CommitInfo;
            toJSON(message: _95.CommitInfo): unknown;
            fromPartial(object: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: bigint;
                    };
                    signedLastBlock?: boolean;
                }[];
            }): _95.CommitInfo;
            fromSDK(object: _95.CommitInfoSDKType): _95.CommitInfo;
            toSDK(message: _95.CommitInfo): _95.CommitInfoSDKType;
            fromAmino(object: _95.CommitInfoAmino): _95.CommitInfo;
            toAmino(message: _95.CommitInfo): _95.CommitInfoAmino;
            fromAminoMsg(object: _95.CommitInfoAminoMsg): _95.CommitInfo;
            fromProtoMsg(message: _95.CommitInfoProtoMsg): _95.CommitInfo;
            toProto(message: _95.CommitInfo): Uint8Array;
            toProtoMsg(message: _95.CommitInfo): _95.CommitInfoProtoMsg;
        };
        ExtendedCommitInfo: {
            typeUrl: string;
            encode(message: _95.ExtendedCommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.ExtendedCommitInfo;
            fromJSON(object: any): _95.ExtendedCommitInfo;
            toJSON(message: _95.ExtendedCommitInfo): unknown;
            fromPartial(object: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: bigint;
                    };
                    signedLastBlock?: boolean;
                    voteExtension?: Uint8Array;
                }[];
            }): _95.ExtendedCommitInfo;
            fromSDK(object: _95.ExtendedCommitInfoSDKType): _95.ExtendedCommitInfo;
            toSDK(message: _95.ExtendedCommitInfo): _95.ExtendedCommitInfoSDKType;
            fromAmino(object: _95.ExtendedCommitInfoAmino): _95.ExtendedCommitInfo;
            toAmino(message: _95.ExtendedCommitInfo): _95.ExtendedCommitInfoAmino;
            fromAminoMsg(object: _95.ExtendedCommitInfoAminoMsg): _95.ExtendedCommitInfo;
            fromProtoMsg(message: _95.ExtendedCommitInfoProtoMsg): _95.ExtendedCommitInfo;
            toProto(message: _95.ExtendedCommitInfo): Uint8Array;
            toProtoMsg(message: _95.ExtendedCommitInfo): _95.ExtendedCommitInfoProtoMsg;
        };
        Event: {
            typeUrl: string;
            encode(message: _95.Event, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.Event;
            fromJSON(object: any): _95.Event;
            toJSON(message: _95.Event): unknown;
            fromPartial(object: {
                type?: string;
                attributes?: {
                    key?: string;
                    value?: string;
                    index?: boolean;
                }[];
            }): _95.Event;
            fromSDK(object: _95.EventSDKType): _95.Event;
            toSDK(message: _95.Event): _95.EventSDKType;
            fromAmino(object: _95.EventAmino): _95.Event;
            toAmino(message: _95.Event): _95.EventAmino;
            fromAminoMsg(object: _95.EventAminoMsg): _95.Event;
            fromProtoMsg(message: _95.EventProtoMsg): _95.Event;
            toProto(message: _95.Event): Uint8Array;
            toProtoMsg(message: _95.Event): _95.EventProtoMsg;
        };
        EventAttribute: {
            typeUrl: string;
            encode(message: _95.EventAttribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.EventAttribute;
            fromJSON(object: any): _95.EventAttribute;
            toJSON(message: _95.EventAttribute): unknown;
            fromPartial(object: {
                key?: string;
                value?: string;
                index?: boolean;
            }): _95.EventAttribute;
            fromSDK(object: _95.EventAttributeSDKType): _95.EventAttribute;
            toSDK(message: _95.EventAttribute): _95.EventAttributeSDKType;
            fromAmino(object: _95.EventAttributeAmino): _95.EventAttribute;
            toAmino(message: _95.EventAttribute): _95.EventAttributeAmino;
            fromAminoMsg(object: _95.EventAttributeAminoMsg): _95.EventAttribute;
            fromProtoMsg(message: _95.EventAttributeProtoMsg): _95.EventAttribute;
            toProto(message: _95.EventAttribute): Uint8Array;
            toProtoMsg(message: _95.EventAttribute): _95.EventAttributeProtoMsg;
        };
        TxResult: {
            typeUrl: string;
            encode(message: _95.TxResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.TxResult;
            fromJSON(object: any): _95.TxResult;
            toJSON(message: _95.TxResult): unknown;
            fromPartial(object: {
                height?: bigint;
                index?: number;
                tx?: Uint8Array;
                result?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: bigint;
                    gasUsed?: bigint;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
            }): _95.TxResult;
            fromSDK(object: _95.TxResultSDKType): _95.TxResult;
            toSDK(message: _95.TxResult): _95.TxResultSDKType;
            fromAmino(object: _95.TxResultAmino): _95.TxResult;
            toAmino(message: _95.TxResult): _95.TxResultAmino;
            fromAminoMsg(object: _95.TxResultAminoMsg): _95.TxResult;
            fromProtoMsg(message: _95.TxResultProtoMsg): _95.TxResult;
            toProto(message: _95.TxResult): Uint8Array;
            toProtoMsg(message: _95.TxResult): _95.TxResultProtoMsg;
        };
        Validator: {
            typeUrl: string;
            encode(message: _95.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.Validator;
            fromJSON(object: any): _95.Validator;
            toJSON(message: _95.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                power?: bigint;
            }): _95.Validator;
            fromSDK(object: _95.ValidatorSDKType): _95.Validator;
            toSDK(message: _95.Validator): _95.ValidatorSDKType;
            fromAmino(object: _95.ValidatorAmino): _95.Validator;
            toAmino(message: _95.Validator): _95.ValidatorAmino;
            fromAminoMsg(object: _95.ValidatorAminoMsg): _95.Validator;
            fromProtoMsg(message: _95.ValidatorProtoMsg): _95.Validator;
            toProto(message: _95.Validator): Uint8Array;
            toProtoMsg(message: _95.Validator): _95.ValidatorProtoMsg;
        };
        ValidatorUpdate: {
            typeUrl: string;
            encode(message: _95.ValidatorUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.ValidatorUpdate;
            fromJSON(object: any): _95.ValidatorUpdate;
            toJSON(message: _95.ValidatorUpdate): unknown;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: bigint;
            }): _95.ValidatorUpdate;
            fromSDK(object: _95.ValidatorUpdateSDKType): _95.ValidatorUpdate;
            toSDK(message: _95.ValidatorUpdate): _95.ValidatorUpdateSDKType;
            fromAmino(object: _95.ValidatorUpdateAmino): _95.ValidatorUpdate;
            toAmino(message: _95.ValidatorUpdate): _95.ValidatorUpdateAmino;
            fromAminoMsg(object: _95.ValidatorUpdateAminoMsg): _95.ValidatorUpdate;
            fromProtoMsg(message: _95.ValidatorUpdateProtoMsg): _95.ValidatorUpdate;
            toProto(message: _95.ValidatorUpdate): Uint8Array;
            toProtoMsg(message: _95.ValidatorUpdate): _95.ValidatorUpdateProtoMsg;
        };
        VoteInfo: {
            typeUrl: string;
            encode(message: _95.VoteInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.VoteInfo;
            fromJSON(object: any): _95.VoteInfo;
            toJSON(message: _95.VoteInfo): unknown;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: bigint;
                };
                signedLastBlock?: boolean;
            }): _95.VoteInfo;
            fromSDK(object: _95.VoteInfoSDKType): _95.VoteInfo;
            toSDK(message: _95.VoteInfo): _95.VoteInfoSDKType;
            fromAmino(object: _95.VoteInfoAmino): _95.VoteInfo;
            toAmino(message: _95.VoteInfo): _95.VoteInfoAmino;
            fromAminoMsg(object: _95.VoteInfoAminoMsg): _95.VoteInfo;
            fromProtoMsg(message: _95.VoteInfoProtoMsg): _95.VoteInfo;
            toProto(message: _95.VoteInfo): Uint8Array;
            toProtoMsg(message: _95.VoteInfo): _95.VoteInfoProtoMsg;
        };
        ExtendedVoteInfo: {
            typeUrl: string;
            encode(message: _95.ExtendedVoteInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.ExtendedVoteInfo;
            fromJSON(object: any): _95.ExtendedVoteInfo;
            toJSON(message: _95.ExtendedVoteInfo): unknown;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: bigint;
                };
                signedLastBlock?: boolean;
                voteExtension?: Uint8Array;
            }): _95.ExtendedVoteInfo;
            fromSDK(object: _95.ExtendedVoteInfoSDKType): _95.ExtendedVoteInfo;
            toSDK(message: _95.ExtendedVoteInfo): _95.ExtendedVoteInfoSDKType;
            fromAmino(object: _95.ExtendedVoteInfoAmino): _95.ExtendedVoteInfo;
            toAmino(message: _95.ExtendedVoteInfo): _95.ExtendedVoteInfoAmino;
            fromAminoMsg(object: _95.ExtendedVoteInfoAminoMsg): _95.ExtendedVoteInfo;
            fromProtoMsg(message: _95.ExtendedVoteInfoProtoMsg): _95.ExtendedVoteInfo;
            toProto(message: _95.ExtendedVoteInfo): Uint8Array;
            toProtoMsg(message: _95.ExtendedVoteInfo): _95.ExtendedVoteInfoProtoMsg;
        };
        Misbehavior: {
            typeUrl: string;
            encode(message: _95.Misbehavior, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.Misbehavior;
            fromJSON(object: any): _95.Misbehavior;
            toJSON(message: _95.Misbehavior): unknown;
            fromPartial(object: {
                type?: _95.MisbehaviorType;
                validator?: {
                    address?: Uint8Array;
                    power?: bigint;
                };
                height?: bigint;
                time?: Date;
                totalVotingPower?: bigint;
            }): _95.Misbehavior;
            fromSDK(object: _95.MisbehaviorSDKType): _95.Misbehavior;
            toSDK(message: _95.Misbehavior): _95.MisbehaviorSDKType;
            fromAmino(object: _95.MisbehaviorAmino): _95.Misbehavior;
            toAmino(message: _95.Misbehavior): _95.MisbehaviorAmino;
            fromAminoMsg(object: _95.MisbehaviorAminoMsg): _95.Misbehavior;
            fromProtoMsg(message: _95.MisbehaviorProtoMsg): _95.Misbehavior;
            toProto(message: _95.Misbehavior): Uint8Array;
            toProtoMsg(message: _95.Misbehavior): _95.MisbehaviorProtoMsg;
        };
        Snapshot: {
            typeUrl: string;
            encode(message: _95.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.Snapshot;
            fromJSON(object: any): _95.Snapshot;
            toJSON(message: _95.Snapshot): unknown;
            fromPartial(object: {
                height?: bigint;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }): _95.Snapshot;
            fromSDK(object: _95.SnapshotSDKType): _95.Snapshot;
            toSDK(message: _95.Snapshot): _95.SnapshotSDKType;
            fromAmino(object: _95.SnapshotAmino): _95.Snapshot;
            toAmino(message: _95.Snapshot): _95.SnapshotAmino;
            fromAminoMsg(object: _95.SnapshotAminoMsg): _95.Snapshot;
            fromProtoMsg(message: _95.SnapshotProtoMsg): _95.Snapshot;
            toProto(message: _95.Snapshot): Uint8Array;
            toProtoMsg(message: _95.Snapshot): _95.SnapshotProtoMsg;
        };
    };
    const crypto: {
        Proof: {
            typeUrl: string;
            encode(message: _97.Proof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.Proof;
            fromJSON(object: any): _97.Proof;
            toJSON(message: _97.Proof): unknown;
            fromPartial(object: {
                total?: bigint;
                index?: bigint;
                leafHash?: Uint8Array;
                aunts?: Uint8Array[];
            }): _97.Proof;
            fromSDK(object: _97.ProofSDKType): _97.Proof;
            toSDK(message: _97.Proof): _97.ProofSDKType;
            fromAmino(object: _97.ProofAmino): _97.Proof;
            toAmino(message: _97.Proof): _97.ProofAmino;
            fromAminoMsg(object: _97.ProofAminoMsg): _97.Proof;
            fromProtoMsg(message: _97.ProofProtoMsg): _97.Proof;
            toProto(message: _97.Proof): Uint8Array;
            toProtoMsg(message: _97.Proof): _97.ProofProtoMsg;
        };
        ValueOp: {
            typeUrl: string;
            encode(message: _97.ValueOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.ValueOp;
            fromJSON(object: any): _97.ValueOp;
            toJSON(message: _97.ValueOp): unknown;
            fromPartial(object: {
                key?: Uint8Array;
                proof?: {
                    total?: bigint;
                    index?: bigint;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _97.ValueOp;
            fromSDK(object: _97.ValueOpSDKType): _97.ValueOp;
            toSDK(message: _97.ValueOp): _97.ValueOpSDKType;
            fromAmino(object: _97.ValueOpAmino): _97.ValueOp;
            toAmino(message: _97.ValueOp): _97.ValueOpAmino;
            fromAminoMsg(object: _97.ValueOpAminoMsg): _97.ValueOp;
            fromProtoMsg(message: _97.ValueOpProtoMsg): _97.ValueOp;
            toProto(message: _97.ValueOp): Uint8Array;
            toProtoMsg(message: _97.ValueOp): _97.ValueOpProtoMsg;
        };
        DominoOp: {
            typeUrl: string;
            encode(message: _97.DominoOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.DominoOp;
            fromJSON(object: any): _97.DominoOp;
            toJSON(message: _97.DominoOp): unknown;
            fromPartial(object: {
                key?: string;
                input?: string;
                output?: string;
            }): _97.DominoOp;
            fromSDK(object: _97.DominoOpSDKType): _97.DominoOp;
            toSDK(message: _97.DominoOp): _97.DominoOpSDKType;
            fromAmino(object: _97.DominoOpAmino): _97.DominoOp;
            toAmino(message: _97.DominoOp): _97.DominoOpAmino;
            fromAminoMsg(object: _97.DominoOpAminoMsg): _97.DominoOp;
            fromProtoMsg(message: _97.DominoOpProtoMsg): _97.DominoOp;
            toProto(message: _97.DominoOp): Uint8Array;
            toProtoMsg(message: _97.DominoOp): _97.DominoOpProtoMsg;
        };
        ProofOp: {
            typeUrl: string;
            encode(message: _97.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.ProofOp;
            fromJSON(object: any): _97.ProofOp;
            toJSON(message: _97.ProofOp): unknown;
            fromPartial(object: {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            }): _97.ProofOp;
            fromSDK(object: _97.ProofOpSDKType): _97.ProofOp;
            toSDK(message: _97.ProofOp): _97.ProofOpSDKType;
            fromAmino(object: _97.ProofOpAmino): _97.ProofOp;
            toAmino(message: _97.ProofOp): _97.ProofOpAmino;
            fromAminoMsg(object: _97.ProofOpAminoMsg): _97.ProofOp;
            fromProtoMsg(message: _97.ProofOpProtoMsg): _97.ProofOp;
            toProto(message: _97.ProofOp): Uint8Array;
            toProtoMsg(message: _97.ProofOp): _97.ProofOpProtoMsg;
        };
        ProofOps: {
            typeUrl: string;
            encode(message: _97.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.ProofOps;
            fromJSON(object: any): _97.ProofOps;
            toJSON(message: _97.ProofOps): unknown;
            fromPartial(object: {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            }): _97.ProofOps;
            fromSDK(object: _97.ProofOpsSDKType): _97.ProofOps;
            toSDK(message: _97.ProofOps): _97.ProofOpsSDKType;
            fromAmino(object: _97.ProofOpsAmino): _97.ProofOps;
            toAmino(message: _97.ProofOps): _97.ProofOpsAmino;
            fromAminoMsg(object: _97.ProofOpsAminoMsg): _97.ProofOps;
            fromProtoMsg(message: _97.ProofOpsProtoMsg): _97.ProofOps;
            toProto(message: _97.ProofOps): Uint8Array;
            toProtoMsg(message: _97.ProofOps): _97.ProofOpsProtoMsg;
        };
        PublicKey: {
            typeUrl: string;
            encode(message: _96.PublicKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.PublicKey;
            fromJSON(object: any): _96.PublicKey;
            toJSON(message: _96.PublicKey): unknown;
            fromPartial(object: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            }): _96.PublicKey;
            fromSDK(object: _96.PublicKeySDKType): _96.PublicKey;
            toSDK(message: _96.PublicKey): _96.PublicKeySDKType;
            fromAmino(object: _96.PublicKeyAmino): _96.PublicKey;
            toAmino(message: _96.PublicKey): _96.PublicKeyAmino;
            fromAminoMsg(object: _96.PublicKeyAminoMsg): _96.PublicKey;
            fromProtoMsg(message: _96.PublicKeyProtoMsg): _96.PublicKey;
            toProto(message: _96.PublicKey): Uint8Array;
            toProtoMsg(message: _96.PublicKey): _96.PublicKeyProtoMsg;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                typeUrl: string;
                encode(message: _98.BitArray, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.BitArray;
                fromJSON(object: any): _98.BitArray;
                toJSON(message: _98.BitArray): unknown;
                fromPartial(object: {
                    bits?: bigint;
                    elems?: bigint[];
                }): _98.BitArray;
                fromSDK(object: _98.BitArraySDKType): _98.BitArray;
                toSDK(message: _98.BitArray): _98.BitArraySDKType;
                fromAmino(object: _98.BitArrayAmino): _98.BitArray;
                toAmino(message: _98.BitArray): _98.BitArrayAmino;
                fromAminoMsg(object: _98.BitArrayAminoMsg): _98.BitArray;
                fromProtoMsg(message: _98.BitArrayProtoMsg): _98.BitArray;
                toProto(message: _98.BitArray): Uint8Array;
                toProtoMsg(message: _98.BitArray): _98.BitArrayProtoMsg;
            };
        };
    }
    const p2p: {
        NetAddress: {
            typeUrl: string;
            encode(message: _99.NetAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.NetAddress;
            fromJSON(object: any): _99.NetAddress;
            toJSON(message: _99.NetAddress): unknown;
            fromPartial(object: {
                id?: string;
                ip?: string;
                port?: number;
            }): _99.NetAddress;
            fromSDK(object: _99.NetAddressSDKType): _99.NetAddress;
            toSDK(message: _99.NetAddress): _99.NetAddressSDKType;
            fromAmino(object: _99.NetAddressAmino): _99.NetAddress;
            toAmino(message: _99.NetAddress): _99.NetAddressAmino;
            fromAminoMsg(object: _99.NetAddressAminoMsg): _99.NetAddress;
            fromProtoMsg(message: _99.NetAddressProtoMsg): _99.NetAddress;
            toProto(message: _99.NetAddress): Uint8Array;
            toProtoMsg(message: _99.NetAddress): _99.NetAddressProtoMsg;
        };
        ProtocolVersion: {
            typeUrl: string;
            encode(message: _99.ProtocolVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.ProtocolVersion;
            fromJSON(object: any): _99.ProtocolVersion;
            toJSON(message: _99.ProtocolVersion): unknown;
            fromPartial(object: {
                p2p?: bigint;
                block?: bigint;
                app?: bigint;
            }): _99.ProtocolVersion;
            fromSDK(object: _99.ProtocolVersionSDKType): _99.ProtocolVersion;
            toSDK(message: _99.ProtocolVersion): _99.ProtocolVersionSDKType;
            fromAmino(object: _99.ProtocolVersionAmino): _99.ProtocolVersion;
            toAmino(message: _99.ProtocolVersion): _99.ProtocolVersionAmino;
            fromAminoMsg(object: _99.ProtocolVersionAminoMsg): _99.ProtocolVersion;
            fromProtoMsg(message: _99.ProtocolVersionProtoMsg): _99.ProtocolVersion;
            toProto(message: _99.ProtocolVersion): Uint8Array;
            toProtoMsg(message: _99.ProtocolVersion): _99.ProtocolVersionProtoMsg;
        };
        DefaultNodeInfo: {
            typeUrl: string;
            encode(message: _99.DefaultNodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.DefaultNodeInfo;
            fromJSON(object: any): _99.DefaultNodeInfo;
            toJSON(message: _99.DefaultNodeInfo): unknown;
            fromPartial(object: {
                protocolVersion?: {
                    p2p?: bigint;
                    block?: bigint;
                    app?: bigint;
                };
                defaultNodeId?: string;
                listenAddr?: string;
                network?: string;
                version?: string;
                channels?: Uint8Array;
                moniker?: string;
                other?: {
                    txIndex?: string;
                    rpcAddress?: string;
                };
            }): _99.DefaultNodeInfo;
            fromSDK(object: _99.DefaultNodeInfoSDKType): _99.DefaultNodeInfo;
            toSDK(message: _99.DefaultNodeInfo): _99.DefaultNodeInfoSDKType;
            fromAmino(object: _99.DefaultNodeInfoAmino): _99.DefaultNodeInfo;
            toAmino(message: _99.DefaultNodeInfo): _99.DefaultNodeInfoAmino;
            fromAminoMsg(object: _99.DefaultNodeInfoAminoMsg): _99.DefaultNodeInfo;
            fromProtoMsg(message: _99.DefaultNodeInfoProtoMsg): _99.DefaultNodeInfo;
            toProto(message: _99.DefaultNodeInfo): Uint8Array;
            toProtoMsg(message: _99.DefaultNodeInfo): _99.DefaultNodeInfoProtoMsg;
        };
        DefaultNodeInfoOther: {
            typeUrl: string;
            encode(message: _99.DefaultNodeInfoOther, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.DefaultNodeInfoOther;
            fromJSON(object: any): _99.DefaultNodeInfoOther;
            toJSON(message: _99.DefaultNodeInfoOther): unknown;
            fromPartial(object: {
                txIndex?: string;
                rpcAddress?: string;
            }): _99.DefaultNodeInfoOther;
            fromSDK(object: _99.DefaultNodeInfoOtherSDKType): _99.DefaultNodeInfoOther;
            toSDK(message: _99.DefaultNodeInfoOther): _99.DefaultNodeInfoOtherSDKType;
            fromAmino(object: _99.DefaultNodeInfoOtherAmino): _99.DefaultNodeInfoOther;
            toAmino(message: _99.DefaultNodeInfoOther): _99.DefaultNodeInfoOtherAmino;
            fromAminoMsg(object: _99.DefaultNodeInfoOtherAminoMsg): _99.DefaultNodeInfoOther;
            fromProtoMsg(message: _99.DefaultNodeInfoOtherProtoMsg): _99.DefaultNodeInfoOther;
            toProto(message: _99.DefaultNodeInfoOther): Uint8Array;
            toProtoMsg(message: _99.DefaultNodeInfoOther): _99.DefaultNodeInfoOtherProtoMsg;
        };
    };
    const types: {
        ValidatorSet: {
            typeUrl: string;
            encode(message: _104.ValidatorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.ValidatorSet;
            fromJSON(object: any): _104.ValidatorSet;
            toJSON(message: _104.ValidatorSet): unknown;
            fromPartial(object: {
                validators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: bigint;
                    proposerPriority?: bigint;
                }[];
                proposer?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: bigint;
                    proposerPriority?: bigint;
                };
                totalVotingPower?: bigint;
            }): _104.ValidatorSet;
            fromSDK(object: _104.ValidatorSetSDKType): _104.ValidatorSet;
            toSDK(message: _104.ValidatorSet): _104.ValidatorSetSDKType;
            fromAmino(object: _104.ValidatorSetAmino): _104.ValidatorSet;
            toAmino(message: _104.ValidatorSet): _104.ValidatorSetAmino;
            fromAminoMsg(object: _104.ValidatorSetAminoMsg): _104.ValidatorSet;
            fromProtoMsg(message: _104.ValidatorSetProtoMsg): _104.ValidatorSet;
            toProto(message: _104.ValidatorSet): Uint8Array;
            toProtoMsg(message: _104.ValidatorSet): _104.ValidatorSetProtoMsg;
        };
        Validator: {
            typeUrl: string;
            encode(message: _104.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.Validator;
            fromJSON(object: any): _104.Validator;
            toJSON(message: _104.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: bigint;
                proposerPriority?: bigint;
            }): _104.Validator;
            fromSDK(object: _104.ValidatorSDKType): _104.Validator;
            toSDK(message: _104.Validator): _104.ValidatorSDKType;
            fromAmino(object: _104.ValidatorAmino): _104.Validator;
            toAmino(message: _104.Validator): _104.ValidatorAmino;
            fromAminoMsg(object: _104.ValidatorAminoMsg): _104.Validator;
            fromProtoMsg(message: _104.ValidatorProtoMsg): _104.Validator;
            toProto(message: _104.Validator): Uint8Array;
            toProtoMsg(message: _104.Validator): _104.ValidatorProtoMsg;
        };
        SimpleValidator: {
            typeUrl: string;
            encode(message: _104.SimpleValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.SimpleValidator;
            fromJSON(object: any): _104.SimpleValidator;
            toJSON(message: _104.SimpleValidator): unknown;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: bigint;
            }): _104.SimpleValidator;
            fromSDK(object: _104.SimpleValidatorSDKType): _104.SimpleValidator;
            toSDK(message: _104.SimpleValidator): _104.SimpleValidatorSDKType;
            fromAmino(object: _104.SimpleValidatorAmino): _104.SimpleValidator;
            toAmino(message: _104.SimpleValidator): _104.SimpleValidatorAmino;
            fromAminoMsg(object: _104.SimpleValidatorAminoMsg): _104.SimpleValidator;
            fromProtoMsg(message: _104.SimpleValidatorProtoMsg): _104.SimpleValidator;
            toProto(message: _104.SimpleValidator): Uint8Array;
            toProtoMsg(message: _104.SimpleValidator): _104.SimpleValidatorProtoMsg;
        };
        blockIDFlagFromJSON(object: any): _103.BlockIDFlag;
        blockIDFlagToJSON(object: _103.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _103.SignedMsgType;
        signedMsgTypeToJSON(object: _103.SignedMsgType): string;
        BlockIDFlag: typeof _103.BlockIDFlag;
        BlockIDFlagSDKType: typeof _103.BlockIDFlag;
        BlockIDFlagAmino: typeof _103.BlockIDFlag;
        SignedMsgType: typeof _103.SignedMsgType;
        SignedMsgTypeSDKType: typeof _103.SignedMsgType;
        SignedMsgTypeAmino: typeof _103.SignedMsgType;
        PartSetHeader: {
            typeUrl: string;
            encode(message: _103.PartSetHeader, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.PartSetHeader;
            fromJSON(object: any): _103.PartSetHeader;
            toJSON(message: _103.PartSetHeader): unknown;
            fromPartial(object: {
                total?: number;
                hash?: Uint8Array;
            }): _103.PartSetHeader;
            fromSDK(object: _103.PartSetHeaderSDKType): _103.PartSetHeader;
            toSDK(message: _103.PartSetHeader): _103.PartSetHeaderSDKType;
            fromAmino(object: _103.PartSetHeaderAmino): _103.PartSetHeader;
            toAmino(message: _103.PartSetHeader): _103.PartSetHeaderAmino;
            fromAminoMsg(object: _103.PartSetHeaderAminoMsg): _103.PartSetHeader;
            fromProtoMsg(message: _103.PartSetHeaderProtoMsg): _103.PartSetHeader;
            toProto(message: _103.PartSetHeader): Uint8Array;
            toProtoMsg(message: _103.PartSetHeader): _103.PartSetHeaderProtoMsg;
        };
        Part: {
            typeUrl: string;
            encode(message: _103.Part, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Part;
            fromJSON(object: any): _103.Part;
            toJSON(message: _103.Part): unknown;
            fromPartial(object: {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: bigint;
                    index?: bigint;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _103.Part;
            fromSDK(object: _103.PartSDKType): _103.Part;
            toSDK(message: _103.Part): _103.PartSDKType;
            fromAmino(object: _103.PartAmino): _103.Part;
            toAmino(message: _103.Part): _103.PartAmino;
            fromAminoMsg(object: _103.PartAminoMsg): _103.Part;
            fromProtoMsg(message: _103.PartProtoMsg): _103.Part;
            toProto(message: _103.Part): Uint8Array;
            toProtoMsg(message: _103.Part): _103.PartProtoMsg;
        };
        BlockID: {
            typeUrl: string;
            encode(message: _103.BlockID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.BlockID;
            fromJSON(object: any): _103.BlockID;
            toJSON(message: _103.BlockID): unknown;
            fromPartial(object: {
                hash?: Uint8Array;
                partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                };
            }): _103.BlockID;
            fromSDK(object: _103.BlockIDSDKType): _103.BlockID;
            toSDK(message: _103.BlockID): _103.BlockIDSDKType;
            fromAmino(object: _103.BlockIDAmino): _103.BlockID;
            toAmino(message: _103.BlockID): _103.BlockIDAmino;
            fromAminoMsg(object: _103.BlockIDAminoMsg): _103.BlockID;
            fromProtoMsg(message: _103.BlockIDProtoMsg): _103.BlockID;
            toProto(message: _103.BlockID): Uint8Array;
            toProtoMsg(message: _103.BlockID): _103.BlockIDProtoMsg;
        };
        Header: {
            typeUrl: string;
            encode(message: _103.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Header;
            fromJSON(object: any): _103.Header;
            toJSON(message: _103.Header): unknown;
            fromPartial(object: {
                version?: {
                    block?: bigint;
                    app?: bigint;
                };
                chainId?: string;
                height?: bigint;
                time?: Date;
                lastBlockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                lastCommitHash?: Uint8Array;
                dataHash?: Uint8Array;
                validatorsHash?: Uint8Array;
                nextValidatorsHash?: Uint8Array;
                consensusHash?: Uint8Array;
                appHash?: Uint8Array;
                lastResultsHash?: Uint8Array;
                evidenceHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            }): _103.Header;
            fromSDK(object: _103.HeaderSDKType): _103.Header;
            toSDK(message: _103.Header): _103.HeaderSDKType;
            fromAmino(object: _103.HeaderAmino): _103.Header;
            toAmino(message: _103.Header): _103.HeaderAmino;
            fromAminoMsg(object: _103.HeaderAminoMsg): _103.Header;
            fromProtoMsg(message: _103.HeaderProtoMsg): _103.Header;
            toProto(message: _103.Header): Uint8Array;
            toProtoMsg(message: _103.Header): _103.HeaderProtoMsg;
        };
        Data: {
            typeUrl: string;
            encode(message: _103.Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Data;
            fromJSON(object: any): _103.Data;
            toJSON(message: _103.Data): unknown;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _103.Data;
            fromSDK(object: _103.DataSDKType): _103.Data;
            toSDK(message: _103.Data): _103.DataSDKType;
            fromAmino(object: _103.DataAmino): _103.Data;
            toAmino(message: _103.Data): _103.DataAmino;
            fromAminoMsg(object: _103.DataAminoMsg): _103.Data;
            fromProtoMsg(message: _103.DataProtoMsg): _103.Data;
            toProto(message: _103.Data): Uint8Array;
            toProtoMsg(message: _103.Data): _103.DataProtoMsg;
        };
        Vote: {
            typeUrl: string;
            encode(message: _103.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Vote;
            fromJSON(object: any): _103.Vote;
            toJSON(message: _103.Vote): unknown;
            fromPartial(object: {
                type?: _103.SignedMsgType;
                height?: bigint;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                validatorAddress?: Uint8Array;
                validatorIndex?: number;
                signature?: Uint8Array;
            }): _103.Vote;
            fromSDK(object: _103.VoteSDKType): _103.Vote;
            toSDK(message: _103.Vote): _103.VoteSDKType;
            fromAmino(object: _103.VoteAmino): _103.Vote;
            toAmino(message: _103.Vote): _103.VoteAmino;
            fromAminoMsg(object: _103.VoteAminoMsg): _103.Vote;
            fromProtoMsg(message: _103.VoteProtoMsg): _103.Vote;
            toProto(message: _103.Vote): Uint8Array;
            toProtoMsg(message: _103.Vote): _103.VoteProtoMsg;
        };
        Commit: {
            typeUrl: string;
            encode(message: _103.Commit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Commit;
            fromJSON(object: any): _103.Commit;
            toJSON(message: _103.Commit): unknown;
            fromPartial(object: {
                height?: bigint;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                signatures?: {
                    blockIdFlag?: _103.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[];
            }): _103.Commit;
            fromSDK(object: _103.CommitSDKType): _103.Commit;
            toSDK(message: _103.Commit): _103.CommitSDKType;
            fromAmino(object: _103.CommitAmino): _103.Commit;
            toAmino(message: _103.Commit): _103.CommitAmino;
            fromAminoMsg(object: _103.CommitAminoMsg): _103.Commit;
            fromProtoMsg(message: _103.CommitProtoMsg): _103.Commit;
            toProto(message: _103.Commit): Uint8Array;
            toProtoMsg(message: _103.Commit): _103.CommitProtoMsg;
        };
        CommitSig: {
            typeUrl: string;
            encode(message: _103.CommitSig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.CommitSig;
            fromJSON(object: any): _103.CommitSig;
            toJSON(message: _103.CommitSig): unknown;
            fromPartial(object: {
                blockIdFlag?: _103.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            }): _103.CommitSig;
            fromSDK(object: _103.CommitSigSDKType): _103.CommitSig;
            toSDK(message: _103.CommitSig): _103.CommitSigSDKType;
            fromAmino(object: _103.CommitSigAmino): _103.CommitSig;
            toAmino(message: _103.CommitSig): _103.CommitSigAmino;
            fromAminoMsg(object: _103.CommitSigAminoMsg): _103.CommitSig;
            fromProtoMsg(message: _103.CommitSigProtoMsg): _103.CommitSig;
            toProto(message: _103.CommitSig): Uint8Array;
            toProtoMsg(message: _103.CommitSig): _103.CommitSigProtoMsg;
        };
        Proposal: {
            typeUrl: string;
            encode(message: _103.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Proposal;
            fromJSON(object: any): _103.Proposal;
            toJSON(message: _103.Proposal): unknown;
            fromPartial(object: {
                type?: _103.SignedMsgType;
                height?: bigint;
                round?: number;
                polRound?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                signature?: Uint8Array;
            }): _103.Proposal;
            fromSDK(object: _103.ProposalSDKType): _103.Proposal;
            toSDK(message: _103.Proposal): _103.ProposalSDKType;
            fromAmino(object: _103.ProposalAmino): _103.Proposal;
            toAmino(message: _103.Proposal): _103.ProposalAmino;
            fromAminoMsg(object: _103.ProposalAminoMsg): _103.Proposal;
            fromProtoMsg(message: _103.ProposalProtoMsg): _103.Proposal;
            toProto(message: _103.Proposal): Uint8Array;
            toProtoMsg(message: _103.Proposal): _103.ProposalProtoMsg;
        };
        SignedHeader: {
            typeUrl: string;
            encode(message: _103.SignedHeader, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.SignedHeader;
            fromJSON(object: any): _103.SignedHeader;
            toJSON(message: _103.SignedHeader): unknown;
            fromPartial(object: {
                header?: {
                    version?: {
                        block?: bigint;
                        app?: bigint;
                    };
                    chainId?: string;
                    height?: bigint;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                commit?: {
                    height?: bigint;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: _103.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _103.SignedHeader;
            fromSDK(object: _103.SignedHeaderSDKType): _103.SignedHeader;
            toSDK(message: _103.SignedHeader): _103.SignedHeaderSDKType;
            fromAmino(object: _103.SignedHeaderAmino): _103.SignedHeader;
            toAmino(message: _103.SignedHeader): _103.SignedHeaderAmino;
            fromAminoMsg(object: _103.SignedHeaderAminoMsg): _103.SignedHeader;
            fromProtoMsg(message: _103.SignedHeaderProtoMsg): _103.SignedHeader;
            toProto(message: _103.SignedHeader): Uint8Array;
            toProtoMsg(message: _103.SignedHeader): _103.SignedHeaderProtoMsg;
        };
        LightBlock: {
            typeUrl: string;
            encode(message: _103.LightBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.LightBlock;
            fromJSON(object: any): _103.LightBlock;
            toJSON(message: _103.LightBlock): unknown;
            fromPartial(object: {
                signedHeader?: {
                    header?: {
                        version?: {
                            block?: bigint;
                            app?: bigint;
                        };
                        chainId?: string;
                        height?: bigint;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    commit?: {
                        height?: bigint;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        signatures?: {
                            blockIdFlag?: _103.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        }[];
                    };
                };
                validatorSet?: {
                    validators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: bigint;
                        proposerPriority?: bigint;
                    }[];
                    proposer?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: bigint;
                        proposerPriority?: bigint;
                    };
                    totalVotingPower?: bigint;
                };
            }): _103.LightBlock;
            fromSDK(object: _103.LightBlockSDKType): _103.LightBlock;
            toSDK(message: _103.LightBlock): _103.LightBlockSDKType;
            fromAmino(object: _103.LightBlockAmino): _103.LightBlock;
            toAmino(message: _103.LightBlock): _103.LightBlockAmino;
            fromAminoMsg(object: _103.LightBlockAminoMsg): _103.LightBlock;
            fromProtoMsg(message: _103.LightBlockProtoMsg): _103.LightBlock;
            toProto(message: _103.LightBlock): Uint8Array;
            toProtoMsg(message: _103.LightBlock): _103.LightBlockProtoMsg;
        };
        BlockMeta: {
            typeUrl: string;
            encode(message: _103.BlockMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.BlockMeta;
            fromJSON(object: any): _103.BlockMeta;
            toJSON(message: _103.BlockMeta): unknown;
            fromPartial(object: {
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                blockSize?: bigint;
                header?: {
                    version?: {
                        block?: bigint;
                        app?: bigint;
                    };
                    chainId?: string;
                    height?: bigint;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                numTxs?: bigint;
            }): _103.BlockMeta;
            fromSDK(object: _103.BlockMetaSDKType): _103.BlockMeta;
            toSDK(message: _103.BlockMeta): _103.BlockMetaSDKType;
            fromAmino(object: _103.BlockMetaAmino): _103.BlockMeta;
            toAmino(message: _103.BlockMeta): _103.BlockMetaAmino;
            fromAminoMsg(object: _103.BlockMetaAminoMsg): _103.BlockMeta;
            fromProtoMsg(message: _103.BlockMetaProtoMsg): _103.BlockMeta;
            toProto(message: _103.BlockMeta): Uint8Array;
            toProtoMsg(message: _103.BlockMeta): _103.BlockMetaProtoMsg;
        };
        TxProof: {
            typeUrl: string;
            encode(message: _103.TxProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.TxProof;
            fromJSON(object: any): _103.TxProof;
            toJSON(message: _103.TxProof): unknown;
            fromPartial(object: {
                rootHash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: bigint;
                    index?: bigint;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _103.TxProof;
            fromSDK(object: _103.TxProofSDKType): _103.TxProof;
            toSDK(message: _103.TxProof): _103.TxProofSDKType;
            fromAmino(object: _103.TxProofAmino): _103.TxProof;
            toAmino(message: _103.TxProof): _103.TxProofAmino;
            fromAminoMsg(object: _103.TxProofAminoMsg): _103.TxProof;
            fromProtoMsg(message: _103.TxProofProtoMsg): _103.TxProof;
            toProto(message: _103.TxProof): Uint8Array;
            toProtoMsg(message: _103.TxProof): _103.TxProofProtoMsg;
        };
        ConsensusParams: {
            typeUrl: string;
            encode(message: _102.ConsensusParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.ConsensusParams;
            fromJSON(object: any): _102.ConsensusParams;
            toJSON(message: _102.ConsensusParams): unknown;
            fromPartial(object: {
                block?: {
                    maxBytes?: bigint;
                    maxGas?: bigint;
                };
                evidence?: {
                    maxAgeNumBlocks?: bigint;
                    maxAgeDuration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    maxBytes?: bigint;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    app?: bigint;
                };
            }): _102.ConsensusParams;
            fromSDK(object: _102.ConsensusParamsSDKType): _102.ConsensusParams;
            toSDK(message: _102.ConsensusParams): _102.ConsensusParamsSDKType;
            fromAmino(object: _102.ConsensusParamsAmino): _102.ConsensusParams;
            toAmino(message: _102.ConsensusParams): _102.ConsensusParamsAmino;
            fromAminoMsg(object: _102.ConsensusParamsAminoMsg): _102.ConsensusParams;
            fromProtoMsg(message: _102.ConsensusParamsProtoMsg): _102.ConsensusParams;
            toProto(message: _102.ConsensusParams): Uint8Array;
            toProtoMsg(message: _102.ConsensusParams): _102.ConsensusParamsProtoMsg;
        };
        BlockParams: {
            typeUrl: string;
            encode(message: _102.BlockParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.BlockParams;
            fromJSON(object: any): _102.BlockParams;
            toJSON(message: _102.BlockParams): unknown;
            fromPartial(object: {
                maxBytes?: bigint;
                maxGas?: bigint;
            }): _102.BlockParams;
            fromSDK(object: _102.BlockParamsSDKType): _102.BlockParams;
            toSDK(message: _102.BlockParams): _102.BlockParamsSDKType;
            fromAmino(object: _102.BlockParamsAmino): _102.BlockParams;
            toAmino(message: _102.BlockParams): _102.BlockParamsAmino;
            fromAminoMsg(object: _102.BlockParamsAminoMsg): _102.BlockParams;
            fromProtoMsg(message: _102.BlockParamsProtoMsg): _102.BlockParams;
            toProto(message: _102.BlockParams): Uint8Array;
            toProtoMsg(message: _102.BlockParams): _102.BlockParamsProtoMsg;
        };
        EvidenceParams: {
            typeUrl: string;
            encode(message: _102.EvidenceParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.EvidenceParams;
            fromJSON(object: any): _102.EvidenceParams;
            toJSON(message: _102.EvidenceParams): unknown;
            fromPartial(object: {
                maxAgeNumBlocks?: bigint;
                maxAgeDuration?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                maxBytes?: bigint;
            }): _102.EvidenceParams;
            fromSDK(object: _102.EvidenceParamsSDKType): _102.EvidenceParams;
            toSDK(message: _102.EvidenceParams): _102.EvidenceParamsSDKType;
            fromAmino(object: _102.EvidenceParamsAmino): _102.EvidenceParams;
            toAmino(message: _102.EvidenceParams): _102.EvidenceParamsAmino;
            fromAminoMsg(object: _102.EvidenceParamsAminoMsg): _102.EvidenceParams;
            fromProtoMsg(message: _102.EvidenceParamsProtoMsg): _102.EvidenceParams;
            toProto(message: _102.EvidenceParams): Uint8Array;
            toProtoMsg(message: _102.EvidenceParams): _102.EvidenceParamsProtoMsg;
        };
        ValidatorParams: {
            typeUrl: string;
            encode(message: _102.ValidatorParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.ValidatorParams;
            fromJSON(object: any): _102.ValidatorParams;
            toJSON(message: _102.ValidatorParams): unknown;
            fromPartial(object: {
                pubKeyTypes?: string[];
            }): _102.ValidatorParams;
            fromSDK(object: _102.ValidatorParamsSDKType): _102.ValidatorParams;
            toSDK(message: _102.ValidatorParams): _102.ValidatorParamsSDKType;
            fromAmino(object: _102.ValidatorParamsAmino): _102.ValidatorParams;
            toAmino(message: _102.ValidatorParams): _102.ValidatorParamsAmino;
            fromAminoMsg(object: _102.ValidatorParamsAminoMsg): _102.ValidatorParams;
            fromProtoMsg(message: _102.ValidatorParamsProtoMsg): _102.ValidatorParams;
            toProto(message: _102.ValidatorParams): Uint8Array;
            toProtoMsg(message: _102.ValidatorParams): _102.ValidatorParamsProtoMsg;
        };
        VersionParams: {
            typeUrl: string;
            encode(message: _102.VersionParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.VersionParams;
            fromJSON(object: any): _102.VersionParams;
            toJSON(message: _102.VersionParams): unknown;
            fromPartial(object: {
                app?: bigint;
            }): _102.VersionParams;
            fromSDK(object: _102.VersionParamsSDKType): _102.VersionParams;
            toSDK(message: _102.VersionParams): _102.VersionParamsSDKType;
            fromAmino(object: _102.VersionParamsAmino): _102.VersionParams;
            toAmino(message: _102.VersionParams): _102.VersionParamsAmino;
            fromAminoMsg(object: _102.VersionParamsAminoMsg): _102.VersionParams;
            fromProtoMsg(message: _102.VersionParamsProtoMsg): _102.VersionParams;
            toProto(message: _102.VersionParams): Uint8Array;
            toProtoMsg(message: _102.VersionParams): _102.VersionParamsProtoMsg;
        };
        HashedParams: {
            typeUrl: string;
            encode(message: _102.HashedParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.HashedParams;
            fromJSON(object: any): _102.HashedParams;
            toJSON(message: _102.HashedParams): unknown;
            fromPartial(object: {
                blockMaxBytes?: bigint;
                blockMaxGas?: bigint;
            }): _102.HashedParams;
            fromSDK(object: _102.HashedParamsSDKType): _102.HashedParams;
            toSDK(message: _102.HashedParams): _102.HashedParamsSDKType;
            fromAmino(object: _102.HashedParamsAmino): _102.HashedParams;
            toAmino(message: _102.HashedParams): _102.HashedParamsAmino;
            fromAminoMsg(object: _102.HashedParamsAminoMsg): _102.HashedParams;
            fromProtoMsg(message: _102.HashedParamsProtoMsg): _102.HashedParams;
            toProto(message: _102.HashedParams): Uint8Array;
            toProtoMsg(message: _102.HashedParams): _102.HashedParamsProtoMsg;
        };
        Evidence: {
            typeUrl: string;
            encode(message: _101.Evidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.Evidence;
            fromJSON(object: any): _101.Evidence;
            toJSON(message: _101.Evidence): unknown;
            fromPartial(object: {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: _103.SignedMsgType;
                        height?: bigint;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    };
                    voteB?: {
                        type?: _103.SignedMsgType;
                        height?: bigint;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    };
                    totalVotingPower?: bigint;
                    validatorPower?: bigint;
                    timestamp?: Date;
                };
                lightClientAttackEvidence?: {
                    conflictingBlock?: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: bigint;
                                    app?: bigint;
                                };
                                chainId?: string;
                                height?: bigint;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            commit?: {
                                height?: bigint;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: _103.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: bigint;
                                proposerPriority?: bigint;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: bigint;
                                proposerPriority?: bigint;
                            };
                            totalVotingPower?: bigint;
                        };
                    };
                    commonHeight?: bigint;
                    byzantineValidators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: bigint;
                        proposerPriority?: bigint;
                    }[];
                    totalVotingPower?: bigint;
                    timestamp?: Date;
                };
            }): _101.Evidence;
            fromSDK(object: _101.EvidenceSDKType): _101.Evidence;
            toSDK(message: _101.Evidence): _101.EvidenceSDKType;
            fromAmino(object: _101.EvidenceAmino): _101.Evidence;
            toAmino(message: _101.Evidence): _101.EvidenceAmino;
            fromAminoMsg(object: _101.EvidenceAminoMsg): _101.Evidence;
            fromProtoMsg(message: _101.EvidenceProtoMsg): _101.Evidence;
            toProto(message: _101.Evidence): Uint8Array;
            toProtoMsg(message: _101.Evidence): _101.EvidenceProtoMsg;
        };
        DuplicateVoteEvidence: {
            typeUrl: string;
            encode(message: _101.DuplicateVoteEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.DuplicateVoteEvidence;
            fromJSON(object: any): _101.DuplicateVoteEvidence;
            toJSON(message: _101.DuplicateVoteEvidence): unknown;
            fromPartial(object: {
                voteA?: {
                    type?: _103.SignedMsgType;
                    height?: bigint;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                };
                voteB?: {
                    type?: _103.SignedMsgType;
                    height?: bigint;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                };
                totalVotingPower?: bigint;
                validatorPower?: bigint;
                timestamp?: Date;
            }): _101.DuplicateVoteEvidence;
            fromSDK(object: _101.DuplicateVoteEvidenceSDKType): _101.DuplicateVoteEvidence;
            toSDK(message: _101.DuplicateVoteEvidence): _101.DuplicateVoteEvidenceSDKType;
            fromAmino(object: _101.DuplicateVoteEvidenceAmino): _101.DuplicateVoteEvidence;
            toAmino(message: _101.DuplicateVoteEvidence): _101.DuplicateVoteEvidenceAmino;
            fromAminoMsg(object: _101.DuplicateVoteEvidenceAminoMsg): _101.DuplicateVoteEvidence;
            fromProtoMsg(message: _101.DuplicateVoteEvidenceProtoMsg): _101.DuplicateVoteEvidence;
            toProto(message: _101.DuplicateVoteEvidence): Uint8Array;
            toProtoMsg(message: _101.DuplicateVoteEvidence): _101.DuplicateVoteEvidenceProtoMsg;
        };
        LightClientAttackEvidence: {
            typeUrl: string;
            encode(message: _101.LightClientAttackEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.LightClientAttackEvidence;
            fromJSON(object: any): _101.LightClientAttackEvidence;
            toJSON(message: _101.LightClientAttackEvidence): unknown;
            fromPartial(object: {
                conflictingBlock?: {
                    signedHeader?: {
                        header?: {
                            version?: {
                                block?: bigint;
                                app?: bigint;
                            };
                            chainId?: string;
                            height?: bigint;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        commit?: {
                            height?: bigint;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: _103.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        };
                    };
                    validatorSet?: {
                        validators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: bigint;
                            proposerPriority?: bigint;
                        }[];
                        proposer?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: bigint;
                            proposerPriority?: bigint;
                        };
                        totalVotingPower?: bigint;
                    };
                };
                commonHeight?: bigint;
                byzantineValidators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: bigint;
                    proposerPriority?: bigint;
                }[];
                totalVotingPower?: bigint;
                timestamp?: Date;
            }): _101.LightClientAttackEvidence;
            fromSDK(object: _101.LightClientAttackEvidenceSDKType): _101.LightClientAttackEvidence;
            toSDK(message: _101.LightClientAttackEvidence): _101.LightClientAttackEvidenceSDKType;
            fromAmino(object: _101.LightClientAttackEvidenceAmino): _101.LightClientAttackEvidence;
            toAmino(message: _101.LightClientAttackEvidence): _101.LightClientAttackEvidenceAmino;
            fromAminoMsg(object: _101.LightClientAttackEvidenceAminoMsg): _101.LightClientAttackEvidence;
            fromProtoMsg(message: _101.LightClientAttackEvidenceProtoMsg): _101.LightClientAttackEvidence;
            toProto(message: _101.LightClientAttackEvidence): Uint8Array;
            toProtoMsg(message: _101.LightClientAttackEvidence): _101.LightClientAttackEvidenceProtoMsg;
        };
        EvidenceList: {
            typeUrl: string;
            encode(message: _101.EvidenceList, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.EvidenceList;
            fromJSON(object: any): _101.EvidenceList;
            toJSON(message: _101.EvidenceList): unknown;
            fromPartial(object: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _103.SignedMsgType;
                            height?: bigint;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        voteB?: {
                            type?: _103.SignedMsgType;
                            height?: bigint;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        totalVotingPower?: bigint;
                        validatorPower?: bigint;
                        timestamp?: Date;
                    };
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: bigint;
                                        app?: bigint;
                                    };
                                    chainId?: string;
                                    height?: bigint;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: bigint;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: _103.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: bigint;
                                    proposerPriority?: bigint;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: bigint;
                                    proposerPriority?: bigint;
                                };
                                totalVotingPower?: bigint;
                            };
                        };
                        commonHeight?: bigint;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: bigint;
                            proposerPriority?: bigint;
                        }[];
                        totalVotingPower?: bigint;
                        timestamp?: Date;
                    };
                }[];
            }): _101.EvidenceList;
            fromSDK(object: _101.EvidenceListSDKType): _101.EvidenceList;
            toSDK(message: _101.EvidenceList): _101.EvidenceListSDKType;
            fromAmino(object: _101.EvidenceListAmino): _101.EvidenceList;
            toAmino(message: _101.EvidenceList): _101.EvidenceListAmino;
            fromAminoMsg(object: _101.EvidenceListAminoMsg): _101.EvidenceList;
            fromProtoMsg(message: _101.EvidenceListProtoMsg): _101.EvidenceList;
            toProto(message: _101.EvidenceList): Uint8Array;
            toProtoMsg(message: _101.EvidenceList): _101.EvidenceListProtoMsg;
        };
        Block: {
            typeUrl: string;
            encode(message: _100.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.Block;
            fromJSON(object: any): _100.Block;
            toJSON(message: _100.Block): unknown;
            fromPartial(object: {
                header?: {
                    version?: {
                        block?: bigint;
                        app?: bigint;
                    };
                    chainId?: string;
                    height?: bigint;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                data?: {
                    txs?: Uint8Array[];
                };
                evidence?: {
                    evidence?: {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _103.SignedMsgType;
                                height?: bigint;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            voteB?: {
                                type?: _103.SignedMsgType;
                                height?: bigint;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            totalVotingPower?: bigint;
                            validatorPower?: bigint;
                            timestamp?: Date;
                        };
                        lightClientAttackEvidence?: {
                            conflictingBlock?: {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: bigint;
                                            app?: bigint;
                                        };
                                        chainId?: string;
                                        height?: bigint;
                                        time?: Date;
                                        lastBlockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        lastCommitHash?: Uint8Array;
                                        dataHash?: Uint8Array;
                                        validatorsHash?: Uint8Array;
                                        nextValidatorsHash?: Uint8Array;
                                        consensusHash?: Uint8Array;
                                        appHash?: Uint8Array;
                                        lastResultsHash?: Uint8Array;
                                        evidenceHash?: Uint8Array;
                                        proposerAddress?: Uint8Array;
                                    };
                                    commit?: {
                                        height?: bigint;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _103.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[];
                                    };
                                };
                                validatorSet?: {
                                    validators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: bigint;
                                        proposerPriority?: bigint;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: bigint;
                                        proposerPriority?: bigint;
                                    };
                                    totalVotingPower?: bigint;
                                };
                            };
                            commonHeight?: bigint;
                            byzantineValidators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: bigint;
                                proposerPriority?: bigint;
                            }[];
                            totalVotingPower?: bigint;
                            timestamp?: Date;
                        };
                    }[];
                };
                lastCommit?: {
                    height?: bigint;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: _103.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _100.Block;
            fromSDK(object: _100.BlockSDKType): _100.Block;
            toSDK(message: _100.Block): _100.BlockSDKType;
            fromAmino(object: _100.BlockAmino): _100.Block;
            toAmino(message: _100.Block): _100.BlockAmino;
            fromAminoMsg(object: _100.BlockAminoMsg): _100.Block;
            fromProtoMsg(message: _100.BlockProtoMsg): _100.Block;
            toProto(message: _100.Block): Uint8Array;
            toProtoMsg(message: _100.Block): _100.BlockProtoMsg;
        };
    };
    const version: {
        App: {
            typeUrl: string;
            encode(message: _105.App, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.App;
            fromJSON(object: any): _105.App;
            toJSON(message: _105.App): unknown;
            fromPartial(object: {
                protocol?: bigint;
                software?: string;
            }): _105.App;
            fromSDK(object: _105.AppSDKType): _105.App;
            toSDK(message: _105.App): _105.AppSDKType;
            fromAmino(object: _105.AppAmino): _105.App;
            toAmino(message: _105.App): _105.AppAmino;
            fromAminoMsg(object: _105.AppAminoMsg): _105.App;
            fromProtoMsg(message: _105.AppProtoMsg): _105.App;
            toProto(message: _105.App): Uint8Array;
            toProtoMsg(message: _105.App): _105.AppProtoMsg;
        };
        Consensus: {
            typeUrl: string;
            encode(message: _105.Consensus, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.Consensus;
            fromJSON(object: any): _105.Consensus;
            toJSON(message: _105.Consensus): unknown;
            fromPartial(object: {
                block?: bigint;
                app?: bigint;
            }): _105.Consensus;
            fromSDK(object: _105.ConsensusSDKType): _105.Consensus;
            toSDK(message: _105.Consensus): _105.ConsensusSDKType;
            fromAmino(object: _105.ConsensusAmino): _105.Consensus;
            toAmino(message: _105.Consensus): _105.ConsensusAmino;
            fromAminoMsg(object: _105.ConsensusAminoMsg): _105.Consensus;
            fromProtoMsg(message: _105.ConsensusProtoMsg): _105.Consensus;
            toProto(message: _105.Consensus): Uint8Array;
            toProtoMsg(message: _105.Consensus): _105.ConsensusProtoMsg;
        };
    };
}
