import React, { useEffect, useState } from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import scaner from '../assets/scaner.png'


function Footer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://trello.vimlc.uz/competence")
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  function asdfasd(e) {
    e.preventDefault()
    console.log(data);
  }
  return (
    <div className="max-w-[1440px]  ">
      <div>
        <div className="flex items-center mb-8 gap-[10px]">
          <div className="w-[13px] h-[43px] bg-[#0956AF] "></div>
          <h1 className="text-4xl font-semibold ">
            Компетенцияларнинг намоён булиши
          </h1>
          <div className="w-[593px] h-[4px] bg-[#DEE2E6]"></div>
        </div>

        <div className="flex justify-between">
          <div className="flex max-w-[978px] flex-wrap flex-row gap-6 justify-between">
            {data.length > 0 &&
              data.map(function (value, index) {
                return (<div className="flex flex-row gap-4 max-w-[310px] items-center" key={index}>
                    <Gauge
                    value={value.percentage}
                    startAngle={0}
                    endAngle={360}
                    height={100}
                    width={100}
                    sx={{
                      [`& .${gaugeClasses.valueText}`]: {
                        fontSize: 24,
                        fontWeight: 600,
                        transform: "translate(0px, 0px)",
                      },
                      [`& .${gaugeClasses.valueArc}`]: {
                        fill: value.color,
                      },
                    }}
                    text={({ value }) => `${value}%`}
                  />

                  <h1 className="text-2xl font-semibold">{value.label}</h1>
                  </div>
                );
              })}
          </div>

          <img src={scaner} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
