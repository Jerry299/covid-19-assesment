const covid19ImpactEstimator = (data) => ({
  data,
  impact: {
    currentlyInfected: Math.floor(data.reportedCases * 10),
    infectionsByRequestedTime: Math.floor(this.impact.currentlyInfected * 512),
    severeCasesByRequestedTime: Math.floor(
      (15 / 100) * this.impact.infectionsByRequestedTime
    ),
    hospitalBedsByRequestedTime: Math.floor(
      (35 / 100) * data.totalHospitalBeds
        - this.impact.severeCasesByRequestedTime
    ),
    casesForICUByRequestedTime: Math.floor(
      (5 / 100) * this.impact.infectionsByRequestedTime
    ),
    casesForVentilatorsByRequestedTime: Math.floor(
      (2 / 100) * this.impact.infectionsByRequestedTime
    ),
    dollarsInFlight: Math.floor(
      (this.impact.infectionsByRequestedTime
        * data.region.avgDailyIncomePopulation
        * data.region.avgDailyIncomeInUSD)
        / 30
    )
  },
  // your best case estimation
  severeImpact: {
    currentlyInfected: Math.floor(data.reportedCases * 50),
    infectionsByRequestedTime: Math.floor(
      covid19ImpactEstimator.severeImpact.currentlyInfected * 512
    ),
    severeCasesByRequestedTime: Math.floor(
      (15 / 100) * covid19ImpactEstimator.severeImpact.infectionsByRequestedTime
    ),
    hospitalBedsByRequestedTime: Math.floor(
      (35 / 100) * data.totalHospitalBeds
        - covid19ImpactEstimator.severeImpact.severeCasesByRequestedTime
    ),
    casesForICUByRequestedTime: Math.floor(
      (5 / 100) * covid19ImpactEstimator.severeImpact.infectionsByRequestedTime
    ),
    casesForVentilatorsByRequestedTime: Math.floor(
      (2 / 100) * covid19ImpactEstimator.severeImpact.infectionsByRequestedTime
    ),
    dollarsInFlight: Math.floor(
      (covid19ImpactEstimator.severeImpact.infectionsByRequestedTime
        * data.region.avgDailyIncomePopulation
        * data.region.avgDailyIncomeInUSD)
        / 30
    )
  }
  // your severe case estimation
});

export default covid19ImpactEstimator;
