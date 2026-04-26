import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TelemetryBar from "@/components/TelemetryBar";
import CapabilitiesGrid from "@/components/CapabilitiesGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#020617] font-sans">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section with Neural Core */}
      <Hero />

      {/* Live Telemetry Bar */}
      <TelemetryBar />

      {/* Key Capabilities Grid */}
      <CapabilitiesGrid />

      {/* Footer with System Signature */}
      <Footer />
    </main>
  );
}
