import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="home">
      <section className="hero-container">
        <Image
          className={""}
          src="/mfcStore1.jpg"
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
            src="/menu1.jpg"
            alt="Various sides"
            width={1600}
            height={1068}
            unoptimized
          />
          <div className="img-text-container">
            <h2>What's cookin'?</h2>
            <Link href="/menu">
              View Menu
            </Link>
          </div>
        </article>
        <article>
          <div className="img-text-container">
            <h2>Who are we?</h2>
            <a href="/about">Learn more</a>
          </div>
          <Image
            className={""}
            src="/aboutUs1.jpg"
            alt="Various sides"
            width={1600}
            height={1068}
            unoptimized
          />
        </article>
        <article>
          <Image
            className={""}
            src="/driveThru.jpg"
            alt="Various sides"
            width={1600}
            height={1068}
            unoptimized
          />
          <div className="img-text-container">
            <h2>Get in touch!</h2>
            <a href="/contact">Contact info</a>
          </div>
        </article>
      </section>
    </main>
  );
}
