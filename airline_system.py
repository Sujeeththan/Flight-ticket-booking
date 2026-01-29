import os
import datetime

# File Constants
FLIGHTS_FILE = "flights.txt"
BOOKINGS_FILE = "bookings.txt"
CANCELLATIONS_FILE = "cancellations.txt"
REPORT_FILE = "report.txt"

def load_flights():
    """
    Reads flight details from flights.txt.
    Returns a dictionary with FlightNo as key and details as values.
    Structure: { 'FlightNo': {'Origin': '...', 'Destination': '...', 'Seats': int} }
    """
    flights = {}
    if not os.path.exists(FLIGHTS_FILE):
        print(f"Error: {FLIGHTS_FILE} not found.")
        return flights

    try:
        with open(FLIGHTS_FILE, 'r') as f:
            for line in f:
                parts = line.strip().split(',')
                if len(parts) == 4:
                    flight_no, origin, dest, seats = parts
                    flights[flight_no] = {
                        'Origin': origin,
                        'Destination': dest,
                        'Seats': int(seats)
                    }
    except Exception as e:
        print(f"Error reading {FLIGHTS_FILE}: {e}")
    
    return flights

def save_flights(flights):
    """
    Writes the current state of flights back to flights.txt.
    """
    try:
        with open(FLIGHTS_FILE, 'w') as f:
            for flight_no, details in flights.items():
                line = f"{flight_no},{details['Origin']},{details['Destination']},{details['Seats']}\n"
                f.write(line)
    except Exception as e:
        print(f"Error saving {FLIGHTS_FILE}: {e}")

def search_flights_recursive(destination, flight_keys, flights_data, index=0, found_flights=None):
    """
    Recursive function to find all flights for a given destination.
    """
    if found_flights is None:
        found_flights = []
    
    if index >= len(flight_keys):
        return found_flights
    
    flight_no = flight_keys[index]
    if flights_data[flight_no]['Destination'].lower() == destination.lower():
        found_flights.append((flight_no, flights_data[flight_no]))
    
    return search_flights_recursive(destination, flight_keys, flights_data, index + 1, found_flights)

def book_ticket(flights):
    """
    Handles ticket booking: verifies flight, checks seats, updates records.
    """
    flight_no = input("Enter Flight Number to book: ").strip()
    
    if flight_no not in flights:
        print("Error: Invalid Flight Number.")
        return

    if flights[flight_no]['Seats'] > 0:
        flights[flight_no]['Seats'] -= 1
        print(f"Booking confirmed for {flight_no}!")
        save_flights(flights) # Persist change
        
        # Save to bookings.txt
        try:
            with open(BOOKINGS_FILE, 'a') as f:
                timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                f.write(f"{timestamp},Booked,{flight_no},{flights[flight_no]['Origin']},{flights[flight_no]['Destination']}\n")
        except Exception as e:
            print(f"Error writing to {BOOKINGS_FILE}: {e}")
            
    else:
        print("Error: Flight is full.")

def cancel_ticket(flights):
    """
    Handles ticket cancellation: verifies flight, updates seats, logs cancellation.
    """
    flight_no = input("Enter Flight Number to cancel: ").strip()
    
    if flight_no not in flights:
        print("Error: Invalid Flight Number.")
        return

    # Check if a booking actually exists (Optional optimization, but strictly we increase seats as per simple requirements)
    # The requirement says "Increase available seats". simpler logic usually assumed for assignments unless "Check booking" is specified.
    # We will assume valid cancellation simply increments seats.
    
    flights[flight_no]['Seats'] += 1
    print(f"Cancellation successful for {flight_no}.")
    save_flights(flights) # Persist change
    
    try:
        with open(CANCELLATIONS_FILE, 'a') as f:
            timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            f.write(f"{timestamp},Cancelled,{flight_no},{flights[flight_no]['Origin']},{flights[flight_no]['Destination']}\n")
    except Exception as e:
        print(f"Error writing to {CANCELLATIONS_FILE}: {e}")

def generate_report():
    """
    Reads bookings and cancellations and generates a daily report.
    """
    print("Generating report...")
    records = []
    
    if os.path.exists(BOOKINGS_FILE):
        with open(BOOKINGS_FILE, 'r') as f:
            records.extend(f.readlines())
            
    if os.path.exists(CANCELLATIONS_FILE):
        with open(CANCELLATIONS_FILE, 'r') as f:
            records.extend(f.readlines())
            
    try:
        with open(REPORT_FILE, 'w') as f:
            f.write(f"--- Daily Report ({datetime.date.today()}) ---\n")
            if not records:
                f.write("No transactions found.\n")
            else:
                for line in records:
                    f.write(line)
        print(f"Report generated successfully in {REPORT_FILE}.")
    except Exception as e:
        print(f"Error writing report: {e}")

def print_flights(flights):
    print("\n--- Available Flights ---")
    print(f"{'FlightNo':<10} {'Origin':<15} {'Destination':<15} {'Seats':<5}")
    print("-" * 50)
    for f_no, data in flights.items():
        print(f"{f_no:<10} {data['Origin']:<15} {data['Destination']:<15} {data['Seats']:<5}")
    print("-" * 50)

def main_menu():
    """
    Main menu loop.
    """
    flights = load_flights()
    if not flights:
        print("No flight data loaded. Exiting.")
        return

    while True:
        print("\n=== Airline Reservation System ===")
        print("1. Book Ticket")
        print("2. Cancel Ticket")
        print("3. Search Flights")
        print("4. Generate Report")
        print("5. Exit")
        
        choice = input("Enter your choice: ").strip()
        
        if choice == '1':
            print_flights(flights)
            book_ticket(flights)
        elif choice == '2':
            cancel_ticket(flights)
        elif choice == '3':
            dest = input("Enter destination to search: ").strip()
            # Convert dictionary keys to list for indexing in recursion
            flight_keys = list(flights.keys())
            results = search_flights_recursive(dest, flight_keys, flights)
            if results:
                print(f"\nFound {len(results)} flights to {dest}:")
                for f_no, data in results:
                    print(f"- {f_no}: {data['Origin']} -> {data['Destination']} ({data['Seats']} seats)")
            else:
                print(f"No flights found to {dest}.")
        elif choice == '4':
            generate_report()
        elif choice == '5':
            print("Exiting system. Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main_menu()
