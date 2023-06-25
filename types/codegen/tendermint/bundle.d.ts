import * as _103 from "./abci/types";
import * as _104 from "./crypto/keys";
import * as _105 from "./crypto/proof";
import * as _106 from "./libs/bits/types";
import * as _107 from "./p2p/types";
import * as _108 from "./types/block";
import * as _109 from "./types/evidence";
import * as _110 from "./types/params";
import * as _111 from "./types/types";
import * as _112 from "./types/validator";
import * as _113 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _103.CheckTxType;
        checkTxTypeToJSON(object: _103.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _103.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _103.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _103.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _103.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _103.EvidenceType;
        evidenceTypeToJSON(object: _103.EvidenceType): string;
        CheckTxType: typeof _103.CheckTxType;
        CheckTxTypeSDKType: typeof _103.CheckTxType;
        CheckTxTypeAmino: typeof _103.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _103.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _103.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultAmino: typeof _103.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _103.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _103.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultAmino: typeof _103.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _103.EvidenceType;
        EvidenceTypeSDKType: typeof _103.EvidenceType;
        EvidenceTypeAmino: typeof _103.EvidenceType;
        Request: {
            typeUrl: string;
            encode(message: _103.Request, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Request;
            fromJSON(object: any): _103.Request;
            toJSON(message: _103.Request): unknown;
            fromPartial(object: {
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    version?: string;
                    blockVersion?: bigint;
                    p2pVersion?: bigint;
                };
                setOption?: {
                    key?: string;
                    value?: string;
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
                            appVersion?: bigint;
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
                        type?: _103.EvidenceType;
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
                    type?: _103.CheckTxType;
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
            }): _103.Request;
            fromSDK(object: _103.RequestSDKType): _103.Request;
            toSDK(message: _103.Request): _103.RequestSDKType;
            fromAmino(object: _103.RequestAmino): _103.Request;
            toAmino(message: _103.Request): _103.RequestAmino;
            fromAminoMsg(object: _103.RequestAminoMsg): _103.Request;
            fromProtoMsg(message: _103.RequestProtoMsg): _103.Request;
            toProto(message: _103.Request): Uint8Array;
            toProtoMsg(message: _103.Request): _103.RequestProtoMsg;
        };
        RequestEcho: {
            typeUrl: string;
            encode(message: _103.RequestEcho, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.RequestEcho;
            fromJSON(object: any): _103.RequestEcho;
            toJSON(message: _103.RequestEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _103.RequestEcho;
            fromSDK(object: _103.RequestEchoSDKType): _103.RequestEcho;
            toSDK(message: _103.RequestEcho): _103.RequestEchoSDKType;
            fromAmino(object: _103.RequestEchoAmino): _103.RequestEcho;
            toAmino(message: _103.RequestEcho): _103.RequestEchoAmino;
            fromAminoMsg(object: _103.RequestEchoAminoMsg): _103.RequestEcho;
            fromProtoMsg(message: _103.RequestEchoProtoMsg): _103.RequestEcho;
            toProto(message: _103.RequestEcho): Uint8Array;
            toProtoMsg(message: _103.RequestEcho): _103.RequestEchoProtoMsg;
        };
        RequestFlush: {
            typeUrl: string;
            encode(_: _103.RequestFlush, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.RequestFlush;
            fromJSON(_: any): _103.RequestFlush;
            toJSON(_: _103.RequestFlush): unknown;
            fromPartial(_: {}): _103.RequestFlush;
            fromSDK(_: _103.RequestFlushSDKType): _103.RequestFlush;
            toSDK(_: _103.RequestFlush): _103.RequestFlushSDKType;
            fromAmino(_: _103.RequestFlushAmino): _103.RequestFlush;
            toAmino(_: _103.RequestFlush): _103.RequestFlushAmino;
            fromAminoMsg(object: _103.RequestFlushAminoMsg): _103.RequestFlush;
            fromProtoMsg(message: _103.RequestFlushProtoMsg): _103.RequestFlush;
            toProto(message: _103.RequestFlush): Uint8Array;
            toProtoMsg(message: _103.RequestFlush): _103.RequestFlushProtoMsg;
        };
        RequestInfo: {
            typeUrl: string;
            encode(message: _103.RequestInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.RequestInfo;
            fromJSON(object: any): _103.RequestInfo;
            toJSON(message: _103.RequestInfo): unknown;
            fromPartial(object: {
                version?: string;
                blockVersion?: bigint;
                p2pVersion?: bigint;
            }): _103.RequestInfo;
            fromSDK(object: _103.RequestInfoSDKType): _103.RequestInfo;
            toSDK(message: _103.RequestInfo): _103.RequestInfoSDKType;
            fromAmino(object: _103.RequestInfoAmino): _103.RequestInfo;
            toAmino(message: _103.RequestInfo): _103.RequestInfoAmino;
            fromAminoMsg(object: _103.RequestInfoAminoMsg): _103.RequestInfo;
            fromProtoMsg(message: _103.RequestInfoProtoMsg): _103.RequestInfo;
            toProto(message: _103.RequestInfo): Uint8Array;
            toProtoMsg(message: _103.RequestInfo): _103.RequestInfoProtoMsg;
        };
        RequestSetOption: {
            typeUrl: string;
            encode(message: _103.RequestSetOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.RequestSetOption;
            fromJSON(object: any): _103.RequestSetOption;
            toJSON(message: _103.RequestSetOption): unknown;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _103.RequestSetOption;
            fromSDK(object: _103.RequestSetOptionSDKType): _103.RequestSetOption;
            toSDK(message: _103.RequestSetOption): _103.RequestSetOptionSDKType;
            fromAmino(object: _103.RequestSetOptionAmino): _103.RequestSetOption;
            toAmino(message: _103.RequestSetOption): _103.RequestSetOptionAmino;
            fromAminoMsg(object: _103.RequestSetOptionAminoMsg): _103.RequestSetOption;
            fromProtoMsg(message: _103.RequestSetOptionProtoMsg): _103.RequestSetOption;
            toProto(message: _103.RequestSetOption): Uint8Array;
            toProtoMsg(message: _103.RequestSetOption): _103.RequestSetOptionProtoMsg;
        };
        RequestInitChain: {
            typeUrl: string;
            encode(message: _103.RequestInitChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.RequestInitChain;
            fromJSON(object: any): _103.RequestInitChain;
            toJSON(message: _103.RequestInitChain): unknown;
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
                        appVersion?: bigint;
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
            }): _103.RequestInitChain;
            fromSDK(object: _103.RequestInitChainSDKType): _103.RequestInitChain;
            toSDK(message: _103.RequestInitChain): _103.RequestInitChainSDKType;
            fromAmino(object: _103.RequestInitChainAmino): _103.RequestInitChain;
            toAmino(message: _103.RequestInitChain): _103.RequestInitChainAmino;
            fromAminoMsg(object: _103.RequestInitChainAminoMsg): _103.RequestInitChain;
            fromProtoMsg(message: _103.RequestInitChainProtoMsg): _103.RequestInitChain;
            toProto(message: _103.RequestInitChain): Uint8Array;
            toProtoMsg(message: _103.RequestInitChain): _103.RequestInitChainProtoMsg;
        };
        RequestQuery: {
            typeUrl: string;
            encode(message: _103.RequestQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.RequestQuery;
            fromJSON(object: any): _103.RequestQuery;
            toJSON(message: _103.RequestQuery): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                path?: string;
                height?: bigint;
                prove?: boolean;
            }): _103.RequestQuery;
            fromSDK(object: _103.RequestQuerySDKType): _103.RequestQuery;
            toSDK(message: _103.RequestQuery): _103.RequestQuerySDKType;
            fromAmino(object: _103.RequestQueryAmino): _103.RequestQuery;
            toAmino(message: _103.RequestQuery): _103.RequestQueryAmino;
            fromAminoMsg(object: _103.RequestQueryAminoMsg): _103.RequestQuery;
            fromProtoMsg(message: _103.RequestQueryProtoMsg): _103.RequestQuery;
            toProto(message: _103.RequestQuery): Uint8Array;
            toProtoMsg(message: _103.RequestQuery): _103.RequestQueryProtoMsg;
        };
        RequestBeginBlock: {
            typeUrl: string;
            encode(message: _103.RequestBeginBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.RequestBeginBlock;
            fromJSON(object: any): _103.RequestBeginBlock;
            toJSON(message: _103.RequestBeginBlock): unknown;
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
                    type?: _103.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: bigint;
                    };
                    height?: bigint;
                    time?: Date;
                    totalVotingPower?: bigint;
                }[];
            }): _103.RequestBeginBlock;
            fromSDK(object: _103.RequestBeginBlockSDKType): _103.RequestBeginBlock;
            toSDK(message: _103.RequestBeginBlock): _103.RequestBeginBlockSDKType;
            fromAmino(object: _103.RequestBeginBlockAmino): _103.RequestBeginBlock;
            toAmino(message: _103.RequestBeginBlock): _103.RequestBeginBlockAmino;
            fromAminoMsg(object: _103.RequestBeginBlockAminoMsg): _103.RequestBeginBlock;
            fromProtoMsg(message: _103.RequestBeginBlockProtoMsg): _103.RequestBeginBlock;
            toProto(message: _103.RequestBeginBlock): Uint8Array;
            toProtoMsg(message: _103.RequestBeginBlock): _103.RequestBeginBlockProtoMsg;
        };
        RequestCheckTx: {
            typeUrl: string;
            encode(message: _103.RequestCheckTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.RequestCheckTx;
            fromJSON(object: any): _103.RequestCheckTx;
            toJSON(message: _103.RequestCheckTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
                type?: _103.CheckTxType;
            }): _103.RequestCheckTx;
            fromSDK(object: _103.RequestCheckTxSDKType): _103.RequestCheckTx;
            toSDK(message: _103.RequestCheckTx): _103.RequestCheckTxSDKType;
            fromAmino(object: _103.RequestCheckTxAmino): _103.RequestCheckTx;
            toAmino(message: _103.RequestCheckTx): _103.RequestCheckTxAmino;
            fromAminoMsg(object: _103.RequestCheckTxAminoMsg): _103.RequestCheckTx;
            fromProtoMsg(message: _103.RequestCheckTxProtoMsg): _103.RequestCheckTx;
            toProto(message: _103.RequestCheckTx): Uint8Array;
            toProtoMsg(message: _103.RequestCheckTx): _103.RequestCheckTxProtoMsg;
        };
        RequestDeliverTx: {
            typeUrl: string;
            encode(message: _103.RequestDeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.RequestDeliverTx;
            fromJSON(object: any): _103.RequestDeliverTx;
            toJSON(message: _103.RequestDeliverTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
            }): _103.RequestDeliverTx;
            fromSDK(object: _103.RequestDeliverTxSDKType): _103.RequestDeliverTx;
            toSDK(message: _103.RequestDeliverTx): _103.RequestDeliverTxSDKType;
            fromAmino(object: _103.RequestDeliverTxAmino): _103.RequestDeliverTx;
            toAmino(message: _103.RequestDeliverTx): _103.RequestDeliverTxAmino;
            fromAminoMsg(object: _103.RequestDeliverTxAminoMsg): _103.RequestDeliverTx;
            fromProtoMsg(message: _103.RequestDeliverTxProtoMsg): _103.RequestDeliverTx;
            toProto(message: _103.RequestDeliverTx): Uint8Array;
            toProtoMsg(message: _103.RequestDeliverTx): _103.RequestDeliverTxProtoMsg;
        };
        RequestEndBlock: {
            typeUrl: string;
            encode(message: _103.RequestEndBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.RequestEndBlock;
            fromJSON(object: any): _103.RequestEndBlock;
            toJSON(message: _103.RequestEndBlock): unknown;
            fromPartial(object: {
                height?: bigint;
            }): _103.RequestEndBlock;
            fromSDK(object: _103.RequestEndBlockSDKType): _103.RequestEndBlock;
            toSDK(message: _103.RequestEndBlock): _103.RequestEndBlockSDKType;
            fromAmino(object: _103.RequestEndBlockAmino): _103.RequestEndBlock;
            toAmino(message: _103.RequestEndBlock): _103.RequestEndBlockAmino;
            fromAminoMsg(object: _103.RequestEndBlockAminoMsg): _103.RequestEndBlock;
            fromProtoMsg(message: _103.RequestEndBlockProtoMsg): _103.RequestEndBlock;
            toProto(message: _103.RequestEndBlock): Uint8Array;
            toProtoMsg(message: _103.RequestEndBlock): _103.RequestEndBlockProtoMsg;
        };
        RequestCommit: {
            typeUrl: string;
            encode(_: _103.RequestCommit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.RequestCommit;
            fromJSON(_: any): _103.RequestCommit;
            toJSON(_: _103.RequestCommit): unknown;
            fromPartial(_: {}): _103.RequestCommit;
            fromSDK(_: _103.RequestCommitSDKType): _103.RequestCommit;
            toSDK(_: _103.RequestCommit): _103.RequestCommitSDKType;
            fromAmino(_: _103.RequestCommitAmino): _103.RequestCommit;
            toAmino(_: _103.RequestCommit): _103.RequestCommitAmino;
            fromAminoMsg(object: _103.RequestCommitAminoMsg): _103.RequestCommit;
            fromProtoMsg(message: _103.RequestCommitProtoMsg): _103.RequestCommit;
            toProto(message: _103.RequestCommit): Uint8Array;
            toProtoMsg(message: _103.RequestCommit): _103.RequestCommitProtoMsg;
        };
        RequestListSnapshots: {
            typeUrl: string;
            encode(_: _103.RequestListSnapshots, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.RequestListSnapshots;
            fromJSON(_: any): _103.RequestListSnapshots;
            toJSON(_: _103.RequestListSnapshots): unknown;
            fromPartial(_: {}): _103.RequestListSnapshots;
            fromSDK(_: _103.RequestListSnapshotsSDKType): _103.RequestListSnapshots;
            toSDK(_: _103.RequestListSnapshots): _103.RequestListSnapshotsSDKType;
            fromAmino(_: _103.RequestListSnapshotsAmino): _103.RequestListSnapshots;
            toAmino(_: _103.RequestListSnapshots): _103.RequestListSnapshotsAmino;
            fromAminoMsg(object: _103.RequestListSnapshotsAminoMsg): _103.RequestListSnapshots;
            fromProtoMsg(message: _103.RequestListSnapshotsProtoMsg): _103.RequestListSnapshots;
            toProto(message: _103.RequestListSnapshots): Uint8Array;
            toProtoMsg(message: _103.RequestListSnapshots): _103.RequestListSnapshotsProtoMsg;
        };
        RequestOfferSnapshot: {
            typeUrl: string;
            encode(message: _103.RequestOfferSnapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.RequestOfferSnapshot;
            fromJSON(object: any): _103.RequestOfferSnapshot;
            toJSON(message: _103.RequestOfferSnapshot): unknown;
            fromPartial(object: {
                snapshot?: {
                    height?: bigint;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                appHash?: Uint8Array;
            }): _103.RequestOfferSnapshot;
            fromSDK(object: _103.RequestOfferSnapshotSDKType): _103.RequestOfferSnapshot;
            toSDK(message: _103.RequestOfferSnapshot): _103.RequestOfferSnapshotSDKType;
            fromAmino(object: _103.RequestOfferSnapshotAmino): _103.RequestOfferSnapshot;
            toAmino(message: _103.RequestOfferSnapshot): _103.RequestOfferSnapshotAmino;
            fromAminoMsg(object: _103.RequestOfferSnapshotAminoMsg): _103.RequestOfferSnapshot;
            fromProtoMsg(message: _103.RequestOfferSnapshotProtoMsg): _103.RequestOfferSnapshot;
            toProto(message: _103.RequestOfferSnapshot): Uint8Array;
            toProtoMsg(message: _103.RequestOfferSnapshot): _103.RequestOfferSnapshotProtoMsg;
        };
        RequestLoadSnapshotChunk: {
            typeUrl: string;
            encode(message: _103.RequestLoadSnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.RequestLoadSnapshotChunk;
            fromJSON(object: any): _103.RequestLoadSnapshotChunk;
            toJSON(message: _103.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: {
                height?: bigint;
                format?: number;
                chunk?: number;
            }): _103.RequestLoadSnapshotChunk;
            fromSDK(object: _103.RequestLoadSnapshotChunkSDKType): _103.RequestLoadSnapshotChunk;
            toSDK(message: _103.RequestLoadSnapshotChunk): _103.RequestLoadSnapshotChunkSDKType;
            fromAmino(object: _103.RequestLoadSnapshotChunkAmino): _103.RequestLoadSnapshotChunk;
            toAmino(message: _103.RequestLoadSnapshotChunk): _103.RequestLoadSnapshotChunkAmino;
            fromAminoMsg(object: _103.RequestLoadSnapshotChunkAminoMsg): _103.RequestLoadSnapshotChunk;
            fromProtoMsg(message: _103.RequestLoadSnapshotChunkProtoMsg): _103.RequestLoadSnapshotChunk;
            toProto(message: _103.RequestLoadSnapshotChunk): Uint8Array;
            toProtoMsg(message: _103.RequestLoadSnapshotChunk): _103.RequestLoadSnapshotChunkProtoMsg;
        };
        RequestApplySnapshotChunk: {
            typeUrl: string;
            encode(message: _103.RequestApplySnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.RequestApplySnapshotChunk;
            fromJSON(object: any): _103.RequestApplySnapshotChunk;
            toJSON(message: _103.RequestApplySnapshotChunk): unknown;
            fromPartial(object: {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            }): _103.RequestApplySnapshotChunk;
            fromSDK(object: _103.RequestApplySnapshotChunkSDKType): _103.RequestApplySnapshotChunk;
            toSDK(message: _103.RequestApplySnapshotChunk): _103.RequestApplySnapshotChunkSDKType;
            fromAmino(object: _103.RequestApplySnapshotChunkAmino): _103.RequestApplySnapshotChunk;
            toAmino(message: _103.RequestApplySnapshotChunk): _103.RequestApplySnapshotChunkAmino;
            fromAminoMsg(object: _103.RequestApplySnapshotChunkAminoMsg): _103.RequestApplySnapshotChunk;
            fromProtoMsg(message: _103.RequestApplySnapshotChunkProtoMsg): _103.RequestApplySnapshotChunk;
            toProto(message: _103.RequestApplySnapshotChunk): Uint8Array;
            toProtoMsg(message: _103.RequestApplySnapshotChunk): _103.RequestApplySnapshotChunkProtoMsg;
        };
        Response: {
            typeUrl: string;
            encode(message: _103.Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Response;
            fromJSON(object: any): _103.Response;
            toJSON(message: _103.Response): unknown;
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
                setOption?: {
                    code?: number;
                    log?: string;
                    info?: string;
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
                            appVersion?: bigint;
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
                            key?: Uint8Array;
                            value?: Uint8Array;
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
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
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
                            key?: Uint8Array;
                            value?: Uint8Array;
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
                            appVersion?: bigint;
                        };
                    };
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
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
                    result?: _103.ResponseOfferSnapshot_Result;
                };
                loadSnapshotChunk?: {
                    chunk?: Uint8Array;
                };
                applySnapshotChunk?: {
                    result?: _103.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[];
                    rejectSenders?: string[];
                };
            }): _103.Response;
            fromSDK(object: _103.ResponseSDKType): _103.Response;
            toSDK(message: _103.Response): _103.ResponseSDKType;
            fromAmino(object: _103.ResponseAmino): _103.Response;
            toAmino(message: _103.Response): _103.ResponseAmino;
            fromAminoMsg(object: _103.ResponseAminoMsg): _103.Response;
            fromProtoMsg(message: _103.ResponseProtoMsg): _103.Response;
            toProto(message: _103.Response): Uint8Array;
            toProtoMsg(message: _103.Response): _103.ResponseProtoMsg;
        };
        ResponseException: {
            typeUrl: string;
            encode(message: _103.ResponseException, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.ResponseException;
            fromJSON(object: any): _103.ResponseException;
            toJSON(message: _103.ResponseException): unknown;
            fromPartial(object: {
                error?: string;
            }): _103.ResponseException;
            fromSDK(object: _103.ResponseExceptionSDKType): _103.ResponseException;
            toSDK(message: _103.ResponseException): _103.ResponseExceptionSDKType;
            fromAmino(object: _103.ResponseExceptionAmino): _103.ResponseException;
            toAmino(message: _103.ResponseException): _103.ResponseExceptionAmino;
            fromAminoMsg(object: _103.ResponseExceptionAminoMsg): _103.ResponseException;
            fromProtoMsg(message: _103.ResponseExceptionProtoMsg): _103.ResponseException;
            toProto(message: _103.ResponseException): Uint8Array;
            toProtoMsg(message: _103.ResponseException): _103.ResponseExceptionProtoMsg;
        };
        ResponseEcho: {
            typeUrl: string;
            encode(message: _103.ResponseEcho, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.ResponseEcho;
            fromJSON(object: any): _103.ResponseEcho;
            toJSON(message: _103.ResponseEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _103.ResponseEcho;
            fromSDK(object: _103.ResponseEchoSDKType): _103.ResponseEcho;
            toSDK(message: _103.ResponseEcho): _103.ResponseEchoSDKType;
            fromAmino(object: _103.ResponseEchoAmino): _103.ResponseEcho;
            toAmino(message: _103.ResponseEcho): _103.ResponseEchoAmino;
            fromAminoMsg(object: _103.ResponseEchoAminoMsg): _103.ResponseEcho;
            fromProtoMsg(message: _103.ResponseEchoProtoMsg): _103.ResponseEcho;
            toProto(message: _103.ResponseEcho): Uint8Array;
            toProtoMsg(message: _103.ResponseEcho): _103.ResponseEchoProtoMsg;
        };
        ResponseFlush: {
            typeUrl: string;
            encode(_: _103.ResponseFlush, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.ResponseFlush;
            fromJSON(_: any): _103.ResponseFlush;
            toJSON(_: _103.ResponseFlush): unknown;
            fromPartial(_: {}): _103.ResponseFlush;
            fromSDK(_: _103.ResponseFlushSDKType): _103.ResponseFlush;
            toSDK(_: _103.ResponseFlush): _103.ResponseFlushSDKType;
            fromAmino(_: _103.ResponseFlushAmino): _103.ResponseFlush;
            toAmino(_: _103.ResponseFlush): _103.ResponseFlushAmino;
            fromAminoMsg(object: _103.ResponseFlushAminoMsg): _103.ResponseFlush;
            fromProtoMsg(message: _103.ResponseFlushProtoMsg): _103.ResponseFlush;
            toProto(message: _103.ResponseFlush): Uint8Array;
            toProtoMsg(message: _103.ResponseFlush): _103.ResponseFlushProtoMsg;
        };
        ResponseInfo: {
            typeUrl: string;
            encode(message: _103.ResponseInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.ResponseInfo;
            fromJSON(object: any): _103.ResponseInfo;
            toJSON(message: _103.ResponseInfo): unknown;
            fromPartial(object: {
                data?: string;
                version?: string;
                appVersion?: bigint;
                lastBlockHeight?: bigint;
                lastBlockAppHash?: Uint8Array;
            }): _103.ResponseInfo;
            fromSDK(object: _103.ResponseInfoSDKType): _103.ResponseInfo;
            toSDK(message: _103.ResponseInfo): _103.ResponseInfoSDKType;
            fromAmino(object: _103.ResponseInfoAmino): _103.ResponseInfo;
            toAmino(message: _103.ResponseInfo): _103.ResponseInfoAmino;
            fromAminoMsg(object: _103.ResponseInfoAminoMsg): _103.ResponseInfo;
            fromProtoMsg(message: _103.ResponseInfoProtoMsg): _103.ResponseInfo;
            toProto(message: _103.ResponseInfo): Uint8Array;
            toProtoMsg(message: _103.ResponseInfo): _103.ResponseInfoProtoMsg;
        };
        ResponseSetOption: {
            typeUrl: string;
            encode(message: _103.ResponseSetOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.ResponseSetOption;
            fromJSON(object: any): _103.ResponseSetOption;
            toJSON(message: _103.ResponseSetOption): unknown;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
            }): _103.ResponseSetOption;
            fromSDK(object: _103.ResponseSetOptionSDKType): _103.ResponseSetOption;
            toSDK(message: _103.ResponseSetOption): _103.ResponseSetOptionSDKType;
            fromAmino(object: _103.ResponseSetOptionAmino): _103.ResponseSetOption;
            toAmino(message: _103.ResponseSetOption): _103.ResponseSetOptionAmino;
            fromAminoMsg(object: _103.ResponseSetOptionAminoMsg): _103.ResponseSetOption;
            fromProtoMsg(message: _103.ResponseSetOptionProtoMsg): _103.ResponseSetOption;
            toProto(message: _103.ResponseSetOption): Uint8Array;
            toProtoMsg(message: _103.ResponseSetOption): _103.ResponseSetOptionProtoMsg;
        };
        ResponseInitChain: {
            typeUrl: string;
            encode(message: _103.ResponseInitChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.ResponseInitChain;
            fromJSON(object: any): _103.ResponseInitChain;
            toJSON(message: _103.ResponseInitChain): unknown;
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
                        appVersion?: bigint;
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
            }): _103.ResponseInitChain;
            fromSDK(object: _103.ResponseInitChainSDKType): _103.ResponseInitChain;
            toSDK(message: _103.ResponseInitChain): _103.ResponseInitChainSDKType;
            fromAmino(object: _103.ResponseInitChainAmino): _103.ResponseInitChain;
            toAmino(message: _103.ResponseInitChain): _103.ResponseInitChainAmino;
            fromAminoMsg(object: _103.ResponseInitChainAminoMsg): _103.ResponseInitChain;
            fromProtoMsg(message: _103.ResponseInitChainProtoMsg): _103.ResponseInitChain;
            toProto(message: _103.ResponseInitChain): Uint8Array;
            toProtoMsg(message: _103.ResponseInitChain): _103.ResponseInitChainProtoMsg;
        };
        ResponseQuery: {
            typeUrl: string;
            encode(message: _103.ResponseQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.ResponseQuery;
            fromJSON(object: any): _103.ResponseQuery;
            toJSON(message: _103.ResponseQuery): unknown;
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
            }): _103.ResponseQuery;
            fromSDK(object: _103.ResponseQuerySDKType): _103.ResponseQuery;
            toSDK(message: _103.ResponseQuery): _103.ResponseQuerySDKType;
            fromAmino(object: _103.ResponseQueryAmino): _103.ResponseQuery;
            toAmino(message: _103.ResponseQuery): _103.ResponseQueryAmino;
            fromAminoMsg(object: _103.ResponseQueryAminoMsg): _103.ResponseQuery;
            fromProtoMsg(message: _103.ResponseQueryProtoMsg): _103.ResponseQuery;
            toProto(message: _103.ResponseQuery): Uint8Array;
            toProtoMsg(message: _103.ResponseQuery): _103.ResponseQueryProtoMsg;
        };
        ResponseBeginBlock: {
            typeUrl: string;
            encode(message: _103.ResponseBeginBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.ResponseBeginBlock;
            fromJSON(object: any): _103.ResponseBeginBlock;
            toJSON(message: _103.ResponseBeginBlock): unknown;
            fromPartial(object: {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _103.ResponseBeginBlock;
            fromSDK(object: _103.ResponseBeginBlockSDKType): _103.ResponseBeginBlock;
            toSDK(message: _103.ResponseBeginBlock): _103.ResponseBeginBlockSDKType;
            fromAmino(object: _103.ResponseBeginBlockAmino): _103.ResponseBeginBlock;
            toAmino(message: _103.ResponseBeginBlock): _103.ResponseBeginBlockAmino;
            fromAminoMsg(object: _103.ResponseBeginBlockAminoMsg): _103.ResponseBeginBlock;
            fromProtoMsg(message: _103.ResponseBeginBlockProtoMsg): _103.ResponseBeginBlock;
            toProto(message: _103.ResponseBeginBlock): Uint8Array;
            toProtoMsg(message: _103.ResponseBeginBlock): _103.ResponseBeginBlockProtoMsg;
        };
        ResponseCheckTx: {
            typeUrl: string;
            encode(message: _103.ResponseCheckTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.ResponseCheckTx;
            fromJSON(object: any): _103.ResponseCheckTx;
            toJSON(message: _103.ResponseCheckTx): unknown;
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
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _103.ResponseCheckTx;
            fromSDK(object: _103.ResponseCheckTxSDKType): _103.ResponseCheckTx;
            toSDK(message: _103.ResponseCheckTx): _103.ResponseCheckTxSDKType;
            fromAmino(object: _103.ResponseCheckTxAmino): _103.ResponseCheckTx;
            toAmino(message: _103.ResponseCheckTx): _103.ResponseCheckTxAmino;
            fromAminoMsg(object: _103.ResponseCheckTxAminoMsg): _103.ResponseCheckTx;
            fromProtoMsg(message: _103.ResponseCheckTxProtoMsg): _103.ResponseCheckTx;
            toProto(message: _103.ResponseCheckTx): Uint8Array;
            toProtoMsg(message: _103.ResponseCheckTx): _103.ResponseCheckTxProtoMsg;
        };
        ResponseDeliverTx: {
            typeUrl: string;
            encode(message: _103.ResponseDeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.ResponseDeliverTx;
            fromJSON(object: any): _103.ResponseDeliverTx;
            toJSON(message: _103.ResponseDeliverTx): unknown;
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
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _103.ResponseDeliverTx;
            fromSDK(object: _103.ResponseDeliverTxSDKType): _103.ResponseDeliverTx;
            toSDK(message: _103.ResponseDeliverTx): _103.ResponseDeliverTxSDKType;
            fromAmino(object: _103.ResponseDeliverTxAmino): _103.ResponseDeliverTx;
            toAmino(message: _103.ResponseDeliverTx): _103.ResponseDeliverTxAmino;
            fromAminoMsg(object: _103.ResponseDeliverTxAminoMsg): _103.ResponseDeliverTx;
            fromProtoMsg(message: _103.ResponseDeliverTxProtoMsg): _103.ResponseDeliverTx;
            toProto(message: _103.ResponseDeliverTx): Uint8Array;
            toProtoMsg(message: _103.ResponseDeliverTx): _103.ResponseDeliverTxProtoMsg;
        };
        ResponseEndBlock: {
            typeUrl: string;
            encode(message: _103.ResponseEndBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.ResponseEndBlock;
            fromJSON(object: any): _103.ResponseEndBlock;
            toJSON(message: _103.ResponseEndBlock): unknown;
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
                        appVersion?: bigint;
                    };
                };
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _103.ResponseEndBlock;
            fromSDK(object: _103.ResponseEndBlockSDKType): _103.ResponseEndBlock;
            toSDK(message: _103.ResponseEndBlock): _103.ResponseEndBlockSDKType;
            fromAmino(object: _103.ResponseEndBlockAmino): _103.ResponseEndBlock;
            toAmino(message: _103.ResponseEndBlock): _103.ResponseEndBlockAmino;
            fromAminoMsg(object: _103.ResponseEndBlockAminoMsg): _103.ResponseEndBlock;
            fromProtoMsg(message: _103.ResponseEndBlockProtoMsg): _103.ResponseEndBlock;
            toProto(message: _103.ResponseEndBlock): Uint8Array;
            toProtoMsg(message: _103.ResponseEndBlock): _103.ResponseEndBlockProtoMsg;
        };
        ResponseCommit: {
            typeUrl: string;
            encode(message: _103.ResponseCommit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.ResponseCommit;
            fromJSON(object: any): _103.ResponseCommit;
            toJSON(message: _103.ResponseCommit): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                retainHeight?: bigint;
            }): _103.ResponseCommit;
            fromSDK(object: _103.ResponseCommitSDKType): _103.ResponseCommit;
            toSDK(message: _103.ResponseCommit): _103.ResponseCommitSDKType;
            fromAmino(object: _103.ResponseCommitAmino): _103.ResponseCommit;
            toAmino(message: _103.ResponseCommit): _103.ResponseCommitAmino;
            fromAminoMsg(object: _103.ResponseCommitAminoMsg): _103.ResponseCommit;
            fromProtoMsg(message: _103.ResponseCommitProtoMsg): _103.ResponseCommit;
            toProto(message: _103.ResponseCommit): Uint8Array;
            toProtoMsg(message: _103.ResponseCommit): _103.ResponseCommitProtoMsg;
        };
        ResponseListSnapshots: {
            typeUrl: string;
            encode(message: _103.ResponseListSnapshots, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.ResponseListSnapshots;
            fromJSON(object: any): _103.ResponseListSnapshots;
            toJSON(message: _103.ResponseListSnapshots): unknown;
            fromPartial(object: {
                snapshots?: {
                    height?: bigint;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[];
            }): _103.ResponseListSnapshots;
            fromSDK(object: _103.ResponseListSnapshotsSDKType): _103.ResponseListSnapshots;
            toSDK(message: _103.ResponseListSnapshots): _103.ResponseListSnapshotsSDKType;
            fromAmino(object: _103.ResponseListSnapshotsAmino): _103.ResponseListSnapshots;
            toAmino(message: _103.ResponseListSnapshots): _103.ResponseListSnapshotsAmino;
            fromAminoMsg(object: _103.ResponseListSnapshotsAminoMsg): _103.ResponseListSnapshots;
            fromProtoMsg(message: _103.ResponseListSnapshotsProtoMsg): _103.ResponseListSnapshots;
            toProto(message: _103.ResponseListSnapshots): Uint8Array;
            toProtoMsg(message: _103.ResponseListSnapshots): _103.ResponseListSnapshotsProtoMsg;
        };
        ResponseOfferSnapshot: {
            typeUrl: string;
            encode(message: _103.ResponseOfferSnapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.ResponseOfferSnapshot;
            fromJSON(object: any): _103.ResponseOfferSnapshot;
            toJSON(message: _103.ResponseOfferSnapshot): unknown;
            fromPartial(object: {
                result?: _103.ResponseOfferSnapshot_Result;
            }): _103.ResponseOfferSnapshot;
            fromSDK(object: _103.ResponseOfferSnapshotSDKType): _103.ResponseOfferSnapshot;
            toSDK(message: _103.ResponseOfferSnapshot): _103.ResponseOfferSnapshotSDKType;
            fromAmino(object: _103.ResponseOfferSnapshotAmino): _103.ResponseOfferSnapshot;
            toAmino(message: _103.ResponseOfferSnapshot): _103.ResponseOfferSnapshotAmino;
            fromAminoMsg(object: _103.ResponseOfferSnapshotAminoMsg): _103.ResponseOfferSnapshot;
            fromProtoMsg(message: _103.ResponseOfferSnapshotProtoMsg): _103.ResponseOfferSnapshot;
            toProto(message: _103.ResponseOfferSnapshot): Uint8Array;
            toProtoMsg(message: _103.ResponseOfferSnapshot): _103.ResponseOfferSnapshotProtoMsg;
        };
        ResponseLoadSnapshotChunk: {
            typeUrl: string;
            encode(message: _103.ResponseLoadSnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _103.ResponseLoadSnapshotChunk;
            toJSON(message: _103.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: {
                chunk?: Uint8Array;
            }): _103.ResponseLoadSnapshotChunk;
            fromSDK(object: _103.ResponseLoadSnapshotChunkSDKType): _103.ResponseLoadSnapshotChunk;
            toSDK(message: _103.ResponseLoadSnapshotChunk): _103.ResponseLoadSnapshotChunkSDKType;
            fromAmino(object: _103.ResponseLoadSnapshotChunkAmino): _103.ResponseLoadSnapshotChunk;
            toAmino(message: _103.ResponseLoadSnapshotChunk): _103.ResponseLoadSnapshotChunkAmino;
            fromAminoMsg(object: _103.ResponseLoadSnapshotChunkAminoMsg): _103.ResponseLoadSnapshotChunk;
            fromProtoMsg(message: _103.ResponseLoadSnapshotChunkProtoMsg): _103.ResponseLoadSnapshotChunk;
            toProto(message: _103.ResponseLoadSnapshotChunk): Uint8Array;
            toProtoMsg(message: _103.ResponseLoadSnapshotChunk): _103.ResponseLoadSnapshotChunkProtoMsg;
        };
        ResponseApplySnapshotChunk: {
            typeUrl: string;
            encode(message: _103.ResponseApplySnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.ResponseApplySnapshotChunk;
            fromJSON(object: any): _103.ResponseApplySnapshotChunk;
            toJSON(message: _103.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: {
                result?: _103.ResponseApplySnapshotChunk_Result;
                refetchChunks?: number[];
                rejectSenders?: string[];
            }): _103.ResponseApplySnapshotChunk;
            fromSDK(object: _103.ResponseApplySnapshotChunkSDKType): _103.ResponseApplySnapshotChunk;
            toSDK(message: _103.ResponseApplySnapshotChunk): _103.ResponseApplySnapshotChunkSDKType;
            fromAmino(object: _103.ResponseApplySnapshotChunkAmino): _103.ResponseApplySnapshotChunk;
            toAmino(message: _103.ResponseApplySnapshotChunk): _103.ResponseApplySnapshotChunkAmino;
            fromAminoMsg(object: _103.ResponseApplySnapshotChunkAminoMsg): _103.ResponseApplySnapshotChunk;
            fromProtoMsg(message: _103.ResponseApplySnapshotChunkProtoMsg): _103.ResponseApplySnapshotChunk;
            toProto(message: _103.ResponseApplySnapshotChunk): Uint8Array;
            toProtoMsg(message: _103.ResponseApplySnapshotChunk): _103.ResponseApplySnapshotChunkProtoMsg;
        };
        ConsensusParams: {
            typeUrl: string;
            encode(message: _103.ConsensusParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.ConsensusParams;
            fromJSON(object: any): _103.ConsensusParams;
            toJSON(message: _103.ConsensusParams): unknown;
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
                    appVersion?: bigint;
                };
            }): _103.ConsensusParams;
            fromSDK(object: _103.ConsensusParamsSDKType): _103.ConsensusParams;
            toSDK(message: _103.ConsensusParams): _103.ConsensusParamsSDKType;
            fromAmino(object: _103.ConsensusParamsAmino): _103.ConsensusParams;
            toAmino(message: _103.ConsensusParams): _103.ConsensusParamsAmino;
            fromAminoMsg(object: _103.ConsensusParamsAminoMsg): _103.ConsensusParams;
            fromProtoMsg(message: _103.ConsensusParamsProtoMsg): _103.ConsensusParams;
            toProto(message: _103.ConsensusParams): Uint8Array;
            toProtoMsg(message: _103.ConsensusParams): _103.ConsensusParamsProtoMsg;
        };
        BlockParams: {
            typeUrl: string;
            encode(message: _103.BlockParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.BlockParams;
            fromJSON(object: any): _103.BlockParams;
            toJSON(message: _103.BlockParams): unknown;
            fromPartial(object: {
                maxBytes?: bigint;
                maxGas?: bigint;
            }): _103.BlockParams;
            fromSDK(object: _103.BlockParamsSDKType): _103.BlockParams;
            toSDK(message: _103.BlockParams): _103.BlockParamsSDKType;
            fromAmino(object: _103.BlockParamsAmino): _103.BlockParams;
            toAmino(message: _103.BlockParams): _103.BlockParamsAmino;
            fromAminoMsg(object: _103.BlockParamsAminoMsg): _103.BlockParams;
            fromProtoMsg(message: _103.BlockParamsProtoMsg): _103.BlockParams;
            toProto(message: _103.BlockParams): Uint8Array;
            toProtoMsg(message: _103.BlockParams): _103.BlockParamsProtoMsg;
        };
        LastCommitInfo: {
            typeUrl: string;
            encode(message: _103.LastCommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.LastCommitInfo;
            fromJSON(object: any): _103.LastCommitInfo;
            toJSON(message: _103.LastCommitInfo): unknown;
            fromPartial(object: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: bigint;
                    };
                    signedLastBlock?: boolean;
                }[];
            }): _103.LastCommitInfo;
            fromSDK(object: _103.LastCommitInfoSDKType): _103.LastCommitInfo;
            toSDK(message: _103.LastCommitInfo): _103.LastCommitInfoSDKType;
            fromAmino(object: _103.LastCommitInfoAmino): _103.LastCommitInfo;
            toAmino(message: _103.LastCommitInfo): _103.LastCommitInfoAmino;
            fromAminoMsg(object: _103.LastCommitInfoAminoMsg): _103.LastCommitInfo;
            fromProtoMsg(message: _103.LastCommitInfoProtoMsg): _103.LastCommitInfo;
            toProto(message: _103.LastCommitInfo): Uint8Array;
            toProtoMsg(message: _103.LastCommitInfo): _103.LastCommitInfoProtoMsg;
        };
        Event: {
            typeUrl: string;
            encode(message: _103.Event, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Event;
            fromJSON(object: any): _103.Event;
            toJSON(message: _103.Event): unknown;
            fromPartial(object: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }): _103.Event;
            fromSDK(object: _103.EventSDKType): _103.Event;
            toSDK(message: _103.Event): _103.EventSDKType;
            fromAmino(object: _103.EventAmino): _103.Event;
            toAmino(message: _103.Event): _103.EventAmino;
            fromAminoMsg(object: _103.EventAminoMsg): _103.Event;
            fromProtoMsg(message: _103.EventProtoMsg): _103.Event;
            toProto(message: _103.Event): Uint8Array;
            toProtoMsg(message: _103.Event): _103.EventProtoMsg;
        };
        EventAttribute: {
            typeUrl: string;
            encode(message: _103.EventAttribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.EventAttribute;
            fromJSON(object: any): _103.EventAttribute;
            toJSON(message: _103.EventAttribute): unknown;
            fromPartial(object: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }): _103.EventAttribute;
            fromSDK(object: _103.EventAttributeSDKType): _103.EventAttribute;
            toSDK(message: _103.EventAttribute): _103.EventAttributeSDKType;
            fromAmino(object: _103.EventAttributeAmino): _103.EventAttribute;
            toAmino(message: _103.EventAttribute): _103.EventAttributeAmino;
            fromAminoMsg(object: _103.EventAttributeAminoMsg): _103.EventAttribute;
            fromProtoMsg(message: _103.EventAttributeProtoMsg): _103.EventAttribute;
            toProto(message: _103.EventAttribute): Uint8Array;
            toProtoMsg(message: _103.EventAttribute): _103.EventAttributeProtoMsg;
        };
        TxResult: {
            typeUrl: string;
            encode(message: _103.TxResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.TxResult;
            fromJSON(object: any): _103.TxResult;
            toJSON(message: _103.TxResult): unknown;
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
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
            }): _103.TxResult;
            fromSDK(object: _103.TxResultSDKType): _103.TxResult;
            toSDK(message: _103.TxResult): _103.TxResultSDKType;
            fromAmino(object: _103.TxResultAmino): _103.TxResult;
            toAmino(message: _103.TxResult): _103.TxResultAmino;
            fromAminoMsg(object: _103.TxResultAminoMsg): _103.TxResult;
            fromProtoMsg(message: _103.TxResultProtoMsg): _103.TxResult;
            toProto(message: _103.TxResult): Uint8Array;
            toProtoMsg(message: _103.TxResult): _103.TxResultProtoMsg;
        };
        Validator: {
            typeUrl: string;
            encode(message: _103.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Validator;
            fromJSON(object: any): _103.Validator;
            toJSON(message: _103.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                power?: bigint;
            }): _103.Validator;
            fromSDK(object: _103.ValidatorSDKType): _103.Validator;
            toSDK(message: _103.Validator): _103.ValidatorSDKType;
            fromAmino(object: _103.ValidatorAmino): _103.Validator;
            toAmino(message: _103.Validator): _103.ValidatorAmino;
            fromAminoMsg(object: _103.ValidatorAminoMsg): _103.Validator;
            fromProtoMsg(message: _103.ValidatorProtoMsg): _103.Validator;
            toProto(message: _103.Validator): Uint8Array;
            toProtoMsg(message: _103.Validator): _103.ValidatorProtoMsg;
        };
        ValidatorUpdate: {
            typeUrl: string;
            encode(message: _103.ValidatorUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.ValidatorUpdate;
            fromJSON(object: any): _103.ValidatorUpdate;
            toJSON(message: _103.ValidatorUpdate): unknown;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: bigint;
            }): _103.ValidatorUpdate;
            fromSDK(object: _103.ValidatorUpdateSDKType): _103.ValidatorUpdate;
            toSDK(message: _103.ValidatorUpdate): _103.ValidatorUpdateSDKType;
            fromAmino(object: _103.ValidatorUpdateAmino): _103.ValidatorUpdate;
            toAmino(message: _103.ValidatorUpdate): _103.ValidatorUpdateAmino;
            fromAminoMsg(object: _103.ValidatorUpdateAminoMsg): _103.ValidatorUpdate;
            fromProtoMsg(message: _103.ValidatorUpdateProtoMsg): _103.ValidatorUpdate;
            toProto(message: _103.ValidatorUpdate): Uint8Array;
            toProtoMsg(message: _103.ValidatorUpdate): _103.ValidatorUpdateProtoMsg;
        };
        VoteInfo: {
            typeUrl: string;
            encode(message: _103.VoteInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.VoteInfo;
            fromJSON(object: any): _103.VoteInfo;
            toJSON(message: _103.VoteInfo): unknown;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: bigint;
                };
                signedLastBlock?: boolean;
            }): _103.VoteInfo;
            fromSDK(object: _103.VoteInfoSDKType): _103.VoteInfo;
            toSDK(message: _103.VoteInfo): _103.VoteInfoSDKType;
            fromAmino(object: _103.VoteInfoAmino): _103.VoteInfo;
            toAmino(message: _103.VoteInfo): _103.VoteInfoAmino;
            fromAminoMsg(object: _103.VoteInfoAminoMsg): _103.VoteInfo;
            fromProtoMsg(message: _103.VoteInfoProtoMsg): _103.VoteInfo;
            toProto(message: _103.VoteInfo): Uint8Array;
            toProtoMsg(message: _103.VoteInfo): _103.VoteInfoProtoMsg;
        };
        Evidence: {
            typeUrl: string;
            encode(message: _103.Evidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Evidence;
            fromJSON(object: any): _103.Evidence;
            toJSON(message: _103.Evidence): unknown;
            fromPartial(object: {
                type?: _103.EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: bigint;
                };
                height?: bigint;
                time?: Date;
                totalVotingPower?: bigint;
            }): _103.Evidence;
            fromSDK(object: _103.EvidenceSDKType): _103.Evidence;
            toSDK(message: _103.Evidence): _103.EvidenceSDKType;
            fromAmino(object: _103.EvidenceAmino): _103.Evidence;
            toAmino(message: _103.Evidence): _103.EvidenceAmino;
            fromAminoMsg(object: _103.EvidenceAminoMsg): _103.Evidence;
            fromProtoMsg(message: _103.EvidenceProtoMsg): _103.Evidence;
            toProto(message: _103.Evidence): Uint8Array;
            toProtoMsg(message: _103.Evidence): _103.EvidenceProtoMsg;
        };
        Snapshot: {
            typeUrl: string;
            encode(message: _103.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Snapshot;
            fromJSON(object: any): _103.Snapshot;
            toJSON(message: _103.Snapshot): unknown;
            fromPartial(object: {
                height?: bigint;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }): _103.Snapshot;
            fromSDK(object: _103.SnapshotSDKType): _103.Snapshot;
            toSDK(message: _103.Snapshot): _103.SnapshotSDKType;
            fromAmino(object: _103.SnapshotAmino): _103.Snapshot;
            toAmino(message: _103.Snapshot): _103.SnapshotAmino;
            fromAminoMsg(object: _103.SnapshotAminoMsg): _103.Snapshot;
            fromProtoMsg(message: _103.SnapshotProtoMsg): _103.Snapshot;
            toProto(message: _103.Snapshot): Uint8Array;
            toProtoMsg(message: _103.Snapshot): _103.SnapshotProtoMsg;
        };
    };
    const crypto: {
        Proof: {
            typeUrl: string;
            encode(message: _105.Proof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.Proof;
            fromJSON(object: any): _105.Proof;
            toJSON(message: _105.Proof): unknown;
            fromPartial(object: {
                total?: bigint;
                index?: bigint;
                leafHash?: Uint8Array;
                aunts?: Uint8Array[];
            }): _105.Proof;
            fromSDK(object: _105.ProofSDKType): _105.Proof;
            toSDK(message: _105.Proof): _105.ProofSDKType;
            fromAmino(object: _105.ProofAmino): _105.Proof;
            toAmino(message: _105.Proof): _105.ProofAmino;
            fromAminoMsg(object: _105.ProofAminoMsg): _105.Proof;
            fromProtoMsg(message: _105.ProofProtoMsg): _105.Proof;
            toProto(message: _105.Proof): Uint8Array;
            toProtoMsg(message: _105.Proof): _105.ProofProtoMsg;
        };
        ValueOp: {
            typeUrl: string;
            encode(message: _105.ValueOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.ValueOp;
            fromJSON(object: any): _105.ValueOp;
            toJSON(message: _105.ValueOp): unknown;
            fromPartial(object: {
                key?: Uint8Array;
                proof?: {
                    total?: bigint;
                    index?: bigint;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _105.ValueOp;
            fromSDK(object: _105.ValueOpSDKType): _105.ValueOp;
            toSDK(message: _105.ValueOp): _105.ValueOpSDKType;
            fromAmino(object: _105.ValueOpAmino): _105.ValueOp;
            toAmino(message: _105.ValueOp): _105.ValueOpAmino;
            fromAminoMsg(object: _105.ValueOpAminoMsg): _105.ValueOp;
            fromProtoMsg(message: _105.ValueOpProtoMsg): _105.ValueOp;
            toProto(message: _105.ValueOp): Uint8Array;
            toProtoMsg(message: _105.ValueOp): _105.ValueOpProtoMsg;
        };
        DominoOp: {
            typeUrl: string;
            encode(message: _105.DominoOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.DominoOp;
            fromJSON(object: any): _105.DominoOp;
            toJSON(message: _105.DominoOp): unknown;
            fromPartial(object: {
                key?: string;
                input?: string;
                output?: string;
            }): _105.DominoOp;
            fromSDK(object: _105.DominoOpSDKType): _105.DominoOp;
            toSDK(message: _105.DominoOp): _105.DominoOpSDKType;
            fromAmino(object: _105.DominoOpAmino): _105.DominoOp;
            toAmino(message: _105.DominoOp): _105.DominoOpAmino;
            fromAminoMsg(object: _105.DominoOpAminoMsg): _105.DominoOp;
            fromProtoMsg(message: _105.DominoOpProtoMsg): _105.DominoOp;
            toProto(message: _105.DominoOp): Uint8Array;
            toProtoMsg(message: _105.DominoOp): _105.DominoOpProtoMsg;
        };
        ProofOp: {
            typeUrl: string;
            encode(message: _105.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.ProofOp;
            fromJSON(object: any): _105.ProofOp;
            toJSON(message: _105.ProofOp): unknown;
            fromPartial(object: {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            }): _105.ProofOp;
            fromSDK(object: _105.ProofOpSDKType): _105.ProofOp;
            toSDK(message: _105.ProofOp): _105.ProofOpSDKType;
            fromAmino(object: _105.ProofOpAmino): _105.ProofOp;
            toAmino(message: _105.ProofOp): _105.ProofOpAmino;
            fromAminoMsg(object: _105.ProofOpAminoMsg): _105.ProofOp;
            fromProtoMsg(message: _105.ProofOpProtoMsg): _105.ProofOp;
            toProto(message: _105.ProofOp): Uint8Array;
            toProtoMsg(message: _105.ProofOp): _105.ProofOpProtoMsg;
        };
        ProofOps: {
            typeUrl: string;
            encode(message: _105.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.ProofOps;
            fromJSON(object: any): _105.ProofOps;
            toJSON(message: _105.ProofOps): unknown;
            fromPartial(object: {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            }): _105.ProofOps;
            fromSDK(object: _105.ProofOpsSDKType): _105.ProofOps;
            toSDK(message: _105.ProofOps): _105.ProofOpsSDKType;
            fromAmino(object: _105.ProofOpsAmino): _105.ProofOps;
            toAmino(message: _105.ProofOps): _105.ProofOpsAmino;
            fromAminoMsg(object: _105.ProofOpsAminoMsg): _105.ProofOps;
            fromProtoMsg(message: _105.ProofOpsProtoMsg): _105.ProofOps;
            toProto(message: _105.ProofOps): Uint8Array;
            toProtoMsg(message: _105.ProofOps): _105.ProofOpsProtoMsg;
        };
        PublicKey: {
            typeUrl: string;
            encode(message: _104.PublicKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.PublicKey;
            fromJSON(object: any): _104.PublicKey;
            toJSON(message: _104.PublicKey): unknown;
            fromPartial(object: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            }): _104.PublicKey;
            fromSDK(object: _104.PublicKeySDKType): _104.PublicKey;
            toSDK(message: _104.PublicKey): _104.PublicKeySDKType;
            fromAmino(object: _104.PublicKeyAmino): _104.PublicKey;
            toAmino(message: _104.PublicKey): _104.PublicKeyAmino;
            fromAminoMsg(object: _104.PublicKeyAminoMsg): _104.PublicKey;
            fromProtoMsg(message: _104.PublicKeyProtoMsg): _104.PublicKey;
            toProto(message: _104.PublicKey): Uint8Array;
            toProtoMsg(message: _104.PublicKey): _104.PublicKeyProtoMsg;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                typeUrl: string;
                encode(message: _106.BitArray, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.BitArray;
                fromJSON(object: any): _106.BitArray;
                toJSON(message: _106.BitArray): unknown;
                fromPartial(object: {
                    bits?: bigint;
                    elems?: bigint[];
                }): _106.BitArray;
                fromSDK(object: _106.BitArraySDKType): _106.BitArray;
                toSDK(message: _106.BitArray): _106.BitArraySDKType;
                fromAmino(object: _106.BitArrayAmino): _106.BitArray;
                toAmino(message: _106.BitArray): _106.BitArrayAmino;
                fromAminoMsg(object: _106.BitArrayAminoMsg): _106.BitArray;
                fromProtoMsg(message: _106.BitArrayProtoMsg): _106.BitArray;
                toProto(message: _106.BitArray): Uint8Array;
                toProtoMsg(message: _106.BitArray): _106.BitArrayProtoMsg;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            typeUrl: string;
            encode(message: _107.ProtocolVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.ProtocolVersion;
            fromJSON(object: any): _107.ProtocolVersion;
            toJSON(message: _107.ProtocolVersion): unknown;
            fromPartial(object: {
                p2p?: bigint;
                block?: bigint;
                app?: bigint;
            }): _107.ProtocolVersion;
            fromSDK(object: _107.ProtocolVersionSDKType): _107.ProtocolVersion;
            toSDK(message: _107.ProtocolVersion): _107.ProtocolVersionSDKType;
            fromAmino(object: _107.ProtocolVersionAmino): _107.ProtocolVersion;
            toAmino(message: _107.ProtocolVersion): _107.ProtocolVersionAmino;
            fromAminoMsg(object: _107.ProtocolVersionAminoMsg): _107.ProtocolVersion;
            fromProtoMsg(message: _107.ProtocolVersionProtoMsg): _107.ProtocolVersion;
            toProto(message: _107.ProtocolVersion): Uint8Array;
            toProtoMsg(message: _107.ProtocolVersion): _107.ProtocolVersionProtoMsg;
        };
        NodeInfo: {
            typeUrl: string;
            encode(message: _107.NodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.NodeInfo;
            fromJSON(object: any): _107.NodeInfo;
            toJSON(message: _107.NodeInfo): unknown;
            fromPartial(object: {
                protocolVersion?: {
                    p2p?: bigint;
                    block?: bigint;
                    app?: bigint;
                };
                nodeId?: string;
                listenAddr?: string;
                network?: string;
                version?: string;
                channels?: Uint8Array;
                moniker?: string;
                other?: {
                    txIndex?: string;
                    rpcAddress?: string;
                };
            }): _107.NodeInfo;
            fromSDK(object: _107.NodeInfoSDKType): _107.NodeInfo;
            toSDK(message: _107.NodeInfo): _107.NodeInfoSDKType;
            fromAmino(object: _107.NodeInfoAmino): _107.NodeInfo;
            toAmino(message: _107.NodeInfo): _107.NodeInfoAmino;
            fromAminoMsg(object: _107.NodeInfoAminoMsg): _107.NodeInfo;
            fromProtoMsg(message: _107.NodeInfoProtoMsg): _107.NodeInfo;
            toProto(message: _107.NodeInfo): Uint8Array;
            toProtoMsg(message: _107.NodeInfo): _107.NodeInfoProtoMsg;
        };
        NodeInfoOther: {
            typeUrl: string;
            encode(message: _107.NodeInfoOther, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.NodeInfoOther;
            fromJSON(object: any): _107.NodeInfoOther;
            toJSON(message: _107.NodeInfoOther): unknown;
            fromPartial(object: {
                txIndex?: string;
                rpcAddress?: string;
            }): _107.NodeInfoOther;
            fromSDK(object: _107.NodeInfoOtherSDKType): _107.NodeInfoOther;
            toSDK(message: _107.NodeInfoOther): _107.NodeInfoOtherSDKType;
            fromAmino(object: _107.NodeInfoOtherAmino): _107.NodeInfoOther;
            toAmino(message: _107.NodeInfoOther): _107.NodeInfoOtherAmino;
            fromAminoMsg(object: _107.NodeInfoOtherAminoMsg): _107.NodeInfoOther;
            fromProtoMsg(message: _107.NodeInfoOtherProtoMsg): _107.NodeInfoOther;
            toProto(message: _107.NodeInfoOther): Uint8Array;
            toProtoMsg(message: _107.NodeInfoOther): _107.NodeInfoOtherProtoMsg;
        };
        PeerInfo: {
            typeUrl: string;
            encode(message: _107.PeerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.PeerInfo;
            fromJSON(object: any): _107.PeerInfo;
            toJSON(message: _107.PeerInfo): unknown;
            fromPartial(object: {
                id?: string;
                addressInfo?: {
                    address?: string;
                    lastDialSuccess?: Date;
                    lastDialFailure?: Date;
                    dialFailures?: number;
                }[];
                lastConnected?: Date;
            }): _107.PeerInfo;
            fromSDK(object: _107.PeerInfoSDKType): _107.PeerInfo;
            toSDK(message: _107.PeerInfo): _107.PeerInfoSDKType;
            fromAmino(object: _107.PeerInfoAmino): _107.PeerInfo;
            toAmino(message: _107.PeerInfo): _107.PeerInfoAmino;
            fromAminoMsg(object: _107.PeerInfoAminoMsg): _107.PeerInfo;
            fromProtoMsg(message: _107.PeerInfoProtoMsg): _107.PeerInfo;
            toProto(message: _107.PeerInfo): Uint8Array;
            toProtoMsg(message: _107.PeerInfo): _107.PeerInfoProtoMsg;
        };
        PeerAddressInfo: {
            typeUrl: string;
            encode(message: _107.PeerAddressInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.PeerAddressInfo;
            fromJSON(object: any): _107.PeerAddressInfo;
            toJSON(message: _107.PeerAddressInfo): unknown;
            fromPartial(object: {
                address?: string;
                lastDialSuccess?: Date;
                lastDialFailure?: Date;
                dialFailures?: number;
            }): _107.PeerAddressInfo;
            fromSDK(object: _107.PeerAddressInfoSDKType): _107.PeerAddressInfo;
            toSDK(message: _107.PeerAddressInfo): _107.PeerAddressInfoSDKType;
            fromAmino(object: _107.PeerAddressInfoAmino): _107.PeerAddressInfo;
            toAmino(message: _107.PeerAddressInfo): _107.PeerAddressInfoAmino;
            fromAminoMsg(object: _107.PeerAddressInfoAminoMsg): _107.PeerAddressInfo;
            fromProtoMsg(message: _107.PeerAddressInfoProtoMsg): _107.PeerAddressInfo;
            toProto(message: _107.PeerAddressInfo): Uint8Array;
            toProtoMsg(message: _107.PeerAddressInfo): _107.PeerAddressInfoProtoMsg;
        };
    };
    const types: {
        ValidatorSet: {
            typeUrl: string;
            encode(message: _112.ValidatorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.ValidatorSet;
            fromJSON(object: any): _112.ValidatorSet;
            toJSON(message: _112.ValidatorSet): unknown;
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
            }): _112.ValidatorSet;
            fromSDK(object: _112.ValidatorSetSDKType): _112.ValidatorSet;
            toSDK(message: _112.ValidatorSet): _112.ValidatorSetSDKType;
            fromAmino(object: _112.ValidatorSetAmino): _112.ValidatorSet;
            toAmino(message: _112.ValidatorSet): _112.ValidatorSetAmino;
            fromAminoMsg(object: _112.ValidatorSetAminoMsg): _112.ValidatorSet;
            fromProtoMsg(message: _112.ValidatorSetProtoMsg): _112.ValidatorSet;
            toProto(message: _112.ValidatorSet): Uint8Array;
            toProtoMsg(message: _112.ValidatorSet): _112.ValidatorSetProtoMsg;
        };
        Validator: {
            typeUrl: string;
            encode(message: _112.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.Validator;
            fromJSON(object: any): _112.Validator;
            toJSON(message: _112.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: bigint;
                proposerPriority?: bigint;
            }): _112.Validator;
            fromSDK(object: _112.ValidatorSDKType): _112.Validator;
            toSDK(message: _112.Validator): _112.ValidatorSDKType;
            fromAmino(object: _112.ValidatorAmino): _112.Validator;
            toAmino(message: _112.Validator): _112.ValidatorAmino;
            fromAminoMsg(object: _112.ValidatorAminoMsg): _112.Validator;
            fromProtoMsg(message: _112.ValidatorProtoMsg): _112.Validator;
            toProto(message: _112.Validator): Uint8Array;
            toProtoMsg(message: _112.Validator): _112.ValidatorProtoMsg;
        };
        SimpleValidator: {
            typeUrl: string;
            encode(message: _112.SimpleValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.SimpleValidator;
            fromJSON(object: any): _112.SimpleValidator;
            toJSON(message: _112.SimpleValidator): unknown;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: bigint;
            }): _112.SimpleValidator;
            fromSDK(object: _112.SimpleValidatorSDKType): _112.SimpleValidator;
            toSDK(message: _112.SimpleValidator): _112.SimpleValidatorSDKType;
            fromAmino(object: _112.SimpleValidatorAmino): _112.SimpleValidator;
            toAmino(message: _112.SimpleValidator): _112.SimpleValidatorAmino;
            fromAminoMsg(object: _112.SimpleValidatorAminoMsg): _112.SimpleValidator;
            fromProtoMsg(message: _112.SimpleValidatorProtoMsg): _112.SimpleValidator;
            toProto(message: _112.SimpleValidator): Uint8Array;
            toProtoMsg(message: _112.SimpleValidator): _112.SimpleValidatorProtoMsg;
        };
        blockIDFlagFromJSON(object: any): _111.BlockIDFlag;
        blockIDFlagToJSON(object: _111.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _111.SignedMsgType;
        signedMsgTypeToJSON(object: _111.SignedMsgType): string;
        BlockIDFlag: typeof _111.BlockIDFlag;
        BlockIDFlagSDKType: typeof _111.BlockIDFlag;
        BlockIDFlagAmino: typeof _111.BlockIDFlag;
        SignedMsgType: typeof _111.SignedMsgType;
        SignedMsgTypeSDKType: typeof _111.SignedMsgType;
        SignedMsgTypeAmino: typeof _111.SignedMsgType;
        PartSetHeader: {
            typeUrl: string;
            encode(message: _111.PartSetHeader, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.PartSetHeader;
            fromJSON(object: any): _111.PartSetHeader;
            toJSON(message: _111.PartSetHeader): unknown;
            fromPartial(object: {
                total?: number;
                hash?: Uint8Array;
            }): _111.PartSetHeader;
            fromSDK(object: _111.PartSetHeaderSDKType): _111.PartSetHeader;
            toSDK(message: _111.PartSetHeader): _111.PartSetHeaderSDKType;
            fromAmino(object: _111.PartSetHeaderAmino): _111.PartSetHeader;
            toAmino(message: _111.PartSetHeader): _111.PartSetHeaderAmino;
            fromAminoMsg(object: _111.PartSetHeaderAminoMsg): _111.PartSetHeader;
            fromProtoMsg(message: _111.PartSetHeaderProtoMsg): _111.PartSetHeader;
            toProto(message: _111.PartSetHeader): Uint8Array;
            toProtoMsg(message: _111.PartSetHeader): _111.PartSetHeaderProtoMsg;
        };
        Part: {
            typeUrl: string;
            encode(message: _111.Part, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.Part;
            fromJSON(object: any): _111.Part;
            toJSON(message: _111.Part): unknown;
            fromPartial(object: {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: bigint;
                    index?: bigint;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _111.Part;
            fromSDK(object: _111.PartSDKType): _111.Part;
            toSDK(message: _111.Part): _111.PartSDKType;
            fromAmino(object: _111.PartAmino): _111.Part;
            toAmino(message: _111.Part): _111.PartAmino;
            fromAminoMsg(object: _111.PartAminoMsg): _111.Part;
            fromProtoMsg(message: _111.PartProtoMsg): _111.Part;
            toProto(message: _111.Part): Uint8Array;
            toProtoMsg(message: _111.Part): _111.PartProtoMsg;
        };
        BlockID: {
            typeUrl: string;
            encode(message: _111.BlockID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.BlockID;
            fromJSON(object: any): _111.BlockID;
            toJSON(message: _111.BlockID): unknown;
            fromPartial(object: {
                hash?: Uint8Array;
                partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                };
            }): _111.BlockID;
            fromSDK(object: _111.BlockIDSDKType): _111.BlockID;
            toSDK(message: _111.BlockID): _111.BlockIDSDKType;
            fromAmino(object: _111.BlockIDAmino): _111.BlockID;
            toAmino(message: _111.BlockID): _111.BlockIDAmino;
            fromAminoMsg(object: _111.BlockIDAminoMsg): _111.BlockID;
            fromProtoMsg(message: _111.BlockIDProtoMsg): _111.BlockID;
            toProto(message: _111.BlockID): Uint8Array;
            toProtoMsg(message: _111.BlockID): _111.BlockIDProtoMsg;
        };
        Header: {
            typeUrl: string;
            encode(message: _111.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.Header;
            fromJSON(object: any): _111.Header;
            toJSON(message: _111.Header): unknown;
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
            }): _111.Header;
            fromSDK(object: _111.HeaderSDKType): _111.Header;
            toSDK(message: _111.Header): _111.HeaderSDKType;
            fromAmino(object: _111.HeaderAmino): _111.Header;
            toAmino(message: _111.Header): _111.HeaderAmino;
            fromAminoMsg(object: _111.HeaderAminoMsg): _111.Header;
            fromProtoMsg(message: _111.HeaderProtoMsg): _111.Header;
            toProto(message: _111.Header): Uint8Array;
            toProtoMsg(message: _111.Header): _111.HeaderProtoMsg;
        };
        Data: {
            typeUrl: string;
            encode(message: _111.Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.Data;
            fromJSON(object: any): _111.Data;
            toJSON(message: _111.Data): unknown;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _111.Data;
            fromSDK(object: _111.DataSDKType): _111.Data;
            toSDK(message: _111.Data): _111.DataSDKType;
            fromAmino(object: _111.DataAmino): _111.Data;
            toAmino(message: _111.Data): _111.DataAmino;
            fromAminoMsg(object: _111.DataAminoMsg): _111.Data;
            fromProtoMsg(message: _111.DataProtoMsg): _111.Data;
            toProto(message: _111.Data): Uint8Array;
            toProtoMsg(message: _111.Data): _111.DataProtoMsg;
        };
        Vote: {
            typeUrl: string;
            encode(message: _111.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.Vote;
            fromJSON(object: any): _111.Vote;
            toJSON(message: _111.Vote): unknown;
            fromPartial(object: {
                type?: _111.SignedMsgType;
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
            }): _111.Vote;
            fromSDK(object: _111.VoteSDKType): _111.Vote;
            toSDK(message: _111.Vote): _111.VoteSDKType;
            fromAmino(object: _111.VoteAmino): _111.Vote;
            toAmino(message: _111.Vote): _111.VoteAmino;
            fromAminoMsg(object: _111.VoteAminoMsg): _111.Vote;
            fromProtoMsg(message: _111.VoteProtoMsg): _111.Vote;
            toProto(message: _111.Vote): Uint8Array;
            toProtoMsg(message: _111.Vote): _111.VoteProtoMsg;
        };
        Commit: {
            typeUrl: string;
            encode(message: _111.Commit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.Commit;
            fromJSON(object: any): _111.Commit;
            toJSON(message: _111.Commit): unknown;
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
                    blockIdFlag?: _111.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[];
            }): _111.Commit;
            fromSDK(object: _111.CommitSDKType): _111.Commit;
            toSDK(message: _111.Commit): _111.CommitSDKType;
            fromAmino(object: _111.CommitAmino): _111.Commit;
            toAmino(message: _111.Commit): _111.CommitAmino;
            fromAminoMsg(object: _111.CommitAminoMsg): _111.Commit;
            fromProtoMsg(message: _111.CommitProtoMsg): _111.Commit;
            toProto(message: _111.Commit): Uint8Array;
            toProtoMsg(message: _111.Commit): _111.CommitProtoMsg;
        };
        CommitSig: {
            typeUrl: string;
            encode(message: _111.CommitSig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.CommitSig;
            fromJSON(object: any): _111.CommitSig;
            toJSON(message: _111.CommitSig): unknown;
            fromPartial(object: {
                blockIdFlag?: _111.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            }): _111.CommitSig;
            fromSDK(object: _111.CommitSigSDKType): _111.CommitSig;
            toSDK(message: _111.CommitSig): _111.CommitSigSDKType;
            fromAmino(object: _111.CommitSigAmino): _111.CommitSig;
            toAmino(message: _111.CommitSig): _111.CommitSigAmino;
            fromAminoMsg(object: _111.CommitSigAminoMsg): _111.CommitSig;
            fromProtoMsg(message: _111.CommitSigProtoMsg): _111.CommitSig;
            toProto(message: _111.CommitSig): Uint8Array;
            toProtoMsg(message: _111.CommitSig): _111.CommitSigProtoMsg;
        };
        Proposal: {
            typeUrl: string;
            encode(message: _111.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.Proposal;
            fromJSON(object: any): _111.Proposal;
            toJSON(message: _111.Proposal): unknown;
            fromPartial(object: {
                type?: _111.SignedMsgType;
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
            }): _111.Proposal;
            fromSDK(object: _111.ProposalSDKType): _111.Proposal;
            toSDK(message: _111.Proposal): _111.ProposalSDKType;
            fromAmino(object: _111.ProposalAmino): _111.Proposal;
            toAmino(message: _111.Proposal): _111.ProposalAmino;
            fromAminoMsg(object: _111.ProposalAminoMsg): _111.Proposal;
            fromProtoMsg(message: _111.ProposalProtoMsg): _111.Proposal;
            toProto(message: _111.Proposal): Uint8Array;
            toProtoMsg(message: _111.Proposal): _111.ProposalProtoMsg;
        };
        SignedHeader: {
            typeUrl: string;
            encode(message: _111.SignedHeader, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.SignedHeader;
            fromJSON(object: any): _111.SignedHeader;
            toJSON(message: _111.SignedHeader): unknown;
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
                        blockIdFlag?: _111.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _111.SignedHeader;
            fromSDK(object: _111.SignedHeaderSDKType): _111.SignedHeader;
            toSDK(message: _111.SignedHeader): _111.SignedHeaderSDKType;
            fromAmino(object: _111.SignedHeaderAmino): _111.SignedHeader;
            toAmino(message: _111.SignedHeader): _111.SignedHeaderAmino;
            fromAminoMsg(object: _111.SignedHeaderAminoMsg): _111.SignedHeader;
            fromProtoMsg(message: _111.SignedHeaderProtoMsg): _111.SignedHeader;
            toProto(message: _111.SignedHeader): Uint8Array;
            toProtoMsg(message: _111.SignedHeader): _111.SignedHeaderProtoMsg;
        };
        LightBlock: {
            typeUrl: string;
            encode(message: _111.LightBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.LightBlock;
            fromJSON(object: any): _111.LightBlock;
            toJSON(message: _111.LightBlock): unknown;
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
                            blockIdFlag?: _111.BlockIDFlag;
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
            }): _111.LightBlock;
            fromSDK(object: _111.LightBlockSDKType): _111.LightBlock;
            toSDK(message: _111.LightBlock): _111.LightBlockSDKType;
            fromAmino(object: _111.LightBlockAmino): _111.LightBlock;
            toAmino(message: _111.LightBlock): _111.LightBlockAmino;
            fromAminoMsg(object: _111.LightBlockAminoMsg): _111.LightBlock;
            fromProtoMsg(message: _111.LightBlockProtoMsg): _111.LightBlock;
            toProto(message: _111.LightBlock): Uint8Array;
            toProtoMsg(message: _111.LightBlock): _111.LightBlockProtoMsg;
        };
        BlockMeta: {
            typeUrl: string;
            encode(message: _111.BlockMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.BlockMeta;
            fromJSON(object: any): _111.BlockMeta;
            toJSON(message: _111.BlockMeta): unknown;
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
            }): _111.BlockMeta;
            fromSDK(object: _111.BlockMetaSDKType): _111.BlockMeta;
            toSDK(message: _111.BlockMeta): _111.BlockMetaSDKType;
            fromAmino(object: _111.BlockMetaAmino): _111.BlockMeta;
            toAmino(message: _111.BlockMeta): _111.BlockMetaAmino;
            fromAminoMsg(object: _111.BlockMetaAminoMsg): _111.BlockMeta;
            fromProtoMsg(message: _111.BlockMetaProtoMsg): _111.BlockMeta;
            toProto(message: _111.BlockMeta): Uint8Array;
            toProtoMsg(message: _111.BlockMeta): _111.BlockMetaProtoMsg;
        };
        TxProof: {
            typeUrl: string;
            encode(message: _111.TxProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.TxProof;
            fromJSON(object: any): _111.TxProof;
            toJSON(message: _111.TxProof): unknown;
            fromPartial(object: {
                rootHash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: bigint;
                    index?: bigint;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _111.TxProof;
            fromSDK(object: _111.TxProofSDKType): _111.TxProof;
            toSDK(message: _111.TxProof): _111.TxProofSDKType;
            fromAmino(object: _111.TxProofAmino): _111.TxProof;
            toAmino(message: _111.TxProof): _111.TxProofAmino;
            fromAminoMsg(object: _111.TxProofAminoMsg): _111.TxProof;
            fromProtoMsg(message: _111.TxProofProtoMsg): _111.TxProof;
            toProto(message: _111.TxProof): Uint8Array;
            toProtoMsg(message: _111.TxProof): _111.TxProofProtoMsg;
        };
        ConsensusParams: {
            typeUrl: string;
            encode(message: _110.ConsensusParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.ConsensusParams;
            fromJSON(object: any): _110.ConsensusParams;
            toJSON(message: _110.ConsensusParams): unknown;
            fromPartial(object: {
                block?: {
                    maxBytes?: bigint;
                    maxGas?: bigint;
                    timeIotaMs?: bigint;
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
                    appVersion?: bigint;
                };
            }): _110.ConsensusParams;
            fromSDK(object: _110.ConsensusParamsSDKType): _110.ConsensusParams;
            toSDK(message: _110.ConsensusParams): _110.ConsensusParamsSDKType;
            fromAmino(object: _110.ConsensusParamsAmino): _110.ConsensusParams;
            toAmino(message: _110.ConsensusParams): _110.ConsensusParamsAmino;
            fromAminoMsg(object: _110.ConsensusParamsAminoMsg): _110.ConsensusParams;
            fromProtoMsg(message: _110.ConsensusParamsProtoMsg): _110.ConsensusParams;
            toProto(message: _110.ConsensusParams): Uint8Array;
            toProtoMsg(message: _110.ConsensusParams): _110.ConsensusParamsProtoMsg;
        };
        BlockParams: {
            typeUrl: string;
            encode(message: _110.BlockParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.BlockParams;
            fromJSON(object: any): _110.BlockParams;
            toJSON(message: _110.BlockParams): unknown;
            fromPartial(object: {
                maxBytes?: bigint;
                maxGas?: bigint;
                timeIotaMs?: bigint;
            }): _110.BlockParams;
            fromSDK(object: _110.BlockParamsSDKType): _110.BlockParams;
            toSDK(message: _110.BlockParams): _110.BlockParamsSDKType;
            fromAmino(object: _110.BlockParamsAmino): _110.BlockParams;
            toAmino(message: _110.BlockParams): _110.BlockParamsAmino;
            fromAminoMsg(object: _110.BlockParamsAminoMsg): _110.BlockParams;
            fromProtoMsg(message: _110.BlockParamsProtoMsg): _110.BlockParams;
            toProto(message: _110.BlockParams): Uint8Array;
            toProtoMsg(message: _110.BlockParams): _110.BlockParamsProtoMsg;
        };
        EvidenceParams: {
            typeUrl: string;
            encode(message: _110.EvidenceParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.EvidenceParams;
            fromJSON(object: any): _110.EvidenceParams;
            toJSON(message: _110.EvidenceParams): unknown;
            fromPartial(object: {
                maxAgeNumBlocks?: bigint;
                maxAgeDuration?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                maxBytes?: bigint;
            }): _110.EvidenceParams;
            fromSDK(object: _110.EvidenceParamsSDKType): _110.EvidenceParams;
            toSDK(message: _110.EvidenceParams): _110.EvidenceParamsSDKType;
            fromAmino(object: _110.EvidenceParamsAmino): _110.EvidenceParams;
            toAmino(message: _110.EvidenceParams): _110.EvidenceParamsAmino;
            fromAminoMsg(object: _110.EvidenceParamsAminoMsg): _110.EvidenceParams;
            fromProtoMsg(message: _110.EvidenceParamsProtoMsg): _110.EvidenceParams;
            toProto(message: _110.EvidenceParams): Uint8Array;
            toProtoMsg(message: _110.EvidenceParams): _110.EvidenceParamsProtoMsg;
        };
        ValidatorParams: {
            typeUrl: string;
            encode(message: _110.ValidatorParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.ValidatorParams;
            fromJSON(object: any): _110.ValidatorParams;
            toJSON(message: _110.ValidatorParams): unknown;
            fromPartial(object: {
                pubKeyTypes?: string[];
            }): _110.ValidatorParams;
            fromSDK(object: _110.ValidatorParamsSDKType): _110.ValidatorParams;
            toSDK(message: _110.ValidatorParams): _110.ValidatorParamsSDKType;
            fromAmino(object: _110.ValidatorParamsAmino): _110.ValidatorParams;
            toAmino(message: _110.ValidatorParams): _110.ValidatorParamsAmino;
            fromAminoMsg(object: _110.ValidatorParamsAminoMsg): _110.ValidatorParams;
            fromProtoMsg(message: _110.ValidatorParamsProtoMsg): _110.ValidatorParams;
            toProto(message: _110.ValidatorParams): Uint8Array;
            toProtoMsg(message: _110.ValidatorParams): _110.ValidatorParamsProtoMsg;
        };
        VersionParams: {
            typeUrl: string;
            encode(message: _110.VersionParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.VersionParams;
            fromJSON(object: any): _110.VersionParams;
            toJSON(message: _110.VersionParams): unknown;
            fromPartial(object: {
                appVersion?: bigint;
            }): _110.VersionParams;
            fromSDK(object: _110.VersionParamsSDKType): _110.VersionParams;
            toSDK(message: _110.VersionParams): _110.VersionParamsSDKType;
            fromAmino(object: _110.VersionParamsAmino): _110.VersionParams;
            toAmino(message: _110.VersionParams): _110.VersionParamsAmino;
            fromAminoMsg(object: _110.VersionParamsAminoMsg): _110.VersionParams;
            fromProtoMsg(message: _110.VersionParamsProtoMsg): _110.VersionParams;
            toProto(message: _110.VersionParams): Uint8Array;
            toProtoMsg(message: _110.VersionParams): _110.VersionParamsProtoMsg;
        };
        HashedParams: {
            typeUrl: string;
            encode(message: _110.HashedParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.HashedParams;
            fromJSON(object: any): _110.HashedParams;
            toJSON(message: _110.HashedParams): unknown;
            fromPartial(object: {
                blockMaxBytes?: bigint;
                blockMaxGas?: bigint;
            }): _110.HashedParams;
            fromSDK(object: _110.HashedParamsSDKType): _110.HashedParams;
            toSDK(message: _110.HashedParams): _110.HashedParamsSDKType;
            fromAmino(object: _110.HashedParamsAmino): _110.HashedParams;
            toAmino(message: _110.HashedParams): _110.HashedParamsAmino;
            fromAminoMsg(object: _110.HashedParamsAminoMsg): _110.HashedParams;
            fromProtoMsg(message: _110.HashedParamsProtoMsg): _110.HashedParams;
            toProto(message: _110.HashedParams): Uint8Array;
            toProtoMsg(message: _110.HashedParams): _110.HashedParamsProtoMsg;
        };
        Evidence: {
            typeUrl: string;
            encode(message: _109.Evidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.Evidence;
            fromJSON(object: any): _109.Evidence;
            toJSON(message: _109.Evidence): unknown;
            fromPartial(object: {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: _111.SignedMsgType;
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
                        type?: _111.SignedMsgType;
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
                                    blockIdFlag?: _111.BlockIDFlag;
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
            }): _109.Evidence;
            fromSDK(object: _109.EvidenceSDKType): _109.Evidence;
            toSDK(message: _109.Evidence): _109.EvidenceSDKType;
            fromAmino(object: _109.EvidenceAmino): _109.Evidence;
            toAmino(message: _109.Evidence): _109.EvidenceAmino;
            fromAminoMsg(object: _109.EvidenceAminoMsg): _109.Evidence;
            fromProtoMsg(message: _109.EvidenceProtoMsg): _109.Evidence;
            toProto(message: _109.Evidence): Uint8Array;
            toProtoMsg(message: _109.Evidence): _109.EvidenceProtoMsg;
        };
        DuplicateVoteEvidence: {
            typeUrl: string;
            encode(message: _109.DuplicateVoteEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.DuplicateVoteEvidence;
            fromJSON(object: any): _109.DuplicateVoteEvidence;
            toJSON(message: _109.DuplicateVoteEvidence): unknown;
            fromPartial(object: {
                voteA?: {
                    type?: _111.SignedMsgType;
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
                    type?: _111.SignedMsgType;
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
            }): _109.DuplicateVoteEvidence;
            fromSDK(object: _109.DuplicateVoteEvidenceSDKType): _109.DuplicateVoteEvidence;
            toSDK(message: _109.DuplicateVoteEvidence): _109.DuplicateVoteEvidenceSDKType;
            fromAmino(object: _109.DuplicateVoteEvidenceAmino): _109.DuplicateVoteEvidence;
            toAmino(message: _109.DuplicateVoteEvidence): _109.DuplicateVoteEvidenceAmino;
            fromAminoMsg(object: _109.DuplicateVoteEvidenceAminoMsg): _109.DuplicateVoteEvidence;
            fromProtoMsg(message: _109.DuplicateVoteEvidenceProtoMsg): _109.DuplicateVoteEvidence;
            toProto(message: _109.DuplicateVoteEvidence): Uint8Array;
            toProtoMsg(message: _109.DuplicateVoteEvidence): _109.DuplicateVoteEvidenceProtoMsg;
        };
        LightClientAttackEvidence: {
            typeUrl: string;
            encode(message: _109.LightClientAttackEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.LightClientAttackEvidence;
            fromJSON(object: any): _109.LightClientAttackEvidence;
            toJSON(message: _109.LightClientAttackEvidence): unknown;
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
                                blockIdFlag?: _111.BlockIDFlag;
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
            }): _109.LightClientAttackEvidence;
            fromSDK(object: _109.LightClientAttackEvidenceSDKType): _109.LightClientAttackEvidence;
            toSDK(message: _109.LightClientAttackEvidence): _109.LightClientAttackEvidenceSDKType;
            fromAmino(object: _109.LightClientAttackEvidenceAmino): _109.LightClientAttackEvidence;
            toAmino(message: _109.LightClientAttackEvidence): _109.LightClientAttackEvidenceAmino;
            fromAminoMsg(object: _109.LightClientAttackEvidenceAminoMsg): _109.LightClientAttackEvidence;
            fromProtoMsg(message: _109.LightClientAttackEvidenceProtoMsg): _109.LightClientAttackEvidence;
            toProto(message: _109.LightClientAttackEvidence): Uint8Array;
            toProtoMsg(message: _109.LightClientAttackEvidence): _109.LightClientAttackEvidenceProtoMsg;
        };
        EvidenceList: {
            typeUrl: string;
            encode(message: _109.EvidenceList, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.EvidenceList;
            fromJSON(object: any): _109.EvidenceList;
            toJSON(message: _109.EvidenceList): unknown;
            fromPartial(object: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _111.SignedMsgType;
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
                            type?: _111.SignedMsgType;
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
                                        blockIdFlag?: _111.BlockIDFlag;
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
            }): _109.EvidenceList;
            fromSDK(object: _109.EvidenceListSDKType): _109.EvidenceList;
            toSDK(message: _109.EvidenceList): _109.EvidenceListSDKType;
            fromAmino(object: _109.EvidenceListAmino): _109.EvidenceList;
            toAmino(message: _109.EvidenceList): _109.EvidenceListAmino;
            fromAminoMsg(object: _109.EvidenceListAminoMsg): _109.EvidenceList;
            fromProtoMsg(message: _109.EvidenceListProtoMsg): _109.EvidenceList;
            toProto(message: _109.EvidenceList): Uint8Array;
            toProtoMsg(message: _109.EvidenceList): _109.EvidenceListProtoMsg;
        };
        Block: {
            typeUrl: string;
            encode(message: _108.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.Block;
            fromJSON(object: any): _108.Block;
            toJSON(message: _108.Block): unknown;
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
                                type?: _111.SignedMsgType;
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
                                type?: _111.SignedMsgType;
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
                                            blockIdFlag?: _111.BlockIDFlag;
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
                        blockIdFlag?: _111.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _108.Block;
            fromSDK(object: _108.BlockSDKType): _108.Block;
            toSDK(message: _108.Block): _108.BlockSDKType;
            fromAmino(object: _108.BlockAmino): _108.Block;
            toAmino(message: _108.Block): _108.BlockAmino;
            fromAminoMsg(object: _108.BlockAminoMsg): _108.Block;
            fromProtoMsg(message: _108.BlockProtoMsg): _108.Block;
            toProto(message: _108.Block): Uint8Array;
            toProtoMsg(message: _108.Block): _108.BlockProtoMsg;
        };
    };
    const version: {
        App: {
            typeUrl: string;
            encode(message: _113.App, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.App;
            fromJSON(object: any): _113.App;
            toJSON(message: _113.App): unknown;
            fromPartial(object: {
                protocol?: bigint;
                software?: string;
            }): _113.App;
            fromSDK(object: _113.AppSDKType): _113.App;
            toSDK(message: _113.App): _113.AppSDKType;
            fromAmino(object: _113.AppAmino): _113.App;
            toAmino(message: _113.App): _113.AppAmino;
            fromAminoMsg(object: _113.AppAminoMsg): _113.App;
            fromProtoMsg(message: _113.AppProtoMsg): _113.App;
            toProto(message: _113.App): Uint8Array;
            toProtoMsg(message: _113.App): _113.AppProtoMsg;
        };
        Consensus: {
            typeUrl: string;
            encode(message: _113.Consensus, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.Consensus;
            fromJSON(object: any): _113.Consensus;
            toJSON(message: _113.Consensus): unknown;
            fromPartial(object: {
                block?: bigint;
                app?: bigint;
            }): _113.Consensus;
            fromSDK(object: _113.ConsensusSDKType): _113.Consensus;
            toSDK(message: _113.Consensus): _113.ConsensusSDKType;
            fromAmino(object: _113.ConsensusAmino): _113.Consensus;
            toAmino(message: _113.Consensus): _113.ConsensusAmino;
            fromAminoMsg(object: _113.ConsensusAminoMsg): _113.Consensus;
            fromProtoMsg(message: _113.ConsensusProtoMsg): _113.Consensus;
            toProto(message: _113.Consensus): Uint8Array;
            toProtoMsg(message: _113.Consensus): _113.ConsensusProtoMsg;
        };
    };
}
