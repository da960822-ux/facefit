import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { PrototypeFeedback } from "@/components/facefit/PrototypeFeedback";
import HomePage from "@/app/page";
import DashboardPage from "@/app/dashboard/page";
import OnboardingPage from "@/app/onboarding/page";
import EquipmentPage from "@/app/equipment/page";
import VoiceProfilePage from "@/app/voice-profile/page";
import AnalysisPage from "@/app/analysis/page";
import PricingRedirect from "@/app/pricing/page";
import InterviewRoomPage from "@/app/session/live/page";
import ReportPage from "@/app/report/page";
import LoginPage from "@/app/login/page";
import SignupPage from "@/app/signup/page";
import DesignPreviewPage from "@/app/design-preview/page";

export default function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/equipment" element={<EquipmentPage />} />
        <Route path="/voice-profile" element={<VoiceProfilePage />} />
        <Route path="/analysis" element={<AnalysisPage />} />
        <Route path="/pricing" element={<PricingRedirect />} />
        <Route path="/session/live" element={<InterviewRoomPage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/design-preview" element={<DesignPreviewPage />} />
      </Routes>
      <PrototypeFeedback />
    </Fragment>
  );
}
