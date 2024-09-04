import ServicesItems from "../ServicesItems"

const Services = () => {
  return (
    <section id="services" className="max-md:bg-secondary max-[876px]:py-16 min-[878px]:p-24 lg:p-0">
      <div className="container relative overflow-visible z-40">
        <ServicesItems/>
      </div>
    </section>
  )
}

export default Services