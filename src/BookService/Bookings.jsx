import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providerssss/AuthProvider";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <div>
      <h2>Bookings</h2>
    </div>
  );
};

export default Bookings;
