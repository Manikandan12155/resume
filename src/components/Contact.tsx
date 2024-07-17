import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";

const PersonalDetails = () => {
  type Product = {
    Language: string;
    Read: string;
    Write: string;
    Speak: string;
  };
  const Middleware: Product[] = [
    {
      Language: "Tamil",
      Read: "Yes",
      Write: "Yes",
      Speak: "Yes",
    },
    {
      Language: "English",
      Read: "Yes",
      Write: "Yes",
      Speak: "Yes",
    },
  ];
  return (
    <>
      <div className="Projects ">
        <h3>Personal Details</h3>
        <br></br>

        <div className="formgrid grid">
          <div className="field col-12 md:col-6">
            <label>Gender</label>
            <InputText
              id="firstname4"
              type="text"
              className=" w-full"
              value="Male"
              readOnly
            />
          </div>
          <div className="field col-12 md:col-6">
            <label>Material status</label>
            <InputText
              id="firstname4"
              type="text"
              className=" w-full"
              value="single/unmarried"
              readOnly
            />
          </div>
          <div className="field col-12 md:col-6">
            <label>Date of birth</label>
            <InputText
              id="firstname4"
              type="text"
              className=" w-full"
              value="23/12/2000"
              readOnly
            />
          </div>
          <div className="field col-12 md:col-6">
            <label>Permanent Address</label>
            <InputText
              id="firstname4"
              type="text"
              className=" w-full"
              value="9/1118, Anna Nagar, Valparai."
              readOnly
            />
          </div>
          <div className="field col-12 md:col-6">
            <label>Hometown</label>
            <InputText
              id="firstname4"
              type="text"
              className=" w-full"
              value="Valparai"
              readOnly
            />
          </div>
          <div className="field col-12 md:col-6">
            <label>Pincode</label>
            <InputText
              id="firstname4"
              type="text"
              className=" w-full"
              value="642 127"
              readOnly
            />
          </div>
        </div>

        <hr />
        <h3>Languages</h3>
        <DataTable
          value={Middleware}
          tableStyle={{ minWidth: "auto" }}
          className="table"
          showGridlines
        >
          <Column field="Language" header="Language"></Column>
          <Column field="Read" header="Read"></Column>
          <Column field="Write" header="Write"></Column>
          <Column field="Speak" header="Speak"></Column>
        </DataTable>
      </div>
    </>
  );
};
export default PersonalDetails;
