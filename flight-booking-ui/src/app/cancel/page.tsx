"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, AlertTriangle } from "lucide-react";

export default function CancelPage() {
  const [flightNo, setFlightNo] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSuccess(true);
    }, 1000);
  };

  if (isSuccess) {
    return (
      <div className="container max-w-md mx-auto py-10 px-4">
        <Alert className="border-orange-500 bg-orange-50 dark:bg-orange-900/10">
          <CheckCircle2 className="h-4 w-4 text-orange-600" />
          <AlertTitle className="text-orange-600">Cancellation Successful</AlertTitle>
          <AlertDescription className="text-orange-700 dark:text-orange-400">
            Your booking for flight {flightNo} has been cancelled successfully.
             Refund will be processed within 5-7 business days.
          </AlertDescription>
        </Alert>
        <div className="mt-6">
          <Button asChild className="w-full" variant="outline">
            <a href="/">Return Home</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container max-w-md mx-auto py-10 px-4">
      <Card>
        <CardHeader>
          <CardTitle>Cancel Booking</CardTitle>
          <CardDescription>Enter your flight number to cancel your reservation.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <Alert variant="destructive" className="mb-4">
               <AlertTriangle className="h-4 w-4" />
               <AlertTitle>Warning</AlertTitle>
               <AlertDescription>
                 Cancellation fees may apply depending on the airline policy.
               </AlertDescription>
            </Alert>
            <div className="space-y-2">
              <Label htmlFor="flightNo">Flight Number</Label>
              <Input
                id="flightNo"
                placeholder="e.g. FL001"
                required
                value={flightNo}
                onChange={(e) => setFlightNo(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" variant="destructive" className="w-full">Cancel Ticket</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
