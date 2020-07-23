import React from "react";

const Sidebar = () => {
  return (
    <nav id="similing-yoga-sidebar">
      <div className="similing-yoga-square"></div>
      <div className="similing-yoga-therapy-head">THERAPY-</div>
      <ul className="list-unstyled">
        <li className="d-flex align-items-center">
          <h6 className="similing-yoga-text--cstm-m-0  similing-yoga-db-nav-color--secondary ">
            MEDITATION
          </h6>
        </li>
        <li className="d-flex align-items-center mb-4">
          <h6 className="similing-yoga-text--cstm-m-0 similing-yoga-db-nav-color--secondary ">
            SMILING YOGA
          </h6>
        </li>
        <li className="d-flex align-items-center mb-4">
          <h6 className="similing-yoga-text--cstm-m-0 similing-yoga-db-nav-color--secondary ">
            ANGER MANAGEMENT
          </h6>
        </li>
        <li className="d-flex align-items-center mb-4">
          <h6 className="similing-yoga-text--cstm-m-0 similing-yoga-db-nav-color--secondary ">
            MUSIC THERAPY
          </h6>
        </li>
      </ul>
    </nav>
  );
};
export default Sidebar;
