import React, { useState, useMemo, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CleanLayout from "@/layouts/clean";
import Link from 'next/link'

const HomePage = () => {
  return (
    <div className="cover content min-vh-100 w-100">
      <Container fluid>
        <Row className="py-3">
          <div className="col-xl-6 col-lg-5 d-flex justify-content-end">
            <div
              className="pt-2 mx-auto mb-5 text-center"
            >
              <h1 className="display-4 color-primary pb-2">
                <span className="fw-light">Recharts demo - NextJS</span>
              </h1>
              <p className="h3 fw-light color-black line-height-base">
                AG Grid is a feature rich datagrid designed for the major
                JavaScript Frameworks.
              </p>
              <Link
                className="d-inline-flex align-items-center text-decoration-none pt-2 mt-4 mb-5 color-primary"
                href="/lineChart"
                data-scroll=""
              >
                <span className="btn btn-icon rounded-circle border-back flex-shrink-0 px-3">
                  <i className="pe-7s-paper-plane py-2"></i>
                </span>
                <span className="ms-3 fw-medium mx-1 text-lg"> View Demos</span>
              </Link>
              <hr className="hr-light mt-0 mb-3" />
              <div className="row pl-5 text-l">
                <div className="col-sm-12 mb-4 mb-sm-0">
                  <div className="h2 color-black fw-normal mb-2">
                    Feature
                  </div>
                  <div className="h3 color-black fw-normal mb-2 ps-3 opacity-80">
                    Recharts
                  </div>
                  <div className="h3 color-black fw-normal mb-2 ps-3 opacity-80">
                    React
                  </div>
                  <div className="h3 color-black fw-normal mb-2 ps-3 opacity-80">
                    NextJS
                  </div>
                  <div className="h3 color-black fw-normal mb-2 ps-3 opacity-80">
                    React-bootstrap
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

HomePage.layout = CleanLayout;

export default HomePage;
