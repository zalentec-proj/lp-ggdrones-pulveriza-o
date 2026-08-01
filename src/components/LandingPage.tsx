"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CirclePlay,
  CloudRain,
  Droplets,
  Menu,
  Mountain,
  MoveRight,
  Plane,
  ShieldCheck,
  Sprout,
  Tractor,
  Waves,
  X,
} from "lucide-react";
import { aircraft, benefits, faq, navItems, regulators, steps, whatsappUrl } from "@/content/site";
import { formatSprayingTime, parseBrazilianNumber, type DroneModel } from "@/lib/calculator";

const benefitIcons = [Tractor, CloudRain, Mountain, Droplets, Waves, Sprout];
const modelNames: Record<DroneModel, string> = { t10: "Agras T10", t20p: "Agras T20P", t40: "Agras T40" };

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className={`wordmark ${light ? "wordmark--light" : ""}`} aria-label="GG Drones Pulverização">
      <span className="wordmark__mark"><Plane aria-hidden="true" size={16} /></span>
      <span><b>GG DRONES</b><small>PULVERIZAÇÃO</small></span>
    </span>
  );
}

function WhatsAppCta({ label = "SOLICITAR ORÇAMENTO", className = "", compact = false }: { label?: string; className?: string; compact?: boolean }) {
  return <a className={`button button--lime ${compact ? "button--compact" : ""} ${className}`} href={whatsappUrl} target="_blank" rel="noreferrer"><span>{label}</span><ArrowUpRight size={compact ? 14 : 16} aria-hidden="true" /></a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="shell header__inner">
        <a href="#inicio" className="header__brand"><Wordmark light /></a>
        <nav className="header__nav" aria-label="Navegação principal">
          {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <div className="header__actions"><WhatsAppCta compact /><button className="menu-button" onClick={() => setOpen(true)} aria-label="Abrir menu"><Menu size={22} /></button></div>
      </div>
      {open && <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu de navegação">
        <div className="mobile-menu__top"><Wordmark light /><button className="icon-button" onClick={() => setOpen(false)} aria-label="Fechar menu"><X /></button></div>
        <nav>{navItems.map(([label, href], index) => <a style={{ transitionDelay: `${index * 40}ms` }} href={href} onClick={() => setOpen(false)} key={href}>{label}<MoveRight size={18} /></a>)}</nav>
        <WhatsAppCta className="mobile-menu__cta" />
      </div>}
    </header>
  );
}

function HeroVideo() {
  return <div className="hero__media" aria-hidden="true">
    <Image src="/media/hero/hero-drone.png" alt="" fill preload loading="eager" sizes="100vw" className="hero__poster" />
  </div>;
}

function ProcessTimeline() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 70%"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return <section className="section section--process" id="como-funciona" ref={ref}>
    <div className="shell">
      <div className="section-heading section-heading--center section-heading--light"><span className="eyebrow">OPERAÇÃO PLANEJADA</span><h2>Do planejamento<br />ao relatório</h2></div>
      <div className="timeline">
        <div className="timeline__rail" aria-hidden="true"><motion.i style={{ scaleY: reducedMotion ? 1 : lineScale }} /></div>
        {steps.map(([number, title, text, percentage], index) => <article className={`timeline__item timeline__item--${index % 2 ? "right" : "left"}`} key={number}>
          <span className="timeline__dot" aria-hidden="true" />
          <div className="timeline__content"><span className="timeline__number">{number}</span><h3>{title}</h3><p>{text}</p><strong>{percentage}</strong></div>
        </article>)}
        <div className="timeline__complete"><BadgeCheck size={18} /> Operação concluída</div>
      </div>
    </div>
  </section>;
}

function Calculator() {
  const [model, setModel] = useState<DroneModel>("t20p");
  const [areaText, setAreaText] = useState("40");
  const area = parseBrazilianNumber(areaText);
  const result = area ? formatSprayingTime(area, model) : null;
  return <section className="section section--paper" id="calculadora">
    <div className="shell"><div className="section-heading section-heading--center"><span className="eyebrow">SIMULAÇÃO RÁPIDA</span><h2>Quanto tempo sua área pode levar?</h2></div>
      <div className="calculator">
        <div className="calculator__inputs"><label><span>MODELO DO DRONE</span><select value={model} onChange={(event) => setModel(event.target.value as DroneModel)} aria-label="Modelo do drone"><option value="t10">DJI Agras T10</option><option value="t20p">DJI Agras T20P</option><option value="t40">DJI Agras T40</option></select></label>
          <label><span>ÁREA TOTAL (HECTARES)</span><input inputMode="decimal" min="0.1" placeholder="Ex.: 40" value={areaText} onChange={(event) => setAreaText(event.target.value)} aria-label="Área total em hectares" /></label></div>
        <div className="calculator__result"><span>TEMPO ESTIMADO</span><output aria-live="polite">{result ?? "—"}</output><p>{area ? `Estimativa para pulverizar ${area.toLocaleString("pt-BR")} hectares com o ${modelNames[model]}.` : "Informe uma área válida para calcular."}</p></div>
      </div><p className="calculator__notice">O tempo real pode variar conforme as condições da operação.</p>
    </div>
  </section>;
}

