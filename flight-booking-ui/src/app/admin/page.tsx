"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, Users, XCircle, DollarSign } from "lucide-react";

export default function AdminPage() {
  // Mock data for the report
  const stats = [
    { title: "Total Bookings", value: "1,248", icon: Users, color: "text-blue-600" },
    { title: "Cancellations", value: "84", icon: XCircle, color: "text-red-600" },
    { title: "Total Revenue", value: "$45,231", icon: DollarSign, color: "text-green-600" },
    { title: "Active Flights", value: "24", icon: BarChart, color: "text-purple-600" },
  ];

  const transactions = [
    { id: "TX1001", type: "Booking", flight: "FL001", user: "John Doe", date: "2024-05-20" },
    { id: "TX1002", type: "Booking", flight: "FL003", user: "Alice Smith", date: "2024-05-20" },
    { id: "TX1003", type: "Cancellation", flight: "FL002", user: "Bob Brown", date: "2024-05-19" },
    { id: "TX1004", type: "Booking", flight: "FL005", user: "Charlie Davis", date: "2024-05-19" },
    { id: "TX1005", type: "Booking", flight: "FL001", user: "Eve Wilson", date: "2024-05-18" },
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">System Report & Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                +2.5% from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Transactions Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>A list of recent bookings and cancellations.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Flight</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((tx) => (
                <TableRow key={tx.id}>
                  <TableCell className="font-medium">{tx.id}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      tx.type === 'Booking' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                      {tx.type}
                    </span>
                  </TableCell>
                  <TableCell>{tx.flight}</TableCell>
                  <TableCell>{tx.user}</TableCell>
                  <TableCell>{tx.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
