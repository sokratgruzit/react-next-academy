import { useRouter } from "next/router";
import parse from "html-react-parser";
import Moment from "react-moment";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { fetchData } from "@/utils/queries";
import { Facebook, GitHub, Linkedin, Twitter, ShareLink } from "@/svg";
import Articles from "@/components/Articles/Articles";

import styles from "../../styles/Articles/Slug.module.scss";
import Link from "next/link";

export const getStaticPaths = async () => {
  const articles = await fetchData(
    `${process.env.NEXT_PUBLIC_DATA_URL}/api/data/articles?limit=0`
  );
  const paths = articles?.data?.map((item) => ({
    params: {
      slug: item?.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug || undefined;
  const { data: article } = await fetchData(
    `${process.env.NEXT_PUBLIC_DATA_URL}/api/data/articles/${slug}`
  );

  //this should work but we dont have any featured carts yet :)
  // const { data: featured } = await fetchData(
  //   `${process.env.NEXT_PUBLIC_DATA_URL}/api/data/articles?category=62fb6bd0ab723fa8b038fcdf&limit=3`
  // );

  //i will leave this one for a short period of time :)

  return {
    props: article,
  };
};

const Article = ({ article, featured }) => {
  const router = useRouter();
  const data = article || null;
  useEffect(() => {
    Aos.init({ duration: 700 });
  }),
    [];

  const icons = (
    <div className={styles.icons}>
      <div className={styles.lightIcons}>
        <a
          className={styles.socialIconLink}
          href={"facebook.com"}
          target="_blank"
        >
          <Facebook className={styles.socialIcon} />
        </a>
        <a
          className={styles.socialIconLink}
          href={"facebook.com"}
          target="_blank"
        >
          <Twitter className={styles.socialIcon} />
        </a>
        <a
          className={styles.socialIconLink}
          href={"facebook.com"}
          target="_blank"
        >
          <Linkedin className={styles.socialIcon} />
        </a>
        <a
          className={styles.socialIconLink}
          href={"facebook.com"}
          target="_blank"
        >
          <GitHub className={styles.socialIcon} />
        </a>
        <a
          className={styles.socialIconLink}
          href={"facebook.com"}
          target="_blank"
        >
          <ShareLink className={styles.socialIcon} />
        </a>
      </div>
    </div>
  );
  return (
    <div>
      {data && (
        <div className={styles.articlePage}>
          <div className={styles.top}>
            <div className={`${styles.infoDiv} container`}>
              <h1 className={styles.title}>{data?.title}</h1>
              <div className={styles.info}>
                {data?.level && (
                  <div
                    className={`${
                      styles.item
                    } lev-item-simple ${data?.level?.title.toLowerCase()}`}
                  >
                    {data?.level?.title}
                  </div>
                )}
                {data?.tag?.length > 0 && (
                  <div className={`${styles.item} lev-item-simple`}>
                    {data?.tag[0]?.title}
                  </div>
                )}
                <div className={styles.item}>
                  <div className={styles.icon}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.71795 3.69231C4.38154 3.69231 4.10257 3.41333 4.10257 3.07692V0.615385C4.10257 0.278974 4.38154 0 4.71795 0C5.05436 0 5.33334 0.278974 5.33334 0.615385V3.07692C5.33334 3.41333 5.05436 3.69231 4.71795 3.69231Z"
                        fill="white"
                      ></path>
                      <path
                        d="M11.2824 3.69231C10.946 3.69231 10.667 3.41333 10.667 3.07692V0.615385C10.667 0.278974 10.946 0 11.2824 0C11.6188 0 11.8978 0.278974 11.8978 0.615385V3.07692C11.8978 3.41333 11.6188 3.69231 11.2824 3.69231Z"
                        fill="white"
                      ></path>
                      <path
                        d="M14.9743 6.03399H1.02554C0.689131 6.03399 0.410156 5.75502 0.410156 5.41861C0.410156 5.0822 0.689131 4.80322 1.02554 4.80322H14.9743C15.3107 4.80322 15.5896 5.0822 15.5896 5.41861C15.5896 5.75502 15.3107 6.03399 14.9743 6.03399Z"
                        fill="white"
                      ></path>
                      <path
                        d="M11.2821 16.001H4.71795C1.72308 16.001 0 14.4501 0 11.7546V5.47733C0 2.78181 1.72308 1.23096 4.71795 1.23096H11.2821C14.2769 1.23096 16 2.78181 16 5.47733V11.7546C16 14.4501 14.2769 16.001 11.2821 16.001ZM4.71795 2.33871C2.37128 2.33871 1.23077 3.36522 1.23077 5.47733V11.7546C1.23077 13.8667 2.37128 14.8932 4.71795 14.8932H11.2821C13.6287 14.8932 14.7692 13.8667 14.7692 11.7546V5.47733C14.7692 3.36522 13.6287 2.33871 11.2821 2.33871H4.71795Z"
                        fill="white"
                      ></path>
                      <path
                        d="M5.12813 9.94864C5.02146 9.94864 4.9148 9.92403 4.81634 9.883C4.71787 9.84198 4.62762 9.78454 4.54557 9.71069C4.47172 9.62864 4.41428 9.53839 4.37326 9.43992C4.33111 9.34131 4.30881 9.23536 4.30762 9.12813C4.30762 8.9148 4.39787 8.70146 4.54557 8.54557C4.62762 8.47172 4.71787 8.41428 4.81634 8.37326C4.96403 8.30762 5.12813 8.29121 5.29223 8.32403C5.34146 8.33223 5.39069 8.34864 5.43992 8.37326C5.48916 8.38967 5.53839 8.41428 5.58762 8.4471L5.71069 8.54557C5.74351 8.58659 5.78454 8.62762 5.80916 8.66864C5.84198 8.71787 5.86659 8.7671 5.883 8.81633C5.90762 8.86557 5.92403 8.9148 5.93223 8.96403C5.94044 9.02146 5.94864 9.07069 5.94864 9.12813C5.94864 9.34146 5.85839 9.5548 5.71069 9.71069C5.5548 9.85839 5.34146 9.94864 5.12813 9.94864Z"
                        fill="white"
                      ></path>
                      <path
                        d="M8.0002 9.94822C7.78687 9.94822 7.57353 9.85796 7.41764 9.71027L7.31917 9.58719C7.2881 9.54147 7.26326 9.4918 7.24533 9.4395C7.22163 9.39301 7.20503 9.34322 7.1961 9.29181C7.18789 9.23437 7.17969 9.18514 7.17969 9.12771C7.17969 9.02104 7.2043 8.91437 7.24533 8.81591C7.28635 8.71745 7.34379 8.62719 7.41764 8.54514C7.64738 8.3154 8.01661 8.24155 8.312 8.37283C8.41866 8.41386 8.50071 8.4713 8.58276 8.54514C8.73046 8.70104 8.82071 8.91437 8.82071 9.12771C8.82071 9.18514 8.81251 9.23437 8.8043 9.29181C8.7961 9.34104 8.77969 9.39027 8.75507 9.4395C8.73866 9.48873 8.71405 9.53796 8.68123 9.58719L8.58276 9.71027C8.50071 9.78412 8.41866 9.84155 8.312 9.88258C8.21353 9.9236 8.10687 9.94822 8.0002 9.94822Z"
                        fill="white"
                      ></path>
                      <path
                        d="M5.12813 12.8203C5.02146 12.8203 4.9148 12.7957 4.81634 12.7546C4.71787 12.7136 4.62762 12.6562 4.54557 12.5823C4.47172 12.5003 4.41428 12.4182 4.37326 12.3116C4.33111 12.213 4.30881 12.107 4.30762 11.9998C4.30762 11.7864 4.39787 11.5731 4.54557 11.4172C4.62762 11.3434 4.71787 11.2859 4.81634 11.2449C5.11992 11.1136 5.48095 11.1875 5.71069 11.4172C5.74351 11.4582 5.78454 11.4993 5.80916 11.5403C5.84198 11.5895 5.86659 11.6388 5.883 11.688C5.90762 11.7372 5.92403 11.7864 5.93223 11.8439C5.94044 11.8931 5.94864 11.9505 5.94864 11.9998C5.94864 12.2131 5.85839 12.4264 5.71069 12.5823C5.5548 12.73 5.34146 12.8203 5.12813 12.8203Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                  <Moment className={styles.value} format="Do/MMM/YYYY">
                    {data?.createdAt}
                  </Moment>
                </div>
                <div className={styles.item}>
                  <div className={styles.iconDate}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 16.0005C3.58698 16.0005 0 12.4135 0 8.00049C0 3.58747 3.58698 0.000488281 8 0.000488281C12.413 0.000488281 16 3.58747 16 8.00049C16 12.4135 12.413 16.0005 8 16.0005ZM8 1.11677C4.20465 1.11677 1.11628 4.20514 1.11628 8.00049C1.11628 11.7958 4.20465 14.8842 8 14.8842C11.7953 14.8842 14.8837 11.7958 14.8837 8.00049C14.8837 4.20514 11.7953 1.11677 8 1.11677Z"
                        fill="white"
                      ></path>
                      <path
                        d="M7.99928 12.0713C6.95742 12.0713 5.91556 11.6769 5.11928 10.8806C4.9109 10.6722 4.72486 10.4415 4.5537 10.1662C4.47573 10.0408 4.45075 9.88966 4.48425 9.74591C4.51774 9.60216 4.60697 9.47761 4.7323 9.39964C4.85763 9.32168 5.0088 9.2967 5.15255 9.3302C5.29629 9.36369 5.42085 9.45292 5.49881 9.57825C5.62532 9.78662 5.75928 9.95034 5.90811 10.0992C6.46302 10.6532 7.21512 10.9644 7.99928 10.9644C8.78343 10.9644 9.53553 10.6532 10.0904 10.0992C10.537 9.65267 10.8197 9.0722 10.9165 8.42476C10.9611 8.11964 11.2439 7.89639 11.549 7.94848C11.8542 7.99313 12.0625 8.27592 12.0253 8.58104C11.8988 9.46662 11.5044 10.2629 10.8867 10.888C10.1173 11.6467 9.0799 12.0718 7.99928 12.0713Z"
                        fill="white"
                      ></path>
                      <path
                        d="M4.53221 8.06013C4.50245 8.06013 4.48012 8.06013 4.45035 8.05269C4.30346 8.03166 4.17087 7.9533 4.08161 7.83475C3.99235 7.7162 3.95368 7.56712 3.97408 7.42013C4.10059 6.53455 4.49501 5.73827 5.11268 5.11315C6.6978 3.52804 9.28012 3.52804 10.8727 5.11315C11.0811 5.32153 11.2671 5.55222 11.4383 5.83501C11.4769 5.89707 11.5029 5.96612 11.5148 6.03823C11.5267 6.11034 11.5243 6.18408 11.5077 6.25526C11.4911 6.32644 11.4607 6.39365 11.4181 6.45306C11.3756 6.51248 11.3217 6.56292 11.2597 6.60153C11.1976 6.64013 11.1285 6.66613 11.0564 6.67805C10.9843 6.68996 10.9106 6.68756 10.8394 6.67097C10.7682 6.65439 10.701 6.62395 10.6416 6.58139C10.5822 6.53882 10.5317 6.48498 10.4931 6.42292C10.3666 6.22199 10.2327 6.05083 10.0838 5.90199C9.52894 5.34794 8.77683 5.03674 7.99268 5.03674C7.20853 5.03674 6.45642 5.34794 5.90152 5.90199C5.45501 6.3485 5.17221 6.92897 5.07547 7.57641C5.0457 7.8592 4.80756 8.06013 4.53221 8.06013Z"
                        fill="white"
                      ></path>
                      <path
                        d="M4.88919 12.4133C4.58408 12.4133 4.33105 12.1603 4.33105 11.8552V9.8682C4.33105 9.56308 4.58408 9.31006 4.88919 9.31006H6.87617C7.18129 9.31006 7.43431 9.56308 7.43431 9.8682C7.43431 10.1733 7.18129 10.4263 6.87617 10.4263H5.44733V11.8552C5.44733 12.1603 5.20175 12.4133 4.88919 12.4133Z"
                        fill="white"
                      ></path>
                      <path
                        d="M11.1105 6.69066H9.12357C8.81845 6.69066 8.56543 6.43763 8.56543 6.13252C8.56543 5.8274 8.81845 5.57438 9.12357 5.57438H10.5524V4.14554C10.5524 3.84043 10.8054 3.5874 11.1105 3.5874C11.4157 3.5874 11.6687 3.84043 11.6687 4.14554V6.13252C11.6687 6.44508 11.4157 6.69066 11.1105 6.69066Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                  <Moment className={styles.value} format="Do/MMM/YYYY">
                    {data?.updatedAt}
                  </Moment>
                </div>
                <div className={styles.item}>
                  <div className={styles.icon}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 16.0005C3.58698 16.0005 0 12.4135 0 8.00049C0 3.58747 3.58698 0.000488281 8 0.000488281C12.413 0.000488281 16 3.58747 16 8.00049C16 12.4135 12.413 16.0005 8 16.0005ZM8 1.11677C4.20465 1.11677 1.11628 4.20514 1.11628 8.00049C1.11628 11.7958 4.20465 14.8842 8 14.8842C11.7953 14.8842 14.8837 11.7958 14.8837 8.00049C14.8837 4.20514 11.7953 1.11677 8 1.11677Z"
                        fill="white"
                      ></path>
                      <path
                        d="M10.7608 10.9248C10.6605 10.9266 10.5619 10.898 10.478 10.8429L8.17104 9.46617C7.59801 9.12384 7.17383 8.37221 7.17383 7.70989V4.65873C7.17383 4.35361 7.42685 4.10059 7.73197 4.10059C8.03708 4.10059 8.29011 4.35361 8.29011 4.65873V7.70989C8.29011 7.97779 8.51336 8.37221 8.74406 8.50617L11.051 9.88291C11.3189 10.0392 11.4008 10.3815 11.2445 10.6494C11.1939 10.7326 11.123 10.8016 11.0383 10.8498C10.9537 10.898 10.8582 10.9238 10.7608 10.9248Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                  <span className={styles.value}>{data?.duration} MIN</span>
                </div>
              </div>
              {icons}
            </div>
            <div className={styles.imgBox}>
              <img
                src={data?.image?.path}
                alt={data?.image?.alt}
                className={styles.imgBoxImg}
              />
            </div>
            <div className="container">
              <div className={styles.top}>
                <div className={styles.backBtn} onClick={() => router.back()}>
                  <svg
                    width="14"
                    height="11"
                    viewBox="0 0 14 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M-2.18557e-07 5.5C-2.28619e-07 5.26981 0.0914429 5.04905 0.254213 4.88628L4.38628 0.754214C4.72523 0.415263 5.27477 0.415263 5.61372 0.754214C5.95267 1.09316 5.95267 1.64271 5.61372 1.98166L2.09539 5.5L5.61372 9.01834C5.95268 9.35729 5.95268 9.90684 5.61372 10.2458C5.27477 10.5847 4.72523 10.5847 4.38628 10.2458L0.254213 6.11372C0.091443 5.95095 -2.08495e-07 5.73019 -2.18557e-07 5.5Z"
                      fill="#FF7152"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.113281 5.50023C0.113281 5.02088 0.50187 4.63229 0.981219 4.63229L12.438 4.63229C12.9173 4.63229 13.3059 5.02088 13.3059 5.50023C13.3059 5.97957 12.9173 6.36816 12.438 6.36816L0.981219 6.36816C0.50187 6.36816 0.113281 5.97958 0.113281 5.50023Z"
                      fill="#FF7152"
                    />
                  </svg>
                  <p>Back Topics</p>
                </div>
              </div>
            </div>
            <div className={`${styles.content} content textStyles container`}>
              {parse(data?.editor ? data?.editor : "")}
            </div>
            <div className={styles.categoryTags} data-aos="fade-up">
              {icons}
              <div className={styles.tags}>
                <div className={styles.pins}>
                  {data?.tag?.length
                    ? data.tag.map((tag) => {
                        return (
                          <div
                            className="white-cat-item"
                            key={tag._id + "hash"}
                          >
                            {tag.title}
                          </div>
                        );
                      })
                    : ""}
                  {data?.category?._id && (
                    <div
                      className={`white-cat-item-border ${styles.whiteCatItemBorder}`}
                    >
                      {data?.category?._id ? data?.category.title : ""}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.exploreArticles} data-aos="fade-up">
              <h2>Explore More</h2>

              {featured && featured?.docs.length ? (
                <div className={styles.featured}>
                  <Articles data={featured} />
                </div>
              ) : (
                "and i oOoP"
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Article;
