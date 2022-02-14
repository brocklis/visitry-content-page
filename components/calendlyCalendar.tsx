import { InlineWidget } from "react-calendly";

const CalendlyCalendar = () => {
  return (
    <div className="App">
      <InlineWidget 
      url="https://calendly.com/visitry/15min" 
      styles={{height: '800px'}}
      utm={{
        utmCampaign: 'iframe',
        utmContent: '45min',
        utmMedium: 'Demo',
        utmSource: 'Calendly'
      }}
      />
    </div>
  );
};

export default CalendlyCalendar;