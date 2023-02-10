function ArticleImgs() {
  const ARTICLE_IMG = [
    {
      img: "/img/Article/article1.png",
    },
    {
      img: "/img/Article/article2.png",
    },
    {
      img: "/img/Article/article3.png",
    },
    {
      img: "/img/Article/article4.png",
    },
    {
      img: "/img/Article/article5.png",
    },
    {
      img: "/img/Article/article6.png",
    },
    {
      img: "/img/Article/article7.png",
    },
    {
      img: "/img/Article/article8.png",
    },
    {
      img: "/img/Article/article9.png",
    },
    {
      img: "/img/Article/article10.png",
    },
    {
      img: "/img/Article/article11.png",
    },
    {
      img: "/img/Article/article12.png",
    },
    {
      img: "/img/Article/article13.png",
    },
  ];

  return (
    <div>
      {ARTICLE_IMG.map((item, index) => (
        <img
          key={index}
          src={item.img}
          alt="articleImage"
          className="img-absolute"
        />
      ))}
    </div>
  );
}

export default ArticleImgs;
