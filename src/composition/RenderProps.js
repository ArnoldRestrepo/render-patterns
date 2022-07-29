const Header = (props) => {
  const renderFunction = props.render || props.children;
  return (
    <header className="Header">
      {renderFunction}
      {props.renderBanner()}
    </header>
  );
};

const Banner = ({title, description, imgSrc}) => { 
  return (
    <section className='Banner__container'>
      <h2 className='Banner__title'>{title}</h2>
      <p className='Banner__description'>{description}</p>
      <img src={imgSrc} alt={title} className='Banner__image' />
      <button className='Banner__button'>Buy</button>
    </section>
  )
}

const RenderProps = () => {
  return (
    <section className="RenderProps__container">
      <Header
        render={() => <h1 className='Header__title'>I'm a Maphone 13</h1>}
        renderBanner={() =>
          <Banner
            title={"Your New Superphone"}
            description={"A lightning‑fast chip. A leap in battery life. And all‑new photo and video capabilities. iPhone 13 lets you do things you never could before — in two great sizes."}
            imgSrc={"https://www.apple.com/v/iphone-13/h/images/key-features/hero/hero_green__rz0u5fdewmqq_medium_2x.jpg"}
        />}
      />
      {/* <Header
        renderBanner={() =>
          <Banner
            title={"Your New Superphone"}
            description={"A lightning‑fast chip. A leap in battery life. And all‑new photo and video capabilities. iPhone 13 lets you do things you never could before — in two great sizes."}
            imgSrc={"https://www.apple.com/v/iphone-13/h/images/key-features/hero/hero_green__rz0u5fdewmqq_medium_2x.jpg"}
        />}
      >
        <h1 className='Header__title'>I'm a Maphone 13</h1>
      </Header> */}

      <main className='Main'>
        <h1 className='Main__title'>I'm the main content</h1>
        <p className='Main__description'>I'm the description</p>
      </main>
    </section>
  )
}

export default RenderProps;