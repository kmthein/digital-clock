import React, { useEffect, useState } from "react";
import { ClockLoader } from "react-spinners";

const Main = () => {
  const [time, setTime] = useState("");

  const [today, setToday] = useState("");

  const [amPm, setAmPm] = useState("");

  const [loading, setLoading] = useState(true);

  const removeLoader = () => {
    setLoading(false);
  };

  const getCurrentTime = () => {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let ampm = hour >= 12 ? 'pm' : 'am';
    hour = hour % 12;
    hour = hour ? hour : 12;
    hour = hour.toString();
    min = min.toString();
    sec = sec.toString();
    let year = date.getFullYear();
    let month = date.toLocaleString("default", { month: "long" });
    let day = date.getDate();
    let dow = date.toLocaleString("default", { weekday: "long" });
    // console.log(`${hour} : ${min} : ${sec}`);
    const currentTime = `${hour.length == 1 ? "0" : ""}${hour}:${
      min.length == 1 ? "0" : ""
    }${min}:${sec.length == 1 ? "0" : ""}${sec}`;
    const currentDay = `${dow}, ${month} ${day}, ${year}`;
    setAmPm(ampm);
    setTime(currentTime);
    setToday(currentDay);
  };

  useEffect(() => {
    setTimeout(() => {
      removeLoader();
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      getCurrentTime();
    }, 1000);
  }, [time]);

  if (loading) {
    return (
      <>
        <div className=" bg-white">
          <div className=" flex justify-center items-center min-h-[100vh] flex-col text-white">
            <ClockLoader color="rgba(0, 0, 0, 1)" size={60} />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bg">
        <div className=" flex justify-center items-center min-h-[100vh] flex-col text-white">
          <div className="clock px-[25px] py-3 sm:py-5 sm:px-[40px] rounded-lg">
            <h2 className="text-[50px] sm:text-[90px]">
              {time}{" "}
              <span className="text-[20px] ml-[-10px] sm:ml-[-40px]">
                {amPm}
              </span>
            </h2>
          </div>
          <div className="clock mt-2 px-4 py-1 rounded-lg">
            <p className=" text-[20px]">{today}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
