import { Rpc } from "../../../helpers";
import { MsgCreateVestingAccount, MsgCreateVestingAccountResponse, MsgCreateClawbackVestingAccount, MsgCreateClawbackVestingAccountResponse, MsgClawback, MsgClawbackResponse } from "./tx";
/** Msg defines the bank Msg service. */
export interface Msg {
    /**
     * CreateVestingAccount defines a method that enables creating a vesting
     * account.
     */
    createVestingAccount(request: MsgCreateVestingAccount): Promise<MsgCreateVestingAccountResponse>;
    /**
     * CreateClawbackVestingAccount creats a vesting account that is subject to
     * clawback and the configuration of vesting and lockup schedules.
     */
    createClawbackVestingAccount(request: MsgCreateClawbackVestingAccount): Promise<MsgCreateClawbackVestingAccountResponse>;
    /** Clawback removes the unvested tokens from a ClawbackVestingAccount. */
    clawback(request: MsgClawback): Promise<MsgClawbackResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createVestingAccount(request: MsgCreateVestingAccount): Promise<MsgCreateVestingAccountResponse>;
    createClawbackVestingAccount(request: MsgCreateClawbackVestingAccount): Promise<MsgCreateClawbackVestingAccountResponse>;
    clawback(request: MsgClawback): Promise<MsgClawbackResponse>;
}
