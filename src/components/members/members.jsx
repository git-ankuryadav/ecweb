/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import imageSrc1 from "../../assets/ecw-img/Manasvi.jpeg";
import imageSrc2 from "../../assets/ecw-img/Saumya.jpeg";
import "./members.css";

function Members() {
  let message = `There are many variations of passages of Lorem Ipsum available but the \n majority have suffered alteration in some injected humour.`;
  return (
    <section class="section-white">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h2 class="section-title">The ENGLISH CLUB Family</h2>

            <p class="section-subtitle">{message}</p>
          </div>

          <div class="col-sm-6 col-md-4">
            <div class="team-item">
              <img src={imageSrc1} class="team-img" alt="pic" />
              <h3>MANASVI SHARMA</h3>
              <div class="team-info">
                <p>Secretary</p>
              </div>
              <p>Electronics and Communication Engineering </p>
              <p>Rajasthan</p>
            </div>
          </div>

          <div class="col-sm-6 col-md-4">
            <div class="team-item">
              <img src={imageSrc2} class="team-img" alt="pic" />

              <h3>SAUMYA SONI</h3>

              <div class="team-info">
                <p>Convenor</p>
              </div>
              <p>Electrical Engineering</p>
              <p>Hamirpur, Himachal Pradesh</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Members;
