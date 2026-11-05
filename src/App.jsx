import { useMemo, useState } from "react";

const services = [
  {
    number: "01",
    title: "Asesoramiento fiscal",
    text: "Acompañamiento para gestionar obligaciones tributarias con rigor, previsión y criterio empresarial."
  },
  {
    number: "02",
    title: "Contabilidad",
    text: "Una visión ordenada y fiable de la información contable para entender mejor el negocio y decidir con seguridad."
  },
  {
    number: "03",
    title: "Consultoría fiscal",
    text: "Análisis personalizado de situaciones con impacto fiscal para encontrar la opción adecuada en cada momento."
  },
  {
    number: "04",
    title: "Consultoría de gestión",
    text: "Apoyo a la dirección para convertir información financiera y operativa en decisiones más claras."
  }
];

const steps = [
  ["01", "Entendemos tu empresa", "Analizamos la situación, las prioridades y la forma de trabajar de tu negocio."],
  ["02", "Ordenamos la información", "Centralizamos la documentación y establecemos un flujo de trabajo claro."],
  ["03", "Gestionamos con rigor", "Seguimiento contable y fiscal con especial atención a los plazos y al detalle."],
  ["04", "Te ayudamos a decidir", "Transformamos la información en contexto útil para la dirección de la empresa."]
];

export default function App() {
  const [sent, setSent] = useState(false);

  const year = useMemo(() => new Date().getFullYear(), []);

  const submit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Arauber Consultores, inicio">
          <span className="brand-mark">AC</span>
          <span className="brand-copy">
            <strong>Arauber</strong>
            <span>Consultores</span>
          </span>
        </a>

        <nav aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#metodo">Cómo trabajamos</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a className="header-cta" href="#contacto">Solicitar asesoramiento</a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grid" aria-hidden="true" />
        <div className="orb orb-one" aria-hidden="true" />
        <div className="orb orb-two" aria-hidden="true" />

        <div className="hero-copy">
          <div className="eyebrow">Asesoría fiscal · Contabilidad · Consultoría</div>
          <h1>
            Claridad fiscal.
            <span>Decisiones con confianza.</span>
          </h1>
          <p>
            Acompañamos a empresas con una gestión fiscal y contable rigurosa,
            cercana y orientada a convertir la información en mejores decisiones.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contacto">Hablemos de tu empresa</a>
            <a className="button button-ghost" href="#servicios">Descubrir servicios</a>
          </div>

          <div className="hero-note">
            <span className="pulse" />
            <span>Atención profesional y acompañamiento personalizado</span>
          </div>
        </div>

        <div className="hero-panel" aria-label="Áreas de trabajo">
          <div className="panel-kicker">Visión integral</div>
          <div className="panel-title">Gestión que conecta todas las piezas.</div>
          <div className="flow">
            <span>Documentación</span>
            <i />
            <span>Contabilidad</span>
            <i />
            <span>Fiscalidad</span>
            <i />
            <span>Decisión</span>
          </div>
          <div className="panel-card">
            <span>Enfoque</span>
            <strong>Rigor + cercanía + visión empresarial</strong>
          </div>
        </div>
      </section>

      <section className="intro section">
        <div className="section-label">Arauber Consultores</div>
        <div className="intro-grid">
          <h2>Más que gestionar números. Ayudamos a entenderlos.</h2>
          <p>
            La fiscalidad y la contabilidad no deberían sentirse como una carga aislada.
            Las convertimos en una base útil para trabajar con orden, anticiparse y tomar
            decisiones con más contexto.
          </p>
        </div>
      </section>

      <section className="section services" id="servicios">
        <div className="section-heading">
          <div>
            <div className="section-label">Servicios</div>
            <h2>Una visión completa para la gestión empresarial.</h2>
          </div>
          <p>Asesoramiento pensado para acompañar el día a día y también las decisiones importantes.</p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-top">
                <span>{service.number}</span>
                <span className="service-arrow">↗</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="statement">
        <div className="statement-track" aria-hidden="true">
          <span>Fiscalidad</span><i>•</i><span>Contabilidad</span><i>•</i>
          <span>Gestión</span><i>•</i><span>Estrategia</span><i>•</i>
          <span>Fiscalidad</span><i>•</i><span>Contabilidad</span>
        </div>
        <div className="statement-copy">
          <div className="section-label light">Una forma diferente de acompañar</div>
          <h2>Profesionalidad tradicional. Gestión adaptada al presente.</h2>
          <p>
            Procesos claros, información bien organizada y una relación cercana para que
            la empresa pueda centrarse en avanzar.
          </p>
        </div>
      </section>

      <section className="section method" id="metodo">
        <div className="section-heading">
          <div>
            <div className="section-label">Cómo trabajamos</div>
            <h2>Orden, seguimiento y contexto en cada paso.</h2>
          </div>
        </div>

        <div className="timeline">
          {steps.map(([number, title, text]) => (
            <article className="step" key={number}>
              <div className="step-number">{number}</div>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section" id="contacto">
        <div className="contact-copy">
          <div className="section-label light">Contacto</div>
          <h2>Hablemos de tu empresa.</h2>
          <p>
            Cuéntanos qué necesitas y estudiaremos cómo ayudarte desde una perspectiva
            fiscal, contable y empresarial.
          </p>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <label>
            Nombre
            <input name="name" placeholder="Tu nombre" required />
          </label>
          <label>
            Empresa
            <input name="company" placeholder="Nombre de la empresa" />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="nombre@empresa.com" required />
          </label>
          <label>
            ¿En qué podemos ayudarte?
            <textarea name="message" rows="4" placeholder="Cuéntanos brevemente qué necesitas" required />
          </label>
          <button className="button button-light" type="submit">Enviar consulta</button>
          {sent && (
            <p className="form-success" role="status">
              Consulta preparada. Conectaremos este formulario al canal definitivo antes de publicar la versión final.
            </p>
          )}
        </form>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-mark">AC</span>
          <span className="brand-copy">
            <strong>Arauber</strong>
            <span>Consultores</span>
          </span>
        </a>
        <p>Asesoramiento fiscal, contable y consultoría empresarial.</p>
        <span>© {year} Arauber Consultores</span>
      </footer>
    </main>
  );
}
