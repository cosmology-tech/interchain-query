import { Header, HeaderAmino, HeaderSDKType, Data, DataAmino, DataSDKType, Commit, CommitAmino, CommitSDKType } from "./types";
import { EvidenceList, EvidenceListAmino, EvidenceListSDKType } from "./evidence";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
export interface Block {
    header: Header;
    data: Data;
    evidence: EvidenceList;
    lastCommit: Commit;
}
export interface BlockProtoMsg {
    typeUrl: "/tendermint.types.Block";
    value: Uint8Array;
}
export interface BlockAmino {
    header?: HeaderAmino;
    data?: DataAmino;
    evidence?: EvidenceListAmino;
    last_commit?: CommitAmino;
}
export interface BlockAminoMsg {
    type: "/tendermint.types.Block";
    value: BlockAmino;
}
export interface BlockSDKType {
    header: HeaderSDKType;
    data: DataSDKType;
    evidence: EvidenceListSDKType;
    last_commit: CommitSDKType;
}
export declare const Block: {
    typeUrl: string;
    encode(message: Block, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Block;
    fromJSON(object: any): Block;
    toJSON(message: Block): unknown;
    fromPartial(object: DeepPartial<Block>): Block;
    fromSDK(object: BlockSDKType): Block;
    toSDK(message: Block): BlockSDKType;
    fromAmino(object: BlockAmino): Block;
    toAmino(message: Block): BlockAmino;
    fromAminoMsg(object: BlockAminoMsg): Block;
    fromProtoMsg(message: BlockProtoMsg): Block;
    toProto(message: Block): Uint8Array;
    toProtoMsg(message: Block): BlockProtoMsg;
};
