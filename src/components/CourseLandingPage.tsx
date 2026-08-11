"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  BadgeCheck,
  ChevronRight,
  CirclePlay,
  ClipboardCheck,
  CloudRain,
  Gauge,
  Menu,
  MessageCircle,
  MoveRight,
  Plane,
  Sprout,
  Target,
  Tractor,
  X,
} from "lucide-react";

const whatsappMessage = "Olá! Vi a página do Curso de Piloto de Drone Agrícola da GG Drones e gostaria de receber mais informações sobre a turma dos dias 18, 19 e 20 de setembro em Londrina.";
const courseWhatsAppUrl = `https://wa.me/5545991015512?text=${encodeURIComponent(whatsappMessage)}`;

const courseNav = [
  ["Formação", "#formacao"],
  ["Conteúdo", "#conteudo"],
  ["Método", "#metodo"],
  ["Para quem é", "#publico"],
  ["Data e local", "#turma"],
] as const;

const pillars = [
  [Target, "Conhecer o equipamento"],
  [ClipboardCheck, "Planejar a missão"],
  [CloudRain, "Avaliar as condições de voo"],
  [Gauge, "Meteorologia e segurança"],
  [BadgeCheck, "EPIs, checklist e boas práticas"],
  [Plane, "Legislação e prática operacional"],
] as const;

const learningTracks = [
  [Plane, "Fundamentos e pilotagem", "Fundamentos de pilotagem, estrutura, componentes e controles."],
  [Target, "Mapeamento e planejamento", "Mapeamento, aplicativos, definição de área e planejamento operacional."],
  [CloudRain, "Segurança e meteorologia", "Condições climáticas, checklist, segurança operacional e boas práticas."],
  [Gauge, "Equipamento e manutenção", "Inspeção, manutenção preventiva e cuidados com o equipamento."],
  [BadgeCheck, "Legislação", "Normas aplicáveis e os fundamentos para uma operação responsável."],
  [CirclePlay, "Simulador e campo", "Familiarização com controles, simuladores e experiência prática."],
] as const;

const audience = [
  [Sprout, "Iniciantes", "Para quem busca começar uma nova atuação."],
  [ClipboardCheck, "Estudantes e técnicos", "Para ampliar conhecimentos ligados ao agro e à tecnologia."],
  [Tractor, "Profissionais do agro", "Para incorporar drones à atuação que você já desenvolve."],
  [Target, "Prestadores de serviço", "Para construir base operacional para atuar com drones."],
  [BadgeCheck, "Produtores e empresas", "Para entender e utilizar melhor essa tecnologia na operação."],
] as const;

const applicationAreas = [
  "Propriedades rurais e operações próprias",
  "Empresas prestadoras de serviços",
  "Revendas e cooperativas",
  "Empresas do agronegócio",
  "Mapeamento e acompanhamento de lavouras",
  "Apoio a operações agrícolas",
] as const;

const courseMedia = [
  ["/media/curso/aula-turma.jpeg", "Turma em aula prática com drone agrícola"],
  ["/media/curso/aula-equipamento.jpeg", "Participantes conhecendo o equipamento"],
  ["/media/curso/seguranca-epi.jpeg", "Prática de segurança com equipamentos de proteção"],
  ["/media/curso/pratica-campo.jpeg", "Atividade prática em campo"],
  ["/media/curso/equipe-observando-drone.jpeg", "Equipe acompanhando um voo operacional"],
  ["/media/curso/turma-observando-voo.jpeg", "Participantes observando a demonstração de voo"],
  ["/media/curso/turma-acompanhando-voo.jpeg", "Turma acompanhando uma atividade com drone agrícola"],
] as const;

