import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { FeedbackProvider } from './contexts/FeedbackContext'

const Login = lazy(() => import('./pages/Login'))
const AdminLayout = lazy(() => import('./layouts/AdminLayout'))
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'))
const AddNewStudentPage = lazy(() => import('./pages/AddNewStudentPage'))
const StudentsListAllPage = lazy(() => import('./pages/StudentsListAllPage'))
const StudentsListActivePage = lazy(() => import('./pages/StudentsListActivePage'))
const StudentsListFreshPage = lazy(() => import('./pages/StudentsListFreshPage'))
const StudentsListInactivePage = lazy(() => import('./pages/StudentsListInactivePage'))
const StudentProfilePage = lazy(() => import('./pages/StudentProfilePage'))
const AcademicRecordsPage = lazy(() => import('./pages/AcademicRecordsPage'))
const AccountSettingsPage = lazy(() => import('./pages/AccountSettingsPage'))
const EditStudentPage = lazy(() => import('./pages/EditStudentPage'))
const ClassListPage = lazy(() => import('./pages/ClassListPage'))
const GetClassListPage = lazy(() => import('./pages/GetClassListPage'))
const ParentsListPage = lazy(() => import('./pages/ParentsListPage'))
const ManageStaffPage = lazy(() => import('./pages/ManageStaffPage'))
const AttendanceRegisterPage = lazy(() => import('./pages/AttendanceRegisterPage'))
const TeachingLearningMaterialsPage = lazy(() => import('./pages/TeachingLearningMaterialsPage'))
const TLMUploadPage = lazy(() => import('./pages/TLMUploadPage'))
const MediaLibraryPage = lazy(() => import('./pages/MediaLibraryPage'))
const StudentPromotionPage = lazy(() => import('./pages/StudentPromotionPage'))
const TestsAndQuizzesPage = lazy(() => import('./pages/TestsAndQuizzesPage'))
const TeacherDashboard = lazy(() => import('./pages/TeacherDashboard'))
const StudentDashboard = lazy(() => import('./pages/StudentDashboard'))

function PageFallback() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      Loading…
    </div>
  )
}

export default function App() {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Suspense fallback={<PageFallback />}>
          <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="students" element={<Navigate to="/admin/students/list" replace />} />
          <Route path="students/add" element={<AddNewStudentPage />} />
          <Route path="students/list" element={<StudentsListAllPage />} />
          <Route path="students/list/active" element={<StudentsListActivePage />} />
          <Route path="students/list/fresh" element={<StudentsListFreshPage />} />
          <Route path="students/list/inactive" element={<StudentsListInactivePage />} />
          <Route path="students/profile/:studentId" element={<StudentProfilePage />} />
          <Route path="students/profile/:studentId/records" element={<AcademicRecordsPage />} />
          <Route path="students/profile/:studentId/settings" element={<AccountSettingsPage />} />
          <Route path="students/profile/:studentId/edit" element={<EditStudentPage />} />
          <Route path="students/class-list" element={<GetClassListPage />} />
          <Route path="students/parents" element={<ParentsListPage />} />
          <Route path="staff" element={<ManageStaffPage />} />
          <Route path="staff/add" element={<Navigate to="/admin/staff" replace />} />
          <Route path="staff/list" element={<Navigate to="/admin/staff" replace />} />
          <Route path="staff/list/active" element={<Navigate to="/admin/staff" replace />} />
          <Route path="staff/list/new" element={<Navigate to="/admin/staff" replace />} />
          <Route path="staff/list/inactive" element={<Navigate to="/admin/staff" replace />} />
          <Route path="staff/restriction" element={<Navigate to="/admin/staff" replace />} />
          <Route path="class-list" element={<ClassListPage />} />
          <Route path="attendance" element={<AttendanceRegisterPage />} />
          <Route path="tlm" element={<TeachingLearningMaterialsPage />} />
          <Route path="tlm/upload" element={<TLMUploadPage />} />
          <Route path="media-library" element={<MediaLibraryPage />} />
          <Route path="promotion" element={<StudentPromotionPage />} />
          <Route path="tests-quizzes" element={<TestsAndQuizzesPage />} />
          {/* Finance — redirect to dashboard until pages are built */}
          <Route path="billing" element={<Navigate to="/admin" replace />} />
          <Route path="fee-collection" element={<Navigate to="/admin" replace />} />
          <Route path="payroll" element={<Navigate to="/admin" replace />} />
          <Route path="finance-entries" element={<Navigate to="/admin" replace />} />
          <Route path="financial-reports" element={<Navigate to="/admin" replace />} />
          {/* Operations */}
          <Route path="reports" element={<Navigate to="/admin" replace />} />
          <Route path="inventory" element={<Navigate to="/admin" replace />} />
          {/* Communications */}
          <Route path="sms-reminder" element={<Navigate to="/admin" replace />} />
          <Route path="news" element={<Navigate to="/admin" replace />} />
          {/* Learning */}
          <Route path="e-learning" element={<Navigate to="/admin" replace />} />
          {/* Settings */}
          <Route path="school-setup" element={<Navigate to="/admin" replace />} />
          <Route path="documents" element={<Navigate to="/admin" replace />} />
          <Route path="account" element={<Navigate to="/admin" replace />} />
        </Route>
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </FeedbackProvider>
  )
}
