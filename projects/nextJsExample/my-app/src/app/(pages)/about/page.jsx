import ReviewFrame from "@/app/components/ReviewFrame";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="about">
      <div className="header-image">
        <h1>About Us</h1>
      </div>
      <section className="story">
        <article>
          <h3>Our Story</h3>
          <p>
            Mountain Fried Chicken was founded in 1985 by "Chicken" Charlie
            Taylor in Winston-Salem, NC. Kyle Pope and Jeff Little, both avid
            golfers, became regulars at the Clemmons location in 2001, stopping
            by whenever they played nearby. Their love for the restaurant grew
            so much that they eventually had the opportunity to buy the Clemmons
            location, with Kyle taking over its management. In 2012, Kyle, his
            wife Rita, Jeff and Anita Little decided to move the restaurant
            closer to home in Hickory, NC. Since then, Kyle has been running the
            business, and the four owners have remained dedicated to serving the
            Hickory community with delicious, affordable chicken. More than just
            a restaurant, Mountain Fried Chicken has become a place where
            customers and employees alike feel like family.
          </p>
        </article>
        <article>
          <figure>
            <img
              src="owners.png"
              alt="(Left to right) Co-owners Jeff Little, Anita Little, Rita Pope, and Kyle Pope"
              loading="lazy"
            />
            <figcaption>
              <span>
                (Left to right) Co-owners Jeff Little, Anita Little, Rita Pope,
                and Kyle Pope
              </span>
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
