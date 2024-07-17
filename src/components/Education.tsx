import { InputText } from "primereact/inputtext";
import { TabView, TabPanel } from "primereact/tabview";
import College_logo from "../assets/images/College-Logo.png";
import SchoolCollege from "../assets/images/Govt.png";
const Education = () => {

  const value = {
    University:
      "Bharathiar University Arts And Science College, Valparai, Coimbatore",
    Course: "B.Sc",
    Specialization: "Information Technology",
    Course_type: "Full Time",
    Course_duration: "2018 - 2021",
    Grading_system: "% Marks of 100 Maximum",
    Marks: "83 %",
  };
  const schoolhsc = {
    Board: "State - Tamil Nadu",
    Passing_out_year: "2018",
    School_Medium: "Tamil",
    Marks: "70 %",
  };
  const schoolsslc = {
    Board: "State - Tamil Nadu",
    Passing_out_year: "2016",
    School_Medium: "Tamil",
    Marks: "84 %",
  };
  return (
    <>
      <div className="Projects ">
        <h3>Education</h3>
        <TabView>
          <TabPanel header="UG">
            <p className="m-0">
              <div className="edu_college">
                <img src={College_logo} alt="College Logo" />
              </div>
              <div className="field grid">
                <label className="col-12 mb-2 md:col-2 md:mb-0">
                  University
                </label>
                <div className="col-12 md:col-10">
                  <InputText
                    id="firstname4"
                    type="text"
                    className=" w-full"
                    readOnly
                    value={value.University}
                  />
                </div>
              </div>
              <div className="field grid">
                <label className="col-12 mb-2 md:col-2 md:mb-0">Course</label>
                <div className="col-12 md:col-10">
                  <InputText
                    id="lastname4"
                    type="text"
                    className=" w-full"
                    readOnly
                    value={value.Course}
                  />
                </div>
              </div>
              <div className="field grid">
                <label className="col-12 mb-2 md:col-2 md:mb-0">
                  Specialization
                </label>
                <div className="col-12 md:col-10">
                  <InputText
                    id="lastname4"
                    type="text"
                    className=" w-full"
                    readOnly
                    value={value.Specialization}
                  />
                </div>
              </div>
              <div className="field grid">
                <label className="col-12 mb-2 md:col-2 md:mb-0">
                  Course type
                </label>
                <div className="col-12 md:col-10">
                  <InputText
                    id="lastname4"
                    type="text"
                    className=" w-full"
                    readOnly
                    value={value.Course_type}
                  />
                </div>
              </div>
              <div className="field grid">
                <label className="col-12 mb-2 md:col-2 md:mb-0">
                  Course duration
                </label>
                <div className="col-12 md:col-10">
                  <InputText
                    id="lastname4"
                    type="text"
                    className=" w-full"
                    readOnly
                    value={value.Course_duration}
                  />
                </div>
              </div>
              <div className="field grid">
                <label className="col-12 mb-2 md:col-2 md:mb-0">
                  Grading system
                </label>
                <div className="col-12 md:col-10">
                  <InputText
                    id="lastname4"
                    type="text"
                    className=" w-full"
                    readOnly
                    value={value.Grading_system}
                  />
                </div>
              </div>
              <div className="field grid">
                <label className="col-12 mb-2 md:col-2 md:mb-0">Marks</label>
                <div className="col-12 md:col-10">
                  <InputText
                    id="lastname4"
                    type="text"
                    className=" w-full"
                    readOnly
                    value={value.Marks}
                  />
                </div>
              </div>
            </p>
          </TabPanel>
          <TabPanel header="HSC">
            <p className="m-0">
              <div className="edu_college">
                <img src={SchoolCollege} alt="College Logo" />
              </div>
              <div className="field grid">
                <label className="col-12 mb-2 md:col-2 md:mb-0">Board</label>
                <div className="col-12 md:col-10">
                  <InputText
                    id="firstname4"
                    type="text"
                    className=" w-full"
                    readOnly
                    value={schoolhsc.Board}
                  />
                </div>
              </div>
              <div className="field grid">
                <label className="col-12 mb-2 md:col-2 md:mb-0">
                  Passing Out year
                </label>
                <div className="col-12 md:col-10">
                  <InputText
                    id="lastname4"
                    type="text"
                    className=" w-full"
                    readOnly
                    value={schoolhsc.Passing_out_year}
                  />
                </div>
              </div>
              <div className="field grid">
                <label className="col-12 mb-2 md:col-2 md:mb-0">
                  School Medium
                </label>
                <div className="col-12 md:col-10">
                  <InputText
                    id="lastname4"
                    type="text"
                    className=" w-full"
                    readOnly
                    value={schoolhsc.School_Medium}
                  />
                </div>
              </div>
              <div className="field grid">
                <label className="col-12 mb-2 md:col-2 md:mb-0">Marks</label>
                <div className="col-12 md:col-10">
                  <InputText
                    id="lastname4"
                    type="text"
                    className=" w-full"
                    readOnly
                    value={schoolhsc.Marks}
                  />
                </div>
              </div>
            </p>
          </TabPanel>
          <TabPanel header="SSLC">
            <p className="m-0">
              <div className="edu_college">
                <img src={SchoolCollege} alt="College Logo" />
              </div>
              <div className="field grid">
                <label className="col-12 mb-2 md:col-2 md:mb-0">Board</label>
                <div className="col-12 md:col-10">
                  <InputText
                    id="firstname4"
                    type="text"
                    className=" w-full"
                    readOnly
                    value={schoolsslc.Board}
                  />
                </div>
              </div>
              <div className="field grid">
                <label className="col-12 mb-2 md:col-2 md:mb-0">
                  Passing Out year
                </label>
                <div className="col-12 md:col-10">
                  <InputText
                    id="lastname4"
                    type="text"
                    className=" w-full"
                    readOnly
                    value={schoolsslc.Passing_out_year}
                  />
                </div>
              </div>
              <div className="field grid">
                <label className="col-12 mb-2 md:col-2 md:mb-0">
                  School Medium
                </label>
                <div className="col-12 md:col-10">
                  <InputText
                    id="lastname4"
                    type="text"
                    className=" w-full"
                    readOnly
                    value={schoolsslc.School_Medium}
                  />
                </div>
              </div>
              <div className="field grid">
                <label className="col-12 mb-2 md:col-2 md:mb-0">Marks</label>
                <div className="col-12 md:col-10">
                  <InputText
                    id="lastname4"
                    type="text"
                    className=" w-full"
                    readOnly
                    value={schoolsslc.Marks}
                  />
                </div>
              </div>
            </p>
          </TabPanel>
        </TabView>
      
      </div>
    </>
  );
};
export default Education;
