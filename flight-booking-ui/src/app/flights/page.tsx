"use client";

import { useState } from "react";
import { INITIAL_FLIGHTS, Flight } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";
import Link from "next/link";

export default function FlightsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [flights, setFlights] = useState<Flight[]>(INITIAL_FLIGHTS);

  const filteredFlights = flights.filter((flight) =>
    flight.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
    flight.origin.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Search Flights</h1>
      
      <div className="flex gap-4 mb-8">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search destination..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredFlights.length > 0 ? (
          filteredFlights.map((flight) => (
            <Card key={flight.flightNo} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-none bg-slate-50 dark:bg-slate-900">
              <div className="relative h-48 w-full">
                 <img 
                   src={flight.image} 
                   alt={flight.destination} 
                   className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                 />
                 <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                   ${flight.price}
                 </div>
              </div>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{flight.flightNo}</span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground font-normal">
                    <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Economy</span>
                  </div>
                </CardTitle>
                <CardDescription className="text-lg font-semibold text-foreground">
                  {flight.origin} ➔ {flight.destination}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Departure:</span>
                    <span className="font-medium">{flight.departureTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Arrival:</span>
                    <span className="font-medium">{flight.arrivalTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Seats:</span>
                    <span className={flight.seats > 0 ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                      {flight.seats} Available
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild disabled={flight.seats === 0}>
                  <Link href={`/book?flight=${flight.flightNo}`}>
                    {flight.seats > 0 ? "Book Ticket" : "Sold Out"}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-muted-foreground">
            No flights found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}
