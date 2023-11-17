const Page = () => {
  return (
    <div
      className={
        'flex flex-col gap-4 p-2 items-center min-h-screen justify-center'
      }
    >
      <h1 className={'text-6xl text-amber-900 drop-shadow'}>Ende Neubau</h1>
      <div className={'z-10 min-w-min'}>
        <iframe
          className={'mb-2'}
          style={{
            borderRadius: 12,
          }}
          src="https://open.spotify.com/embed/album/1w0iwhTHKZD8fbHLXDuX1B?utm_source=generator"
          width="100%"
          height="352"
          allowFullScreen={false}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <p className={'text-amber-900 text-2xl mb-2'}>
          {'Dolce Vita - das neue Album von Ende Neubau!'}
        </p>
        <p className={'text-amber-900 text-4xl mb-2'}>{'Check it out now!'}</p>
      </div>
    </div>
  );
};

export default Page;
