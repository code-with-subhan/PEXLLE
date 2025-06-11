import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export function MortageCalculator() {
  const [HomeValue, setHomeValue] = React.useState<number>(0);
  const [DownPayment, setDownPayment] = React.useState<number>(0);
  const [LoanTerms, setLoanTerms] = React.useState<number>(0);
  const [InterestRate, setInterestRate] = React.useState<number>(0);
  const [total, settotal] = React.useState<number>(0)

  function Mortage() {
    console.log(HomeValue, DownPayment, LoanTerms, InterestRate);
    const monthly = HomeValue - DownPayment;
    const MonthlyInterest = InterestRate / 100 / 12;
    const totalNumberofPayment = LoanTerms * 12;
    const Numerator =
      MonthlyInterest * Math.pow(1 + MonthlyInterest, totalNumberofPayment);
    const DeNumerator = Math.pow(1 + MonthlyInterest, totalNumberofPayment) - 1;
    const mortageTotal = monthly * (Numerator / DeNumerator);
    settotal(mortageTotal)
    console.log(total , mortageTotal )
  }
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline" className="rounded-none">
            Mortage Calculator
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] rounded-none">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              Mortage Calculator
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-5 my-4 mb-5">
            <div className="flex gap-3 ">
              <Label htmlFor="Home_Value">Home Value</Label>
              <Input
                id="Home_Value"
                type="number"
                className="bg-[#F5F5F5] rounded-none focus:border focus:border-black"
                name="name"
                onChange={(e) => {
                  setHomeValue(+e.target.value)
                  Mortage();
                }}
              />
            </div>
            <div className="flex gap-3 ">
              <Label htmlFor="Down_payment">Down Payment</Label>
              <Input
                id="Down_payment"
                type="number"
                className="bg-[#F5F5F5] rounded-none focus:border focus:border-black"
                name="name"
                onChange={(e) => {
                  setDownPayment(+e.target.value)
                  Mortage();
                }}
              />
            </div>
            <div className="flex gap-3 ">
              <Label htmlFor="Loan_Terms">Loan Terms (years)</Label>
              <Input
                id="Loan_Terms"
                type="number"
                className="bg-[#F5F5F5] rounded-none focus:border focus:border-black"
                name="name"
                onChange={(e) => {
                  setLoanTerms(+e.target.value)
                  Mortage();
                }}
              />
            </div>
            <div className="flex gap-3 ">
              <Label htmlFor="Interest_Rate">Interest Rate (%)</Label>
              <Input
                id="Interest_Rate"
                type="number"
                className="bg-[#F5F5F5] rounded-none focus:border focus:border-black"
                name="name"
                onChange={(e) => {
                  setInterestRate(+e.target.value)
                  Mortage();
                }}
              />
            </div>
          </div>
          <div className="flex justify-between items-center ">
            <div className="text-xl font-bold">Monthly Payment:</div>
            <div className="text-xl font-bold">€{total}</div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button className="w-full bg-black rounded-none">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
