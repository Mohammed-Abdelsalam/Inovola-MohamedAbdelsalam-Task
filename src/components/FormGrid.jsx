import React, { useEffect, useState } from "react";

// Redux
import { AddProject, UpdateProject } from "../redux/ProjectReducer";
import { useDispatch, useSelector } from "react-redux";

const FormGrid = ({ onClose, onSave, initialData = {}, dataEdit }) => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.Projects);

  const [formData, setFormData] = useState({
    projectName: "",
    projectStatus: "In Progress",
    brand: "Sony",
    contributors: "John Doe",
    projectType: "New Build",
    dueDate: "",
    ...initialData,
  });

  // For Render Edit Data in State
  useEffect(() => {
    if (dataEdit !== undefined) {
      setFormData(dataEdit);
    }
  }, [dataEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    if (dataEdit !== undefined) {
      dispatch(UpdateProject(formData));
    } else {
      dispatch(
        AddProject({
          id: projects.length > 0 ? projects[projects.length - 1].id + 1 : 1,
          ...formData,
        })
      );
    }
    onClose();
  };

  return (
    <form
      className="bg-white rounded-lg shadow-md p-5 m-5 w-[450px] md:w-[675px]"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-4">Project Form</h2>
      <div className="mb-4">
        <label
          htmlFor="projectName"
          className="block text-sm font-medium text-gray-600"
        >
          Project Name
        </label>
        <input
          type="text"
          id="projectName"
          name="projectName"
          placeholder="Project Name"
          value={formData.projectName}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="projectStatus"
          className="block text-sm font-medium text-gray-600"
        >
          Project Status
        </label>
        <select
          id="projectStatus"
          name="projectStatus"
          value={formData.projectStatus}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md w-full"
          required
        >
          <option value="In Progress">In Progress</option>
          <option value="In Review">In Review</option>
          <option value="Cancelled">Cancelled</option>
          <option value="Approved">Approved</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="brand"
          className="block text-sm font-medium text-gray-600"
        >
          Brand
        </label>
        <select
          id="brand"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md w-full"
          required
        >
          <option value="Sony">Sony</option>
          <option value="Reebok">Reebok</option>
          <option value="Tesla">Tesla</option>
          <option value="Apple">Apple</option>
          <option value="Nike">Nike</option>
          <option value="Athletic">Athletic</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="contributors"
          className="block text-sm font-medium text-gray-600"
        >
          Contributors
        </label>
        <select
          id="contributors"
          name="contributors"
          value={formData.contributors}
          onChange={handleChange}
          multiple={false}
          className="mt-1 p-2 border rounded-md w-full"
          required
        >
          <option value="John Doe">John Doe</option>
          <option value="Jane Smith">Jane Smith</option>
          <option value="Bob Johnson">Bob Johnson</option>
          <option value="Alice Brown">Alice Brown</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="projectType"
          className="block text-sm font-medium text-gray-600"
        >
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md w-full"
          required
        >
          <option value="New Build">New Build</option>
          <option value="Reconstruction">Reconstruction</option>
          <option value="Commercial">Commercial</option>
          <option value="Residential">Residential</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="dueDate"
          className="block text-sm font-medium text-gray-600"
        >
          Due Date
        </label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md w-full"
          required
        />
      </div>
      <div className="flex justify-end gap-5">
        <button
          type="submit"
          className="bg-blue-500 text-white px-12 py-3 rounded-lg transition-all duration-500 hover:bg-blue-400"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onClose}
          className="bg-red-500 text-white px-10 py-2 rounded-lg transition-all duration-500 hover:bg-red-400"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default FormGrid;
