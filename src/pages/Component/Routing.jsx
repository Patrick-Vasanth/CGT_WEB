import HomePage from "./HomePage";
import ReferralDetails from "./ReferralDetails";
import StudentDetails from "./StudentDetails";
import ReferralsList from "./ReferralsList";
import StudentsList from "./StudentsList";
import ReferralCreation from "./ReferralCreation";
import StudentProfile from "./StudentProfile"
import LoginPage from "./LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WithNavigation from "./WithNavigation";
import WithParam from "./WithParameter";

export default function RoutingComponent(){

    const LoginWithNavigation = WithNavigation(LoginPage);
    const StudentCreationWithNaviagtion = WithNavigation(StudentProfile);
    const ReferralCreationWithNaviagtion = WithNavigation(ReferralCreation);
    const ReferralDetailsWithNaviagtion = WithNavigation(ReferralDetails);
    const StudentDetailsWithNaviagtion = WithNavigation(StudentDetails);
    const ReferralsListWithNaviagtion = WithNavigation(ReferralsList);
    const StudentsListWithNaviagtion = WithNavigation(StudentsList);
    const HomePageWithNaviagtion = WithNavigation(HomePage);

    return(
        <>
        <Router>
            <Routes>
                <Route path="/" element={<LoginWithNavigation />}></Route>
                <Route path="/login" element={<LoginWithNavigation />}></Route>
                <Route path="/home" element={<HomePageWithNaviagtion/>}></Route>
                <Route path="/referraldetails" element={< ReferralDetailsWithNaviagtion/>}></Route>
                <Route path="/studentdetails" element={<StudentDetailsWithNaviagtion/>}></Route>
                <Route path="/referrallist" element={<ReferralsListWithNaviagtion/>}></Route>
                <Route path="/studentlist" element={<StudentsListWithNaviagtion/>}></Route>
                <Route path="/referralcreation" element={<ReferralCreationWithNaviagtion/>}></Route>
                <Route path="/studentcreation" element={<StudentCreationWithNaviagtion/>}></Route>
            </Routes>
        </Router>
        </>
    );
}