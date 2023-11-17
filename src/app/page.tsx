const Page = () => {
  return (
    <div
      className={
        'flex flex-col gap-4 p-2 items-center min-h-screen justify-center'
      }
    >
      <h1 className={'text-6xl text-amber-900 drop-shadow'}>Ende Neubau</h1>
      <div className={'z-10'}>
        <iframe
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
      </div>
    </div>
  );
};

export default Page;
