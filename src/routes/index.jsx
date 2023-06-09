import Page404 from "@/pages/Page404";
import React, { useEffect, useParams, useState } from "react";
import { Route, Routes, Link, Navigate, useNavigate } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import Layout from "@/components/Layout";

const Router = () => {
  const navigate = useNavigate();

  //   useEffect(() => {
  //     navigate("/login");
  //   }, []);

  return (
    <Routes>
      {/* <Route path="/" element={<LandingPage />} /> */}
      <Route
        path="/"
        element={
          <Layout>
            <LandingPage />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <AboutPage />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <ContactPage />
          </Layout>
        }
      />
      <Route path="/404" element={<Page404 />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default Router;
