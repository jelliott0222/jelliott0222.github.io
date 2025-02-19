import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import InclementWeather from "@/app/components/InclementWeather";

export default function Contact() {
  const hours = [
    {
      day: "Sunday",
      time: "Closed",
    },
    {
      day: "Monday",
      time: "10:30 a.m. - 8:00 p.m.",
    },
    {
      day: "Tuesday",
      time: "10:30 a.m. - 8:00 p.m.",
    },
    {
      day: "Wednesday",
      time: "10:30 a.m. - 8:00 p.m.",
    },
    {
      day: "Thursday",
      time: "10:30 a.m. - 8:00 p.m.",
    },
    {
      day: "Friday",
      time: "10:30 a.m. - 8:00 p.m.",
    },
    {
      day: "Saturday",
      time: "10:30 a.m. - 8:00 p.m.",
    },
  ];
  return (
    <main className="contact">
      <InclementWeather />
      <div className="header-image">
        <h1>Hours and Information</h1>
      </div>
      <section className="hours">
        <h3>Operating Hours</h3>
        {hours.map((h, key) => (
          <div key={key} className="hour-row">
            <span className="day">{h.day}</span>
            <span className="time">{h.time}</span>
          </div>
        ))}
      </section>
      <section className="contact">
        <h3>Get in touch</h3>
        <div className="contact-row">
          <div className="contact-item">
            <a href="tel:8288551333">
              Call us at <Icon icon={faPhone} /> 828.855.1333
            </a>
          </div>
          <div className="contact-item">
            <a href="mailto:mfckpope@yahoo.com">
              Email us at <Icon icon={faEnvelope} /> mfckpope@yahoo.com
            </a>
          </div>
          <div className="contact-item">
            <a
              href="https://www.facebook.com/MountainFriedChickenHickory"
              target="_blank"
            >
              Follow us at <Icon icon={faFacebook} size="xs" /> Facebook
            </a>
          </div>
        </div>
      </section>
      <section className="location">
        <h3>Address</h3>
        <a href="https://maps.google.com/maps?ll=35.721916,-81.36229&z=16&t=m&hl=en&gl=US&mapclient=embed&cid=16942308676621993663">
          <Icon icon={faMapMarkerAlt} />
          <address>
            1263 U.S. Hwy 70 SW
            <br />
            Hickory, NC 28602
          </address>
        </a>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.174940039006!2d-81.36229019999999!3d35.7219159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88512e47842fd2fd%3A0xeb1f2bfa291286bf!2sMOUNTAIN%20Fried%20Chicken!5e0!3m2!1sen!2sus!4v1737066513814!5m2!1sen!2sus"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
}
