import { ProtobufRpcClient } from "@cosmjs/stargate";
import * as _CosmosAuthV1beta1Queryrpc from "./cosmos/auth/v1beta1/query.rpc.Query";
import * as _CosmosAuthzV1beta1Queryrpc from "./cosmos/authz/v1beta1/query.rpc.Query";
import * as _CosmosBankV1beta1Queryrpc from "./cosmos/bank/v1beta1/query.rpc.Query";
import * as _CosmosBaseNodeV1beta1Queryrpc from "./cosmos/base/node/v1beta1/query.rpc.Service";
import * as _CosmosBaseTendermintV1beta1Queryrpc from "./cosmos/base/tendermint/v1beta1/query.rpc.Service";
import * as _CosmosDistributionV1beta1Queryrpc from "./cosmos/distribution/v1beta1/query.rpc.Query";
import * as _CosmosEvidenceV1beta1Queryrpc from "./cosmos/evidence/v1beta1/query.rpc.Query";
import * as _CosmosFeegrantV1beta1Queryrpc from "./cosmos/feegrant/v1beta1/query.rpc.Query";
import * as _CosmosGovV1beta1Queryrpc from "./cosmos/gov/v1beta1/query.rpc.Query";
import * as _CosmosGovV1Queryrpc from "./cosmos/gov/v1/query.rpc.Query";
import * as _CosmosMintV1beta1Queryrpc from "./cosmos/mint/v1beta1/query.rpc.Query";
import * as _CosmosParamsV1beta1Queryrpc from "./cosmos/params/v1beta1/query.rpc.Query";
import * as _CosmosSlashingV1beta1Queryrpc from "./cosmos/slashing/v1beta1/query.rpc.Query";
import * as _CosmosStakingV1beta1Queryrpc from "./cosmos/staking/v1beta1/query.rpc.Query";
import * as _CosmosTxV1beta1Servicerpc from "./cosmos/tx/v1beta1/service.rpc.Service";
import * as _CosmosUpgradeV1beta1Queryrpc from "./cosmos/upgrade/v1beta1/query.rpc.Query";
import * as _CosmosAppV1alpha1Queryrpc from "./cosmos/app/v1alpha1/query.rpc.Query";
import * as _CosmosGroupV1Queryrpc from "./cosmos/group/v1/query.rpc.Query";
import * as _CosmosNftV1beta1Queryrpc from "./cosmos/nft/v1beta1/query.rpc.Query";
import * as _IbcApplicationsFeeV1Queryrpc from "./ibc/applications/fee/v1/query.rpc.Query";
import * as _IbcApplicationsInterchainAccountsControllerV1Queryrpc from "./ibc/applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _IbcApplicationsInterchainAccountsHostV1Queryrpc from "./ibc/applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _IbcApplicationsTransferV1Queryrpc from "./ibc/applications/transfer/v1/query.rpc.Query";
import * as _IbcCoreChannelV1Queryrpc from "./ibc/core/channel/v1/query.rpc.Query";
import * as _IbcCoreClientV1Queryrpc from "./ibc/core/client/v1/query.rpc.Query";
import * as _IbcCoreConnectionV1Queryrpc from "./ibc/core/connection/v1/query.rpc.Query";
import * as _CosmwasmWasmV1Queryrpc from "./cosmwasm/wasm/v1/query.rpc.Query";
export declare const createRpcQueryHooks: ({ rpc }: {
    rpc: ProtobufRpcClient | undefined;
}) => {
    cosmos: {
        auth: {
            v1beta1: {
                useAccounts: <TData = import("./cosmos/auth/v1beta1/query").QueryAccountsResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseAccountsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                useAccount: <TData_1 = import("./cosmos/auth/v1beta1/query").QueryAccountResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseAccountQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                useParams: <TData_2 = import("./cosmos/auth/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseParamsQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
                useModuleAccounts: <TData_3 = import("./cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseModuleAccountsQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
            };
        };
        authz: {
            v1beta1: {
                useGrants: <TData_4 = import("./cosmos/authz/v1beta1/query").QueryGrantsResponse>({ request, options }: _CosmosAuthzV1beta1Queryrpc.UseGrantsQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
                useGranterGrants: <TData_5 = import("./cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>({ request, options }: _CosmosAuthzV1beta1Queryrpc.UseGranterGrantsQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
                useGranteeGrants: <TData_6 = import("./cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>({ request, options }: _CosmosAuthzV1beta1Queryrpc.UseGranteeGrantsQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
            };
        };
        bank: {
            v1beta1: {
                useBalance: <TData_7 = import("./cosmos/bank/v1beta1/query").QueryBalanceResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseBalanceQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
                useAllBalances: <TData_8 = import("./cosmos/bank/v1beta1/query").QueryAllBalancesResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseAllBalancesQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
                useTotalSupply: <TData_9 = import("./cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseTotalSupplyQuery<TData_9>) => import("@tanstack/react-query").UseQueryResult<TData_9, Error>;
                useSupplyOf: <TData_10 = import("./cosmos/bank/v1beta1/query").QuerySupplyOfResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseSupplyOfQuery<TData_10>) => import("@tanstack/react-query").UseQueryResult<TData_10, Error>;
                useTotalSupplyWithoutOffset: <TData_11 = import("./cosmos/bank/v1beta1/query").QueryTotalSupplyWithoutOffsetResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseTotalSupplyWithoutOffsetQuery<TData_11>) => import("@tanstack/react-query").UseQueryResult<TData_11, Error>;
                useSupplyOfWithoutOffset: <TData_12 = import("./cosmos/bank/v1beta1/query").QuerySupplyOfWithoutOffsetResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseSupplyOfWithoutOffsetQuery<TData_12>) => import("@tanstack/react-query").UseQueryResult<TData_12, Error>;
                useParams: <TData_13 = import("./cosmos/bank/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseParamsQuery<TData_13>) => import("@tanstack/react-query").UseQueryResult<TData_13, Error>;
                useDenomMetadata: <TData_14 = import("./cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseDenomMetadataQuery<TData_14>) => import("@tanstack/react-query").UseQueryResult<TData_14, Error>;
                useDenomsMetadata: <TData_15 = import("./cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseDenomsMetadataQuery<TData_15>) => import("@tanstack/react-query").UseQueryResult<TData_15, Error>;
                useBaseDenom: <TData_16 = import("./cosmos/bank/v1beta1/query").QueryBaseDenomResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseBaseDenomQuery<TData_16>) => import("@tanstack/react-query").UseQueryResult<TData_16, Error>;
            };
        };
        base: {
            node: {
                v1beta1: {
                    useConfig: <TData_17 = import("./cosmos/base/node/v1beta1/query").ConfigResponse>({ request, options }: _CosmosBaseNodeV1beta1Queryrpc.UseConfigQuery<TData_17>) => import("@tanstack/react-query").UseQueryResult<TData_17, Error>;
                };
            };
            tendermint: {
                v1beta1: {
                    useGetNodeInfo: <TData_18 = import("./cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetNodeInfoQuery<TData_18>) => import("@tanstack/react-query").UseQueryResult<TData_18, Error>;
                    useGetSyncing: <TData_19 = import("./cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetSyncingQuery<TData_19>) => import("@tanstack/react-query").UseQueryResult<TData_19, Error>;
                    useGetLatestBlock: <TData_20 = import("./cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetLatestBlockQuery<TData_20>) => import("@tanstack/react-query").UseQueryResult<TData_20, Error>;
                    useGetBlockByHeight: <TData_21 = import("./cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetBlockByHeightQuery<TData_21>) => import("@tanstack/react-query").UseQueryResult<TData_21, Error>;
                    useGetLatestValidatorSet: <TData_22 = import("./cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetLatestValidatorSetQuery<TData_22>) => import("@tanstack/react-query").UseQueryResult<TData_22, Error>;
                    useGetValidatorSetByHeight: <TData_23 = import("./cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetValidatorSetByHeightQuery<TData_23>) => import("@tanstack/react-query").UseQueryResult<TData_23, Error>;
                };
            };
        };
        distribution: {
            v1beta1: {
                useParams: <TData_24 = import("./cosmos/distribution/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseParamsQuery<TData_24>) => import("@tanstack/react-query").UseQueryResult<TData_24, Error>;
                useValidatorOutstandingRewards: <TData_25 = import("./cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseValidatorOutstandingRewardsQuery<TData_25>) => import("@tanstack/react-query").UseQueryResult<TData_25, Error>;
                useValidatorCommission: <TData_26 = import("./cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseValidatorCommissionQuery<TData_26>) => import("@tanstack/react-query").UseQueryResult<TData_26, Error>;
                useValidatorSlashes: <TData_27 = import("./cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseValidatorSlashesQuery<TData_27>) => import("@tanstack/react-query").UseQueryResult<TData_27, Error>;
                useDelegationRewards: <TData_28 = import("./cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseDelegationRewardsQuery<TData_28>) => import("@tanstack/react-query").UseQueryResult<TData_28, Error>;
                useDelegationTotalRewards: <TData_29 = import("./cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseDelegationTotalRewardsQuery<TData_29>) => import("@tanstack/react-query").UseQueryResult<TData_29, Error>;
                useDelegatorValidators: <TData_30 = import("./cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseDelegatorValidatorsQuery<TData_30>) => import("@tanstack/react-query").UseQueryResult<TData_30, Error>;
                useDelegatorWithdrawAddress: <TData_31 = import("./cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseDelegatorWithdrawAddressQuery<TData_31>) => import("@tanstack/react-query").UseQueryResult<TData_31, Error>;
                useCommunityPool: <TData_32 = import("./cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseCommunityPoolQuery<TData_32>) => import("@tanstack/react-query").UseQueryResult<TData_32, Error>;
            };
        };
        evidence: {
            v1beta1: {
                useEvidence: <TData_33 = import("./cosmos/evidence/v1beta1/query").QueryEvidenceResponse>({ request, options }: _CosmosEvidenceV1beta1Queryrpc.UseEvidenceQuery<TData_33>) => import("@tanstack/react-query").UseQueryResult<TData_33, Error>;
                useAllEvidence: <TData_34 = import("./cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>({ request, options }: _CosmosEvidenceV1beta1Queryrpc.UseAllEvidenceQuery<TData_34>) => import("@tanstack/react-query").UseQueryResult<TData_34, Error>;
            };
        };
        feegrant: {
            v1beta1: {
                useAllowance: <TData_35 = import("./cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>({ request, options }: _CosmosFeegrantV1beta1Queryrpc.UseAllowanceQuery<TData_35>) => import("@tanstack/react-query").UseQueryResult<TData_35, Error>;
                useAllowances: <TData_36 = import("./cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>({ request, options }: _CosmosFeegrantV1beta1Queryrpc.UseAllowancesQuery<TData_36>) => import("@tanstack/react-query").UseQueryResult<TData_36, Error>;
            };
        };
        gov: {
            v1beta1: {
                useProposal: <TData_37 = import("./cosmos/gov/v1beta1/query").QueryProposalResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseProposalQuery<TData_37>) => import("@tanstack/react-query").UseQueryResult<TData_37, Error>;
                useProposals: <TData_38 = import("./cosmos/gov/v1beta1/query").QueryProposalsResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseProposalsQuery<TData_38>) => import("@tanstack/react-query").UseQueryResult<TData_38, Error>;
                useVote: <TData_39 = import("./cosmos/gov/v1beta1/query").QueryVoteResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseVoteQuery<TData_39>) => import("@tanstack/react-query").UseQueryResult<TData_39, Error>;
                useVotes: <TData_40 = import("./cosmos/gov/v1beta1/query").QueryVotesResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseVotesQuery<TData_40>) => import("@tanstack/react-query").UseQueryResult<TData_40, Error>;
                useParams: <TData_41 = import("./cosmos/gov/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseParamsQuery<TData_41>) => import("@tanstack/react-query").UseQueryResult<TData_41, Error>;
                useDeposit: <TData_42 = import("./cosmos/gov/v1beta1/query").QueryDepositResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseDepositQuery<TData_42>) => import("@tanstack/react-query").UseQueryResult<TData_42, Error>;
                useDeposits: <TData_43 = import("./cosmos/gov/v1beta1/query").QueryDepositsResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseDepositsQuery<TData_43>) => import("@tanstack/react-query").UseQueryResult<TData_43, Error>;
                useTallyResult: <TData_44 = import("./cosmos/gov/v1beta1/query").QueryTallyResultResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseTallyResultQuery<TData_44>) => import("@tanstack/react-query").UseQueryResult<TData_44, Error>;
            };
            v1: {
                useProposal: <TData_45 = import("./cosmos/gov/v1/query").QueryProposalResponse>({ request, options }: _CosmosGovV1Queryrpc.UseProposalQuery<TData_45>) => import("@tanstack/react-query").UseQueryResult<TData_45, Error>;
                useProposals: <TData_46 = import("./cosmos/gov/v1/query").QueryProposalsResponse>({ request, options }: _CosmosGovV1Queryrpc.UseProposalsQuery<TData_46>) => import("@tanstack/react-query").UseQueryResult<TData_46, Error>;
                useVote: <TData_47 = import("./cosmos/gov/v1/query").QueryVoteResponse>({ request, options }: _CosmosGovV1Queryrpc.UseVoteQuery<TData_47>) => import("@tanstack/react-query").UseQueryResult<TData_47, Error>;
                useVotes: <TData_48 = import("./cosmos/gov/v1/query").QueryVotesResponse>({ request, options }: _CosmosGovV1Queryrpc.UseVotesQuery<TData_48>) => import("@tanstack/react-query").UseQueryResult<TData_48, Error>;
                useParams: <TData_49 = import("./cosmos/gov/v1/query").QueryParamsResponse>({ request, options }: _CosmosGovV1Queryrpc.UseParamsQuery<TData_49>) => import("@tanstack/react-query").UseQueryResult<TData_49, Error>;
                useDeposit: <TData_50 = import("./cosmos/gov/v1/query").QueryDepositResponse>({ request, options }: _CosmosGovV1Queryrpc.UseDepositQuery<TData_50>) => import("@tanstack/react-query").UseQueryResult<TData_50, Error>;
                useDeposits: <TData_51 = import("./cosmos/gov/v1/query").QueryDepositsResponse>({ request, options }: _CosmosGovV1Queryrpc.UseDepositsQuery<TData_51>) => import("@tanstack/react-query").UseQueryResult<TData_51, Error>;
                useTallyResult: <TData_52 = import("./cosmos/gov/v1/query").QueryTallyResultResponse>({ request, options }: _CosmosGovV1Queryrpc.UseTallyResultQuery<TData_52>) => import("@tanstack/react-query").UseQueryResult<TData_52, Error>;
            };
        };
        mint: {
            v1beta1: {
                useParams: <TData_53 = import("./cosmos/mint/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosMintV1beta1Queryrpc.UseParamsQuery<TData_53>) => import("@tanstack/react-query").UseQueryResult<TData_53, Error>;
                useInflation: <TData_54 = import("./cosmos/mint/v1beta1/query").QueryInflationResponse>({ request, options }: _CosmosMintV1beta1Queryrpc.UseInflationQuery<TData_54>) => import("@tanstack/react-query").UseQueryResult<TData_54, Error>;
                useAnnualProvisions: <TData_55 = import("./cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>({ request, options }: _CosmosMintV1beta1Queryrpc.UseAnnualProvisionsQuery<TData_55>) => import("@tanstack/react-query").UseQueryResult<TData_55, Error>;
            };
        };
        params: {
            v1beta1: {
                useParams: <TData_56 = import("./cosmos/params/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosParamsV1beta1Queryrpc.UseParamsQuery<TData_56>) => import("@tanstack/react-query").UseQueryResult<TData_56, Error>;
            };
        };
        slashing: {
            v1beta1: {
                useParams: <TData_57 = import("./cosmos/slashing/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosSlashingV1beta1Queryrpc.UseParamsQuery<TData_57>) => import("@tanstack/react-query").UseQueryResult<TData_57, Error>;
                useSigningInfo: <TData_58 = import("./cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>({ request, options }: _CosmosSlashingV1beta1Queryrpc.UseSigningInfoQuery<TData_58>) => import("@tanstack/react-query").UseQueryResult<TData_58, Error>;
                useSigningInfos: <TData_59 = import("./cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>({ request, options }: _CosmosSlashingV1beta1Queryrpc.UseSigningInfosQuery<TData_59>) => import("@tanstack/react-query").UseQueryResult<TData_59, Error>;
            };
        };
        staking: {
            v1beta1: {
                useValidators: <TData_60 = import("./cosmos/staking/v1beta1/query").QueryValidatorsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseValidatorsQuery<TData_60>) => import("@tanstack/react-query").UseQueryResult<TData_60, Error>;
                useValidator: <TData_61 = import("./cosmos/staking/v1beta1/query").QueryValidatorResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseValidatorQuery<TData_61>) => import("@tanstack/react-query").UseQueryResult<TData_61, Error>;
                useValidatorDelegations: <TData_62 = import("./cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseValidatorDelegationsQuery<TData_62>) => import("@tanstack/react-query").UseQueryResult<TData_62, Error>;
                useValidatorUnbondingDelegations: <TData_63 = import("./cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseValidatorUnbondingDelegationsQuery<TData_63>) => import("@tanstack/react-query").UseQueryResult<TData_63, Error>;
                useDelegation: <TData_64 = import("./cosmos/staking/v1beta1/query").QueryDelegationResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseDelegationQuery<TData_64>) => import("@tanstack/react-query").UseQueryResult<TData_64, Error>;
                useUnbondingDelegation: <TData_65 = import("./cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseUnbondingDelegationQuery<TData_65>) => import("@tanstack/react-query").UseQueryResult<TData_65, Error>;
                useDelegatorDelegations: <TData_66 = import("./cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseDelegatorDelegationsQuery<TData_66>) => import("@tanstack/react-query").UseQueryResult<TData_66, Error>;
                useDelegatorUnbondingDelegations: <TData_67 = import("./cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseDelegatorUnbondingDelegationsQuery<TData_67>) => import("@tanstack/react-query").UseQueryResult<TData_67, Error>;
                useRedelegations: <TData_68 = import("./cosmos/staking/v1beta1/query").QueryRedelegationsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseRedelegationsQuery<TData_68>) => import("@tanstack/react-query").UseQueryResult<TData_68, Error>;
                useDelegatorValidators: <TData_69 = import("./cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseDelegatorValidatorsQuery<TData_69>) => import("@tanstack/react-query").UseQueryResult<TData_69, Error>;
                useDelegatorValidator: <TData_70 = import("./cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseDelegatorValidatorQuery<TData_70>) => import("@tanstack/react-query").UseQueryResult<TData_70, Error>;
                useHistoricalInfo: <TData_71 = import("./cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseHistoricalInfoQuery<TData_71>) => import("@tanstack/react-query").UseQueryResult<TData_71, Error>;
                usePool: <TData_72 = import("./cosmos/staking/v1beta1/query").QueryPoolResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UsePoolQuery<TData_72>) => import("@tanstack/react-query").UseQueryResult<TData_72, Error>;
                useParams: <TData_73 = import("./cosmos/staking/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseParamsQuery<TData_73>) => import("@tanstack/react-query").UseQueryResult<TData_73, Error>;
            };
        };
        tx: {
            v1beta1: {
                useSimulate: <TData_74 = import("./cosmos/tx/v1beta1/service").SimulateResponse>({ request, options }: _CosmosTxV1beta1Servicerpc.UseSimulateQuery<TData_74>) => import("@tanstack/react-query").UseQueryResult<TData_74, Error>;
                useGetTx: <TData_75 = import("./cosmos/tx/v1beta1/service").GetTxResponse>({ request, options }: _CosmosTxV1beta1Servicerpc.UseGetTxQuery<TData_75>) => import("@tanstack/react-query").UseQueryResult<TData_75, Error>;
                useBroadcastTx: <TData_76 = import("./cosmos/tx/v1beta1/service").BroadcastTxResponse>({ request, options }: _CosmosTxV1beta1Servicerpc.UseBroadcastTxQuery<TData_76>) => import("@tanstack/react-query").UseQueryResult<TData_76, Error>;
                useGetTxsEvent: <TData_77 = import("./cosmos/tx/v1beta1/service").GetTxsEventResponse>({ request, options }: _CosmosTxV1beta1Servicerpc.UseGetTxsEventQuery<TData_77>) => import("@tanstack/react-query").UseQueryResult<TData_77, Error>;
            };
        };
        upgrade: {
            v1beta1: {
                useCurrentPlan: <TData_78 = import("./cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>({ request, options }: _CosmosUpgradeV1beta1Queryrpc.UseCurrentPlanQuery<TData_78>) => import("@tanstack/react-query").UseQueryResult<TData_78, Error>;
                useAppliedPlan: <TData_79 = import("./cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>({ request, options }: _CosmosUpgradeV1beta1Queryrpc.UseAppliedPlanQuery<TData_79>) => import("@tanstack/react-query").UseQueryResult<TData_79, Error>;
                useUpgradedConsensusState: <TData_80 = import("./cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>({ request, options }: _CosmosUpgradeV1beta1Queryrpc.UseUpgradedConsensusStateQuery<TData_80>) => import("@tanstack/react-query").UseQueryResult<TData_80, Error>;
                useModuleVersions: <TData_81 = import("./cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>({ request, options }: _CosmosUpgradeV1beta1Queryrpc.UseModuleVersionsQuery<TData_81>) => import("@tanstack/react-query").UseQueryResult<TData_81, Error>;
            };
        };
        app: {
            v1alpha1: {
                useConfig: <TData_82 = import("./cosmos/app/v1alpha1/query").QueryConfigResponse>({ request, options }: _CosmosAppV1alpha1Queryrpc.UseConfigQuery<TData_82>) => import("@tanstack/react-query").UseQueryResult<TData_82, Error>;
            };
        };
        group: {
            v1: {
                useGroupInfo: <TData_83 = import("./cosmos/group/v1/query").QueryGroupInfoResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupInfoQuery<TData_83>) => import("@tanstack/react-query").UseQueryResult<TData_83, Error>;
                useGroupPolicyInfo: <TData_84 = import("./cosmos/group/v1/query").QueryGroupPolicyInfoResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupPolicyInfoQuery<TData_84>) => import("@tanstack/react-query").UseQueryResult<TData_84, Error>;
                useGroupMembers: <TData_85 = import("./cosmos/group/v1/query").QueryGroupMembersResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupMembersQuery<TData_85>) => import("@tanstack/react-query").UseQueryResult<TData_85, Error>;
                useGroupsByAdmin: <TData_86 = import("./cosmos/group/v1/query").QueryGroupsByAdminResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupsByAdminQuery<TData_86>) => import("@tanstack/react-query").UseQueryResult<TData_86, Error>;
                useGroupPoliciesByGroup: <TData_87 = import("./cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupPoliciesByGroupQuery<TData_87>) => import("@tanstack/react-query").UseQueryResult<TData_87, Error>;
                useGroupPoliciesByAdmin: <TData_88 = import("./cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupPoliciesByAdminQuery<TData_88>) => import("@tanstack/react-query").UseQueryResult<TData_88, Error>;
                useProposal: <TData_89 = import("./cosmos/group/v1/query").QueryProposalResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseProposalQuery<TData_89>) => import("@tanstack/react-query").UseQueryResult<TData_89, Error>;
                useProposalsByGroupPolicy: <TData_90 = import("./cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseProposalsByGroupPolicyQuery<TData_90>) => import("@tanstack/react-query").UseQueryResult<TData_90, Error>;
                useVoteByProposalVoter: <TData_91 = import("./cosmos/group/v1/query").QueryVoteByProposalVoterResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseVoteByProposalVoterQuery<TData_91>) => import("@tanstack/react-query").UseQueryResult<TData_91, Error>;
                useVotesByProposal: <TData_92 = import("./cosmos/group/v1/query").QueryVotesByProposalResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseVotesByProposalQuery<TData_92>) => import("@tanstack/react-query").UseQueryResult<TData_92, Error>;
                useVotesByVoter: <TData_93 = import("./cosmos/group/v1/query").QueryVotesByVoterResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseVotesByVoterQuery<TData_93>) => import("@tanstack/react-query").UseQueryResult<TData_93, Error>;
                useGroupsByMember: <TData_94 = import("./cosmos/group/v1/query").QueryGroupsByMemberResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupsByMemberQuery<TData_94>) => import("@tanstack/react-query").UseQueryResult<TData_94, Error>;
                useTallyResult: <TData_95 = import("./cosmos/group/v1/query").QueryTallyResultResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseTallyResultQuery<TData_95>) => import("@tanstack/react-query").UseQueryResult<TData_95, Error>;
            };
        };
        nft: {
            v1beta1: {
                useBalance: <TData_96 = import("./cosmos/nft/v1beta1/query").QueryBalanceResponse>({ request, options }: _CosmosNftV1beta1Queryrpc.UseBalanceQuery<TData_96>) => import("@tanstack/react-query").UseQueryResult<TData_96, Error>;
                useOwner: <TData_97 = import("./cosmos/nft/v1beta1/query").QueryOwnerResponse>({ request, options }: _CosmosNftV1beta1Queryrpc.UseOwnerQuery<TData_97>) => import("@tanstack/react-query").UseQueryResult<TData_97, Error>;
                useSupply: <TData_98 = import("./cosmos/nft/v1beta1/query").QuerySupplyResponse>({ request, options }: _CosmosNftV1beta1Queryrpc.UseSupplyQuery<TData_98>) => import("@tanstack/react-query").UseQueryResult<TData_98, Error>;
                useNFTs: <TData_99 = import("./cosmos/nft/v1beta1/query").QueryNFTsResponse>({ request, options }: _CosmosNftV1beta1Queryrpc.UseNFTsQuery<TData_99>) => import("@tanstack/react-query").UseQueryResult<TData_99, Error>;
                useNFT: <TData_100 = import("./cosmos/nft/v1beta1/query").QueryNFTResponse>({ request, options }: _CosmosNftV1beta1Queryrpc.UseNFTQuery<TData_100>) => import("@tanstack/react-query").UseQueryResult<TData_100, Error>;
                useClass: <TData_101 = import("./cosmos/nft/v1beta1/query").QueryClassResponse>({ request, options }: _CosmosNftV1beta1Queryrpc.UseClassQuery<TData_101>) => import("@tanstack/react-query").UseQueryResult<TData_101, Error>;
                useClasses: <TData_102 = import("./cosmos/nft/v1beta1/query").QueryClassesResponse>({ request, options }: _CosmosNftV1beta1Queryrpc.UseClassesQuery<TData_102>) => import("@tanstack/react-query").UseQueryResult<TData_102, Error>;
            };
        };
    };
    ibc: {
        applications: {
            fee: {
                v1: {
                    useIncentivizedPackets: <TData_103 = import("./ibc/applications/fee/v1/query").QueryIncentivizedPacketsResponse>({ request, options }: _IbcApplicationsFeeV1Queryrpc.UseIncentivizedPacketsQuery<TData_103>) => import("@tanstack/react-query").UseQueryResult<TData_103, Error>;
                    useIncentivizedPacket: <TData_104 = import("./ibc/applications/fee/v1/query").QueryIncentivizedPacketResponse>({ request, options }: _IbcApplicationsFeeV1Queryrpc.UseIncentivizedPacketQuery<TData_104>) => import("@tanstack/react-query").UseQueryResult<TData_104, Error>;
                    useIncentivizedPacketsForChannel: <TData_105 = import("./ibc/applications/fee/v1/query").QueryIncentivizedPacketsForChannelResponse>({ request, options }: _IbcApplicationsFeeV1Queryrpc.UseIncentivizedPacketsForChannelQuery<TData_105>) => import("@tanstack/react-query").UseQueryResult<TData_105, Error>;
                    useTotalRecvFees: <TData_106 = import("./ibc/applications/fee/v1/query").QueryTotalRecvFeesResponse>({ request, options }: _IbcApplicationsFeeV1Queryrpc.UseTotalRecvFeesQuery<TData_106>) => import("@tanstack/react-query").UseQueryResult<TData_106, Error>;
                    useTotalAckFees: <TData_107 = import("./ibc/applications/fee/v1/query").QueryTotalAckFeesResponse>({ request, options }: _IbcApplicationsFeeV1Queryrpc.UseTotalAckFeesQuery<TData_107>) => import("@tanstack/react-query").UseQueryResult<TData_107, Error>;
                    useTotalTimeoutFees: <TData_108 = import("./ibc/applications/fee/v1/query").QueryTotalTimeoutFeesResponse>({ request, options }: _IbcApplicationsFeeV1Queryrpc.UseTotalTimeoutFeesQuery<TData_108>) => import("@tanstack/react-query").UseQueryResult<TData_108, Error>;
                    usePayee: <TData_109 = import("./ibc/applications/fee/v1/query").QueryPayeeResponse>({ request, options }: _IbcApplicationsFeeV1Queryrpc.UsePayeeQuery<TData_109>) => import("@tanstack/react-query").UseQueryResult<TData_109, Error>;
                    useCounterpartyPayee: <TData_110 = import("./ibc/applications/fee/v1/query").QueryCounterpartyPayeeResponse>({ request, options }: _IbcApplicationsFeeV1Queryrpc.UseCounterpartyPayeeQuery<TData_110>) => import("@tanstack/react-query").UseQueryResult<TData_110, Error>;
                    useFeeEnabledChannels: <TData_111 = import("./ibc/applications/fee/v1/query").QueryFeeEnabledChannelsResponse>({ request, options }: _IbcApplicationsFeeV1Queryrpc.UseFeeEnabledChannelsQuery<TData_111>) => import("@tanstack/react-query").UseQueryResult<TData_111, Error>;
                    useFeeEnabledChannel: <TData_112 = import("./ibc/applications/fee/v1/query").QueryFeeEnabledChannelResponse>({ request, options }: _IbcApplicationsFeeV1Queryrpc.UseFeeEnabledChannelQuery<TData_112>) => import("@tanstack/react-query").UseQueryResult<TData_112, Error>;
                };
            };
            interchain_accounts: {
                controller: {
                    v1: {
                        useInterchainAccount: <TData_113 = import("./ibc/applications/interchain_accounts/controller/v1/query").QueryInterchainAccountResponse>({ request, options }: _IbcApplicationsInterchainAccountsControllerV1Queryrpc.UseInterchainAccountQuery<TData_113>) => import("@tanstack/react-query").UseQueryResult<TData_113, Error>;
                        useParams: <TData_114 = import("./ibc/applications/interchain_accounts/controller/v1/query").QueryParamsResponse>({ request, options }: _IbcApplicationsInterchainAccountsControllerV1Queryrpc.UseParamsQuery<TData_114>) => import("@tanstack/react-query").UseQueryResult<TData_114, Error>;
                    };
                };
                host: {
                    v1: {
                        useParams: <TData_115 = import("./ibc/applications/interchain_accounts/host/v1/query").QueryParamsResponse>({ request, options }: _IbcApplicationsInterchainAccountsHostV1Queryrpc.UseParamsQuery<TData_115>) => import("@tanstack/react-query").UseQueryResult<TData_115, Error>;
                    };
                };
            };
            transfer: {
                v1: {
                    useDenomTrace: <TData_116 = import("./ibc/applications/transfer/v1/query").QueryDenomTraceResponse>({ request, options }: _IbcApplicationsTransferV1Queryrpc.UseDenomTraceQuery<TData_116>) => import("@tanstack/react-query").UseQueryResult<TData_116, Error>;
                    useDenomTraces: <TData_117 = import("./ibc/applications/transfer/v1/query").QueryDenomTracesResponse>({ request, options }: _IbcApplicationsTransferV1Queryrpc.UseDenomTracesQuery<TData_117>) => import("@tanstack/react-query").UseQueryResult<TData_117, Error>;
                    useParams: <TData_118 = import("./ibc/applications/transfer/v1/query").QueryParamsResponse>({ request, options }: _IbcApplicationsTransferV1Queryrpc.UseParamsQuery<TData_118>) => import("@tanstack/react-query").UseQueryResult<TData_118, Error>;
                    useDenomHash: <TData_119 = import("./ibc/applications/transfer/v1/query").QueryDenomHashResponse>({ request, options }: _IbcApplicationsTransferV1Queryrpc.UseDenomHashQuery<TData_119>) => import("@tanstack/react-query").UseQueryResult<TData_119, Error>;
                    useEscrowAddress: <TData_120 = import("./ibc/applications/transfer/v1/query").QueryEscrowAddressResponse>({ request, options }: _IbcApplicationsTransferV1Queryrpc.UseEscrowAddressQuery<TData_120>) => import("@tanstack/react-query").UseQueryResult<TData_120, Error>;
                    useTotalEscrowForDenom: <TData_121 = import("./ibc/applications/transfer/v1/query").QueryTotalEscrowForDenomResponse>({ request, options }: _IbcApplicationsTransferV1Queryrpc.UseTotalEscrowForDenomQuery<TData_121>) => import("@tanstack/react-query").UseQueryResult<TData_121, Error>;
                };
            };
        };
        core: {
            channel: {
                v1: {
                    useChannel: <TData_122 = import("./ibc/core/channel/v1/query").QueryChannelResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseChannelQuery<TData_122>) => import("@tanstack/react-query").UseQueryResult<TData_122, Error>;
                    useChannels: <TData_123 = import("./ibc/core/channel/v1/query").QueryChannelsResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseChannelsQuery<TData_123>) => import("@tanstack/react-query").UseQueryResult<TData_123, Error>;
                    useConnectionChannels: <TData_124 = import("./ibc/core/channel/v1/query").QueryConnectionChannelsResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseConnectionChannelsQuery<TData_124>) => import("@tanstack/react-query").UseQueryResult<TData_124, Error>;
                    useChannelClientState: <TData_125 = import("./ibc/core/channel/v1/query").QueryChannelClientStateResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseChannelClientStateQuery<TData_125>) => import("@tanstack/react-query").UseQueryResult<TData_125, Error>;
                    useChannelConsensusState: <TData_126 = import("./ibc/core/channel/v1/query").QueryChannelConsensusStateResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseChannelConsensusStateQuery<TData_126>) => import("@tanstack/react-query").UseQueryResult<TData_126, Error>;
                    usePacketCommitment: <TData_127 = import("./ibc/core/channel/v1/query").QueryPacketCommitmentResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UsePacketCommitmentQuery<TData_127>) => import("@tanstack/react-query").UseQueryResult<TData_127, Error>;
                    usePacketCommitments: <TData_128 = import("./ibc/core/channel/v1/query").QueryPacketCommitmentsResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UsePacketCommitmentsQuery<TData_128>) => import("@tanstack/react-query").UseQueryResult<TData_128, Error>;
                    usePacketReceipt: <TData_129 = import("./ibc/core/channel/v1/query").QueryPacketReceiptResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UsePacketReceiptQuery<TData_129>) => import("@tanstack/react-query").UseQueryResult<TData_129, Error>;
                    usePacketAcknowledgement: <TData_130 = import("./ibc/core/channel/v1/query").QueryPacketAcknowledgementResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UsePacketAcknowledgementQuery<TData_130>) => import("@tanstack/react-query").UseQueryResult<TData_130, Error>;
                    usePacketAcknowledgements: <TData_131 = import("./ibc/core/channel/v1/query").QueryPacketAcknowledgementsResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UsePacketAcknowledgementsQuery<TData_131>) => import("@tanstack/react-query").UseQueryResult<TData_131, Error>;
                    useUnreceivedPackets: <TData_132 = import("./ibc/core/channel/v1/query").QueryUnreceivedPacketsResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseUnreceivedPacketsQuery<TData_132>) => import("@tanstack/react-query").UseQueryResult<TData_132, Error>;
                    useUnreceivedAcks: <TData_133 = import("./ibc/core/channel/v1/query").QueryUnreceivedAcksResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseUnreceivedAcksQuery<TData_133>) => import("@tanstack/react-query").UseQueryResult<TData_133, Error>;
                    useNextSequenceReceive: <TData_134 = import("./ibc/core/channel/v1/query").QueryNextSequenceReceiveResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseNextSequenceReceiveQuery<TData_134>) => import("@tanstack/react-query").UseQueryResult<TData_134, Error>;
                    useNextSequenceSend: <TData_135 = import("./ibc/core/channel/v1/query").QueryNextSequenceSendResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseNextSequenceSendQuery<TData_135>) => import("@tanstack/react-query").UseQueryResult<TData_135, Error>;
                };
            };
            client: {
                v1: {
                    useClientState: <TData_136 = import("./ibc/core/client/v1/query").QueryClientStateResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseClientStateQuery<TData_136>) => import("@tanstack/react-query").UseQueryResult<TData_136, Error>;
                    useClientStates: <TData_137 = import("./ibc/core/client/v1/query").QueryClientStatesResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseClientStatesQuery<TData_137>) => import("@tanstack/react-query").UseQueryResult<TData_137, Error>;
                    useConsensusState: <TData_138 = import("./ibc/core/client/v1/query").QueryConsensusStateResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseConsensusStateQuery<TData_138>) => import("@tanstack/react-query").UseQueryResult<TData_138, Error>;
                    useConsensusStates: <TData_139 = import("./ibc/core/client/v1/query").QueryConsensusStatesResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseConsensusStatesQuery<TData_139>) => import("@tanstack/react-query").UseQueryResult<TData_139, Error>;
                    useConsensusStateHeights: <TData_140 = import("./ibc/core/client/v1/query").QueryConsensusStateHeightsResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseConsensusStateHeightsQuery<TData_140>) => import("@tanstack/react-query").UseQueryResult<TData_140, Error>;
                    useClientStatus: <TData_141 = import("./ibc/core/client/v1/query").QueryClientStatusResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseClientStatusQuery<TData_141>) => import("@tanstack/react-query").UseQueryResult<TData_141, Error>;
                    useClientParams: <TData_142 = import("./ibc/core/client/v1/query").QueryClientParamsResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseClientParamsQuery<TData_142>) => import("@tanstack/react-query").UseQueryResult<TData_142, Error>;
                    useUpgradedClientState: <TData_143 = import("./ibc/core/client/v1/query").QueryUpgradedClientStateResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseUpgradedClientStateQuery<TData_143>) => import("@tanstack/react-query").UseQueryResult<TData_143, Error>;
                    useUpgradedConsensusState: <TData_144 = import("./ibc/core/client/v1/query").QueryUpgradedConsensusStateResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseUpgradedConsensusStateQuery<TData_144>) => import("@tanstack/react-query").UseQueryResult<TData_144, Error>;
                };
            };
            connection: {
                v1: {
                    useConnection: <TData_145 = import("./ibc/core/connection/v1/query").QueryConnectionResponse>({ request, options }: _IbcCoreConnectionV1Queryrpc.UseConnectionQuery<TData_145>) => import("@tanstack/react-query").UseQueryResult<TData_145, Error>;
                    useConnections: <TData_146 = import("./ibc/core/connection/v1/query").QueryConnectionsResponse>({ request, options }: _IbcCoreConnectionV1Queryrpc.UseConnectionsQuery<TData_146>) => import("@tanstack/react-query").UseQueryResult<TData_146, Error>;
                    useClientConnections: <TData_147 = import("./ibc/core/connection/v1/query").QueryClientConnectionsResponse>({ request, options }: _IbcCoreConnectionV1Queryrpc.UseClientConnectionsQuery<TData_147>) => import("@tanstack/react-query").UseQueryResult<TData_147, Error>;
                    useConnectionClientState: <TData_148 = import("./ibc/core/connection/v1/query").QueryConnectionClientStateResponse>({ request, options }: _IbcCoreConnectionV1Queryrpc.UseConnectionClientStateQuery<TData_148>) => import("@tanstack/react-query").UseQueryResult<TData_148, Error>;
                    useConnectionConsensusState: <TData_149 = import("./ibc/core/connection/v1/query").QueryConnectionConsensusStateResponse>({ request, options }: _IbcCoreConnectionV1Queryrpc.UseConnectionConsensusStateQuery<TData_149>) => import("@tanstack/react-query").UseQueryResult<TData_149, Error>;
                    useConnectionParams: <TData_150 = import("./ibc/core/connection/v1/query").QueryConnectionParamsResponse>({ request, options }: _IbcCoreConnectionV1Queryrpc.UseConnectionParamsQuery<TData_150>) => import("@tanstack/react-query").UseQueryResult<TData_150, Error>;
                };
            };
        };
    };
    cosmwasm: {
        wasm: {
            v1: {
                useContractInfo: <TData_151 = import("./cosmwasm/wasm/v1/query").QueryContractInfoResponse>({ request, options }: _CosmwasmWasmV1Queryrpc.UseContractInfoQuery<TData_151>) => import("@tanstack/react-query").UseQueryResult<TData_151, Error>;
                useContractHistory: <TData_152 = import("./cosmwasm/wasm/v1/query").QueryContractHistoryResponse>({ request, options }: _CosmwasmWasmV1Queryrpc.UseContractHistoryQuery<TData_152>) => import("@tanstack/react-query").UseQueryResult<TData_152, Error>;
                useContractsByCode: <TData_153 = import("./cosmwasm/wasm/v1/query").QueryContractsByCodeResponse>({ request, options }: _CosmwasmWasmV1Queryrpc.UseContractsByCodeQuery<TData_153>) => import("@tanstack/react-query").UseQueryResult<TData_153, Error>;
                useAllContractState: <TData_154 = import("./cosmwasm/wasm/v1/query").QueryAllContractStateResponse>({ request, options }: _CosmwasmWasmV1Queryrpc.UseAllContractStateQuery<TData_154>) => import("@tanstack/react-query").UseQueryResult<TData_154, Error>;
                useRawContractState: <TData_155 = import("./cosmwasm/wasm/v1/query").QueryRawContractStateResponse>({ request, options }: _CosmwasmWasmV1Queryrpc.UseRawContractStateQuery<TData_155>) => import("@tanstack/react-query").UseQueryResult<TData_155, Error>;
                useSmartContractState: <TData_156 = import("./cosmwasm/wasm/v1/query").QuerySmartContractStateResponse>({ request, options }: _CosmwasmWasmV1Queryrpc.UseSmartContractStateQuery<TData_156>) => import("@tanstack/react-query").UseQueryResult<TData_156, Error>;
                useCode: <TData_157 = import("./cosmwasm/wasm/v1/query").QueryCodeResponse>({ request, options }: _CosmwasmWasmV1Queryrpc.UseCodeQuery<TData_157>) => import("@tanstack/react-query").UseQueryResult<TData_157, Error>;
                useCodes: <TData_158 = import("./cosmwasm/wasm/v1/query").QueryCodesResponse>({ request, options }: _CosmwasmWasmV1Queryrpc.UseCodesQuery<TData_158>) => import("@tanstack/react-query").UseQueryResult<TData_158, Error>;
                usePinnedCodes: <TData_159 = import("./cosmwasm/wasm/v1/query").QueryPinnedCodesResponse>({ request, options }: _CosmwasmWasmV1Queryrpc.UsePinnedCodesQuery<TData_159>) => import("@tanstack/react-query").UseQueryResult<TData_159, Error>;
                useParams: <TData_160 = import("./cosmwasm/wasm/v1/query").QueryParamsResponse>({ request, options }: _CosmwasmWasmV1Queryrpc.UseParamsQuery<TData_160>) => import("@tanstack/react-query").UseQueryResult<TData_160, Error>;
                useContractsByCreator: <TData_161 = import("./cosmwasm/wasm/v1/query").QueryContractsByCreatorResponse>({ request, options }: _CosmwasmWasmV1Queryrpc.UseContractsByCreatorQuery<TData_161>) => import("@tanstack/react-query").UseQueryResult<TData_161, Error>;
            };
        };
    };
};
