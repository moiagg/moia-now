import { Component } from "react";
import Link from "next/link";
import { Template } from "../src/components/common";
class AboutPage extends Component {
  static getInitialProps() {
    const isServer = typeof window === "undefined";
    return { isServer };
  }

  render() {
    return (
      <Template className={"container mx-auto mt-5 h-100"}>
        <main>
          <section>
            <p>
              This is another page of the SSR example, you accessed it{" "}
              <strong>{this.props.isServer ? "server" : "client"} side</strong>.
            </p>
            <p>You can reload to see how the page change.</p>
            <Link href="/">
              <a>Go to Home</a>
            </Link>
          </section>
        </main>
      </Template>
    );
  }
}

export default AboutPage;
