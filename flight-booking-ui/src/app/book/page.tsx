"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, Plane } from "lucide-react";

function BookingForm() {
  const searchParams = useSearchParams();
  const flightParam = searchParams.get("flight") || "";

  const [flightNo, setFlightNo] = useState(flightParam);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
      <div className="container max-w-2xl mx-auto py-10 px-4">
        <div className="flex flex-col items-center mb-8 text-center">
            <CheckCircle2 className="h-16 w-16 text-green-500 mb-4 animate-bounce" />
            <h2 className="text-3xl font-black tracking-tight">Booking Confirmed!</h2>
            <p className="text-muted-foreground">Your e-ticket has been generated and sent to your email.</p>
        </div>

        {/* Premium e-Ticket Component */}
        <div className="relative bg-white dark:bg-slate-900 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100 dark:border-slate-800">
           <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-4 w-full" />
           
           <div className="p-10">
              <div className="flex justify-between items-start mb-10">
                  <div>
                      <h3 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-2">Electronic Boarding Pass</h3>
                      <p className="text-4xl font-black tracking-tighter">{flightNo}</p>
                  </div>
                  <div className="text-right">
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Class</p>
                      <p className="text-xl font-bold italic text-blue-600">First Class</p>
                  </div>
              </div>

              <div className="grid grid-cols-3 gap-8 bg-slate-50 dark:bg-slate-800/40 p-8 rounded-3xl mb-10">
                  <div className="">
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Passenger</p>
                      <p className="text-lg font-bold">{name}</p>
                  </div>
                  <div className="text-center border-x border-slate-200 dark:border-slate-700 px-4">
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Date</p>
                      <p className="text-lg font-bold">28 MAY 2026</p>
                  </div>
                  <div className="text-right">
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Terminal</p>
                      <p className="text-lg font-bold">T4 / G12</p>
                  </div>
              </div>

              <div className="flex justify-between items-center mb-4 px-2">
                  <div className="flex-1">
                      <p className="text-5xl font-black tracking-tighter">JFK</p>
                      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">New York</p>
                  </div>
                  <div className="flex flex-col items-center px-10">
                      <Plane className="h-10 w-10 text-blue-600 mb-2 transform rotate-90" />
                      <div className="relative w-32 h-[2px] bg-slate-200 dark:bg-slate-700">
                          <div className="absolute -top-1 left-0 w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.5)]" />
                          <div className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-slate-400" />
                      </div>
                  </div>
                  <div className="flex-1 text-right">
                      <p className="text-5xl font-black tracking-tighter">LHR</p>
                      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">London</p>
                  </div>
              </div>
           </div>

           {/* Stylized perforated line */}
           <div className="relative flex items-center h-10 overflow-hidden">
               <div className="absolute -left-5 h-10 w-10 rounded-full bg-background border border-slate-100 dark:border-slate-800" />
               <div className="w-full border-t-[3px] border-dashed border-slate-200 dark:border-slate-700 mx-6" />
               <div className="absolute -right-5 h-10 w-10 rounded-full bg-background border border-slate-100 dark:border-slate-800" />
           </div>

           <div className="p-10 pt-6 flex justify-between items-center bg-slate-50/30 dark:bg-slate-800/10">
              <div className="flex items-center gap-6">
                  <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100">
                      <div className="h-20 w-20 bg-black flex items-center justify-center p-1.5 overflow-hidden">
                          <div className="w-full h-full bg-white grid grid-cols-6 grid-rows-6 gap-0.5">
                              {Array.from({length: 36}).map((_, i) => (
                                  <div key={i} className={Math.random() > 0.4 ? "bg-black" : "bg-white"} />
                              ))}
                          </div>
                      </div>
                  </div>
                  <div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Booking Conf.</p>
                      <p className="text-xl font-mono font-black tracking-tighter">SB-{Math.random().toString(36).substring(2, 7).toUpperCase()}</p>
                  </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                  <div className="h-8">
                     {/* Barcode representation */}
                     <div className="flex h-full gap-[1px]">
                         {Array.from({length: 30}).map((_, i) => (
                             <div key={i} className={`bg-black h-full ${Math.random() > 0.5 ? 'w-[1px]' : 'w-[2px]'}`} />
                         ))}
                     </div>
                  </div>
                  <p className="text-[8px] font-mono text-muted-foreground">SkyBook Digital Asset 010203</p>
              </div>
           </div>
        </div>

        <div className="mt-12 flex gap-4 no-print">
          <Button asChild className="flex-1 h-14 text-lg font-bold bg-blue-600 hover:bg-blue-700 rounded-2xl">
            <a href="/flights">Book Another Flight</a>
          </Button>
          <Button asChild variant="outline" className="flex-1 h-14 text-lg font-bold rounded-2xl border-slate-200">
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
          <CardTitle>Book a Ticket</CardTitle>
          <CardDescription>Enter your details to confirm your seat.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
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
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">Confirm Booking</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default function BookingPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BookingForm />
        </Suspense>
    )
}
