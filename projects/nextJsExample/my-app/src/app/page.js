import {
  faCloudShowersHeavy,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  function formatDate(date) {
    return Intl.DateTimeFormat("en-US", {
      dateStyle: "long",
      timeZone: "America/New_York",
    }).format(date);
  }
  const today = new Date();
  const todayFormatted = formatDate(today);
  const weatherDate = "February 20, 2025";
  const weatherDateFormatted = formatDate(new Date(weatherDate));
  return (
    <main className="home">
      {todayFormatted === weatherDateFormatted && (
        <div className="inclement-weather">
          <Icon icon={faCloudShowersHeavy} />
          <div className="inclement-weather-text">
            Due to inclement weather in our area, we will be closed on{" "}
            {weatherDate}. Thank you for your understanding!
          </div>
          <Icon icon={faSnowflake} />
        </div>
      )}
      <section className="hero-container">
        <Image
          className={""}
          src="mfcStore1.jpg"
          alt="Mountain Fried Chicken storefront image"
          width={1600}
          height={1068}
          unoptimized
        />
        <div className="hero-heading-backdrop">
          <h1>Hickory's Best Fried Chicken Restaurant</h1>
        </div>
      </section>
      <section className="body">
        <article>
          <Image
            className={""}
            src="menu1.jpg"
            alt="Various sides"
            width={1600}
            height={1068}
            unoptimized
          />
          <div className="img-text-container">
            <h2>What's cookin'?</h2>
            <Link href="/menu">View Menu</Link>
          </div>
        </article>
        <article>
          <div className="img-text-container">
            <h2>Who are we?</h2>
            <a href="/about">Learn more</a>
          </div>
          <Image
            className={""}
            src="owners.png"
            alt="Various sides"
            width={1600}
            height={1068}
            unoptimized
          />
        </article>
        <article>
          <Image
            className={""}
            src="driveThru.jpg"
            alt="Various sides"
            width={1600}
            height={1068}
            unoptimized
          />
          <div className="img-text-container">
            <h2>Get in touch!</h2>
            <p>
              Monday - Saturday
              <br />
              11:30 a.m. - 8:00 p.m.
            </p>
            <a href="/contact">Hours and Location Info</a>
          </div>
        </article>
      </section>
    </main>
  );
}
