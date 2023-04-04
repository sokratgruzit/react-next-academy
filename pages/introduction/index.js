import styles from "../../styles/Introduction/Introduction.module.scss";
import { fetchData } from "@/queries";
import parse from "html-react-parser";
import Link from "next/link";

export const getStaticProps = async () => {
  const intro = await fetchData(
    `${process.env.NEXT_PUBLIC_DATA_URL}/api/data/introduction`
  );
  const params = { editor: intro.data?.result ?? null };

  return {
    props: {
      params,
    },
  };
};

const Introduction = ({ params }) => {
  return (
    <div className={styles.getStarted}>
      <div className="textStyles">
        <br />
        <br />
        <div className="container">
          <h1>Intoduction</h1>
        </div>
        <br />
        <br />
        <div className={styles.content}>
          <div>
            <p>
              Our goal is to educate the masses on the exciting potential of
              blockchain and cryptocurrency technology. Here, you'll find
              several multilingual articles covering every aspect of blockchain
              and cryptocurrency technology - ranging from computer security to
              economics.
            </p>
            <br />
            <p>
              We know that it can be daunting to learn something new. So, this
              guide will give you a gentle introduction to some of the key
              concepts that will help you kick-start your journey into the
              revolutionary world of blockchain technology.
            </p>
          </div>
        </div>
        {params && params.editor && (
          <div className="textStyles">
            <div className={styles.gradient}>
              <div className="aligning">{parse(params.editor)}</div>
            </div>
          </div>
        )}
        <div className={styles.gradient}>
          <div className="aligning container">
            <br />
            <br />
            <h4>Let's get started.</h4>
            <br />
            <br />
            <h3>What is a cryptocurrency?</h3>
            <br />
            <br />
            <p>
              A cryptocurrency is basically like a sort of digital cash. You can
              use it to pay for that new T-shirt you've been eyeing, pay for a
              night out with your friends, or even pay for your travel and
              accommodation when you go on holiday. Since a cryptocurrency is
              digital, it can be sent to friends and family across the globe.{" "}
            </p>
            <br />
            <p>
              However, the way cryptocurrency is transferred worldwide is not
              like any of the traditional methods we know, like PayPal. It's a
              lot more interesting!
            </p>
            <br />
            <p>
              What separates cryptocurrency from traditional payment gateways is
              that no single organization owns the cryptocurrency payment
              gateway. So, when you want to spend funds or send money, you don't
              need to ask an organization to transfer it for you on your behalf.
              Instead, you, your friends, and thousands of others can act as
              your own bank by running some free software. When you run this
              software, your computer connects directly with other people's
              computers. So, the need for a middleman is completely removed.
            </p>
            <br />
            <p>
              You don't need to sign up on a website or open an account to get
              started using a cryptocurrency. Instead, you can just download one
              of the many applications available on your smartphone. You can
              then start sending and receiving cryptocurrency almost
              immediately.
            </p>
            <br />
            <br />
            <br />
            <br />
            <h3>Why is it called a cryptocurrency?</h3>
            <br />
            <br />
            <p>
              A cryptocurrency is a combination of cryptography and currency.
              This is why it is called a cryptocurrency. It's a revolutionary
              new form of digital cash that uses advanced math to secure your
              funds so that nobody else can spend them.
            </p>
            <br />
            <p>
              It isn't really necessary to understand all of this since the
              applications that you download will handle all of the complexities
              in the background. You won't even know what is happening in the
              underlying layer of these applications.
            </p>
            <br />
            <p>
              If you do want to learn more about the cryptography side of
              cryptocurrency, then take a look at some of our articles:
            </p>
            <br />
            <Link href="/articles">Articles</Link>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
