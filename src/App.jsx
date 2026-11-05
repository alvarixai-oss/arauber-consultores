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

const workSteps = [
  ["01", "Entendemos tu empresa", "Partimos de tu actividad, tus prioridades y la realidad de tu negocio."],
  ["02", "Ordenamos la información", "Damos estructura a la documentación y a los datos que sostienen cada decisión."],
  ["03", "Cumplimos y anticipamos", "Seguimos obligaciones, plazos y cambios normativos con criterio y previsión."],
  ["04", "Te ayudamos a planificar", "Convertimos la información fiscal y contable en contexto útil para decidir."]
];

const fiscalUpdates = [
  {
    date: "Octubre 2026",
    tag: "Facturación",
    title: "VERI*FACTU: nuevos plazos para adaptar los sistemas de facturación",
    text: "Las entidades sujetas al Impuesto sobre Sociedades deberán tener sus sistemas adaptados antes del 1 de enero de 2027.",
    href: "https://sede.agenciatributaria.gob.es/Sede/iva/sistemas-informaticos-facturacion-verifactu.html"
  },
  {
    date: "Octubre 2026",
    tag: "Empresa",
    title: "Factura electrónica: comienza el calendario de implantación",
    text: "La entrada en vigor de la Orden HAC/1028/2026 activa los plazos de aplicación de la factura electrónica entre empresas.",
    href: "https://sede.agenciatributaria.gob.es/Sede/iva/factura-electronica/calendario-implantacion.html"
  },
  {
    date: "2026",
    tag: "Sociedades",
    title: "Tipos del Impuesto sobre Sociedades aplicables en 2026",
    text: "La Agencia Tributaria recoge los tipos vigentes para el ejercicio, con especial atención a micropymes y entidades de reducida dimensión.",
    href: "https://sede.agenciatributaria.gob.es/Sede/impuesto-sobre-sociedades/que-base-imponible-se-determina-sociedades/tipo-impositivo.html"
  }
];

export default function App() {
  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }
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
          <a href="#actualidad">Actualidad</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a className="header-action" href="#contacto">Hablemos</a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-silk" aria-hidden="true" />
        <div className="hero-vignette" aria-hidden="true" />

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

      <section className="credibility-strip" aria-label="Trayectoria y áreas de especialización">
        <div><strong>Desde 1992</strong><span>Acompañando a empresas</span></div>
        <div><strong>Fiscal</strong><span>Asesoramiento y planificación</span></div>
        <div><strong>Contable</strong><span>Información clara y ordenada</span></div>
        <div><strong>Gestión</strong><span>Contexto para decidir</span></div>
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
            {workSteps.map(([number, title, text]) => (
              <article className="principle reveal" data-reveal key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="fiscal section" id="actualidad">
        <div className="section-index">03</div>
        <div className="section-heading reveal" data-reveal>
          <p className="small-label">Actualidad fiscal</p>
          <h2>Lo importante, explicado con claridad.</h2>
          <p className="section-intro">
            Una selección breve de cambios y fechas que pueden afectar a empresas y profesionales.
          </p>
        </div>

        <div className="fiscal-list">
          {fiscalUpdates.map((item) => (
            <a className="fiscal-row reveal" data-reveal href={item.href} target="_blank" rel="noreferrer" key={item.title}>
              <div className="fiscal-meta">
                <span>{item.date}</span>
                <strong>{item.tag}</strong>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="fiscal-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
        <p className="fiscal-source reveal" data-reveal>Información basada en publicaciones oficiales de la Agencia Tributaria.</p>
      </section>

      <section className="confidence section">
        <div className="section-index">04</div>
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
