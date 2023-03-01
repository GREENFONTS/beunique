import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
// import { useCountdown } from "../hooks/useCountdown";

const Countdown = ({ targetDate }) => {
  const router = useRouter();

  // const { setSalesTimerOn } = useAppContext();

  /////////
  // const [days, hours, minutes, seconds] = useCountdown(targetDate);

  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  const getReturnValues = (countDown) => {
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
  };
  /////////

  const [days, hours, minutes, seconds] = getReturnValues(countDown);

  const ExpiredNotice = () => {
    setSalesTimerOn(false);

    return (
      <section className="grid place-items-center">
        <h3 className="text-xl text-red-500 font-semibold mb-2">
          Expired!!!
        </h3>
        <p className="text-[14px]">
          Please select a future date and time.
        </p>
      </section>
    );
  };

  const DateTimeDisplay = ({ value, type, isDanger }) => {
    return (
      <section
        className={
          isDanger
            ? "flex flex-row items-end text-red-400"
            : "flex flex-row items-end"
        }
      >
        <h2 className="text-[30px] font-anybody">
          {value ? value : 0}
        </h2>
        <p className="text-[14px] mb-[6px]">{type ? type : ""}</p>
      </section>
    );
  };

  const ShowCounter = ({ days, hours, minutes, seconds }) => {
    if (
      typeof days === "number" &&
      typeof hours === "number" &&
      typeof minutes === "number" &&
      typeof seconds === "number"
    ) {
      return (
        <section className="flex flex-row items-end justify-center space-x-3 w-full">
          {days > 0 && (
            <section className="w-fit flex items-end">
              <DateTimeDisplay
                value={days ? days : 0}
                type={"Days"}
                isDanger={days <= 3}
              />
              <span className="ml-2">:</span>
            </section>
          )}

          {hours > 1 ? (
            <section className="w-fit flex items-end">
              <DateTimeDisplay
                value={hours ? hours : 0}
                type={"hrs"}
                isDanger={hours <= 3}
              />
              <span className="ml-2">:</span>
            </section>
          ) : (
            <section className="w-fit flex items-end">
              <DateTimeDisplay
                value={hours ? hours : 0}
                type={"hr"}
                isDanger={hours <= 3}
              />
              <span className="ml-2">:</span>
            </section>
          )}

          {minutes > 1 ? (
            <section className="w-fit flex items-end">
              <DateTimeDisplay
                value={minutes ? minutes : 0}
                type={"mins"}
                isDanger={hours <= 3}
              />
              <span className="ml-2">:</span>
            </section>
          ) : (
            <section>
              <DateTimeDisplay
                value={minutes ? minutes : 0}
                type={"min"}
                isDanger={hours <= 3}
              />
              <section className="ml-2">:</section>
            </section>
          )}

          <section>
            <DateTimeDisplay
              value={seconds ? seconds : 0}
              type={"s"}
              isDanger={hours <= 3}
            />
          </section>
        </section>
      );
    }
  };

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        className=""
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default Countdown;