const entrance = (reducedMotion: boolean | null, delay = 0) => ({
  initial: reducedMotion ? false : { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const cardHover = (reducedMotion: boolean | null) => (
  reducedMotion ? undefined : { y: -7, scale: 1.012 }
);

function BrandLogo() {
  return (
    <span className="brand-logo" aria-label="GG Drones Pulverização">
      <Image src="/media/brand/logo-gg-drones-pulverizacao.png" alt="GG Drones Pulverização" width={500} height={188} sizes="(max-width: 767px) 142px, 220px" priority />
    </span>
  );
}

function CourseCta({ label = "QUERO INFORMAÇÕES PELO WHATSAPP", className = "" }: { label?: string; className?: string }) {
  return (
    <a className={`button button--lime course-cta ${className}`} href={courseWhatsAppUrl} target="_blank" rel="noreferrer">
      <MessageCircle size={18} aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}

function CourseHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className={`course-header ${scrolled ? "course-header--scrolled" : ""}`}>
      <div className="shell course-header__inner">
        <a href="#inicio" aria-label="Início do curso"><BrandLogo /></a>
        <nav className="course-header__nav" aria-label="Navegação da página do curso">
          {courseNav.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <div className="course-header__actions">
          <CourseCta label="FALAR COM A EQUIPE" />
          <button type="button" className="course-menu-button" onClick={() => setOpen(true)} aria-label="Abrir menu"><Menu size={22} /></button>
        </div>
      </div>
      {open && (
        <div className="course-mobile-menu" role="dialog" aria-modal="true" aria-label="Menu de navegação">
          <div className="course-mobile-menu__top">
            <BrandLogo />
            <button type="button" onClick={() => setOpen(false)} aria-label="Fechar menu"><X /></button>
          </div>
          <nav>
            {courseNav.map(([label, href], index) => (
              <a href={href} onClick={() => setOpen(false)} style={{ transitionDelay: `${index * 45}ms` }} key={href}>
                {label}<MoveRight size={18} aria-hidden="true" />
              </a>
            ))}
          </nav>
          <CourseCta className="course-mobile-menu__cta" />
        </div>
      )}
    </header>
  );
}

function CourseFooter() {
  return (
    <footer className="footer course-footer">
      <div className="shell footer__grid">
        <div>
          <BrandLogo />
          <p>Tecnologia, conhecimento e responsabilidade para formar novos profissionais do agro.</p>
          <small>Uma empresa do GG Group</small>
        </div>
        <div>
          <h3>NAVEGAÇÃO</h3>
          <a href="#formacao">A formação</a>
          <a href="#conteudo">O que você aprende</a>
          <a href="#metodo">Teoria, simulador e campo</a>
          <a href="#publico">Para quem é</a>
        </div>
        <div>
          <h3>FORMAÇÃO</h3>
          <span>Curso de Piloto de Drone Agrícola</span>
          <span>18, 19 e 20 de setembro</span>
          <span>Londrina — PR</span>
        </div>
        <div>
          <h3>ATENDIMENTO</h3>
          <span className="footer__whatsapp-label">WhatsApp</span>
          <a className="footer__phone" href={courseWhatsAppUrl} target="_blank" rel="noreferrer">(45) 99101-5512</a>
          <a className="footer__cta" href={courseWhatsAppUrl} target="_blank" rel="noreferrer">QUERO MAIS INFORMAÇÕES</a>
        </div>
      </div>
      <div className="shell footer__bottom">
        <span>© 2026 GG Drones Pulverização. Todos os direitos reservados.</span>
        <span className="footer__legal">Política de Privacidade <i /> Termos de Uso <i /> Cookies</span>
      </div>
    </footer>
  );
}

export function CourseLandingPage() {
  const reducedMotion = useReducedMotion();

  return (
    <main className="course-page">
      <CourseHeader />

      <section className="course-hero" id="inicio">
        <div className="course-hero__media" aria-hidden="true">
          <Image src="/media/curso/hero-curso-equipe-wide.png" alt="" fill priority sizes="100vw" />
        </div>
        <div className="course-hero__overlay" aria-hidden="true" />
        <div className="course-hero__grid" aria-hidden="true" />
        <div className="shell course-hero__layout">
          <motion.div className="course-hero__content" {...entrance(reducedMotion, 0.06)}>
            <span className="eyebrow">FORMAÇÃO PROFISSIONAL • LONDRINA</span>
            <p className="course-hero__date">18, 19 e 20 de setembro • 2026</p>
            <h1>Curso de Piloto de <em>Drone Agrícola</em> em Londrina</h1>
            <p className="course-hero__statement">Pilotar não é operar.</p>
            <p className="course-hero__intro">Prepare-se para compreender uma operação agrícola de forma completa, unindo conhecimento técnico, planejamento, segurança, simuladores e experiência prática em campo.</p>
            <div className="course-hero__actions">
              <CourseCta />
              <a className="course-hero__location" href="#turma"><BadgeCheck size={18} aria-hidden="true" /><span>LONDRINA • PARANÁ</span></a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section course-foundation" id="formacao">
        <div className="shell course-foundation__layout">
          <motion.div className="course-foundation__copy" {...entrance(reducedMotion)}>
            <span className="eyebrow">MAIS DO QUE PILOTAGEM</span>
            <h2>Saber pilotar é <em>apenas o começo.</em></h2>
            <p>Uma operação profissional exige leitura de cenário, técnica, responsabilidade e decisões bem planejadas. A formação conecta a prática de pilotagem à realidade de uma operação agrícola.</p>
          </motion.div>
          <motion.div className="course-pillars" {...entrance(reducedMotion, 0.08)}>
            {pillars.map(([Icon, text], index) => (
              <motion.article whileHover={cardHover(reducedMotion)} key={text}>
                <span>0{index + 1}</span><Icon size={22} aria-hidden="true" /><p>{text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section section--paper course-learning" id="conteudo">
        <div className="shell">
          <motion.div className="section-heading section-heading--center" {...entrance(reducedMotion)}>
            <span className="eyebrow">CONTEÚDO DA FORMAÇÃO</span>
            <h2>Uma formação conectada à <em>realidade do campo.</em></h2>
            <p>Conhecimento aplicado para entender cada etapa que está por trás de uma operação agrícola com drones.</p>
          </motion.div>
          <div className="course-learning__grid">
            {learningTracks.map(([Icon, title, text], index) => (
              <motion.article {...entrance(reducedMotion, index * 0.06)} whileHover={cardHover(reducedMotion)} key={title}>
                <span className="course-learning__icon"><Icon size={25} aria-hidden="true" /></span>
                <span className="course-learning__number">0{index + 1}</span>
                <h3>{title}</h3><p>{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section course-method" id="metodo">
        <div className="shell course-method__layout">
          <motion.div className="course-method__intro" {...entrance(reducedMotion)}>
            <span className="eyebrow">FORMAÇÃO NA PRÁTICA</span>
            <h2>Drone agrícola não se aprende apenas <em>dentro de uma sala.</em></h2>
            <p>Conhecimento, treino e vivência acompanhada em um percurso pensado para aproximar você da rotina operacional.</p>
          </motion.div>
          <motion.div className="course-method__image" {...entrance(reducedMotion, 0.08)} whileHover={cardHover(reducedMotion)}>
            <Image src="/media/curso/aula-turma.jpeg" alt="Turma reunida em aula prática com equipamento agrícola" fill sizes="(max-width: 900px) 100vw, 45vw" />
            <span>APRENDER • TESTAR • APLICAR</span>
          </motion.div>
          <div className="course-method__steps">
            {[
              ["01", "Teoria", "Conhecimento sobre equipamento, planejamento, segurança e operação."],
              ["02", "Simulação", "Familiarização com controles e desenvolvimento da capacidade operacional."],
              ["03", "Campo", "Contato com equipamentos e experiência prática acompanhada."],
            ].map(([number, title, text], index) => (
              <motion.article {...entrance(reducedMotion, 0.12 + index * 0.08)} whileHover={cardHover(reducedMotion)} key={number}>
                <span>{number}</span><h3>{title}</h3><p>{text}</p><ChevronRight size={20} aria-hidden="true" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper course-audience" id="publico">
        <div className="shell">
          <motion.div className="section-heading" {...entrance(reducedMotion)}>
            <span className="eyebrow">QUEM PODE PARTICIPAR</span>
            <h2>Para quem deseja entrar ou evoluir no mercado de <em>drones agrícolas.</em></h2>
          </motion.div>
          <div className="course-audience__grid">
            {audience.map(([Icon, title, text], index) => (
              <motion.article {...entrance(reducedMotion, index * 0.07)} whileHover={cardHover(reducedMotion)} key={title}>
                <Icon size={25} aria-hidden="true" /><h3>{title}</h3><p>{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section course-possibilities">
        <div className="shell course-possibilities__layout">
          <motion.div {...entrance(reducedMotion)}>
            <span className="eyebrow">CONHECIMENTO APLICADO</span>
            <h2>Onde esse conhecimento pode ser <em>aplicado?</em></h2>
            <p>Entenda melhor as possibilidades relacionadas a operações agrícolas com drones e amplie sua visão sobre a tecnologia no campo.</p>
          </motion.div>
          <motion.div className="course-possibilities__list" {...entrance(reducedMotion, 0.08)}>
            {applicationAreas.map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}
          </motion.div>
          <p className="course-possibilities__notice">A formação é parte da preparação profissional. A atuação também depende de prática, experiência e das regularizações aplicáveis a cada atividade.</p>
        </div>
      </section>

      <section className="section section--paper course-gallery" aria-label="Imagens da formação">
        <div className="shell">
          <motion.div className="section-heading section-heading--center" {...entrance(reducedMotion)}>
            <span className="eyebrow">VIVÊNCIA EM CAMPO</span>
            <h2>Conhecimento que sai do papel.</h2>
          </motion.div>
          <div className="course-gallery__grid">
            {courseMedia.map(([src, alt], index) => (
              <motion.figure {...entrance(reducedMotion, index * 0.06)} whileHover={cardHover(reducedMotion)} className={`course-gallery__item course-gallery__item--${index + 1}`} key={src}>
                <Image src={src} alt={alt} fill sizes="(max-width: 767px) 80vw, (max-width: 1000px) 45vw, 29vw" />
              </motion.figure>
            ))}
          </div>
          <div className="course-videos" aria-label="Vídeos da formação">
            {["01", "02", "03"].map((number, index) => (
              <motion.article {...entrance(reducedMotion, index * 0.08)} whileHover={cardHover(reducedMotion)} key={number}>
                <video controls playsInline preload="metadata" poster="/media/curso/pratica-campo.jpeg">
                  <source src={`/media/curso/pratica-em-campo-${number}.mp4`} type="video/mp4" />
                  Seu navegador não suporta vídeo HTML5.
                </video>
                <span><CirclePlay size={17} aria-hidden="true" /> PRÁTICA EM CAMPO</span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section course-class" id="turma">
        <div className="shell">
          <motion.div className="course-class__card" {...entrance(reducedMotion)}>
            <div className="course-class__background" aria-hidden="true"><Image src="/media/curso/pilotos-em-campo.jpeg" alt="" fill sizes="100vw" /></div>
            <div className="course-class__content">
              <span className="eyebrow">PRIMEIRA TURMA</span>
              <h2><b>18, 19 E 20</b><em>SETEMBRO</em><small>2026</small></h2>
              <div className="course-class__info"><strong>Londrina • Paraná</strong><p>Para informações sobre investimento, condições, estrutura do curso e demais dúvidas, fale diretamente com nossa equipe.</p></div>
              <CourseCta label="FALAR COM A GG DRONES" className="course-class__cta" />
            </div>
          </motion.div>
        </div>
      </section>

      <CourseFooter />
    </main>
  );
}
