function BgImage({ id }) {
  let image = false;
  try {
    image = `/img/Bg/bg_${id}.png`;
  } catch (err) {
    console.log(err.message);
    image = false;
  }

  return (
    <>
      {image && (
        <img src={image} alt='page backround' className='main-bg-img' />
      )}
    </>
  );
}
export default BgImage;
