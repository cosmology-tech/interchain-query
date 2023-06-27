import { Rpc } from "../../../../../helpers";
import { MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the 27-interchain-accounts/host Msg service. */
export interface Msg {
    /** UpdateParams defines a rpc handler for MsgUpdateParams. */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
