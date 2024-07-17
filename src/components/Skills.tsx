import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

type Product = {
  Skill: string;
  Version: string;
  LastUsed: string;
  Experience: string;
};
type ClassNames = {
  frontEnd: string;
  middleware: string;
  database: string;
  };
const Skills: React.FC = () => {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const isMobileDevice = /Mobi/i.test(navigator.userAgent);
  //   setIsMobile(isMobileDevice);
  // }, []);
  const [classNames, setClassNames] = useState<ClassNames>({
    frontEnd: "box front-end",
    middleware: "box middleware",
    database: "box database",
  });

  const handleClick = (box: keyof ClassNames) => {
    setClassNames((prev) => {
      const newClassNames: ClassNames = {
        frontEnd: "",
        middleware: "",
        database: "",
      };
      newClassNames[box] =
        prev[box] === "box-depth" ? `box ${box}` : "box-depth";
      if (newClassNames[box] !== "box-depth") {
        newClassNames.frontEnd = "box front-end";
        newClassNames.middleware = "box middleware";
        newClassNames.database = "box database";
      }
      return newClassNames;
    });
  };


  const FrontEnd: Product[] = [
    { Skill: "React", Version: "v18.3.1", LastUsed: "Currently", Experience: "1 year" },
    { Skill: "Angular", Version: "8.0.3", LastUsed: "Currently", Experience: "10 months" },
    { Skill: "MAUI", Version: "8.0.3", LastUsed: "Oct 2023", Experience: "3 months" },
    { Skill: "ASP.Net Ajax", Version: "4.5", LastUsed: "Currently", Experience: "1.5 years" },
    { Skill: "Windows", Version: "4.5", LastUsed: "Currently", Experience: "1.5 years" },
  ];
  const Middleware: Product[] = [
    { Skill: "ASP.Net Core", Version: "v18.3.1", LastUsed: "Currently", Experience: "1 year" },
    { Skill: "ADO .Net", Version: "8.0.3", LastUsed: "Currently", Experience: "10 months" },
    { Skill: "Web Service", Version: "8.0.3", LastUsed: "Oct 2023", Experience: "3 months" },
    { Skill: "SpringBoot", Version: "4.5", LastUsed: "Currently", Experience: "1.5 years" },
    { Skill: "Axios", Version: "4.5", LastUsed: "Currently", Experience: "1.5 years" },
    { Skill: "Python", Version: "4.5", LastUsed: "Currently", Experience: "1.5 years" },
  ];
  const DataBase: Product[] = [
    { Skill: "MS SQL", Version: "v18.3.1", LastUsed: "Currently", Experience: "1 year" },
    { Skill: "Oracle", Version: "8.0.3", LastUsed: "Currently", Experience: "10 months" },
    { Skill: "My Sql", Version: "8.0.3", LastUsed: "Oct 2023", Experience: "3 months" },
    { Skill: "Mongo DB", Version: "4.5", LastUsed: "Currently", Experience: "1.5 years" },
  ];
  return (
    <div className="Skills">
      <h3>Skills</h3>
      <div className="boxcontainer box-layout">
        <div
          className={classNames.frontEnd}
          onClick={() => handleClick("frontEnd")}
        >
          {classNames.frontEnd === "box-depth" && (
            <>
              <div className="datatable-responsive-demo">
                <DataTable value={FrontEnd} tableStyle={{ minWidth: "auto" }} className="table"showGridlines>
                  <Column field="Skill" header="Skill"></Column>
                  <Column field="Version" header="Version"></Column>
                  <Column field="LastUsed" header="Category"></Column>
                  <Column field="Experience" header="Experience"></Column>
                </DataTable>
              </div>
            </>
          )}
        </div>
        <div
          className={classNames.middleware}
          onClick={() => handleClick("middleware")}
        >
          {classNames.middleware === "box-depth" && ( <>
              <div className="datatable-responsive-demo">
                <DataTable value={Middleware} tableStyle={{ minWidth: "auto" }} className="table" >
                  <Column field="Skill" header="Skill"></Column>
                  <Column field="Version" header="Version"></Column>
                  <Column field="LastUsed" header="Category"></Column>
                  <Column field="Experience" header="Experience"></Column>
                </DataTable>
              </div>
            </>)}
        </div>
        <div
          className={classNames.database}
          onClick={() => handleClick("database")}
        >
          {classNames.database === "box-depth" && ( <>
              <div className="datatable-responsive-demo">
                <DataTable value={DataBase} tableStyle={{ minWidth: "auto" }} className="table" >
                  <Column field="Skill" header="Skill"></Column>
                  <Column field="Version" header="Version"></Column>
                  <Column field="LastUsed" header="Category"></Column>
                  <Column field="Experience" header="Experience"></Column>
                </DataTable>
              </div>
            </>)}
        </div>
      </div>
    </div>
  );
};

export default Skills;
