import Link from "next/link";
import { Plane } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="border-b bg-background">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl mr-6">
          <Plane className="h-6 w-6" />
          <span>SkyBook</span>
        </Link>
        <div className="flex items-center gap-4 text-sm font-medium transition-colors hover:text-primary">
          <Link href="/flights">Flights</Link>
          <Link href="/book">Book Ticket</Link>
          <Link href="/cancel">My Bookings</Link>
          <Link href="/admin">Admin</Link>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="outline" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
             <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
