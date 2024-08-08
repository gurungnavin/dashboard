import React from "react";
import {
  GridComponent,
  Inject,
  ColumnDirective,
  Search,
  Page,
  Toolbar,
  Edit,
} from "@syncfusion/ej2-react-grids";

import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";
import { ColumnsDirective } from "@syncfusion/ej2-react-charts";
const Employees = () => {
  const editing = {
    allowDeleting: true,
    allowEditing: true,
    allowAdding: true,
  };
  const toolbarOptions = [
    "Search",
    "Print",
    "Edit",
    "Delete",
    "Update",
    "Cancel",
  ];
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="事業者" />
      <GridComponent
        dataSource={employeesData}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Search, Page, Toolbar, Edit]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
