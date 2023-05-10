import React, { useState } from "react";
// const styles = {
//     position: 'absolute',
//     top: '50%',
//     left: '80%',
//     transform: 'translate(-50%, -50%)',
//     zIndex: '999'
//   };
const elementstyle = {
  backgroundColor: "#f0ebeb",
  color: "black",
  border: "1px solid #616161",
};

export const Predict = () => {
  // State variables for form fields
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [institutionType, setInstitutionType] = useState("");
  const [itStudent, setItStudent] = useState("");
  const [location, setLocation] = useState("");
  const [financialCondition, setFinancialCondition] = useState("");
  const [internetType, setInternetType] = useState("");
  const [networkType, setNetworkType] = useState("");
  const [classDuration, setClassDuration] = useState("");
  const [device, setDevice] = useState("");
  const [result, setResult] = useState("");

  // Function to handle form submission
  const handleReset = async (e) =>{

    e.preventDefault();
    setAge("");
    setGender("");
    setEducationLevel("");
    setInstitutionType("");
    setItStudent("");
    setLocation("");
    setFinancialCondition("");
    setInternetType("");
    setNetworkType("");
    setClassDuration("");
    setDevice("");
    setResult("");

  
  }


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Construct form data
    const formData = {
      gender,
      age,
      educationLevel,
      institutionType,
      itStudent,
      location,
      financialCondition,
      internetType,
      networkType,
      classDuration,
      device,
    };

    try {
      // Send POST request
      const response = await fetch("http://127.0.0.1:5000/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      var result = data.prediction;
      // Check response value and set result accordingly
      // eslint-disable-next-line

      setResult("Calculating..");

      

      if (result == 0.0) {
        setTimeout(function() {
          setResult(
            "The probablity of the student to adapt to online mode of education is: High"
          );
        }, 1000);
        // eslint-disable-next-line
      } else if (result == 1.0) {
        setTimeout(function() {
          setResult(
            "The probablity of the student to adapt to online mode of education is: Low"
          );
        }, 1000);
        // eslint-disable-next-line
      } else if (result == 2.0) {
        setTimeout(function() {
          setResult(
            "The probablity of the student to adapt to online mode of education is: Moderate"
          );
        }, 1000);
      } else {
        setResult("Unknown");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Error occurred");
    }
  };

  return (
    <div
      className="container-fluid px-5 py-3"
      style={{ backgroundColor: "#b6f0c2", height: "92vh" }}
    >
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-4">
            <div className="item">
              <label className="form-label">
                Gender:
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                  style={elementstyle}
                >
                  <option value="">-- Select Gender --</option>
                  <option value="Boy">Male</option>
                  <option value="Girl">Female</option>
                </select>
              </label>
            </div>
          </div>
          <div className="col-4">
            <div className="item">
              <label className="form-label">
                Education Level:
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  value={educationLevel}
                  required
                  style={elementstyle}
                  onChange={(e) => setEducationLevel(e.target.value)}
                >
                  <option value="">-- Select Education Level --</option>
                  <option value="College">College</option>
                  <option value="School">School</option>
                  <option value="University">University</option>
                </select>
              </label>
            </div>
          </div>
          <div className="col-4">
            <div className="item">
              <label className="form-label">
                Internet Type:
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  value={internetType}
                  required
                  style={elementstyle}
                  onChange={(e) => setInternetType(e.target.value)}
                >
                  <option value="">-- Select Internet Type --</option>
                  <option value="Mobile Data">Mobile Data</option>
                  <option value="Wifi">Wifi</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="item">
              <label className="form-label">
                Age:
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  value={age}
                  required
                  style={elementstyle}
                  onChange={(e) => setAge(e.target.value)}
                >
                  <option value="">-- Select Age --</option>
                  <option value="1-5">1-5</option>
                  <option value="6-10">6-10</option>
                  <option value="11-15">11-15</option>
                  <option value="16-20">16-20</option>
                  <option value="21-25">21-25</option>
                  <option value="26-30">26-30</option>
                </select>
              </label>
            </div>
          </div>
          <div className="col-4">
            <div className="item">
              <label className="form-label">
                Institution Type:
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  value={institutionType}
                  required
                  style={elementstyle}
                  onChange={(e) => setInstitutionType(e.target.value)}
                >
                  <option value="">-- Select Institution Type --</option>
                  <option value="Government">Government</option>
                  <option value="Non Government">Non Government</option>
                </select>
              </label>
            </div>
          </div>
          <div className="col-4">
            <div className="item">
              <label className="form-label">
                Network Type:
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  value={networkType}
                  required
                  style={elementstyle}
                  onChange={(e) => setNetworkType(e.target.value)}
                >
                  <option value="">-- Select Network Type --</option>
                  <option value="2G">2G</option>
                  <option value="3G">3G</option>
                  <option value="4G">4G</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="item">
              <label className="form-label">
                Financial Condition:
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  value={financialCondition}
                  required
                  style={elementstyle}
                  onChange={(e) => setFinancialCondition(e.target.value)}
                >
                  <option value="">-- Select Financial Condition --</option>
                  <option value="Poor">Poor</option>
                  <option value="Mid">Mid</option>
                  <option value="Rich">Rich</option>
                </select>
              </label>
            </div>
          </div>
          <div className="col-4">
            <div className="item">
              <label className="form-label">
                IT Student:
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  value={itStudent}
                  required
                  style={elementstyle}
                  onChange={(e) => setItStudent(e.target.value)}
                >
                  <option value="">-- IT Student --</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </label>
            </div>
          </div>
          <div className="col-4">
            <div className="item">
              <label className="form-label">
                Device:
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  value={device}
                  required
                  style={elementstyle}
                  onChange={(e) => setDevice(e.target.value)}
                >
                  <option value="">--Select Device --</option>
                  <option value="Computer">Computer</option>
                  <option value="Mobile">Mobile</option>
                  <option value="Tab">Tab</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="item">
              <label className="form-label">
                Location:
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  value={location}
                  required
                  style={elementstyle}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="">-- Location --</option>
                  <option value="Yes">Urban</option>
                  <option value="No">Rural</option>
                </select>
              </label>
            </div>
          </div>
          <div className="col-4">
            <div className="item">
              <label className="form-label">
                Class Duration:
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  value={classDuration}
                  required
                  style={elementstyle}
                  onChange={(e) => setClassDuration(e.target.value)}
                >
                  <option value="">-- Select Class Duration --</option>
                  <option value="0">0 hours</option>
                  <option value="1-3">1-3 hours</option>
                  <option value="3-6">3-6 hours</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <div>
          <button type="submit" className="btn btn-outline-primary my-3">
            Submit
          </button>
          <button onClick={handleReset} className="btn btn-outline-danger my-3 mx-3">
            Reset
          </button>
        </div>
        <div className="my-2">
          <h4>{result}</h4>
        </div>
      </form>
    </div>
  );
};
