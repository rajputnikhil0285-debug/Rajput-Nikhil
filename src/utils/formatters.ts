export function formatINR(amount: number): string {
  if (isNaN(amount) || amount === null || amount === undefined) return '₹0';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

export function formatINRWords(amount: number): string {
  if (!amount || amount <= 0) return '₹0';
  if (amount >= 10000000) {
    const cr = (amount / 10000000).toFixed(2);
    return `₹${cr.replace(/\.00$/, '')} Crore`;
  }
  if (amount >= 100000) {
    const lakh = (amount / 100000).toFixed(2);
    return `₹${lakh.replace(/\.00$/, '')} Lakh`;
  }
  if (amount >= 1000) {
    const k = (amount / 1000).toFixed(1);
    return `₹${k.replace(/\.0$/, '')} Thousand`;
  }
  return `₹${amount}`;
}

export function calculateEMI(principal: number, annualRate: number, tenureMonths: number): {
  monthlyEmi: number;
  totalInterest: number;
  totalPayment: number;
  principalPercent: number;
  interestPercent: number;
} {
  if (!principal || principal <= 0 || !tenureMonths || tenureMonths <= 0) {
    return {
      monthlyEmi: 0,
      totalInterest: 0,
      totalPayment: 0,
      principalPercent: 100,
      interestPercent: 0
    };
  }

  if (annualRate <= 0) {
    const monthlyEmi = Math.round(principal / tenureMonths);
    return {
      monthlyEmi,
      totalInterest: 0,
      totalPayment: principal,
      principalPercent: 100,
      interestPercent: 0
    };
  }

  const monthlyRate = annualRate / 12 / 100;
  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
    (Math.pow(1 + monthlyRate, tenureMonths) - 1);

  const monthlyEmi = Math.round(emi);
  const totalPayment = Math.round(monthlyEmi * tenureMonths);
  const totalInterest = Math.max(0, totalPayment - principal);
  const principalPercent = Math.round((principal / totalPayment) * 100);
  const interestPercent = 100 - principalPercent;

  return {
    monthlyEmi,
    totalInterest,
    totalPayment,
    principalPercent,
    interestPercent
  };
}

export function getAmortizationSchedule(principal: number, annualRate: number, tenureMonths: number) {
  const monthlyRate = annualRate / 12 / 100;
  const { monthlyEmi } = calculateEMI(principal, annualRate, tenureMonths);
  
  let balance = principal;
  const yearlyData: {
    year: number;
    principalPaid: number;
    interestPaid: number;
    totalPayment: number;
    balance: number;
  }[] = [];

  let currentYear = 1;
  let yearPrincipal = 0;
  let yearInterest = 0;

  for (let m = 1; m <= tenureMonths; m++) {
    const interestForMonth = balance * monthlyRate;
    const principalForMonth = Math.min(balance, monthlyEmi - interestForMonth);
    balance = Math.max(0, balance - principalForMonth);

    yearPrincipal += principalForMonth;
    yearInterest += interestForMonth;

    if (m % 12 === 0 || m === tenureMonths) {
      yearlyData.push({
        year: currentYear,
        principalPaid: Math.round(yearPrincipal),
        interestPaid: Math.round(yearInterest),
        totalPayment: Math.round(yearPrincipal + yearInterest),
        balance: Math.round(balance)
      });
      currentYear++;
      yearPrincipal = 0;
      yearInterest = 0;
    }
  }

  return yearlyData;
}
