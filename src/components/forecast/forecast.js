import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import './forecast.css';

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <label className="title">Weekly Forecast</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {"Max "}{Math.round(item.main.temp_max)}°C /{" Feels like "}
                    {Math.round(item.main.feels_like)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <div className="daily-details-grid">
                    <div className="daily-details-grid-item">
                        <label className="">Pressure</label>
                        <label className="">{item.main.pressure}</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label className="">Humidity</label>
                        <label className="">{item.main.humidity}</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label className="">Clouds</label>
                        <label className="">{item.clouds.all}</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label className="">Wind</label>
                        <label className="">{item.wind.speed} m/s</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label className="">Sea Level</label>
                        <label className="">{item.main.sea_level}m</label>
                    </div>
                </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
