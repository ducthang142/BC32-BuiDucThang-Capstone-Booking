import { useState } from "react";
import { useParams } from "react-router-dom";
import Bill from "../Booking/Bill";
import Seat from "../Booking/Seat";
import styles from "./Booking.module.css";

const Booking = () => {
  const { maLichChieu } = useParams();
  const [userName1, setUserName] = useState({ userName: "123" });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setUserName({ ...userName1, [name]: value });
  };

  return (
    <div className={styles.booking}>
      <br />
      <br />
      <br />
      <br />

      <div className={styles.booking__container}>
        <div>
          <div className={styles.screen}>Màn Hình</div>
          <Seat maLichChieu={maLichChieu} />
        </div>

        <div>
          <button className="gheDuocChon my-2"></button>
          <span className="text-white mx-2">Ghế đã đặt</span>

          <button className="gheDangChon my-2"></button>
          <span className="text-white mx-2">Ghế đang đặt</span>

          <button className="ghe my-2"></button>
          <span className="text-white mx-2">Ghế chưa đặt</span>

          <button className="gheVip my-2"></button>
          <span className="text-white mx-2">Ghế Vip</span>
        </div>

        <div className={`d-flex justify-content-between py-4 ${styles.bill}`}>
          <Bill maLichChieu={maLichChieu} />
        </div>

        <input type="text" name="userName" value={userName1.userName} onChange={handleChange}/>
      </div>
    </div>
  );
};

export default Booking;
