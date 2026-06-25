import { useState } from "react";
import { Link } from "react-router-dom";
import Barcode from "react-barcode";
import { Search, Phone, Mail, MapPin } from "lucide-react";
import arms from "../assets/arms.png";
import trackingBg from "../assets/tracking-bg.jpg";

const Tracking = () => {
    const [trackingNumber, setTrackingNumber] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    const handleTrack = async () => {
        if (!trackingNumber.trim()) {
            setError("Please enter a tracking number");
            return;
        }

        setLoading(true);
        setError("");
        setResult(null);

        try {
            const res = await fetch(
                `${import.meta.env.VITE_API_URL}/tracking/${trackingNumber.trim().toUpperCase()}`
            );

            const data = await res.json();

            if (!res.ok) {
                setError(data.message || "Tracking number not found");
                return;
            }

            setResult(data);
        } catch (err) {
            setError("Server error. Please try again.");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-[#f4b000] py-3">
                <div className="flex items-center gap-3">
                    <div className="hidden md:flex items-center gap-4">
                        <span>f</span>
                        <span>t</span>
                        <span>◎</span>
                        <span>in</span>

                        <div className="bg-white rounded-full px-4 py-2 flex items-center gap-3">
                            <input
                                type="text"
                                placeholder="Search"
                                className="outline-none text-sm"
                            />
                            <Search size={18} />
                        </div>
                    </div>

                    <Link
                        to="/admin-login"
                        className="bg-[#08345c] text-white px-3 md:px-4 py-2 rounded font-semibold text-xs md:text-sm whitespace-nowrap"
                    >
                        Admin Login
                    </Link>
                </div>
            </div>

            <div className="bg-white py-7">
                <div className="max-w-[1270px] mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
                    <img src={arms} alt="logo" className="h-16 object-contain" />

                    <div className="flex items-center gap-4">
                        <Phone className="text-red-500" size={36} />
                        <div>
                            <h3 className="font-bold text-[#08345c]">Mobile No.</h3>
                            <p>+254 106 463631</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <Mail className="text-red-500" size={36} />
                        <div>
                            <h3 className="font-bold text-[#08345c]">Send Us Mail</h3>
                            <p>info@ministryofmines.co.ke</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <MapPin className="text-red-500" size={36} />
                        <div>
                            <h3 className="font-bold text-[#08345c]">Visit Our Location</h3>
                            <p>Madini house, Nairobi, Kenya.</p>
                        </div>
                    </div>
                </div>
            </div>

            <section
                className="h-[150px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,65,105,.82), rgba(0,65,105,.82)), url(${trackingBg})`,
                }}
            >
                <h1 className="text-white text-6xl font-bold">Track</h1>
            </section>

            <section className="py-20">
                <div className="max-w-[1020px] mx-auto px-4">
                    <div className="border border-gray-300">
                        <h2 className="text-center text-2xl font-bold text-[#08345c] py-4 border-b">
                            Enter the Consignment No.
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-[1fr_360px]">
                            <input
                                value={trackingNumber}
                                onChange={(e) => setTrackingNumber(e.target.value)}
                                type="text"
                                placeholder="Enter Tracking Number"
                                className="h-20 px-6 outline-none text-lg border-b md:border-b-0 md:border-r"
                            />

                            <div className="h-20 flex items-center justify-center">
                                <button
                                    onClick={handleTrack}
                                    disabled={loading}
                                    className="bg-[#d4ad00] border border-green-700 text-white px-5 py-2 font-semibold rounded disabled:opacity-60"
                                >
                                    {loading ? "CHECKING..." : "TRACK RESULT"}
                                </button>
                            </div>
                        </div>

                        <p className="text-center text-2xl font-bold text-[#08345c] py-3 border-t">
                            Ex: 12345
                        </p>
                    </div>

                    {error && (
                        <p className="text-center text-red-600 font-bold mt-6">{error}</p>
                    )}

                    {result && (
                        <div id="printArea" className="mt-10 border border-gray-300 bg-white">
                            <div className="print-header">
                                <div className="print-logo-row">
                                    <img
                                        src="/arms.png"
                                        alt="arms"
                                        className="w-14 h-auto print:w-[85px]"
                                    />

                                    <div>
                                        <h1>Ministry of Mining, Blue Economy and Maritime Affairs</h1>
                                        <h2>State Department for Mining</h2>
                                    </div>
                                </div>

                                <div className="print-barcode">
                                    <Barcode
                                        value={result.trackingNumber}
                                        height={55}
                                        width={1.6}
                                        fontSize={13}
                                        displayValue={true}
                                    />
                                </div>
                            </div>
                            <div className="p-6">
                                <button
                                    onClick={() => window.print()}
                                    className="bg-[#d4ad00] text-white px-4 py-2 rounded font-semibold mb-5"
                                >
                                    Print Track Result
                                </button>

                                <h2 className="text-2xl font-bold text-[#08345c] mb-6">
                                    {result.trackingNumber}
                                </h2>

                                <div className="grid md:grid-cols-2 gap-10">
                                    <div>
                                        <h3 className="font-bold text-xl mb-3">Shipper Address</h3>
                                        <p><b>Shipper Name :</b> {result.shipper?.name}</p>
                                        <p><b>Phone Number :</b> {result.shipper?.phone}</p>
                                        <p><b>Address :</b> {result.shipper?.address}</p>
                                        <p><b>Email :</b> {result.shipper?.email}</p>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-xl mb-3">Receiver Address</h3>
                                        <p><b>Receiver Name :</b> {result.receiver?.name}</p>
                                        <p><b>Phone Number :</b> {result.receiver?.phone}</p>
                                        <p><b>Address :</b> {result.receiver?.address}</p>
                                        <p><b>Email :</b> {result.receiver?.email}</p>
                                    </div>
                                </div>

                            </div>

                            <div className="border-t p-6">
                                <h3 className="font-bold text-xl text-red-600 mb-5">
                                    SHIPMENT STATUS: {result.status}
                                </h3>

                                <h3 className="font-bold text-xl mb-4">Shipment Information</h3>

                                <div className="grid md:grid-cols-2 gap-x-10 gap-y-3">
                                    <p><b>Type of Shipment:</b> {result.shipment?.typeOfShipment}</p>
                                    <p><b>Courier:</b> {result.shipment?.courier}</p>
                                    <p><b>Mode:</b> {result.shipment?.mode}</p>
                                    <p><b>Payment Mode:</b> {result.shipment?.paymentMode}</p>
                                    <p><b>Total Freight:</b> {result.shipment?.totalFreight}</p>
                                    <p><b>Carrier:</b> {result.shipment?.carrier}</p>
                                    <p><b>Carrier Reference No.:</b> {result.shipment?.carrierReferenceNo}</p>
                                    <p><b>Departure Time:</b> {result.shipment?.departureTime}</p>
                                    <p><b>Origin:</b> {result.shipment?.origin}</p>
                                    <p><b>Destination:</b> {result.shipment?.destination}</p>
                                    <p><b>Pickup Date:</b> {result.shipment?.pickupDate}</p>
                                    <p><b>Pickup Time:</b> {result.shipment?.pickupTime}</p>
                                    <p><b>Expected Delivery Date:</b> {result.shipment?.expectedDeliveryDate}</p>
                                    <p><b>Comments:</b> {result.shipment?.comments}</p>
                                    <p><b>Consignor Name:</b> {result.shipper?.name}</p>
                                    <p><b>Consignor Email:</b> {result.shipper?.email}</p>
                                    <p><b>Consignee Name:</b> {result.receiver?.name}</p>
                                    <p><b>Consignee Email:</b> {result.receiver?.email}</p>
                                </div>
                            </div>

                            <div className="border-t p-6">
                                <h3 className="font-bold text-xl mb-4">Packages</h3>

                                <div className="overflow-x-auto">
                                    <table className="w-full border border-gray-300 text-sm">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="border p-2">Qty.</th>
                                                <th className="border p-2">Piece Type</th>
                                                <th className="border p-2">Description</th>
                                                <th className="border p-2">Length(cm)</th>
                                                <th className="border p-2">Width(cm)</th>
                                                <th className="border p-2">Height(cm)</th>
                                                <th className="border p-2">Weight (kg)</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {result.packages?.map((pkg, index) => (
                                                <tr key={index}>
                                                    <td className="border p-2 text-center">{pkg.qty}</td>
                                                    <td className="border p-2">{pkg.pieceType}</td>
                                                    <td className="border p-2">{pkg.description}</td>
                                                    <td className="border p-2 text-center">{pkg.length}</td>
                                                    <td className="border p-2 text-center">{pkg.width}</td>
                                                    <td className="border p-2 text-center">{pkg.height}</td>
                                                    <td className="border p-2 text-center">{pkg.weight}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="border-t p-6">
                                <h3 className="font-bold text-xl mb-4">Shipment History</h3>

                                <div className="overflow-x-auto">
                                    <table className="w-full border border-gray-300 text-sm">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="border p-2">Date</th>
                                                <th className="border p-2">Time</th>
                                                <th className="border p-2">Location</th>
                                                <th className="border p-2">Status</th>
                                                <th className="border p-2">Updated By</th>
                                                <th className="border p-2">Remarks</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {result.history?.map((item, index) => (
                                                <tr key={index}>
                                                    <td className="border p-2">{item.date}</td>
                                                    <td className="border p-2">{item.time}</td>
                                                    <td className="border p-2">{item.location}</td>
                                                    <td className="border p-2">{item.status}</td>
                                                    <td className="border p-2">{item.updatedBy}</td>
                                                    <td className="border p-2">{item.remarks}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="mt-5 text-right font-semibold">
                                    <p>Total Volumetric Weight : {result.totals?.volumetricWeight}</p>
                                    <p>Total Volume : {result.totals?.volume}</p>
                                    <p>Total Actual Weight : {result.totals?.actualWeight}</p>
                                </div>
                            </div>
                            <div className="print-footer">
                                <p>© 2026 State Department for Mining. All rights reserved.</p>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Tracking;