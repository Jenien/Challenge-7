import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const CarAdd = () => {
  const [id, setId] = useState(uuidv4());
  const [plate, setPlate] = useState("");
  const [manufacture, setManufacture] = useState("");
  const [model, setModel] = useState("");
  const [rentPerDay, setRentPerDay] = useState("");
  const [capacity, setCapacity] = useState("");
  const [availableAt, setAvailableAt] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [transmission, setTransmission] = useState("automatic");
  const [available, setAvailable] = useState(true);
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [options, setOptions] = useState([null]);
  const [specs, setSpecs] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const addCar = () => {
    const newCar = {
      id,
      plate,
      manufacture,
      model,
      rentPerDay: parseInt(rentPerDay, 10),
      capacity: parseInt(capacity, 10),
      availableAt,
      image,
      description,
      transmission,
      available,
      type,
      year: parseInt(year, 10),
      options,
      specs,
    };

    fetch("http://localhost:3001/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCar),
    }).then(() => {
      setId(uuidv4());
      setPlate("");
      setManufacture("");
      setModel("");
      setRentPerDay("");
      setCapacity("");
      setAvailableAt("");
      setImage("");
      setDescription("");
      setTransmission("automatic");
      setAvailable(true);
      setType("");
      setYear("");
      setOptions([null]);
      setSpecs([]);
      setSuccessMessage("Car successfully added!");

      // Redirect to dashboard after 3 seconds
      setTimeout(() => {
        navigate("/admin");
      }, 3000);
    }).catch(error => {
      console.error("Error adding car:", error);
      setSuccessMessage("Failed to add car.");
    });
  };

  return (
      <div className="car-add">
      <h3>Add New Car</h3>
      {successMessage && (
        <div className="success-message" style={{ color: successMessage.includes("Failed") ? "red" : "green" }}>
          {successMessage}
        </div>
      )}
      <input  type="text" id="Plate" placeholder="Plate" value={plate} onChange={(e) => setPlate(e.target.value)}
      />
      <input type="text"   placeholder="Manufacture" value={manufacture} onChange={(e) => setManufacture(e.target.value)}
      />
      <input type="text"   placeholder="Model"  value={model} onChange={(e) => setModel(e.target.value)}
      />
      <input type="number"   placeholder="Rent Per Day" value={rentPerDay} onChange={(e) => setRentPerDay(e.target.value)}
      />
      <input type="number"  placeholder="Capacity"value={capacity} onChange={(e) => setCapacity(e.target.value)}
      />
      <input type="date"   placeholder="Available At" value={availableAt} onChange={(e) => setAvailableAt(e.target.value)}
      />
      <input type="text"   placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)}
      />
      <input type="text"  placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}
      />
      <select className="selek" value={transmission} onChange={(e) => setTransmission(e.target.value)}
      >
        <option value="automatic">Automatic</option>
        <option value="manual">Manual</option>
      </select>
      <input type="text" placeholder="Type" value={type} onChange={(e) => setType(e.target.value)}
      />
      <input type="number" placeholder="Year" value={year}  onChange={(e) => setYear(e.target.value)}
      />
      <input type="text"  placeholder="Specs" value={specs} onChange={(e) => setSpecs(e.target.value.split(','))}
      />
      <button className="add-button" onClick={addCar}>
        Add
      </button>
    </div>
  );
};

export default CarAdd;
