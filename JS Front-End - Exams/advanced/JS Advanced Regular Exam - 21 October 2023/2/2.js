class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        const existingFlight = this.flights.find(flight => flight.flightNumber === flightNumber);

        if (existingFlight) {
            return `Flight ${flightNumber} to ${destination} is already available.`;
        }

        const newFlight = {
            flightNumber,
            destination,
            departureTime,
            price
        };

        this.flights.push(newFlight);
        return `Flight ${flightNumber} to ${destination} has been added to the system.`;
    }

    bookFlight(passengerName, flightNumber) {
        const flight = this.flights.find(flight => flight.flightNumber === flightNumber);

        if (!flight) {
            return `Flight ${flightNumber} is not available for booking.`;
        }

        this.bookings.push({ passengerName, flightNumber });
        this.bookingsCount++;
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
    }

    cancelBooking(passengerName, flightNumber) {
        const bookingIndex = this.bookings.findIndex(booking => booking.passengerName === passengerName && booking.flightNumber === flightNumber);

        if (bookingIndex === -1) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        }

        this.bookings.splice(bookingIndex, 1);
        this.bookingsCount--;
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
    }

    showBookings(criteria) {
        if (this.bookings.length === 0) {
            throw new Error('No bookings have been made yet.');
        }

        let filteredBookings;
        let output = '';

        if (criteria === "all") {
            output += `All bookings(${this.bookingsCount}):\n`;
            filteredBookings = this.bookings;
        } else if (criteria === "cheap") {
            filteredBookings = this.bookings.filter(booking => {
                const flight = this.flights.find(flight => flight.flightNumber === booking.flightNumber);
                return flight.price <= 100;
            });

            if (filteredBookings.length === 0) {
                return "No cheap bookings found.";
            }

            output += "Cheap bookings:\n";
        } else if (criteria === "expensive") {
            filteredBookings = this.bookings.filter(booking => {
                const flight = this.flights.find(flight => flight.flightNumber === booking.flightNumber);
                return flight.price > 100;
            });

            if (filteredBookings.length === 0) {
                return "No expensive bookings found.";
            }

            output += "Expensive bookings:\n";
        }

        filteredBookings.forEach(booking => {
            output += `${booking.passengerName} booked for flight ${booking.flightNumber}.\n`;
        });

        return output.trim();
    }
}

// Example 1
const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.addFlight("CC303", "Chicago", "11:45 AM", 120));
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// Output:
// Flight AA101 to Los Angeles has been added to the system.
// Flight BB202 to New York has been added to the system.
// Flight CC303 to Chicago has been added to the system.
// Flight AA101 to Los Angeles is already available.

// Example 2
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.bookFlight("Charlie", "CC303"));
// Output:
// Booking for passenger Alice on flight AA101 is confirmed.
// Booking for passenger Bob on flight BB202 is confirmed.
// Flight CC303 is not available for booking.

// Example 3
console.log(system.cancelBooking("Alice", "AA101"));
// Output:
// Booking for passenger Alice on flight AA101 is cancelled.

// Example 4
console.log(system.showBookings("all"));
// Output:
// All bookings(1):
// Bob booked for flight BB202.

// Example 5
console.log(system.showBookings("expensive"));
console.log(system.showBookings("cheap"));
// Output:
// Expensive bookings:
// Bob booked for flight BB202.
// No cheap bookings found.
