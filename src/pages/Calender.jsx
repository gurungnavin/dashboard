import React from "react";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";

import { scheduleData } from "../data/dummy";

import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { Header } from "../components";

const Calender = () => {
  return (
  /* Main div for calender */
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="アプリ" title ="カレンダー"/>
      <ScheduleComponent
        height='650px'
        eventSettings={{dataSource: scheduleData}}
        selectedDate={new Date(2024, 8, 5)}

      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]} />
      </ScheduleComponent>
    </div>
  )
};

export default Calender;
