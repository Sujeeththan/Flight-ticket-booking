export interface Flight {
  flightNo: string;
  origin: string;
  destination: string;
  seats: number;
  price: number;
  departureTime: string;
  arrivalTime: string;
  image: string;
}

export const INITIAL_FLIGHTS: Flight[] = [
  {
    flightNo: "FL001",
    origin: "New York",
    destination: "London",
    seats: 150,
    price: 550,
    departureTime: "10:00 AM",
    arrivalTime: "10:00 PM",
    image: "/images/london.png",
  },
  {
    flightNo: "FL002",
    origin: "London",
    destination: "Paris",
    seats: 120,
    price: 150,
    departureTime: "2:00 PM",
    arrivalTime: "4:00 PM",
    image: "/images/paris.png",
  },
  {
    flightNo: "FL003",
    origin: "Paris",
    destination: "Tokyo",
    seats: 200,
    price: 1200,
    departureTime: "6:00 PM",
    arrivalTime: "2:00 PM (+1)",
    image: "/images/tokyo.png",
  },
  {
    flightNo: "FL004",
    origin: "Tokyo",
    destination: "Sydney",
    seats: 180,
    price: 900,
    departureTime: "9:00 AM",
    arrivalTime: "9:00 PM",
    image: "/images/sydney.png",
  },
  {
    flightNo: "FL005",
    origin: "Sydney",
    destination: "New York",
    seats: 220,
    price: 1400,
    departureTime: "11:00 PM",
    arrivalTime: "7:00 AM",
    image: "/images/newyork.png",
  },
];
