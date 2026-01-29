import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Calendar, Search, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section 
        className="flex-1 flex flex-col items-center justify-center py-20 px-4 text-center relative overflow-hidden"
      >
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('/images/hero.png')", filter: "brightness(0.4)" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl mb-6 bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
            Fly Anywhere, Anytime
          </h1>
          <p className="text-xl text-blue-50/90 max-w-2xl mb-10">
            Experience seamless flight booking with SkyBook. 
            Find the best deals, book your seats, and manage your travel all in one place.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="h-12 px-8 text-lg bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/flights">
                <Search className="mr-2 h-5 w-5" />
                Search Flights
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-lg border-white/20 hover:bg-white/10 text-white" asChild>
               <Link href="/book">
                Book Now
               </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose SkyBook?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Plane className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Global Coverage</CardTitle>
              <CardDescription>Flights to over 100 destinations worldwide.</CardDescription>
            </CardHeader>
            <CardContent>
              We partner with major airlines to bring you the best routes and connections available.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Calendar className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Easy Scheduling</CardTitle>
              <CardDescription>Flexible dates and times to suit your plans.</CardDescription>
            </CardHeader>
            <CardContent>
              View detailed schedules and pick the perfect flight that matches your itinerary.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <MapPin className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Real-time Tracking</CardTitle>
              <CardDescription>Stay updated with flight status and changes.</CardDescription>
            </CardHeader>
            <CardContent>
              Get instant notifications about your booking status and gate changes.
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
