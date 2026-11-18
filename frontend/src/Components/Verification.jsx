
import { useState } from "react";
import { jsPDF } from "jspdf";
import JsBarcode from "jsbarcode";
import QRCode from "qrcode";
import gokLogo from "../assets/arms.png";
import {
    ShieldCheck,
    Search,
    FileDown,
    CheckCircle,
    AlertCircle,
    ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const TEST_RECORD = {
    name: "Michael Mwangi",
    verificationCode: "G-56227",
    dateVerified: "2013",
};

const Verification = () => {
    const [verificationNumber, setVerificationNumber] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    const handleVerify = () => {
        setError("");
        setResult(null);

        if (!verificationNumber.trim()) {
            setError("Please enter a verification number.");
            return;
        }

        if (
            verificationNumber.trim().toUpperCase() ===
            TEST_RECORD.verificationCode
        ) {
            setResult(TEST_RECORD);
        } else {
            setError("Verification number not found. Please check and try again.");
        }
    };



    const generatePDF = async () => {
        if (!result) return;

        try {
            const doc = new jsPDF("p", "mm", "a4");

            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();

            const navy = [8, 52, 92];
            const gold = [226, 169, 35];
            const dark = [40, 48, 58];
            const grey = [105, 115, 125];
            const light = [245, 248, 251];
            const red = [175, 35, 35];
            const green = [0, 128, 0];
            const black = [0, 0, 0];

            // ==================================
            // LOAD GOVERNMENT LOGO
            // ==================================

            const logo = new Image();
            logo.src = gokLogo;

            await new Promise((resolve, reject) => {
                logo.onload = resolve;
                logo.onerror = reject;
            });

            const logoCanvas = document.createElement("canvas");
            logoCanvas.width = logo.naturalWidth;
            logoCanvas.height = logo.naturalHeight;

            const logoContext = logoCanvas.getContext("2d");
            logoContext.drawImage(
                logo,
                0,
                0,
                logoCanvas.width,
                logoCanvas.height
            );

            const logoData = logoCanvas.toDataURL("image/png");

            // ==================================
            // GENERATE COMPACT CODE 128 BARCODE
            // ==================================

            const barcodeCanvas = document.createElement("canvas");

            JsBarcode(barcodeCanvas, result.verificationCode, {
                format: "CODE128",
                width: 1.5,
                height: 35,
                displayValue: true,
                fontSize: 10,
                margin: 3,
                background: "#ffffff",
                lineColor: "#000000",
            });
            // ==================================
            // GENERATE QR CODE
            // ==================================

            const qrData = await QRCode.toDataURL(
                String(result.verificationCode),
                {
                    errorCorrectionLevel: "M",
                    type: "image/png",
                    quality: 1,
                    margin: 1,
                    width: 300,
                    color: {
                        dark: "#08345c",
                        light: "#ffffff",
                    },
                }
            );

            const barcodeData = barcodeCanvas.toDataURL("image/png");

            // ==================================
            // PAGE BACKGROUND
            // ==================================

            doc.setFillColor(255, 255, 255);
            doc.rect(0, 0, pageWidth, pageHeight, "F");

            // ==================================
            // HEADER WITH LOGO
            // ==================================

            doc.addImage(logoData, "PNG", 17, 12, 29, 29);

            doc.setFont("helvetica", "bold");
            doc.setFontSize(16);
            doc.setTextColor(...navy);

            doc.text("GOVERNMENT OF KENYA", 52, 21);

            doc.setFont("helvetica", "normal");
            doc.setFontSize(9);
            doc.setTextColor(...grey);

            doc.text("VERIFICATION PORTAL", 52, 28);

            doc.setFont("helvetica", "bold");
            doc.setFontSize(8);
            doc.setTextColor(...navy);

            doc.text("RECORD VERIFICATION SERVICES", 52, 34);

            // Header right-side label
            doc.setFillColor(235, 237, 240); // Light grey background
            doc.roundedRect(151, 14, 42, 10, 2, 2, "F");

            doc.setTextColor(90, 98, 105); // Dark grey text
            doc.setFontSize(7);
            doc.text("Test Record", 172, 20.5, {
                align: "center",
            });

            // Header divider
            doc.setDrawColor(...black);
            doc.setLineWidth(0.7);
            doc.line(17, 47, 193, 47);

            // ==================================
            // VERIFICATION SUMMARY
            // ==================================

            doc.setFont("helvetica", "bold");
            doc.setFontSize(16);
            doc.setTextColor(...navy);

            doc.text("Verification Report", 17, 62);

            doc.setFont("helvetica", "normal");
            doc.setFontSize(9);
            doc.setTextColor(...grey);

            doc.text(
                "Record lookup and verification summary",
                17,
                69
            );

            // Sample notice
            doc.setFillColor(225, 245, 230);
            doc.roundedRect(17, 76, 176, 16, 2, 2, "F");

            doc.setTextColor(35, 110, 65);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(8);

            doc.text(
                [
                    "This is an official government verification report.", 
                    "The information contained herein is accurate and has been verified by the Government of Kenya.",
                ],
                pageWidth / 2,
                82,
                { align: "center", lineHeightFactor: 1.5 }
            );

            // ==================================
            // BARCODE AND CODE SECTION
            // ==================================

            doc.setFillColor(...light);
            doc.roundedRect(17, 96, 176, 35, 3, 3, "F");

            doc.setFont("helvetica", "bold");
            doc.setFontSize(8);
            doc.setTextColor(...grey);

            doc.text("RECORD IDENTIFICATION", 59, 106);

            doc.setFont("helvetica", "bold");
            doc.setFontSize(13);
            doc.setTextColor(...navy);

            doc.text(result.verificationCode, 59, 117);

            // Small barcode on the left
            doc.addImage(
                barcodeData,
                "PNG",
                21,
                99,
                34,
                27
            );

            // ==================================
            // DETAILS SECTION
            // ==================================

            doc.setFont("helvetica", "bold");
            doc.setFontSize(11);
            doc.setTextColor(...navy);

            doc.text("Verification Details", 17, 148);

            doc.setDrawColor(220, 225, 230);
            doc.setLineWidth(0.3);
            doc.line(17, 153, 193, 153);

            // Information card
            doc.setFillColor(255, 255, 255);
            doc.setDrawColor(225, 230, 235);
            doc.roundedRect(17, 160, 176, 75, 2, 2, "FD");

            const details = [
                ["Tester's Name", result.name],
                ["Verification Code", result.verificationCode],
                ["Date Verified", result.dateVerified],
                ["Verification Status", "Successful"],
            ];

            let y = 173;

            details.forEach(([label, value], index) => {
                if (index > 0) {
                    doc.setDrawColor(235, 238, 241);
                    doc.line(24, y - 6, 186, y - 6);
                }

                doc.setFont("helvetica", "normal");
                doc.setFontSize(9);
                doc.setTextColor(...grey);

                doc.text(label, 25, y);

                doc.setFont("helvetica", "bold");
                doc.setFontSize(9);
                doc.setTextColor(...dark);

                doc.text(String(value), 100, y, {
                    maxWidth: 83,
                });

                y += 13;
            });

            // ==================================
            // STATUS CARD
            // ==================================

            doc.setFillColor(225, 245, 230);
            doc.roundedRect(17, 247, 176, 19, 2, 2, "F");

            doc.setFont("helvetica", "bold");
            doc.setFontSize(9);
            doc.setTextColor(35, 110, 65);

            doc.text("Successful", 24, 255);

            doc.setFont("helvetica", "normal");
            doc.setFontSize(8);

            doc.text("Official Government Verification", 24, 261);
            // QR code on bottom right
            doc.addImage(
                qrData,
                "PNG",
                168,
                247,
                20,
                20
            );

            // ==================================
            // FOOTER
            // ==================================

            doc.setDrawColor(...black);
            doc.setLineWidth(0.7);
            doc.line(17, 276, 193, 276);

            doc.setFont("helvetica", "bold");
            doc.setFontSize(9);
            doc.setTextColor(...navy);

            doc.text(
                "OFFICIAL COPY",
                pageWidth / 2,
                284,
                { align: "center" }
            );

            doc.setFont("helvetica", "normal");
            doc.setFontSize(7);
            doc.setTextColor(...grey);

            doc.text(
                "This document contains official government verification information.",
                pageWidth / 2,
                289,
                { align: "center" }
            );

            doc.text(
                "It constitutes official government verification.",
                pageWidth / 2,
                293,
                { align: "center" }
            );

            // Bottom accent
            doc.setFillColor(...navy);
            doc.rect(0, 297, pageWidth, 3, "F");

            doc.save(
                `Verification-${result.verificationCode}.pdf`
            );

        } catch (error) {
            console.error("PDF generation failed:", error);
            alert("Unable to generate the PDF. Please try again.");
        }
    };


    return (
        <div className="min-h-screen bg-gray-100">

            {/* Header */}
            <header className="bg-[#08345c] text-white py-5">
                <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">

                    <div className="flex items-center gap-3">
                        <ShieldCheck size={35} className="text-yellow-400" />

                        <div>
                            <h1 className="font-bold text-lg md:text-xl">
                                Verification Portal
                            </h1>
                            <p className="text-xs text-gray-300">
                                Government of Kenya
                            </p>
                        </div>
                    </div>

                    <Link
                        to="/"
                        className="text-sm flex items-center gap-2 hover:text-yellow-400"
                    >
                        <ArrowLeft size={17} />
                        Home
                    </Link>

                </div>
            </header>

            {/* Main content */}
            <main className="max-w-3xl mx-auto px-5 py-16">

                <div className="bg-white rounded-lg shadow-md overflow-hidden">

                    <div className="bg-[#f4b000] p-5 text-center">
                        <h2 className="text-2xl font-bold text-[#08345c]">
                            Verify
                        </h2>

                        <p className="text-sm text-[#08345c] mt-1">
                            Record verification
                        </p>
                    </div>

                    <div className="p-6 md:p-10">

                        <div className="text-center mb-8">
                            <ShieldCheck
                                size={55}
                                className="mx-auto text-[#08345c] mb-3"
                            />

                            <h3 className="text-xl font-bold text-[#08345c]">
                                Enter Verification Number
                            </h3>

                            <p className="text-gray-500 text-sm mt-2">
                                Enter your verification code to retrieve the
                                corresponding record.
                            </p>
                        </div>

                        {/* Input */}
                        <div className="flex flex-col md:flex-row gap-3">

                            <input
                                type="text"
                                value={verificationNumber}
                                onChange={(e) =>
                                    setVerificationNumber(e.target.value)
                                }
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") handleVerify();
                                }}
                                placeholder="Enter Verification Number"
                                className="flex-1 border border-gray-300 rounded-md px-5 py-4 outline-none focus:border-[#08345c]"
                            />

                            <button
                                onClick={handleVerify}
                                className="bg-[#08345c] text-white px-8 py-4 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-[#0b497c]"
                            >
                                <Search size={19} />
                                VERIFY
                            </button>

                        </div>

                        <p className="text-xs text-gray-400 mt-3 text-center">
                            Example: G-12345
                        </p>

                        {/* Error */}
                        {error && (
                            <div className="mt-6 bg-red-50 border border-red-200 text-red-700 p-4 rounded-md flex items-center gap-3">
                                <AlertCircle size={20} />
                                {error}
                            </div>
                        )}

                        {/* Result */}
                        {result && (
                            <div className="mt-8 border border-gray-200 rounded-lg overflow-hidden">

                                <div className="bg-green-50 p-5 flex items-center gap-3">
                                    <CheckCircle
                                        className="text-green-600"
                                        size={27}
                                    />

                                    <div>
                                        <h3 className="font-bold text-green-800">
                                            Verification Successful
                                        </h3>
                                        <p className="text-xs text-green-700">
                                            Record successfully retrieved.
                                        </p>
                                    </div>
                                </div>

                                <div className="p-6">

                                    <h3 className="font-bold text-[#08345c] text-lg mb-5">
                                        Verification Details
                                    </h3>

                                    <div className="space-y-4">

                                        <div className="flex justify-between border-b pb-3 gap-3">
                                            <span className="text-gray-500">
                                                Tester's Name
                                            </span>
                                            <strong>{result.name}</strong>
                                        </div>

                                        <div className="flex justify-between border-b pb-3 gap-3">
                                            <span className="text-gray-500">
                                                Verification Code
                                            </span>
                                            <strong>{result.verificationCode}</strong>
                                        </div>

                                        <div className="flex justify-between border-b pb-3 gap-3">
                                            <span className="text-gray-500">
                                                Date Verified
                                            </span>
                                            <strong>{result.dateVerified}</strong>
                                        </div>

                                    </div>

                                    <button
                                        onClick={generatePDF}
                                        className="mt-7 w-full bg-[#08345c] text-white py-4 rounded-md font-bold flex items-center justify-center gap-3 hover:bg-[#0b497c]"
                                    >
                                        <FileDown size={20} />
                                        Download Verification Report
                                    </button>

                                </div>
                            </div>
                        )}

                    </div>
                </div>

                <p className="text-center text-xs text-gray-400 mt-8">
                    &copy; {new Date().getFullYear()} Government of Kenya. All rights reserved.
                </p>

            </main>

        </div>
    );
};

export default Verification;
