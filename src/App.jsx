import React, { useEffect, useMemo } from "react";
import { logoData } from "./logoData";

const services = [
  {
    number: "01",
    title: "Asesoramiento fiscal",
    text: "Planificación y seguimiento de las obligaciones tributarias con una visión práctica, rigurosa y adaptada a cada empresa."
  },
  {
    number: "02",
    title: "Contabilidad",
    text: "Información contable ordenada y fiable para conocer la situación del negocio y trabajar con mayor seguridad."
  },
  {
    number: "03",
    title: "Consultoría fiscal",
    text: "Análisis de operaciones y decisiones con impacto tributario para anticipar escenarios y reducir incertidumbre."
  },
  {
    number: "04",
    title: "Consultoría de gestión",
    text: "Apoyo a la dirección para convertir información financiera y operativa en decisiones empresariales mejor fundamentadas."
  }
];

const principles = [
  ["Rigor", "Cada decisión parte de información bien revisada y de un criterio profesional sólido."],
  ["Cercanía", "Una relación directa, clara y estable con las personas que conocen tu empresa."],
  ["Continuidad", "Acompañamiento pensado a largo plazo, no únicamente para resolver una obligación puntual."]
];

export default function App() {
  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="logo" href="#inicio" aria-label="Arauber Consultores, inicio">
          <img src={logoData} alt="Arauber Consultores" />
        </a>

        <nav aria-label="Navegación principal">
          <a href="#firma">La firma</a>
          <a href="#servicios">Servicios</a>
          <a href="#metodo">Cómo trabajamos</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a className="header-action" href="#contacto">Hablemos</a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy reveal" data-reveal>
          <p className="eyebrow">Asesoría fiscal · Contabilidad · Consultoría</p>
          <h1>
            Rigor para decidir
            <span>con confianza.</span>
          </h1>
          <p className="hero-lead">
            Acompañamos a empresas con una visión fiscal y contable clara,
            cercana y orientada a tomar mejores decisiones.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#contacto">Solicitar asesoramiento</a>
            <a className="text-link" href="#servicios">Conocer nuestros servicios <span>↘</span></a>
          </div>
        </div>

        <aside className="hero-trust reveal" data-reveal aria-label="Valores de Arauber Consultores">
          <p className="small-label">Una trayectoria consolidada</p>
          <h2>Confianza construida con criterio profesional y continuidad.</h2>
          <div className="trust-list">
            <div><span>01</span><strong>Experiencia</strong><p>Una firma con más de tres décadas de trayectoria empresarial.</p></div>
            <div><span>02</span><strong>Relación directa</strong><p>Asesoramiento cercano y comprensible para cada cliente.</p></div>
            <div><span>03</span><strong>Visión de empresa</strong><p>Fiscalidad y contabilidad al servicio de decisiones reales.</p></div>
          </div>
        </aside>
      </section>

      <section className="firm section" id="firma">
        <div className="section-index">01</div>
        <div className="firm-copy reveal" data-reveal>
          <p className="small-label">Arauber Consultores</p>
          <h2>Una asesoría que aporta claridad donde otros solo ven obligaciones.</h2>
        </div>
        <div className="firm-text reveal" data-reveal>
          <p>
            Nuestro trabajo parte de una idea sencilla: la información fiscal y contable
            debe ayudar a la empresa a avanzar, no convertirse en una carga.
          </p>
          <p>
            Por eso combinamos precisión técnica, seguimiento y una relación profesional
            estable para que cada decisión se tome con mayor contexto y tranquilidad.
          </p>
        </div>
      </section>

      <section className="services section" id="servicios">
        <div className="section-index">02</div>
        <div className="section-heading reveal" data-reveal>
          <p className="small-label">Áreas de trabajo</p>
          <h2>Asesoramiento integral para la gestión de tu empresa.</h2>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <article className="service-row reveal" data-reveal key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <span className="service-mark" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="method" id="metodo">
        <div className="method-inner">
          <div className="method-intro reveal" data-reveal>
            <p className="small-label light">Cómo trabajamos</p>
            <h2>La confianza no se promete. Se demuestra en la forma de trabajar.</h2>
            <p>
              Orden, seguimiento y criterio para que cada cliente tenga una visión clara
              de su situación y pueda centrarse en su negocio.
            </p>
          </div>

          <div className="principles">
            {principles.map(([title, text], index) => (
              <article className="principle reveal" data-reveal key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="confidence section">
        <div className="section-index">03</div>
        <div className="confidence-grid">
          <div className="reveal" data-reveal>
            <p className="small-label">Una relación a largo plazo</p>
            <h2>Solidez, sin ruido.</h2>
          </div>
          <blockquote className="reveal" data-reveal>
            “La mejor asesoría es la que consigue que una decisión compleja se entienda con claridad.”
          </blockquote>
        </div>
      </section>

      <section className="contact" id="contacto">
        <div className="contact-inner reveal" data-reveal>
          <p className="small-label light">Contacto</p>
          <h2>Hablemos de tu empresa.</h2>
          <p>
            Si buscas un acompañamiento fiscal, contable o de gestión con una relación
            profesional estable, podemos empezar por una conversación.
          </p>

          <div className="contact-actions">
            <a className="button button-light" href="tel:+34915783601">91 578 36 01</a>
            <span>C/ Albasanz, 67 · Madrid</span>
          </div>
        </div>
      </section>

      <footer>
        <a className="footer-logo" href="#inicio" aria-label="Arauber Consultores, volver al inicio">
          <img src={logoData} alt="Arauber Consultores" />
        </a>
        <p>Asesoramiento fiscal, contable y consultoría empresarial.</p>
        <span>© {year} Arauber Consultores</span>
      </footer>
    </main>
  );
}
