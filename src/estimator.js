const covid19ImpactEstimator = (data) => {
  const temp = {
    data,
    impact: {
      currentlyInfected: Number(Math.floor(data.reportedCases * 10)),
      infectionsByRequestedTime: Math.floor(data.reportedCases * 10 * 512),
      severeCasesByRequestedTime: Math.floor(
        (15 / 100) * (data.reportedCases * 10 * 512)
      ),
      hospitalBedsByRequestedTime: Math.floor(
        0.35 * data.totalHospitalBeds - 0.15 * data.reportedCases * 10 * 512
      ),
      casesForICUByRequestedTime: Math.floor(
        (5 / 100) * data.reportedCases * 10 * 512
      ),
      casesForVentilatorsByRequestedTime: Math.floor(
        (2 / 100) * (data.reportedCases * 10)
      ),
      dollarsInFlight: Math.floor(
        (data.reportedCases
          * 10
          * 512
          * data.region.avgDailyIncomePopulation
          * data.region.avgDailyIncomeInUSD)
          / 30
      )
    },
    severeImpact: {
      currentlyInfected: Math.floor(data.reportedCases * 50),
      infectionsByRequestedTime: Math.floor(data.reportedCases * 50 * 512),
      severeCasesByRequestedTime: Math.floor(
        (15 / 100) * (data.reportedCases * 50 * 512)
      ),
      hospitalBedsByRequestedTime: Math.floor(
        (35 / 100) * data.totalHospitalBeds
          - (15 / 100) * (data.reportedCases * 50 * 512)
      ),
      casesForICUByRequestedTime: Math.floor(
        (5 / 100) * (data.reportedCases * 50 * 512)
      ),
      casesForVentilatorsByRequestedTime: Math.floor(
        (2 / 100) * (data.reportedCases * 50 * 512)
      ),
      dollarsInFlight: Math.floor(
        (data.reportedCases
          * 50
          * 512
          * data.region.avgDailyIncomePopulation
          * data.region.avgDailyIncomeInUSD)
          / 30
      )
    }
  };
  return temp;
};
/* impact: {
    currentlyInfected: Math.floor(
    data.reportedCases * 10
    ),done
    infectionsByRequestedTime: Math.floor(
      covid19ImpactEstimator.impact.currentlyInfected * 512
    ),
    severeCasesByRequestedTime: Math.floor(
      (15 / 100) * covid19ImpactEstimator.impact.infectionsByRequestedTime
    ),
    hospitalBedsByRequestedTime: Math.floor(
      (35 / 100) * data.totalHospitalBeds
        - covid19ImpactEstimator.impact.severeCasesByRequestedTime
    ),
    casesForICUByRequestedTime: Math.floor(
      (5 / 100) * covid19ImpactEstimator.impact.infectionsByRequestedTime
    ),
    casesForVentilatorsByRequestedTime: Math.floor(
      (2 / 100) * covid19ImpactEstimator.impact.infectionsByRequestedTime
    ),
    dollarsInFlight: Math.floor(
      (covid19ImpactEstimator.impact.infectionsByRequestedTime
        * data.region.avgDailyIncomePopulation
        * data.region.avgDailyIncomeInUSD)
        / 30
    )
  }, */
// your best case estimation
/* severeImpact: {
    currentlyInfected: Math.floor(
      covid19ImpactEstimator.data.reportedCases * 50
    ),
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
  } */
// your severe case estimation

const data = {
  region: {
    name: 'Africa',
    avgAge: 23,
    avgDailyIncomeInUSD: 47,
    avgDailyIncomePopulation: 0.45
  },
  periodType: 'days',
  timeToElapse: 38,
  reportedCases: 47,
  population: 45000000,
  totalHospitalBeds: 4578300
};

const res1 = covid19ImpactEstimator(data);
console.log(res1);

// export default covid19ImpactEstimator;
