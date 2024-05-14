import BigNumber from 'bignumber.js';
const PRECISION = 27;
// Calculate incentives earned by user since reserveIndexTimestamp
// Incentives earned before reserveIndexTimestamp are tracked separately (userUnclaimedRewards from UiIncentiveDataProvider)
// This function is used for deposit, variableDebt, and stableDebt incentives
export function calculateAccruedIncentives({ principalUserBalance, reserveIndex, userIndex, reserveIndexTimestamp, emissionPerSecond, totalSupply, currentTimestamp, emissionEndTimestamp, }) {
    if (totalSupply.isEqualTo(new BigNumber(0))) {
        return new BigNumber(0);
    }
    const actualCurrentTimestamp = currentTimestamp > emissionEndTimestamp
        ? emissionEndTimestamp
        : currentTimestamp;
    const timeDelta = actualCurrentTimestamp - reserveIndexTimestamp;
    let currentReserveIndex;
    if (reserveIndexTimestamp >= Number(currentTimestamp) ||
        reserveIndexTimestamp >= emissionEndTimestamp) {
        currentReserveIndex = reserveIndex;
    }
    else {
        currentReserveIndex = emissionPerSecond
            .multipliedBy(timeDelta)
            .shiftedBy(PRECISION)
            .dividedBy(totalSupply)
            .plus(reserveIndex);
    }
    const reward = principalUserBalance
        .multipliedBy(currentReserveIndex.minus(userIndex))
        .shiftedBy(PRECISION * -1);
    return reward;
}
//# sourceMappingURL=calculate-accrued-incentives.js.map