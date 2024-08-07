import React, { useEffect, useState } from "react";
import axios from "axios";
import QRCode from "qrcode.react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import logo from "./images/Logo.png";
import badge3 from "./images/badge3.png";
import trainingicon1 from "./images/Vector (3).png";
import trainingicon2 from "./images/Vector.png";
import trainingicon3 from "./images/Vector (1).png";
import trainingicon4 from "./images/Vector (2).png";
import traitsicon1 from "./images/Vector (4).png";
import traitsicon2 from "./images/Vector (5).png";
import traitsicon3 from "./images/Vector (6).png";
import traitsicon4 from "./images/Vector (7).png";
import badgeicon1 from "./images/badge1.png";
import badgeicon2 from "./images/badge2.png";
import badgeicon4 from "./images/badge4.png";
import neuroda from "./images/Neuroda.png";
// import communicate from "./images/COMMUNICATE.png";
import solve from "./images/SOLVE.png";
import think from "./images/THINK.png";
import "./style.css";

export default function Profile() {
  const [wipData, setWipData] = useState([]);
  const badgeIcons = {
    smartprofessional: badgeicon1,
    futuremanager: badgeicon2,
    ceoinmaking: badgeicon4,
  };

  const traitsIcons = [traitsicon1, traitsicon2, traitsicon3, traitsicon4];

  const traitsText = [
    "Frames logic",
    "Communicates with clarity",
    " Makes informed assumpt ion",
    "Breaks down problem",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://app.xbsl.app/api/user/wip");
        setWipData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {wipData.map((item) => (
        <section className="p-3 p-xxl-5 text-white" key={item._id}>
          <div className="border border-1 border-secondary  rounded p-xxl-6 p-lg-5 p-md-4 p-3 ">
            <div className="d-flex justify-content-between align-items-center">
              <img src={logo} alt="logo" className="img-fluid w-md-50" />

              <div className="text-end fs-sm-12">
                <p className="mb-0 ">
                  WIP ID: <span>TSFF465</span>
                </p>
              </div>
            </div>

            <div className="d-none d-md-block ">
              <div className="d-flex justify-content-between align-items-center mt-5 ">
                <div className="d-flex justify-content-around align-items-start flex-column">
                  <h1 className="text-uppercase mb-0 fw-bold">
                    workplace intelligence profile
                  </h1>
                  <div className="mt-md-5 mt-3 ">
                    <h4 className="mb-0  fw-bold green">{item.name}</h4>
                    <p className="mb-0 fs-18">{item.designation}</p>
                    <p className="text-secondary mb-0 fs-18">
                      {item.organization}
                    </p>
                  </div>
                </div>
                {item.ceoInMaking && (
                  <div className="mt-md-5 w-xxl-7">
                    <img src={badge3} alt="logo" width="100%" />
                  </div>
                )}
              </div>
            </div>
            {/* mobile view start */}
            <div className=" mt-5 d-md-none d-block">
              <h5 className="text-uppercase mb-0 fw-bold">
                workplace intelligence profile
              </h5>
              <div className="d-flex justify-content-between align-items-center ">
                <div className=" mt-4">
                  <h5 className="mb-1 fw-bold green">{item.name}</h5>
                  <p className="mb-1 fs-18">{item.designation}</p>
                  <p className="text-secondary mb-0 fs-18">
                    {item.organization}
                  </p>
                </div>

                {item.ceoInMaking && (
                  <div>
                    <img src={badge3} alt="CEO Badge" width="100%" />
                  </div>
                )}
              </div>
            </div>
            {/* mobile view end*/}

            <p className="fs-18 fs-18 mt-4 m-md-0">{item.profileSummary}</p>
          </div>
          <div
            className="mb-3"
            style={{
              width: "100%",
              position: "relative",
            }}
          >
            <div className="flare2"></div>
          </div>

          <div
            style={{
              width: "100%",
              position: "relative",
            }}
          >
            <div className="flare"></div>
          </div>
          <div className="border border-1 border-secondary rounded p-xxl-6 p-lg-5 p-md-4 p-3 mb-3">
            <h2 className="text-uppercase fw-bold ls-8">
              learning experience snapshot
            </h2>
            <div className="d-flex justify-content-between flex-wrap mt-xxl-6 mt-5 px-lg-5 d-md-block d-none">
              <div className="d-flex mb-5 justify-content-between flex-wrap">
                <div className="col-lg-3 col-md-3 col-5 p-0 ">
                  <div
                    style={{
                      width: "100%",
                      position: "relative",
                    }}
                  >
                    <div className="flare5"></div>
                  </div>
                  <div className="border border-1 rounded p-xxl-8 p-md-4 p-2 mx-lg-4">
                    <img src={trainingicon1} alt="trainingicon1" width="70%" />
                  </div>
                  <div className="d-flex mx-lg-4">
                    <span className="green fs-1 fw-bold">
                      {item.trainingStatistics.workplacetackled}
                    </span>
                    <span className="ms-2 ms-xxl-4 mt-xlg-1 mt-xxl-4 mt-lg-3 mt-md-2 mt-2 fs-18 lh-20">
                      Engaged with {item.trainingStatistics.workplacetackled}{" "}
                      problems requiring application of creative problem-solving
                    </span>
                  </div>
                </div>
                {/* <div className="divider d-none d-md-block"></div> */}

                <div className="col-lg-3 col-md-3 col-5 p-0 ">
                  <div className="border border-1 rounded p-xxl-8 p-4 mx-lg-4">
                    <img src={trainingicon2} alt="trainingicon2" width="100%" />
                  </div>
                  <div
                    style={{
                      width: "100%",
                      position: "relative",
                    }}
                  >
                    <div className="flare6"></div>
                  </div>
                  <div className="d-flex mx-lg-4 ">
                    <span className="green fs-1 fw-bold">
                      {item.trainingStatistics.uniquemodels}
                    </span>
                    <span className="ms-2 ms-xxl-4 mt-xlg-1 mt-xxl-4 mt-lg-3 mt-md-2 mt-2 fs-18  lh-20">
                      Learnt {item.trainingStatistics.uniquemodels} unique
                      mental models for applying creative problem-solving
                    </span>
                  </div>
                </div>
                {/* <div className="divider d-none d-md-block"></div> */}

                <div className="col-lg-3 col-md-3 col-5 p-0 mt-4 mt-md-0 mb-md-4 mb-lg-3">
                  <div
                    style={{
                      width: "100%",
                      position: "relative",
                    }}
                  >
                    <div className="flare5"></div>
                  </div>
                  <div className="border border-1 p-xxl-8 rounded p-4 mx-lg-4 ">
                    <img src={trainingicon3} alt="trainingicon3" width="100%" />
                  </div>

                  <div className="d-flex mx-lg-2 max-w-100">
                    <span className="green fs-1 fw-bold">
                      {item.trainingStatistics.personalities}
                    </span>
                    <span className="ms-2 ms-xxl-4 mt-xlg-1 mt-xxl-4 mt-lg-3 mt-2 fs-18 lh-20 word-break">
                      Dealt with {item.trainingStatistics.personalities}
                      different kind of people including company CEO, investors,
                      government authorities, partners
                    </span>
                  </div>
                </div>
              </div>

              <div className="d-flex mb-5 justify-content-between flex-wrap">
                <div className="col-lg-3 col-md-3 col-5 p-0 mt-4 mt-md-0  mb-md-4 mb-lg-3">
                  <div className="border border-1 p-xxl-8 rounded p-4 mx-lg-4">
                    <img src={trainingicon4} alt="trainingicon4" width="100%" />
                  </div>

                  <div className="d-flex mx-lg-4">
                    <span className="green fs-1 fw-bold">
                      {item.trainingStatistics.professionalemails}
                    </span>
                    <span className="ms-2 ms-xxl-4 mt-xlg-1 mt-xxl-4 mt-lg-3 mt-2 fs-18 lh-20">
                      Engaged with {item.trainingStatistics.professionalemails}{" "}
                      professional emails
                    </span>
                  </div>
                </div>

                <div className="col-lg-3 col-md-3 col-5 p-0 mt-4 mt-md-0  mb-md-4 mb-lg-3">
                  <div className="border border-1 p-xxl-8 rounded p-4 mx-lg-4">
                    <img src={trainingicon4} alt="trainingicon4" width="100%" />
                  </div>

                  <div className="d-flex mx-lg-4">
                    <span className="green fs-1 fw-bold">
                      {item.trainingStatistics.kamaitoken}
                    </span>
                    <span className="ms-2 ms-xxl-4 mt-xlg-1 mt-xxl-4 mt-lg-3 mt-2 fs-18 lh-20">
                      Earned {item.trainingStatistics.kamaitoken} Kamai token
                    </span>
                  </div>
                </div>

                <div className="col-lg-3 col-md-3 col-5 p-0 mt-4 mt-md-0  mb-md-4 mb-lg-3">
                  <div className="border border-1 p-xxl-8 rounded p-4 mx-lg-4">
                    <img src={trainingicon4} alt="trainingicon4" width="100%" />
                  </div>

                  <div className="d-flex mx-lg-4">
                    <span className="green fs-1 fw-bold">
                      {item.trainingStatistics.workplacesimulation}
                    </span>
                    <span className="ms-2 ms-xxl-4 mt-xlg-1 mt-xxl-4 mt-lg-3 mt-2 fs-18 lh-20">
                      Spent {item.trainingStatistics.workplacesimulation} hours
                      in Workplace Simulation
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* mobile view */}

            <div className="d-flex justify-content-between flex-wrap mt-xxl-6 mt-5 px-lg-5 d-block d-md-none">
              <div className="d-flex mb-5 justify-content-between flex-wrap">
                <div className="col-lg-3 col-md-3 col-5 p-0 ">
                  <div
                    style={{
                      width: "100%",
                      position: "relative",
                    }}
                  >
                    <div className="flare5"></div>
                  </div>
                  <div className="border border-1 rounded p-xxl-8 p-md-4 p-2 mx-lg-4">
                    <img src={trainingicon1} alt="trainingicon1" width="70%" />
                  </div>
                  <div className="d-flex mx-lg-4">
                    <span className="green fs-1 fw-bold">
                      {item.trainingStatistics.workplacetackled}
                    </span>
                    <span className="ms-2 ms-xxl-4 mt-xlg-1 mt-xxl-4 mt-lg-3 mt-md-2 mt-2 fs-18 lh-20">
                      Engaged with {item.trainingStatistics.workplacetackled}{" "}
                      problems requiring application of creative problem-solving
                    </span>
                  </div>
                </div>
                {/* <div className="divider d-none d-md-block"></div> */}

                <div className="col-lg-3 col-md-3 col-5 p-0 ">
                  <div className="border border-1 rounded p-xxl-8 p-4 mx-lg-4">
                    <img src={trainingicon2} alt="trainingicon2" width="100%" />
                  </div>
                  <div
                    style={{
                      width: "100%",
                      position: "relative",
                    }}
                  >
                    <div className="flare6"></div>
                  </div>
                  <div className="d-flex mx-lg-4 ">
                    <span className="green fs-1 fw-bold">
                      {item.trainingStatistics.uniquemodels}
                    </span>
                    <span className="ms-2 ms-xxl-4 mt-xlg-1 mt-xxl-4 mt-lg-3 mt-md-2 mt-2 fs-18  lh-20">
                      Learnt {item.trainingStatistics.uniquemodels} unique
                      mental models for applying creative problem-solving
                    </span>
                  </div>
                </div>
                {/* <div className="divider d-none d-md-block"></div> */}

                <div className="col-lg-3 col-md-3 col-5 p-0 mt-4 mt-md-0 mb-md-4 mb-lg-3">
                  <div
                    style={{
                      width: "100%",
                      position: "relative",
                    }}
                  >
                    <div className="flare5"></div>
                  </div>
                  <div className="border border-1 p-xxl-8 rounded p-4 mx-lg-4 ">
                    <img src={trainingicon3} alt="trainingicon3" width="100%" />
                  </div>

                  <div className="d-flex mx-lg-2 max-w-100">
                    <span className="green fs-1 fw-bold">
                      {item.trainingStatistics.personalities}
                    </span>
                    <span className="ms-2 ms-xxl-4 mt-xlg-1 mt-xxl-4 mt-lg-3 mt-2 fs-18 lh-20 word-break">
                      Dealt with {item.trainingStatistics.personalities}
                      different kind of people including company CEO, investors,
                      government authorities, partners
                    </span>
                  </div>
                </div>

                <div className="col-lg-3 col-md-3 col-5 p-0 mt-4 mt-md-0  mb-md-4 mb-lg-3">
                  <div className="border border-1 p-xxl-8 rounded p-4 mx-lg-4">
                    <img src={trainingicon4} alt="trainingicon4" width="100%" />
                  </div>

                  <div className="d-flex mx-lg-4 max-w-100">
                    <span className="green fs-1 fw-bold">
                      {item.trainingStatistics.professionalemails}
                    </span>
                    <span className="ms-2 ms-xxl-4 mt-xlg-1 mt-xxl-4 mt-lg-3 mt-2 fs-18 lh-20 word-break">
                      Engaged with {item.trainingStatistics.professionalemails}{" "}
                      professional emails
                    </span>
                  </div>
                </div>

                <div className="col-lg-3 col-md-3 col-5 p-0 mt-4 mt-md-0  mb-md-4 mb-lg-3">
                  <div className="border border-1 p-xxl-8 rounded p-4 mx-lg-4">
                    <img src={trainingicon4} alt="trainingicon4" width="100%" />
                  </div>

                  <div className="d-flex mx-lg-4">
                    <span className="green fs-1 fw-bold">
                      {item.trainingStatistics.kamaitoken}
                    </span>
                    <span className="ms-2 ms-xxl-4 mt-xlg-1 mt-xxl-4 mt-lg-3 mt-2 fs-18 lh-20">
                      Earned {item.trainingStatistics.kamaitoken} Kamai token
                    </span>
                  </div>
                </div>

                <div className="col-lg-3 col-md-3 col-5 p-0 mt-4 mt-md-0  mb-md-4 mb-lg-3">
                  <div className="border border-1 p-xxl-8 rounded p-4 mx-lg-4">
                    <img src={trainingicon4} alt="trainingicon4" width="100%" />
                  </div>

                  <div className="d-flex mx-lg-4 max-w-100">
                    <span className="green fs-1 fw-bold">
                      {item.trainingStatistics.workplacesimulation}
                    </span>
                    <span className="ms-2 ms-xxl-4 mt-xlg-1 mt-xxl-4 mt-lg-3 mt-2 fs-18 lh-20 word-break">
                      Spent {item.trainingStatistics.workplacesimulation} hours
                      in Workplace Simulation
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* mobile view */}
          </div>

          <div
            style={{
              width: "100%",
              position: "relative",
            }}
          >
            <div className="flare"></div>
          </div>
          <div className="border border-1 border-secondary rounded p-xxl-6 p-lg-5 p-md-4 p-3 ">
            <h2 className="text-uppercase fw-bold ls-8 mb-4 mb-xxl-6">
              Soft skills proficiency
            </h2>

            <div className="mb-5 mb-xxl-6">
              <h2 className="greenish  mb-4 mb-xxl-5 ">
                Creative Problem Solving
              </h2>

              <div className="custom-loader-wrapper mb-4 mb-md-0">
                <div className="circular-progress-capable skill">
                  <CircularProgressbar
                    value={item.softskills.skills.creativeProblemSolving}
                    text={`${item.softskills.skills.creativeProblemSolving}%`}
                    strokeWidth={10}
                    styles={buildStyles({
                      textSize: "14px",
                      pathColor: "#ffcd0c",
                      textColor: "#ffcd0c",
                      trailColor: "#2c2c2c",
                    })}
                  />
                </div>
              </div>
            </div>

            <div className=" mb-5 mb-xxl-6">
              <h2 className="greenish  m-0 ">Finding Smartest Alternative</h2>
              <div className="d-flex flex-column-reverse flex-md-row align-items-center justify-content-lg-between gap-md-3 gap-lg-0 align-items-center">
                <div className="d-md-flex pt-md-5 justify-content-between align-items-center w-85">
                  <div className="custom-loader-wrapper mb-4 mb-md-0">
                    <div className="circular-progress-capable">
                      <CircularProgressbar
                        value={item.softskills.smartestAlternative.capable}
                        text="Capable"
                        strokeWidth={10}
                        styles={buildStyles({
                          textSize: "14px",
                          pathColor: "#ffcd0c",
                          textColor: "#ffcd0c",
                          trailColor: "#2c2c2c",
                        })}
                      />
                      <p className="mb-0">Ask the Right Questions</p>
                    </div>
                  </div>
                  <div className="custom-loader-wrapper mb-4 mb-md-0">
                    <div className="circular-progress-impressive">
                      <CircularProgressbar
                        value={item.softskills.smartestAlternative.impressive}
                        text="Impressive"
                        strokeWidth={10}
                        styles={buildStyles({
                          textSize: "14px",
                          pathColor: "#00cbf8",
                          textColor: "#00cbf8",
                          trailColor: "#2c2c2c",
                        })}
                      />
                      <p className="mb-0">Breaking down the problem</p>
                    </div>
                  </div>
                  <div className="custom-loader-wrapper mb-4 mb-md-0">
                    <div className="circular-progress-exceptional">
                      <CircularProgressbar
                        value={item.softskills.smartestAlternative.exceptional}
                        text="Exceptional"
                        strokeWidth={10}
                        styles={buildStyles({
                          textSize: "14px",
                          pathColor: "#47dca5",
                          textColor: "#47dca5",
                          trailColor: "#2c2c2c",
                        })}
                      />
                      <p className="mb-0">Can connect unrelated dots</p>
                    </div>
                  </div>
                </div>

                <div className="w-xxl-6">
                  <img src={think} alt="think" width="100%" />
                </div>
              </div>
            </div>

            <div className="mb-5 mb-xxl-6">
              <h2 className="greenish  mb-4 ">Navigate lack of resources</h2>
              <div className="d-md-flex justify-content-lg-between gap-md-3 gap-lg-0 align-items-center ">
                <div className="mb-4 mb-md-0 w-xxl-6">
                  <img src={solve} alt="solve" width="100%" />
                </div>
                <div className="d-md-flex justify-content-between align-items-center w-55">
                  <div className="custom-loader-wrapper mb-4 mb-md-0">
                    <div className="circular-progress-capable">
                      <CircularProgressbar
                        value={item.softskills.existingIdeas.capable}
                        text="Capable"
                        strokeWidth={10}
                        styles={buildStyles({
                          textSize: "14px",
                          pathColor: "#ffcd0c",
                          textColor: "#ffcd0c",
                          trailColor: "#2c2c2c",
                        })}
                      />
                      <p className="mb-0">Ask the Right Questions</p>
                    </div>
                  </div>

                  <div className="custom-loader-wrapper mb-4 mb-md-0">
                    <div className="circular-progress-impressive">
                      <CircularProgressbar
                        value={item.softskills.existingIdeas.impressive}
                        text="Impressive"
                        strokeWidth={10}
                        styles={buildStyles({
                          textSize: "14px",
                          pathColor: "#00cbf8",
                          textColor: "#00cbf8",
                          trailColor: "#2c2c2c",
                        })}
                      />
                      <p className="mb-0">Breaking down the problem</p>
                    </div>
                  </div>
                  <div className="custom-loader-wrapper mb-4 mb-md-0">
                    <div className="circular-progress-exceptional">
                      <CircularProgressbar
                        value={item.softskills.existingIdeas.exceptional}
                        text="Exceptional"
                        strokeWidth={10}
                        styles={buildStyles({
                          textSize: "14px",
                          pathColor: "#47dca5",
                          textColor: "#47dca5",
                          trailColor: "#2c2c2c",
                        })}
                      />
                      <p className="mb-0">Can connect unrelated dots</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-between flex-column flex-md-row mb-5 mb-xxl-6">
              <div className="col-lg-3 col-md-3 col-12 p-0 mt-md-0  mb-5 mb-md-5 text-center text-md-start">
                <h4 className="fw-bold yellow mb-3">Capable</h4>
                <p className="m-0 fs-18">{item.softskills.capable}</p>
              </div>
              <div className="divider2 d-none d-md-block"></div>
              <div className="col-lg-3 col-md-3 col-12 p-0  mt-md-0 mb-5 mb-md-5  text-center text-md-start">
                <h4 className="fw-bold blue-green  mb-3">Impressive</h4>
                <p className="m-0 fs-18">{item.softskills.impressive}</p>
              </div>
              <div className="divider2 d-none d-md-block"></div>
              <div className="col-lg-3 col-md-3 col-12 p-0  mt-lg-0  mb-md-4 mb-lg-3  text-center text-md-start">
                <h4 className="fw-bold blue  mb-3">Exceptional</h4>
                <p className="m-0 fs-18">{item.softskills.exceptional}</p>
              </div>
            </div>

            {/* <div className="mb-5">
              <h2 className="greenish  m-lg-0 mb-3 ">
                Innovating with existing ideas
              </h2>

              <div className="d-flex flex-column-reverse flex-md-row justify-content-lg-between gap-md-3 gap-lg-0 align-items-center ">
                <div className="d-md-flex pt-md-5 justify-content-between align-items-center w-85">
                  <div className="custom-loader-wrapper mb-4 mb-md-0">
                    <div className="circular-progress-capable">
                      <CircularProgressbar
                        value={item.softskills.lackResources.capable}
                        text="Capable"
                        strokeWidth={10}
                        styles={buildStyles({
                          textSize: "14px",
                          pathColor: "#ffcd0c",
                          textColor: "#ffcd0c",
                          trailColor: "#2c2c2c",
                        })}
                      />
                      <p className="mb-0">Ask the Right Questions</p>
                    </div>
                  </div>
                  <div className="custom-loader-wrapper mb-4 mb-md-0">
                    <div className="circular-progress-impressive">
                      <CircularProgressbar
                        value={item.softskills.lackResources.impressive}
                        text="Impressive"
                        strokeWidth={10}
                        styles={buildStyles({
                          textSize: "14px",
                          pathColor: "#00cbf8",
                          textColor: "#00cbf8",
                          trailColor: "#2c2c2c",
                        })}
                      />
                      <p className="mb-0">Breaking down the problem</p>
                    </div>
                  </div>
                  <div className="custom-loader-wrapper mb-4 mb-md-0">
                    <div className="circular-progress-exceptional">
                      <CircularProgressbar
                        value={item.softskills.lackResources.exceptional}
                        text="Exceptional"
                        strokeWidth={10}
                        styles={buildStyles({
                          textSize: "14px",
                          pathColor: "#47dca5",
                          textColor: "#47dca5",
                          trailColor: "#2c2c2c",
                        })}
                      />
                      <p className="mb-0">Can connect unrelated dots</p>
                    </div>
                  </div>
                </div>

                <div className="mb-4 mb-md-0">
                  <img src={communicate} alt="communicate" width="100%" />
                </div>
              </div>
            </div> */}

            <div className=" mb-5 mb-xxl-6">
              <div className="d-flex justify-content-between ">
                <h4 className="text-uppercase fw-bold ls-8 ">job function</h4>

                <p className="m-0 fw-bold fs-18">
                  {item.jobFunction.filter(Boolean).length}/4
                </p>
              </div>
              <div className="d-flex justify-content-between flex-wrap mt-5  px-lg-5">
                {item.jobFunction.map((trait, idx) => (
                  <div
                    key={idx}
                    className="col-lg-2 col-md-2 col-5 p-0 mt-4 mt-md-0 mb-md-3 mb-lg-0"
                  >
                    <div
                      className={`border border-1 rounded-circle bg-green p-xxl-7 p-4 mx-lg-3 ${
                        trait ? " shadow-green" : " shadow-light-green"
                      }`}
                    >
                      <img
                        src={traitsIcons[idx]}
                        alt={`traitsicon${idx + 1}`}
                        width={idx === 1 ? "115%" : "100%"}
                      />
                    </div>
                    <p
                      className={`mb-0 text-center mt-3 fs-18 lh-20 ${
                        trait ? "text-white" : "text-secondary"
                      }`}
                    >
                      {traitsText[idx]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-uppercase fw-bold ls-8 mb-4 ">analysis</h2>

            {item.analysis
              .reduce((acc, analysis, index) => {
                const chunkIndex = Math.floor(index / 4);
                if (!acc[chunkIndex]) {
                  acc[chunkIndex] = [];
                }
                acc[chunkIndex].push(analysis);
                return acc;
              }, [])
              .map((chunk, chunkIndex) => (
                <div
                  className={"d-flex align-items-lg-center mb-5 mb-xxl-6"}
                  key={chunkIndex}
                >
                  {chunkIndex % 2 === 1 && (
                    <div className="neuroda1 d-none d-md-block">
                      <img src={neuroda} alt="neuroda" width="100%" />
                    </div>
                  )}
                  <div
                    className={
                      chunkIndex % 2 === 0
                        ? "soft-skills-wrapper"
                        : "soft-skills-wrapper1"
                    }
                  >
                    <div
                      className={`border border-1 border-secondary rounded shadow-violet ${
                        chunkIndex % 2 === 0 ? "soft-skills" : "soft-skills1"
                      }`}
                    >
                      <h2 className="greenish m-0 fs-sm-20 d-none d-md-block">
                        {chunkIndex === 0 || chunkIndex === 1
                          ? "Key workplace soft-skills competencies of the individual"
                          : "Key traits exhibited at the workplace"}
                      </h2>
                      <div className="d-md-none d-block">
                        <div className="d-flex align-items-center justify-content-between">
                          <h2 className="greenish m-0 fs-sm-20">
                            {chunkIndex === 0 || chunkIndex === 1
                              ? "Key workplace soft-skills competencies of the individual"
                              : "Key traits exhibited at the workplace"}
                          </h2>
                          <img src={neuroda} alt="neuroda" width="30%" />
                        </div>
                      </div>
                      <ul className="py-4 px-xxl-6 px-lg-5 px-md-4 ps-3 mb-0 padding-left">
                        {chunk.map((a, index) => (
                          <li className="mb-0 fs-18" key={index}>
                            {a}
                          </li>
                        ))}
                      </ul>
                      <div className="flare3"></div>
                      <div className="flare4"></div>
                    </div>
                  </div>
                  {chunkIndex % 2 === 0 && (
                    <div className="neuroda d-none d-md-block">
                      <img src={neuroda} alt="neuroda" width="100%" />
                    </div>
                  )}
                </div>
              ))}

            <div>
              <h4 className="text-center fw-bold text-uppercase">
                Achievable Badges
              </h4>
              <div className="d-md-flex justify-content-evenly align-items-center">
                {Object.keys(item.badges).map(
                  (badgeName, index) =>
                    item.badges[badgeName] &&
                    badgeIcons[badgeName] && ( // Ensure badge and badgeIcon exist
                      <div key={index} className="px-5 px-md-0 w-xxl-7">
                        <img
                          src={badgeIcons[badgeName]}
                          alt={badgeName}
                          width="100%"
                        />
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
          <div
            className="mb-3"
            style={{
              width: "100%",
              position: "relative",
            }}
          >
            <div className="flare2"></div>
          </div>

          <div
            style={{
              width: "100%",
              position: "relative",
            }}
          >
            <div className="flare"></div>
          </div>
          <div className="border border-1 border-secondary rounded p-xxl-6 p-lg-5 p-md-4 p-3 ">
            <div className="d-flex justify-content-between ">
              <h4 className="text-uppercase fw-bold mb-xxl-5 ls-8 d-none d-md-block">
                Unique workplace traits demonstrated
              </h4>
              <h6 className="text-uppercase fw-bold ls-8 d-md-none d-block">
                Unique workplace traits demonstrated
              </h6>

              <p className="m-0 fw-bold fs-18">
                {item.uniqueTraits.filter(Boolean).length}/4
              </p>
            </div>
            <div className="d-flex justify-content-between flex-wrap mt-5 px-lg-5">
              {item.uniqueTraits.map((trait, idx) => (
                <div
                  key={idx}
                  className="col-lg-2 col-md-2 col-5 p-0 mt-4 mt-md-0 mb-md-3 mb-lg-0"
                >
                  <div
                    className={`border border-1 rounded-circle bg-green p-xxl-7 p-4 mx-lg-3 ${
                      trait ? " shadow-green" : " shadow-light-green"
                    }`}
                  >
                    <img
                      src={traitsIcons[idx]}
                      alt={`traitsicon${idx + 1}`}
                      width={idx === 1 ? "115%" : "100%"}
                    />
                  </div>
                  <p
                    className={`mb-0 text-center mt-3 fs-18 lh-20 ${
                      trait ? "text-white" : "text-secondary"
                    }`}
                  >
                    {traitsText[idx]}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              width: "100%",
              position: "relative",
            }}
          >
            <div className="flare2"></div>
          </div>

          <div className="d-flex justify-content-between align-items-center px-lg-4 px-3 mt-3">
            <h5 className="fs-sm-12 mb-0">www.workverse.in</h5>
            <QRCode
              value={item.playerURL}
              size={50}
              level={"H"} // Error correction level
              includeMargin={true} // Add margin for better scanning
              bgColor={"#ffffff"}
              fgColor={"#000000"}
            />
          </div>
        </section>
      ))}
    </>
  );
}