function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const images = [
    ["/media/gallery/operacao-drone.png", "Pulverização de precisão"],
    ["/media/hero/hero-drone.png", "Drone agrícola em operação"],
    ["/media/gallery/operacao-drone.png", "Preparação da operação"],
    ["/media/hero/hero-drone.png", "Mapeamento da área"],
    ["/media/gallery/operacao-drone.png", "Planejamento no campo"],
  ];
  useEffect(() => {
    if (active === null) return;
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setActive(null); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);
  return <section className="section section--paper" id="galeria"><div className="shell"><div className="section-heading"><span className="eyebrow">GG DRONES EM AÇÃO</span><h2>Nossa operação <em>no campo</em></h2><p>Do planejamento à aplicação, cada etapa é conduzida com precisão, segurança e atenção aos detalhes.</p></div>
    <div className="gallery">{images.map(([src, alt], index) => <button className={`gallery__item gallery__item--${index + 1}`} onClick={() => setActive(index)} key={`${src}-${index}`} aria-label={`Ampliar: ${alt}`}><Image src={src} alt={alt} fill sizes="(max-width: 767px) 78vw, (max-width: 1100px) 50vw, 33vw" /><span><CirclePlay size={30} /></span></button>)}</div>
    <p className="gallery__footnote">Planejamento, tecnologia e responsabilidade em cada aplicação.</p></div>
    {active !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={images[active][1]} onClick={() => setActive(null)}><div className="lightbox__content" onClick={(event) => event.stopPropagation()}><Image src={images[active][0]} alt={images[active][1]} width={1920} height={1080} sizes="90vw" /><button ref={closeRef} className="lightbox__close" onClick={() => setActive(null)} aria-label="Fechar visualização"><X /></button><button className="lightbox__previous" onClick={() => setActive((active + images.length - 1) % images.length)} aria-label="Imagem anterior"><ChevronLeft /></button><button className="lightbox__next" onClick={() => setActive((active + 1) % images.length)} aria-label="Próxima imagem"><ChevronRight /></button></div></div>}
  </section>;
}

