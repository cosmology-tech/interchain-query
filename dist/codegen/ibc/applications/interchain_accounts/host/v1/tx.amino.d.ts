import { MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
