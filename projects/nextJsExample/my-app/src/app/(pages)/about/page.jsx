import ReviewFrame from "@/app/components/ReviewFrame";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="about">
      <div className="header-image">
        <h1>About Us</h1>
      </div>
      {/* Story about business, plus employee pics */}
      <section className="story">
        <article>
          <h3>Our Story</h3>
          <p>
            Mountain Fried Chicken was created in 1985 by "Chicken" Charlie
            Taylor in Winston-Salem, NC. Brother-in-laws Kyle Pope and Jeff
            Little, avid golfers, would stop by the Clemmons location in the
            2000s while golfing nearby. They became quick fans of the
            restaurant, so much so that Kyle eventually began running the
            Clemmons location. In 2012, Kyle, along with his wife Rita, her
            sister Anita Little, and Jeff, Anita's husband, they had the idea of
            moving the restaurant closer to home in Hickory, NC. Since that
            time, the four owners have been passionate about pleasing the
            customers in the surrounding Hickory area with fair-priced,
            delicious chicken. Customers and employees alike feel at home and
            part of the Mountain Fried Chicken family.
          </p>
          {/* About Us notes
            Kyle and Jeff used to golf in Clemmons and eat at MFC, always talked about having it in Hickory.
            Kyle was laid off, we bought it, and ran it in Clemmons for a while.
            In 2012, opened a new one in Hickory.
            Passionate about pleasing customers.
            Fair priced
            Employees make it feel like home.
            Customers feel like part of the family.
          */}
        </article>
        {/* The Carolina Foodie Review - https://www.facebook.com/share/p/15aNb43sfN/ */}
        <article>
          <figure>
            <img
              src="owners1.jpg"
              alt="Left to right, Rita Pope and Anita Little"
              loading="lazy"
            />
            <figcaption>
              <span>Co-owners Rita Pope and Anita Little</span>
            </figcaption>
          </figure>
        </article>
      </section>
      <section className="highlights">
        <h3>Western NC Flood Relief</h3>
        <p>
          In late September of 2024, western North Carolina, along with regions
          of Tennessee, Georgia, and South Carolina, experienced devastating
          flooding due to Hurricane Helene. As a foothills-based North Carolina
          restaurant, this event impacted our friends, family, and neighbors
          directly. In October, we held a fundraising event at Mountain Fried
          Chicken for the victims of Helene, raising $5,000, and 100% of our
          proceeds from this event were donated directly to reputable charities
          supporting the victims and areas affected.
        </p>
        <div className="img-gallery">
          <img src="floodRelief1.jpeg" alt="Flood Relief Event" />
          <img src="floodRelief2.jpeg" alt="Flood Relief Event" />
          <img src="floodRelief3.jpeg" alt="Flood Relief Event" />
          <img src="floodRelief4.jpeg" alt="Flood Relief Event" />
        </div>
      </section>
      <section className="reviews">
        <h3>Reviews</h3>
        {/* <video height="281" width="500" preload="auto" style={{ display: 'block' }} className="_ox1 _21y0" data-video-width="500" data-video-height="281" id="u_0_5_bD" src="blob:https://www.facebook.com/f0e6c4a8-4d05-429d-a0bf-21b872245444"></video> */}
        <div className="review-container">
          <div className="review">
            <h5>
              Carolina Foodie <div className="date">January 8, 2024</div>
            </h5>
            <blockquote>
              Some tender, juicy chicken... I like the seasoning
            </blockquote>
            <p>
              Will visited Mountain Fried Chicken based on his viewer
              suggestions, and he loved our homemade chicken and tater wedges.
              For the full review, please visit{" "}
              <a
                href="https://www.facebook.com/williamwesleyhawn/posts/pfbid0eotscNMjKow6c7pHDiop8idsDtB288kAxG7MoiEiukLmgumsTiSgLsMPM99ac4sgl"
                target="_blank"
              >
                his Facebook video here
              </a>
              .
            </p>
            {/* <video>
              <source src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fwilliamwesleyhawn%2Fposts%2Fpfbid0eotscNMjKow6c7pHDiop8idsDtB288kAxG7MoiEiukLmgumsTiSgLsMPM99ac4sgl&show_text=true&width=500" />
            </video> */}

            {/* <ReviewFrame url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fwilliamwesleyhawn%2Fposts%2Fpfbid0eotscNMjKow6c7pHDiop8idsDtB288kAxG7MoiEiukLmgumsTiSgLsMPM99ac4sgl&show_text=true&width=500" /> */}
          </div>
          <div className="review">
            <h5>
              Carter's Eat <div className="date">February 6, 2023</div>
            </h5>
            <blockquote>
              Mmm, mmm... their potato wedges... ridiculous!
            </blockquote>
            <p>
              The Carters found us and swung by to try our chicken, wedges, and
              green beans. For the full review, please visit{" "}
              <a
                href="https://www.youtube.com/embed/nllNDaVmdvs?si=UBL_NnYNZU-hjjWJ"
                target="_blank"
              >
                their YouTube video here
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
