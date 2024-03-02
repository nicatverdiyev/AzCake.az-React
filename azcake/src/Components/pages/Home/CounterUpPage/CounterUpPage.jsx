import React from "react";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "../CounterUpPage/counter.css";
// import Scrolltrigger from "react-scroll-trigger";
function CounterUpPage() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <section className="funfacts">
        <div className="counterup-head">
          <h2>Fun Facts</h2>
        </div>
        <div className="counterup-main">
          <div className="countup-box">
            <div className="countup-num">
              <h2>
                {counterOn && (
                  <CountUp start={0} end={1600} duraction={2} delay={0} />
                )}
              </h2>
            </div>
            <p>CUPS OF COFFEE</p>
          </div>

          <div className="countup-box">
            <div className="countup-num">
              <h2>
                {counterOn && (
                  <CountUp start={0} end={2000} duraction={2} delay={0} />
                )}
              </h2>
            </div>
            <p>CAKES SERVED</p>
          </div>

          <div className="countup-box">
            <div className="countup-num">
              <h2>
                {counterOn && (
                  <CountUp start={0} end={100} duraction={2} delay={0} />
                )}
              </h2>
            </div>
            <p>TYPES OF CAKE</p>
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
}

export default CounterUpPage;
