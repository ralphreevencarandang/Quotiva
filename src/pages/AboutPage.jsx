const AboutPage = () => {
  return (
    <section className="max-container padding-x flex flex-col justify-center items-center">
      <h1 className="font-reenie text-6xl py-10">Quotiva</h1>
      <p className="text-justify max-w-[800px] font-montserrat text-lg">
        Welcome to <span className="font-bold ">Quotiva</span> — your daily dose of inspiration, motivation, and
        positivity. At Quotiva, we believe in the power of words to uplift,
        encourage, and transform your mindset. Whether you're starting your day,
        taking a break, or just looking for something meaningful, we’ve got you
        covered with fresh and powerful quotes.
      </p>

      <br/>
      <p className="text-justify max-w-[800px] font-montserrat text-lg ">
      Our sleek, minimalist design takes inspiration from SendTheSong, focusing on simplicity and good vibes.
      Built with React and powered by the ZenQuotes API, Quotiva is fast, clean, and all about spreading positivity — one quote at a time.
      </p>
    </section>
  );
};

export default AboutPage;
