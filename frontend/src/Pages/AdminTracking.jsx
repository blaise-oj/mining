import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const generateTrackingNumber = () => {
  const random = Math.floor(100000000000 + Math.random() * 900000000000);
  return `MOM${random}-CARGO`;
};

const emptyForm = () => ({
  trackingNumber: generateTrackingNumber(),
  status: "ON HOLD",
  shipper: { name: "", phone: "", address: "", email: "" },
  receiver: { name: "", phone: "", address: "", email: "" },
  shipment: {
    typeOfShipment: "",
    courier: "",
    mode: "",
    paymentMode: "",
    totalFreight: "",
    carrier: "",
    carrierReferenceNo: "",
    departureTime: "",
    origin: "",
    destination: "",
    pickupDate: "",
    pickupTime: "",
    expectedDeliveryDate: "",
    comments: "",
  },
  packages: [{ qty: "", pieceType: "", description: "", length: "", width: "", height: "", weight: "" }],
  history: [{ date: "", time: "", location: "", status: "", updatedBy: "", remarks: "" }],
  totals: { volumetricWeight: "", volume: "", actualWeight: "" },
});

const AdminTracking = () => {
  const [mode, setMode] = useState("list");
  const [editingId, setEditingId] = useState(null);
  const [trackings, setTrackings] = useState([]);
  const [formData, setFormData] = useState(emptyForm());
  const [loading, setLoading] = useState(false);

  const inputClass = "border border-gray-300 p-3 w-full outline-none";

  if (localStorage.getItem("adminLoggedIn") !== "true") {
    return <Navigate to="/admin-login" />;
  }

  const fetchTrackings = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/tracking`);
    const data = await res.json();
    setTrackings(data);
  };

  useEffect(() => {
    fetchTrackings();
  }, []);

  const startCreate = () => {
    setEditingId(null);
    setFormData(emptyForm());
    setMode("create");
  };

  const startEdit = (record) => {
    setEditingId(record._id);
    setFormData({
      trackingNumber: record.trackingNumber || "",
      status: record.status || "ON HOLD",
      shipper: record.shipper || emptyForm().shipper,
      receiver: record.receiver || emptyForm().receiver,
      shipment: record.shipment || emptyForm().shipment,
      packages: record.packages?.length ? record.packages : emptyForm().packages,
      history: record.history?.length ? record.history : emptyForm().history,
      totals: record.totals || emptyForm().totals,
    });
    setMode("edit");
  };

  const handleChange = (e, section = null) => {
    const { name, value } = e.target;

    if (section) {
      setFormData((prev) => ({
        ...prev,
        [section]: { ...prev[section], [name]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleArrayChange = (e, section, index) => {
    const { name, value } = e.target;
    const updated = [...formData[section]];
    updated[index][name] = value;

    setFormData((prev) => ({
      ...prev,
      [section]: updated,
    }));
  };

  const addPackage = () => {
    setFormData((prev) => ({
      ...prev,
      packages: [
        ...prev.packages,
        { qty: "", pieceType: "", description: "", length: "", width: "", height: "", weight: "" },
      ],
    }));
  };

  const addHistory = () => {
    setFormData((prev) => ({
      ...prev,
      history: [
        ...prev.history,
        { date: "", time: "", location: "", status: "", updatedBy: "", remarks: "" },
      ],
    }));
  };

  const removePackage = (index) => {
    setFormData((prev) => ({
      ...prev,
      packages: prev.packages.filter((_, i) => i !== index),
    }));
  };

  const removeHistory = (index) => {
    setFormData((prev) => ({
      ...prev,
      history: prev.history.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...formData,
      trackingNumber: formData.trackingNumber.trim().toUpperCase(),
      shipment: {
        ...formData.shipment,
        carrierReferenceNo:
          formData.shipment.carrierReferenceNo || formData.trackingNumber.trim().toUpperCase(),
      },
    };

    const url = editingId
      ? `${import.meta.env.VITE_API_URL}/tracking/${editingId}`
      : `${import.meta.env.VITE_API_URL}/tracking`;

    const method = editingId ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || data.message || "Failed to save tracking");
        return;
      }

      alert(editingId ? "Tracking updated successfully" : "Tracking created successfully");

      await fetchTrackings();
      setMode("list");
      setEditingId(null);
      setFormData(emptyForm());
    } catch (error) {
      alert("Server error");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this tracking record?")) return;

    const res = await fetch(`${import.meta.env.VITE_API_URL}/tracking/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Failed to delete");
      return;
    }

    alert("Tracking deleted successfully");
    fetchTrackings();
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#08345c]">Tracking Admin</h1>

          <div className="flex gap-3">
            {mode === "list" ? (
              <button
                onClick={startCreate}
                className="bg-[#d4ad00] text-white px-5 py-2 rounded font-bold"
              >
                Create New Tracking
              </button>
            ) : (
              <button
                onClick={() => setMode("list")}
                className="bg-gray-700 text-white px-5 py-2 rounded font-bold"
              >
                Back to List
              </button>
            )}

            <button
              onClick={() => {
                localStorage.removeItem("adminLoggedIn");
                window.location.href = "/admin-login";
              }}
              className="bg-red-600 text-white px-5 py-2 rounded"
            >
              Logout
            </button>
          </div>
        </div>

        {mode === "list" && (
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold text-[#08345c] mb-5">
              All Tracking Numbers
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border text-sm">
                <thead>
                  <tr className="bg-gray-200 text-left">
                    <th className="border p-3">Tracking No.</th>
                    <th className="border p-3">Status</th>
                    <th className="border p-3">Shipper</th>
                    <th className="border p-3">Receiver</th>
                    <th className="border p-3">Destination</th>
                    <th className="border p-3">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {trackings.map((record) => (
                    <tr key={record._id}>
                      <td className="border p-3 font-bold text-[#08345c]">
                        {record.trackingNumber}
                      </td>
                      <td className="border p-3">{record.status}</td>
                      <td className="border p-3">{record.shipper?.name || "-"}</td>
                      <td className="border p-3">{record.receiver?.name || "-"}</td>
                      <td className="border p-3">{record.shipment?.destination || "-"}</td>
                      <td className="border p-3">
                        <div className="flex gap-2">
                          <button
                            onClick={() => startEdit(record)}
                            className="bg-blue-600 text-white px-3 py-1 rounded"
                          >
                            Edit
                          </button>

                          <button
                            onClick={() => handleDelete(record._id)}
                            className="bg-red-600 text-white px-3 py-1 rounded"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {trackings.length === 0 && (
                    <tr>
                      <td colSpan="6" className="border p-5 text-center">
                        No tracking records found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {(mode === "create" || mode === "edit") && (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-xl font-bold mb-4">
                {mode === "edit" ? "Edit Tracking Record" : "Create Tracking Record"}
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-sm">Tracking Number</label>
                  <input
                    name="trackingNumber"
                    value={formData.trackingNumber}
                    readOnly
                    className={`${inputClass} bg-gray-100 font-bold text-[#08345c]`}
                  />
                </div>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option>ON HOLD</option>
                  <option>PENDING</option>
                  <option>IN TRANSIT</option>
                  <option>DELIVERED</option>
                  <option>CANCELLED</option>
                </select>
              </div>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-xl font-bold mb-4">Shipper Address</h2>

              <div className="grid md:grid-cols-2 gap-4">
                {["name", "phone", "address", "email"].map((field) => (
                  <input
                    key={field}
                    name={field}
                    placeholder={`Shipper ${field}`}
                    value={formData.shipper[field]}
                    className={inputClass}
                    onChange={(e) => handleChange(e, "shipper")}
                  />
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-xl font-bold mb-4">Receiver Address</h2>

              <div className="grid md:grid-cols-2 gap-4">
                {["name", "phone", "address", "email"].map((field) => (
                  <input
                    key={field}
                    name={field}
                    placeholder={`Receiver ${field}`}
                    value={formData.receiver[field]}
                    className={inputClass}
                    onChange={(e) => handleChange(e, "receiver")}
                  />
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-xl font-bold mb-4">Shipment Information</h2>

              <div className="grid md:grid-cols-2 gap-4">
                {Object.keys(formData.shipment)
                  .filter((key) => key !== "_id")
                  .map((key) => (
                    <input
                      key={key}
                      name={key}
                      placeholder={key}
                      value={formData.shipment[key] || ""}
                      onChange={(e) => handleChange(e, "shipment")}
                      className={inputClass}
                    />
                  ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Packages</h2>
                <button
                  type="button"
                  onClick={addPackage}
                  className="bg-[#08345c] text-white px-4 py-2 rounded"
                >
                  Add Package
                </button>
              </div>

              {formData.packages.map((pkg, index) => (
                <div key={index} className="border p-4 mb-4">
                  <div className="grid md:grid-cols-4 gap-4">
                    {Object.keys(pkg)
                      .filter((key) => key !== "_id")
                      .map((key) => (
                        <input
                          key={key}
                          name={key}
                          placeholder={key}
                          value={pkg[key] || ""}
                          onChange={(e) => handleArrayChange(e, "packages", index)}
                          className={inputClass}
                        />
                      ))}
                  </div>

                  {formData.packages.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removePackage(index)}
                      className="bg-red-600 text-white px-3 py-1 rounded mt-3"
                    >
                      Remove Package
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded shadow">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Shipment History</h2>
                <button
                  type="button"
                  onClick={addHistory}
                  className="bg-[#08345c] text-white px-4 py-2 rounded"
                >
                  Add History
                </button>
              </div>

              {formData.history.map((item, index) => (
                <div key={index} className="border p-4 mb-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    {Object.keys(item)
                      .filter((key) => key !== "_id")
                      .map((key) => (
                        <input
                          key={key}
                          name={key}
                          placeholder={key}
                          value={item[key] || ""}
                          onChange={(e) => handleArrayChange(e, "history", index)}
                          className={inputClass}
                        />
                      ))}
                  </div>

                  {formData.history.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeHistory(index)}
                      className="bg-red-600 text-white px-3 py-1 rounded mt-3"
                    >
                      Remove History
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-xl font-bold mb-4">Totals</h2>

              <div className="grid md:grid-cols-3 gap-4">
                {["volumetricWeight", "volume", "actualWeight"].map((field) => (
                  <input
                    key={field}
                    name={field}
                    placeholder={field}
                    value={formData.totals[field] || ""}
                    className={inputClass}
                    onChange={(e) => handleChange(e, "totals")}
                  />
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#d4ad00] text-white font-bold px-10 py-4 rounded disabled:opacity-60"
            >
              {loading
                ? "SAVING..."
                : mode === "edit"
                ? "UPDATE TRACKING RECORD"
                : "CREATE TRACKING RECORD"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdminTracking;