import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layouts/layout";
import SuspenseContainer from "../utils/SuspenseContainer";

const HomePage = lazy(() => import("../modules/statistics/ui/HomePage"));
const AllCoursePage = lazy(
  () => import("../modules/course/ui/AllCourse/AllCourse")
);
const MyCoursePage = lazy(() => import("../modules/course/ui/MyCourse/MyCourse"));
const MentorsPage = lazy(() => import("../modules/mentors/ui/MentorsPage"));
const BlogsPage = lazy(() => import("../modules/blogs/ui/BlogsPage"));
const BlogDetailPage = lazy(() => import("../modules/blogs/ui/BlogDetailPage"));
const SavedPage = lazy(() => import("../modules/saved/ui/SavedPage"));
const SubscriptionPage = lazy(
  () => import("../modules/subscription/ui/SubscriptionPage")
);
const HelpPage = lazy(() => import("../modules/help/ui/HelpPage"));
const ProfilePage = lazy(() => import("../modules/profile/ui/ProfilePage"));

const RouterMain = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <SuspenseContainer>
                <HomePage />
              </SuspenseContainer>
            }
          />
          <Route
            path="all-course"
            element={
              <SuspenseContainer>
                <AllCoursePage />
              </SuspenseContainer>
            }
          />
          <Route
            path="my-course"
            element={
              <SuspenseContainer>
                <MyCoursePage />
              </SuspenseContainer>
            }
          />
          <Route
            path="mentors"
            element={
              <SuspenseContainer>
                <MentorsPage />
              </SuspenseContainer>
            }
          />
          <Route
            path="blogs"
            element={
              <SuspenseContainer>
                <BlogsPage />
              </SuspenseContainer>
            }
          />
          <Route
            path="blogs/:id"
            element={
              <SuspenseContainer>
                <BlogDetailPage />
              </SuspenseContainer>
            }
          />
          <Route
            path="saved"
            element={
              <SuspenseContainer>
                <SavedPage />
              </SuspenseContainer>
            }
          />
          <Route
            path="subscription"
            element={
              <SuspenseContainer>
                <SubscriptionPage />
              </SuspenseContainer>
            }
          />
          <Route
            path="help"
            element={
              <SuspenseContainer>
                <HelpPage />
              </SuspenseContainer>
            }
          />
          <Route
            path="profile"
            element={
              <SuspenseContainer>
                <ProfilePage />
              </SuspenseContainer>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterMain;
