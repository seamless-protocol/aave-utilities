import { normalize, normalizeBN, valueToBigNumber } from '../../bignumber';
import { SECONDS_PER_YEAR } from '../../constants';
// Calculate the APR for an incentive emission
export function calculateIncentiveAPR({ emissionPerSecond, rewardTokenPriceInMarketReferenceCurrency, priceInMarketReferenceCurrency, totalTokenSupply, decimals, rewardTokenDecimals, }) {
    const emissionPerSecondNormalized = normalizeBN(emissionPerSecond, rewardTokenDecimals).multipliedBy(rewardTokenPriceInMarketReferenceCurrency);
    if (emissionPerSecondNormalized.eq(0)) {
        return '0';
    }
    const emissionPerYear = emissionPerSecondNormalized.multipliedBy(SECONDS_PER_YEAR);
    const totalSupplyNormalized = valueToBigNumber(normalize(totalTokenSupply, decimals)).multipliedBy(priceInMarketReferenceCurrency);
    return emissionPerYear.dividedBy(totalSupplyNormalized).toFixed();
}
//# sourceMappingURL=calculate-incentive-apr.js.map