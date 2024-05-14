import BigNumber from 'bignumber.js';
export interface CalculateAccruedIncentivesRequest {
    principalUserBalance: BigNumber;
    reserveIndex: BigNumber;
    userIndex: BigNumber;
    reserveIndexTimestamp: number;
    emissionPerSecond: BigNumber;
    totalSupply: BigNumber;
    currentTimestamp: number;
    emissionEndTimestamp: number;
}
export declare function calculateAccruedIncentives({ principalUserBalance, reserveIndex, userIndex, reserveIndexTimestamp, emissionPerSecond, totalSupply, currentTimestamp, emissionEndTimestamp, }: CalculateAccruedIncentivesRequest): BigNumber;
//# sourceMappingURL=calculate-accrued-incentives.d.ts.map