export function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return <main>
    <Header />
    <section className="hero" id="inicio"><HeroVideo /><div className="hero__overlay" /><div className="shell hero__content"><p className="hero__kicker">GG DRONES PULVERIZAÇÃO <i /> CASCAVEL — PR</p><h1>Precisão que<br /><em>transforma o campo</em></h1><p className="hero__intro">Pulverização com drones agrícolas para mais eficiência, economia e produtividade.</p><div className="hero__buttons"><WhatsAppCta /><a className="button button--ghost" href="#galeria"><CirclePlay size={18} aria-hidden="true" /> CONHEÇA A OPERAÇÃO</a></div></div>
      <div className="shell hero__trust">{[["Aplicação", "precisa"], ["Sem amassamento", "da cultura"], ["Operação", "planejada"], ["Relatório", "da aplicação"]].map(([top, bottom]) => <span key={top}><Check size={18} aria-hidden="true" /><b>{top}</b> {bottom}</span>)}</div>
    </section>

    <section className="section section--paper" id="beneficios"><div className="shell"><div className="section-heading section-heading--center"><span className="eyebrow">POR QUE USAR DRONES?</span><h2>Benefícios que fazem<br />diferença <em>no campo</em></h2><p>Mais agilidade, precisão e acesso para uma operação agrícola mais eficiente.</p></div><div className="benefit-grid">{benefits.map(([title, text], index) => { const Icon = benefitIcons[index]; return <article className="benefit-card" key={title}><div className="benefit-card__photo"><Image src={index % 2 ? "/media/gallery/operacao-drone.png" : "/media/hero/hero-drone.png"} alt="" fill sizes="(max-width: 767px) 100vw, 33vw" /><Icon aria-hidden="true" size={26} /></div><h3>{title}</h3><p>{text}</p></article>; })}</div></div></section>

    <ProcessTimeline />
    <Calculator />

    <section className="section fleet" id="aeronaves"><div className="shell"><div className="section-heading section-heading--center section-heading--light"><span className="eyebrow">TECNOLOGIA PARA CADA OPERAÇÃO</span><h2>Quais aeronaves operamos</h2><p>Selecionamos o equipamento mais adequado de acordo com a área, o terreno e o objetivo da aplicação.</p></div><div className="fleet__grid">{aircraft.map(([alias, model, title, text, indicator], index) => <article className="aircraft-card" key={model}><div className="aircraft-card__image"><Image src={index % 2 ? "/media/gallery/operacao-drone.png" : "/media/hero/hero-drone.png"} alt="Drone agrícola em voo" fill sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 25vw" /><span>{alias}</span></div><h3>{model}</h3><h4>{title}</h4><p>{text}</p><b>{indicator}</b></article>)}</div><p className="fleet__notice">A produtividade pode variar conforme as condições e os parâmetros da operação.</p></div></section>

    <section className="section section--paper compliance" id="regularizacao"><div className="shell"><div className="section-heading section-heading--center"><span className="eyebrow">OPERAÇÃO RESPONSÁVEL</span><h2>Segurança e <em>regularização</em></h2><p>Cada operação deve seguir os requisitos e as autorizações aplicáveis.</p></div><div className="regulators" aria-label="Órgãos relacionados à regulamentação da atividade">{regulators.map((name) => <span key={name}>{name}</span>)}</div><p className="compliance__note">Órgãos relacionados à regulamentação da atividade. As marcas não representam parceria ou endosso.</p></div></section>

    <section className="section testimonials" id="depoimentos"><div className="shell"><div className="section-heading section-heading--center section-heading--light"><span className="eyebrow">EXPERIÊNCIAS NO CAMPO</span><h2>Quem confia, recomenda</h2><p>Este espaço será preenchido com relatos reais de produtores atendidos pela GG Drones Pulverização.</p></div><div className="testimonial-grid">{["Depoimento sobre a qualidade da aplicação.", "Depoimento sobre agilidade e produtividade.", "Depoimento sobre atendimento e segurança."].map((quote, index) => <article key={quote}><span>0{index + 1}</span><blockquote>“{quote}”</blockquote><hr /><small>DEPOIMENTO A CONFIRMAR</small><p>Produtor rural • Nome e propriedade pendentes</p></article>)}</div><p className="testimonials__note">Publicaremos somente avaliações autorizadas pelos clientes.</p></div></section>

    <Gallery />

    <section className="section faq" id="faq"><div className="shell faq__layout"><div className="faq__aside"><span className="eyebrow">TIRE SUAS DÚVIDAS</span><h2>Perguntas<br />frequentes</h2><p>Reunimos as principais dúvidas sobre atendimento, operação e contratação dos serviços com drones.</p><div><h3>Ainda ficou com alguma dúvida?</h3><WhatsAppCta label="FALAR COM UM ESPECIALISTA" compact /></div></div><div className="faq__items">{faq.map(([question, answer], index) => <article className={openFaq === index ? "faq-item faq-item--open" : "faq-item"} key={question}><h3><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index} aria-controls={`answer-${index}`}><span>{question}</span><ChevronDown aria-hidden="true" /></button></h3><div id={`answer-${index}`} hidden={openFaq !== index}><p>{answer}</p></div></article>)}</div></div></section>

    <section className="final-cta" id="contato"><Image src="/media/hero/hero-drone.png" alt="" fill sizes="100vw" /><div className="final-cta__overlay" /><div className="shell final-cta__content"><span className="eyebrow">FALE COM NOSSA EQUIPE</span><h2>Sua área merece uma <em>aplicação mais precisa.</em></h2><p>Conte com planejamento, tecnologia e uma operação preparada para as necessidades do seu campo.</p><WhatsAppCta label="FALAR COM UM ESPECIALISTA" /><small>Atendimento direto pelo WhatsApp</small></div></section>

    <section className="section section--paper group" id="gg-group"><div className="shell"><div className="section-heading section-heading--center"><span className="eyebrow">GG GROUP</span><h2>Conheça as empresas do GG Group</h2></div><div className="group__grid"><article className="group-card group-card--current"><Wordmark /><h3>GG Drones Pulverização</h3><p>Serviços agrícolas com drones</p><b>VOCÊ ESTÁ AQUI</b></article><article className="group-card"><span className="group-card__wordmark">GG DRONES<br />ASSISTÊNCIA</span><h3>GG Drones Assistência</h3><p>Assistência técnica especializada</p><a href="https://www.instagram.com/ggdroneparts/" target="_blank" rel="noopener noreferrer">VER INSTAGRAM <ArrowUpRight size={15} /></a></article><article className="group-card"><span className="group-card__wordmark group-card__wordmark--blue">brasil<br />drones &amp; parts</span><h3>Brasil Drones &amp; Parts</h3><p>Peças e drones novos</p><a href="https://www.brasildroneseparts.com.br/" target="_blank" rel="noopener noreferrer">VISITAR SITE <ArrowUpRight size={15} /></a></article></div></div></section>

    <footer className="footer"><div className="shell footer__grid"><div><Wordmark light /><p>Tecnologia, precisão e responsabilidade para operações agrícolas com drones.</p><small>Uma empresa do GG Group</small></div><div><h3>NAVEGAÇÃO</h3>{navItems.slice(0, 6).map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div><div><h3>GG GROUP</h3><span>GG Drones Pulverização</span><span>GG Drones Assistência</span><span>Brasil Drones &amp; Parts</span></div><div><h3>ATENDIMENTO</h3><span>Cascavel — PR</span><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp: (45) 99101-5512</a><WhatsAppCta compact /></div></div><div className="shell footer__bottom"><span>© 2026 GG Drones Pulverização. Todos os direitos reservados.</span><span className="footer__legal">Política de Privacidade <i /> Termos de Uso <i /> Cookies</span></div></footer>
  </main>;
}
